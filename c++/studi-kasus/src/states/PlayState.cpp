#include "PlayState.h"
#include "PauseState.h"
#include "GameOverState.h"
#include "../core/Game.h"
#include "../systems/AudioSystem.h"
#include "../systems/ParticleSystem.h"
#include "../systems/RenderSystem.h"
#include "../systems/CollisionSystem.h"
#include <cstdlib>
#include <algorithm>

PlayState::PlayState(Game& game)
    : GameState(game), player(Vector2{640.0f, 600.0f}) {}

void PlayState::enter() {
    player.reset(Vector2{640.0f, 600.0f});
    enemies.clear();
    bullets.clear();
    powerups.clear();
    ParticleSystem::getInstance().clear();

    score = 0;
    combo = 1;
    maxCombo = 1;
    comboTimer = 0.0f;
    wave = 1;
    isPlayerDead = false;
    gameOverDelay = 0.0f;

    AudioSystem::getInstance().setBgmIntensity(0.8f);
    startWave(wave);
}

void PlayState::exit() {}

void PlayState::startWave(int waveNum) {
    wave = waveNum;
    isWaveActive = true;
    waveClearDelay = 0.0f;

    if (wave % 5 == 0) {
        // Boss Wave!
        bossActive = true;
        enemiesToSpawn = 0;
        enemies.push_back(std::make_unique<BossDreadnought>(Vector2{640.0f, -80.0f}));
        hud.showWaveBanner("WARNING: BOSS APPROACHING!", "DESTROY THE DREADNOUGHT FLAGSHIP", 3.0f);
        AudioSystem::getInstance().playSound(SoundID::WAVE_START, 1.0f);
        AudioSystem::getInstance().setBgmIntensity(1.6f);
    } else {
        bossActive = false;
        enemiesToSpawn = 8 + waveNum * 4;
        spawnInterval = std::max(0.4f, 1.2f - (waveNum * 0.08f));
        spawnTimer = 0.2f;

        std::string title = TextFormat("WAVE %d", waveNum);
        std::string sub = (waveNum == 1) ? "GET READY! DEFEND SECTOR 7" : "INCOMING HOSTILE WAVE!";
        hud.showWaveBanner(title, sub, 2.5f);
        AudioSystem::getInstance().playSound(SoundID::WAVE_START, 0.8f);
        AudioSystem::getInstance().setBgmIntensity(0.8f + (waveNum % 5) * 0.15f);
    }
}

void PlayState::spawnEnemy() {
    float x = 60.0f + ((float)rand() / (float)RAND_MAX) * (1280.0f - 120.0f);
    Vector2 spawnPos = { x, -40.0f };

    int roll = rand() % 100;

    if (wave == 1) {
        // Wave 1: Scouts & Asteroids
        if (roll < 70) {
            enemies.push_back(std::make_unique<EnemyScout>(spawnPos));
        } else {
            enemies.push_back(std::make_unique<Asteroid>(spawnPos, AsteroidSize::LARGE, Vector2{ ((float)rand()/(float)RAND_MAX - 0.5f)*60.0f, 60.0f + (rand()%30) }));
        }
    } else if (wave == 2) {
        // Wave 2: Scouts, Kamikazes, Asteroids
        if (roll < 50) {
            enemies.push_back(std::make_unique<EnemyScout>(spawnPos));
        } else if (roll < 80) {
            enemies.push_back(std::make_unique<EnemyKamikaze>(spawnPos));
        } else {
            enemies.push_back(std::make_unique<Asteroid>(spawnPos, AsteroidSize::LARGE, Vector2{ ((float)rand()/(float)RAND_MAX - 0.5f)*70.0f, 70.0f + (rand()%40) }));
        }
    } else {
        // Wave 3+: Full roster
        if (roll < 35) {
            enemies.push_back(std::make_unique<EnemyScout>(spawnPos));
        } else if (roll < 60) {
            enemies.push_back(std::make_unique<EnemyKamikaze>(spawnPos));
        } else if (roll < 80) {
            enemies.push_back(std::make_unique<EnemyCruiser>(spawnPos));
        } else {
            enemies.push_back(std::make_unique<Asteroid>(spawnPos, AsteroidSize::LARGE, Vector2{ ((float)rand()/(float)RAND_MAX - 0.5f)*80.0f, 80.0f + (rand()%50) }));
        }
    }
}

void PlayState::triggerNukeBomb() {
    // Screen wipe effect
    RenderSystem::getInstance().addScreenShake(0.7f, 0.7f);
    ParticleSystem::getInstance().emitShockwave(player.getPosition(), Color{255, 80, 80, 255}, 500.0f, 0.6f);

    // Destroy all enemy bullets
    for (auto& b : bullets) {
        if (!b->isFriendly()) {
            b->setActive(false);
            ParticleSystem::getInstance().emitExplosion(b->getPosition(), Color{255, 100, 100, 255}, 6, 80.0f);
        }
    }

    // Heavy damage to all active enemies
    std::vector<std::unique_ptr<Enemy>> newEnemies;
    for (auto& e : enemies) {
        if (e->isActive()) {
            e->takeDamage(350.0f);
            ParticleSystem::getInstance().emitExplosion(e->getPosition(), Color{255, 200, 50, 255}, 20, 160.0f);
            if (!e->isActive()) {
                score += e->getScoreValue() * combo;
                e->onDeath(newEnemies);
                spawnRandomPowerUp(e->getPosition());
            }
        }
    }
    for (auto& ne : newEnemies) {
        enemies.push_back(std::move(ne));
    }
}

void PlayState::spawnRandomPowerUp(Vector2 pos) {
    int roll = rand() % 100;
    if (roll < 18) { // 18% drop chance
        int typeRoll = rand() % 5;
        PowerUpType pType = (PowerUpType)typeRoll;
        powerups.push_back(std::make_unique<PowerUp>(pType, pos));
    }
}

void PlayState::handleInput(float dt) {
    if (isPlayerDead) return;

    // Pause toggle
    if (IsKeyPressed(KEY_P) || IsKeyPressed(KEY_ESCAPE)) {
        AudioSystem::getInstance().playSound(SoundID::BUTTON_CLICK, 0.5f);
        game.pushState(std::make_unique<PauseState>(game));
        return;
    }

    bool bombTriggered = false;
    player.handleInput(dt, bullets, bombTriggered);

    if (bombTriggered) {
        triggerNukeBomb();
    }
}

void PlayState::update(float dt) {
    // -------------------------------------------------------------
    // Player Update & Death Check
    // -------------------------------------------------------------
    if (player.isActive()) {
        player.update(dt);
    } else if (!isPlayerDead) {
        isPlayerDead = true;
        gameOverDelay = 1.8f;
        AudioSystem::getInstance().playSound(SoundID::GAME_OVER, 0.9f);
        RenderSystem::getInstance().addScreenShake(0.6f, 1.0f);
    }

    if (isPlayerDead) {
        gameOverDelay -= dt;
        if (gameOverDelay <= 0.0f) {
            game.setLastScore(score);
            game.setLastWave(wave);
            game.setLastMaxCombo(maxCombo);
            game.submitScore(score);
            game.changeState(std::make_unique<GameOverState>(game));
            return;
        }
    }

    // -------------------------------------------------------------
    // Combo Multiplier Decay
    // -------------------------------------------------------------
    if (comboTimer > 0.0f) {
        comboTimer -= dt;
        if (comboTimer <= 0.0f) {
            combo = 1;
        }
    }

    // -------------------------------------------------------------
    // Wave Progression & Enemy Spawning
    // -------------------------------------------------------------
    if (isWaveActive) {
        if (!bossActive && enemiesToSpawn > 0) {
            spawnTimer -= dt;
            if (spawnTimer <= 0.0f) {
                spawnTimer = spawnInterval;
                spawnEnemy();
                enemiesToSpawn--;
            }
        }

        // Check if wave is cleared
        if (enemiesToSpawn == 0 && enemies.empty()) {
            isWaveActive = false;
            waveClearDelay = 2.0f;
            AudioSystem::getInstance().playSound(SoundID::LEVEL_UP, 0.8f);
            hud.showWaveBanner("WAVE CLEARED!", "+1000 BONUS POINTS", 2.0f);
            score += 1000 * wave;
        }
    } else {
        waveClearDelay -= dt;
        if (waveClearDelay <= 0.0f) {
            startWave(wave + 1);
        }
    }

    // -------------------------------------------------------------
    // Update Entities
    // -------------------------------------------------------------
    // Bullets
    for (auto& b : bullets) {
        // Homing missile target search
        if (b->isActive() && b->getBulletType() == BulletType::PLAYER_MISSILE && !enemies.empty()) {
            float closestDist = 999999.0f;
            Vector2 targetPos = { 0.0f, 0.0f };
            for (auto& e : enemies) {
                if (e->isActive()) {
                    float d = CollisionSystem::getDistanceSqr(b->getPosition(), e->getPosition());
                    if (d < closestDist) {
                        closestDist = d;
                        targetPos = e->getPosition();
                    }
                }
            }
            if (closestDist < 600.0f * 600.0f) {
                b->setHomingTarget(targetPos);
            }
        }
        b->update(dt);
    }

    // Enemies
    for (auto& e : enemies) {
        e->update(dt);
        e->updateAI(dt, player.getPosition(), bullets);
    }

    // Powerups
    for (auto& p : powerups) {
        p->update(dt);
    }

    // -------------------------------------------------------------
    // Collision Detection Loop
    // -------------------------------------------------------------
    checkCollisions();

    // -------------------------------------------------------------
    // Clean up inactive entities
    // -------------------------------------------------------------
    bullets.erase(std::remove_if(bullets.begin(), bullets.end(), [](const std::unique_ptr<Bullet>& b) {
        return !b->isActive();
    }), bullets.end());

    enemies.erase(std::remove_if(enemies.begin(), enemies.end(), [](const std::unique_ptr<Enemy>& e) {
        return !e->isActive();
    }), enemies.end());

    powerups.erase(std::remove_if(powerups.begin(), powerups.end(), [](const std::unique_ptr<PowerUp>& p) {
        return !p->isActive();
    }), powerups.end());

    // Update HUD
    hud.update(dt, score, combo, comboTimer, maxComboTimer, wave);
}

void PlayState::checkCollisions() {
    std::vector<std::unique_ptr<Enemy>> spawnedFromDeath;

    // 1. Player Bullets vs Enemies / Asteroids / Boss
    for (auto& b : bullets) {
        if (!b->isActive() || !b->isFriendly()) continue;

        for (auto& e : enemies) {
            if (!e->isActive()) continue;

            if (CollisionSystem::checkCircle(b->getPosition(), b->getRadius(), e->getPosition(), e->getRadius())) {
                b->setActive(false);
                e->takeDamage(b->getDamage());

                // Particles on bullet hit
                ParticleSystem::getInstance().emitSparks(b->getPosition(), b->getVelocity(), Color{255, 200, 100, 255}, 6);
                AudioSystem::getInstance().playSoundVaried(SoundID::HIT_HULL, 0.3f, 0.2f);

                if (!e->isActive()) {
                    // Enemy Destroyed!
                    int points = e->getScoreValue() * combo;
                    score += points;

                    // Increment Combo
                    combo = std::min(10, combo + 1);
                    maxCombo = std::max(maxCombo, combo);
                    comboTimer = maxComboTimer;

                    // Floating text & sound
                    ParticleSystem::getInstance().emitFloatingText(e->getPosition(), TextFormat("+%d", points), Color{255, 255, 100, 255}, 1.0f);
                    AudioSystem::getInstance().playSoundVaried(e->isBoss() ? SoundID::EXPLOSION_BOSS : SoundID::EXPLOSION_SMALL, 0.6f, 0.1f);
                    ParticleSystem::getInstance().emitExplosion(e->getPosition(), Color{255, 120, 40, 255}, e->isBoss() ? 60 : 20, 180.0f);
                    RenderSystem::getInstance().addScreenShake(e->isBoss() ? 0.6f : 0.15f, 0.3f);

                    // Powerup drops & Asteroid splits
                    spawnRandomPowerUp(e->getPosition());
                    e->onDeath(spawnedFromDeath);
                }
                break;
            }
        }
    }

    for (auto& ne : spawnedFromDeath) {
        enemies.push_back(std::move(ne));
    }

    if (!player.isActive()) return;

    // 2. Enemy Bullets vs Player
    for (auto& b : bullets) {
        if (!b->isActive() || b->isFriendly()) continue;

        if (CollisionSystem::checkCircle(b->getPosition(), b->getRadius(), player.getPosition(), player.getRadius())) {
            b->setActive(false);
            player.takeDamage(b->getDamage());
            RenderSystem::getInstance().addScreenShake(0.3f, 0.35f);
            combo = 1; // Reset combo on hit
        }
    }

    // 3. Enemies vs Player (Crash Collision)
    for (auto& e : enemies) {
        if (!e->isActive()) continue;

        if (CollisionSystem::checkCircle(e->getPosition(), e->getRadius(), player.getPosition(), player.getRadius())) {
            float ramDamage = e->isBoss() ? 80.0f : 40.0f;
            player.takeDamage(ramDamage);
            if (!e->isBoss()) {
                e->takeDamage(100.0f); // Enemy takes heavy damage from ram
            }
            RenderSystem::getInstance().addScreenShake(0.45f, 0.4f);
            combo = 1;
        }
    }

    // 4. PowerUps vs Player
    for (auto& p : powerups) {
        if (!p->isActive()) continue;

        if (CollisionSystem::checkCircle(p->getPosition(), p->getRadius(), player.getPosition(), player.getRadius() + 10.0f)) {
            p->setActive(false);
            score += 200;

            switch (p->getPowerUpType()) {
                case PowerUpType::SHIELD:
                    player.addShield(60.0f);
                    break;
                case PowerUpType::WEAPON_UPGRADE:
                    player.addWeaponUpgrade();
                    break;
                case PowerUpType::HEALTH:
                    player.addHealth(40.0f);
                    break;
                case PowerUpType::NUKE_BOMB:
                    player.addBomb();
                    break;
                case PowerUpType::SPEED:
                    player.addSpeedBoost(10.0f);
                    break;
            }
        }
    }
}

void PlayState::render() {
    // 1. Render PowerUps
    for (const auto& p : powerups) {
        p->render();
    }

    // 2. Render Enemies
    for (const auto& e : enemies) {
        e->render();
    }

    // 3. Render Bullets
    for (const auto& b : bullets) {
        b->render();
    }

    // 4. Render Player
    player.render();

    // 5. Render HUD Overlay
    hud.render(player, game.getHighScore());
}
