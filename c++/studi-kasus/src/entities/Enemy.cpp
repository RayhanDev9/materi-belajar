#include "Enemy.h"
#include "../systems/ParticleSystem.h"
#include "../systems/AudioSystem.h"
#include "../systems/RenderSystem.h"
#include <cmath>
#include <cstdlib>

// Base Enemy
Enemy::Enemy(EntityType eType, Vector2 pos, float radius, float hp, int scoreVal)
    : Entity(eType, pos, radius), scoreValue(scoreVal) {
    maxHealth = hp;
    health = hp;
}

// -------------------------------------------------------------
// 1. Enemy Scout
// -------------------------------------------------------------
EnemyScout::EnemyScout(Vector2 pos)
    : Enemy(EntityType::ENEMY_SCOUT, pos, 18.0f, 40.0f, 100), startX(pos.x) {
    velocity = { 0.0f, 90.0f };
    textureId = TextureID::ENEMY_SCOUT;
    shootInterval = 1.8f;
    shootTimer = 0.5f + ((float)rand() / (float)RAND_MAX) * 1.0f;
    freq = 2.5f + ((float)rand() / (float)RAND_MAX) * 1.5f;
    amplitude = 35.0f + ((float)rand() / (float)RAND_MAX) * 25.0f;
}

void EnemyScout::update(float dt) {
    stateTimer += dt;
    position.y += velocity.y * dt;
    position.x = startX + sinf(stateTimer * freq) * amplitude;

    if (position.y > 720 + 40) {
        active = false;
    }
}

void EnemyScout::updateAI(float dt, Vector2 playerPos, std::vector<std::unique_ptr<Bullet>>& bulletsOut) {
    shootTimer += dt;
    if (shootTimer >= shootInterval && position.y > 20.0f && position.y < 600.0f) {
        shootTimer = 0.0f;

        // Shoot towards player
        Vector2 toPlayer = { playerPos.x - position.x, playerPos.y - position.y };
        float dist = sqrtf(toPlayer.x * toPlayer.x + toPlayer.y * toPlayer.y);
        if (dist > 1.0f) {
            Vector2 bulletVel = { (toPlayer.x / dist) * 280.0f, (toPlayer.y / dist) * 280.0f };
            bulletsOut.push_back(std::make_unique<Bullet>(
                BulletType::ENEMY_LASER,
                Vector2{ position.x, position.y + 12.0f },
                bulletVel,
                15.0f, false
            ));
            AudioSystem::getInstance().playSoundVaried(SoundID::LASER_ENEMY, 0.35f, 0.1f);
        }
    }
}

void EnemyScout::render() {
    Texture2D tex = ResourceManager::getInstance().getTexture(textureId);
    if (tex.id != 0) {
        Rectangle source = { 0.0f, 0.0f, (float)tex.width, (float)tex.height };
        Rectangle dest = { position.x, position.y, (float)tex.width, (float)tex.height };
        Vector2 origin = { (float)tex.width / 2.0f, (float)tex.height / 2.0f };
        DrawTexturePro(tex, source, dest, origin, 0.0f, WHITE);
    } else {
        DrawCircleV(position, radius, Color{230, 40, 40, 255});
    }
}

// -------------------------------------------------------------
// 2. Enemy Cruiser
// -------------------------------------------------------------
EnemyCruiser::EnemyCruiser(Vector2 pos)
    : Enemy(EntityType::ENEMY_CRUISER, pos, 26.0f, 120.0f, 250) {
    velocity = { 50.0f, 40.0f };
    textureId = TextureID::ENEMY_CRUISER;
    shootInterval = 1.6f;
    shootTimer = 0.8f;
}

void EnemyCruiser::update(float dt) {
    moveTimer += dt;
    if (position.y < 160.0f) {
        position.y += velocity.y * dt;
    } else {
        // Patrol horizontally
        position.x += velocity.x * dt;
        if (position.x < 80.0f) {
            position.x = 80.0f;
            velocity.x = -velocity.x;
        } else if (position.x > 1280.0f - 80.0f) {
            position.x = 1280.0f - 80.0f;
            velocity.x = -velocity.x;
        }
        // Slowly drift down
        position.y += 12.0f * dt;
    }

    if (position.y > 720 + 60) {
        active = false;
    }
}

void EnemyCruiser::updateAI(float dt, Vector2 playerPos, std::vector<std::unique_ptr<Bullet>>& bulletsOut) {
    shootTimer += dt;
    if (shootTimer >= shootInterval && position.y > 20.0f && position.y < 650.0f) {
        shootTimer = 0.0f;

        // Dual forward cannons
        bulletsOut.push_back(std::make_unique<Bullet>(
            BulletType::ENEMY_PLASMA,
            Vector2{ position.x - 16.0f, position.y + 20.0f },
            Vector2{ 0.0f, 320.0f },
            20.0f, false
        ));
        bulletsOut.push_back(std::make_unique<Bullet>(
            BulletType::ENEMY_PLASMA,
            Vector2{ position.x + 16.0f, position.y + 20.0f },
            Vector2{ 0.0f, 320.0f },
            20.0f, false
        ));

        // Angled side shot
        Vector2 toPlayer = { playerPos.x - position.x, playerPos.y - position.y };
        float dist = sqrtf(toPlayer.x * toPlayer.x + toPlayer.y * toPlayer.y);
        if (dist > 1.0f) {
            bulletsOut.push_back(std::make_unique<Bullet>(
                BulletType::ENEMY_LASER,
                Vector2{ position.x, position.y + 20.0f },
                Vector2{ (toPlayer.x / dist) * 260.0f, (toPlayer.y / dist) * 260.0f },
                15.0f, false
            ));
        }

        AudioSystem::getInstance().playSoundVaried(SoundID::LASER_ENEMY, 0.4f, 0.1f);
    }
}

void EnemyCruiser::render() {
    Texture2D tex = ResourceManager::getInstance().getTexture(textureId);
    if (tex.id != 0) {
        Rectangle source = { 0.0f, 0.0f, (float)tex.width, (float)tex.height };
        Rectangle dest = { position.x, position.y, (float)tex.width, (float)tex.height };
        Vector2 origin = { (float)tex.width / 2.0f, (float)tex.height / 2.0f };
        DrawTexturePro(tex, source, dest, origin, 0.0f, WHITE);
    } else {
        DrawRectangle((int)position.x - 24, (int)position.y - 24, 48, 48, Color{130, 30, 160, 255});
    }

    // Health bar above cruiser
    float hpPercent = health / maxHealth;
    DrawRectangle((int)position.x - 20, (int)position.y - 32, 40, 4, Color{50, 50, 50, 200});
    DrawRectangle((int)position.x - 20, (int)position.y - 32, (int)(40.0f * hpPercent), 4, Color{255, 60, 60, 255});
}

// -------------------------------------------------------------
// 3. Enemy Kamikaze
// -------------------------------------------------------------
EnemyKamikaze::EnemyKamikaze(Vector2 pos)
    : Enemy(EntityType::ENEMY_KAMIKAZE, pos, 15.0f, 30.0f, 150) {
    velocity = { 0.0f, 120.0f };
    textureId = TextureID::ENEMY_KAMIKAZE;
}

void EnemyKamikaze::update(float dt) {
    position.x += velocity.x * dt;
    position.y += velocity.y * dt;

    if (isDiving) {
        // Emit fiery engine trail
        ParticleSystem::getInstance().emitEngineTrail(position, Vector2{-velocity.x, -velocity.y}, Color{255, 120, 0, 255});
        rotation = atan2f(velocity.y, velocity.x) * RAD2DEG - 90.0f;
    }

    if (position.y > 720 + 40 || position.x < -60 || position.x > 1280 + 60) {
        active = false;
    }
}

void EnemyKamikaze::updateAI(float dt, Vector2 playerPos, std::vector<std::unique_ptr<Bullet>>& bulletsOut) {
    (void)dt;
    (void)bulletsOut;
    if (!isDiving && position.y > 80.0f && position.y < playerPos.y - 100.0f) {
        // Lock and dive!
        isDiving = true;
        Vector2 toPlayer = { playerPos.x - position.x, playerPos.y - position.y };
        float dist = sqrtf(toPlayer.x * toPlayer.x + toPlayer.y * toPlayer.y);
        if (dist > 1.0f) {
            float diveSpeed = 440.0f;
            velocity = { (toPlayer.x / dist) * diveSpeed, (toPlayer.y / dist) * diveSpeed };
            AudioSystem::getInstance().playSoundVaried(SoundID::MISSILE_FIRE, 0.4f, 0.2f);
        }
    }
}

void EnemyKamikaze::render() {
    Texture2D tex = ResourceManager::getInstance().getTexture(textureId);
    if (tex.id != 0) {
        Rectangle source = { 0.0f, 0.0f, (float)tex.width, (float)tex.height };
        Rectangle dest = { position.x, position.y, (float)tex.width, (float)tex.height };
        Vector2 origin = { (float)tex.width / 2.0f, (float)tex.height / 2.0f };
        DrawTexturePro(tex, source, dest, origin, rotation, WHITE);
    } else {
        DrawCircleV(position, radius, Color{255, 190, 0, 255});
    }
}

// -------------------------------------------------------------
// 4. Asteroid
// -------------------------------------------------------------
Asteroid::Asteroid(Vector2 pos, AsteroidSize size, Vector2 vel)
    : Enemy(EntityType::ENEMY_ASTEROID, pos, 28.0f, 60.0f, 50), asteroidSize(size) {
    velocity = vel;
    rotationSpeed = ((float)rand() / (float)RAND_MAX - 0.5f) * 120.0f;

    switch (size) {
        case AsteroidSize::LARGE:
            radius = 32.0f;
            maxHealth = 90.0f;
            health = 90.0f;
            scoreValue = 80;
            textureId = TextureID::ENEMY_ASTEROID_LARGE;
            break;
        case AsteroidSize::MEDIUM:
            radius = 22.0f;
            maxHealth = 45.0f;
            health = 45.0f;
            scoreValue = 40;
            textureId = TextureID::ENEMY_ASTEROID_MED;
            break;
        case AsteroidSize::SMALL:
            radius = 14.0f;
            maxHealth = 20.0f;
            health = 20.0f;
            scoreValue = 20;
            textureId = TextureID::ENEMY_ASTEROID_SMALL;
            break;
    }
}

void Asteroid::update(float dt) {
    position.x += velocity.x * dt;
    position.y += velocity.y * dt;
    rotation += rotationSpeed * dt;

    if (position.y > 720 + 50 || position.x < -60 || position.x > 1280 + 60) {
        active = false;
    }
}

void Asteroid::updateAI(float dt, Vector2 playerPos, std::vector<std::unique_ptr<Bullet>>& bulletsOut) {
    (void)dt; (void)playerPos; (void)bulletsOut;
}

void Asteroid::onDeath(std::vector<std::unique_ptr<Enemy>>& enemiesOut) {
    // Split into smaller asteroids!
    if (asteroidSize == AsteroidSize::LARGE) {
        enemiesOut.push_back(std::make_unique<Asteroid>(
            position, AsteroidSize::MEDIUM,
            Vector2{ velocity.x - 40.0f, velocity.y + 20.0f }
        ));
        enemiesOut.push_back(std::make_unique<Asteroid>(
            position, AsteroidSize::MEDIUM,
            Vector2{ velocity.x + 40.0f, velocity.y + 20.0f }
        ));
    } else if (asteroidSize == AsteroidSize::MEDIUM) {
        enemiesOut.push_back(std::make_unique<Asteroid>(
            position, AsteroidSize::SMALL,
            Vector2{ velocity.x - 50.0f, velocity.y + 30.0f }
        ));
        enemiesOut.push_back(std::make_unique<Asteroid>(
            position, AsteroidSize::SMALL,
            Vector2{ velocity.x + 50.0f, velocity.y + 30.0f }
        ));
    }
}

void Asteroid::render() {
    Texture2D tex = ResourceManager::getInstance().getTexture(textureId);
    if (tex.id != 0) {
        Rectangle source = { 0.0f, 0.0f, (float)tex.width, (float)tex.height };
        Rectangle dest = { position.x, position.y, (float)tex.width, (float)tex.height };
        Vector2 origin = { (float)tex.width / 2.0f, (float)tex.height / 2.0f };
        DrawTexturePro(tex, source, dest, origin, rotation, WHITE);
    } else {
        DrawCircleV(position, radius, Color{110, 100, 95, 255});
    }
}

// -------------------------------------------------------------
// 5. Boss Dreadnought
// -------------------------------------------------------------
BossDreadnought::BossDreadnought(Vector2 pos)
    : Enemy(EntityType::BOSS, pos, 54.0f, 1500.0f, 5000) {
    velocity = { 80.0f, 50.0f };
    textureId = TextureID::BOSS_DREADNOUGHT;
    shootInterval = 1.2f;
    shootTimer = 0.0f;
}

void BossDreadnought::update(float dt) {
    if (isDying) {
        deathTimer += dt;
        // Periodic death explosions
        if (rand() % 4 == 0) {
            Vector2 explodePos = {
                position.x + ((float)rand() / (float)RAND_MAX - 0.5f) * 100.0f,
                position.y + ((float)rand() / (float)RAND_MAX - 0.5f) * 80.0f
            };
            ParticleSystem::getInstance().emitExplosion(explodePos, Color{255, (unsigned char)(rand() % 200), 0, 255}, 15, 120.0f);
            AudioSystem::getInstance().playSoundVaried(SoundID::EXPLOSION_SMALL, 0.5f, 0.2f);
        }
        if (deathTimer >= 1.6f) {
            active = false;
            AudioSystem::getInstance().playSound(SoundID::EXPLOSION_BOSS, 1.0f);
            RenderSystem::getInstance().addScreenShake(0.8f, 0.8f);
            ParticleSystem::getInstance().emitExplosion(position, Color{255, 200, 50, 255}, 80, 300.0f);
        }
        return;
    }

    // Entrance movement down to y = 130
    if (position.y < 130.0f) {
        position.y += velocity.y * dt;
    } else {
        // Horizontal oscillation
        position.x += velocity.x * hoverDirection * dt;
        if (position.x < 140.0f) {
            position.x = 140.0f;
            hoverDirection = 1.0f;
        } else if (position.x > 1280.0f - 140.0f) {
            position.x = 1280.0f - 140.0f;
            hoverDirection = -1.0f;
        }
    }

    // Update phase
    float hpPercent = health / maxHealth;
    if (hpPercent > 0.66f) {
        currentPhase = 1;
        AudioSystem::getInstance().setBgmIntensity(1.5f);
    } else if (hpPercent > 0.33f) {
        currentPhase = 2;
        AudioSystem::getInstance().setBgmIntensity(1.8f);
    } else {
        currentPhase = 3;
        AudioSystem::getInstance().setBgmIntensity(2.2f);
    }

    // Check if dead
    if (health <= 0.0f && !isDying) {
        isDying = true;
        deathTimer = 0.0f;
        RenderSystem::getInstance().addScreenShake(0.5f, 1.5f);
        AudioSystem::getInstance().playSound(SoundID::EXPLOSION_LARGE, 0.8f);
    }
}

void BossDreadnought::updateAI(float dt, Vector2 playerPos, std::vector<std::unique_ptr<Bullet>>& bulletsOut) {
    if (isDying || position.y < 100.0f) return;

    attackPhaseTimer += dt;
    shootTimer += dt;

    if (currentPhase == 1) {
        // Phase 1: Dual wing guns + radial burst every 2 seconds
        if (shootTimer >= 0.8f) {
            shootTimer = 0.0f;
            bulletsOut.push_back(std::make_unique<Bullet>(
                BulletType::ENEMY_PLASMA,
                Vector2{ position.x - 38.0f, position.y + 30.0f },
                Vector2{ 0.0f, 320.0f },
                22.0f, false
            ));
            bulletsOut.push_back(std::make_unique<Bullet>(
                BulletType::ENEMY_PLASMA,
                Vector2{ position.x + 38.0f, position.y + 30.0f },
                Vector2{ 0.0f, 320.0f },
                22.0f, false
            ));
            AudioSystem::getInstance().playSoundVaried(SoundID::LASER_ENEMY, 0.4f, 0.1f);
        }

        if (attackPhaseTimer >= 2.4f) {
            attackPhaseTimer = 0.0f;
            // 8-way radial burst from core
            for (int i = 0; i < 8; ++i) {
                float angle = (float)i * (2.0f * PI / 8.0f);
                bulletsOut.push_back(std::make_unique<Bullet>(
                    BulletType::BOSS_BULLET,
                    Vector2{ position.x, position.y + 10.0f },
                    Vector2{ cosf(angle) * 220.0f, sinf(angle) * 220.0f },
                    18.0f, false
                ));
            }
            AudioSystem::getInstance().playSoundVaried(SoundID::LASER_PLASMA, 0.5f, 0.1f);
        }
    } else if (currentPhase == 2) {
        // Phase 2: Rapid spiral bullet stream + aimed missiles
        spiralAngle += 4.5f * dt;
        if (shootTimer >= 0.14f) {
            shootTimer = 0.0f;
            bulletsOut.push_back(std::make_unique<Bullet>(
                BulletType::BOSS_BULLET,
                Vector2{ position.x, position.y + 10.0f },
                Vector2{ cosf(spiralAngle) * 260.0f, sinf(spiralAngle) * 260.0f },
                20.0f, false
            ));
            bulletsOut.push_back(std::make_unique<Bullet>(
                BulletType::BOSS_BULLET,
                Vector2{ position.x, position.y + 10.0f },
                Vector2{ -cosf(spiralAngle) * 260.0f, -sinf(spiralAngle) * 260.0f },
                20.0f, false
            ));
        }

        if (attackPhaseTimer >= 2.0f) {
            attackPhaseTimer = 0.0f;
            // Aimed missile at player
            Vector2 toPlayer = { playerPos.x - position.x, playerPos.y - position.y };
            float dist = sqrtf(toPlayer.x * toPlayer.x + toPlayer.y * toPlayer.y);
            if (dist > 1.0f) {
                bulletsOut.push_back(std::make_unique<Bullet>(
                    BulletType::ENEMY_PLASMA,
                    Vector2{ position.x, position.y + 35.0f },
                    Vector2{ (toPlayer.x / dist) * 360.0f, (toPlayer.y / dist) * 360.0f },
                    30.0f, false
                ));
            }
            AudioSystem::getInstance().playSoundVaried(SoundID::MISSILE_FIRE, 0.6f, 0.1f);
        }
    } else {
        // Phase 3 (Enraged): 12-way bullet storms + twin heavy plasma stream
        spiralAngle += 6.5f * dt;
        if (shootTimer >= 0.12f) {
            shootTimer = 0.0f;
            bulletsOut.push_back(std::make_unique<Bullet>(
                BulletType::BOSS_BULLET,
                Vector2{ position.x, position.y + 10.0f },
                Vector2{ cosf(spiralAngle) * 280.0f, sinf(spiralAngle) * 280.0f },
                20.0f, false
            ));
            bulletsOut.push_back(std::make_unique<Bullet>(
                BulletType::ENEMY_PLASMA,
                Vector2{ position.x - 30.0f, position.y + 30.0f },
                Vector2{ 0.0f, 380.0f },
                25.0f, false
            ));
            bulletsOut.push_back(std::make_unique<Bullet>(
                BulletType::ENEMY_PLASMA,
                Vector2{ position.x + 30.0f, position.y + 30.0f },
                Vector2{ 0.0f, 380.0f },
                25.0f, false
            ));
        }

        if (attackPhaseTimer >= 1.8f) {
            attackPhaseTimer = 0.0f;
            for (int i = 0; i < 12; ++i) {
                float angle = (float)i * (2.0f * PI / 12.0f);
                bulletsOut.push_back(std::make_unique<Bullet>(
                    BulletType::BOSS_BULLET,
                    Vector2{ position.x, position.y + 10.0f },
                    Vector2{ cosf(angle) * 250.0f, sinf(angle) * 250.0f },
                    20.0f, false
                ));
            }
            AudioSystem::getInstance().playSoundVaried(SoundID::LASER_PLASMA, 0.6f, 0.15f);
        }
    }
}

void BossDreadnought::render() {
    Texture2D tex = ResourceManager::getInstance().getTexture(textureId);
    if (tex.id != 0) {
        Rectangle source = { 0.0f, 0.0f, (float)tex.width, (float)tex.height };
        Rectangle dest = { position.x, position.y, (float)tex.width, (float)tex.height };
        Vector2 origin = { (float)tex.width / 2.0f, (float)tex.height / 2.0f };

        // Enraged red glow in Phase 3
        if (currentPhase == 3) {
            DrawCircleGradient((int)position.x, (int)position.y, 80.0f, Color{255, 0, 0, 70}, Color{255, 0, 0, 0});
        }
        DrawTexturePro(tex, source, dest, origin, 0.0f, WHITE);
    } else {
        DrawCircleV(position, radius, Color{160, 30, 60, 255});
    }

    // Boss Giant Health Bar on top of screen
    float hpPercent = health / maxHealth;
    int barWidth = 600;
    int barHeight = 18;
    int barX = (1280 - barWidth) / 2;
    int barY = 24;

    DrawRectangle(barX - 4, barY - 4, barWidth + 8, barHeight + 8, Color{10, 10, 20, 220});
    DrawRectangleLines(barX - 4, barY - 4, barWidth + 8, barHeight + 8, Color{255, 60, 60, 255});
    DrawRectangle(barX, barY, barWidth, barHeight, Color{50, 15, 20, 255});

    Color barColor = (currentPhase == 3) ? Color{255, 30, 30, 255} : ((currentPhase == 2) ? Color{255, 140, 0, 255} : Color{255, 60, 80, 255});
    DrawRectangle(barX, barY, (int)(barWidth * hpPercent), barHeight, barColor);

    const char* bossTitle = (currentPhase == 3) ? "WARNING: DREADNOUGHT FLAGSHIP [ENRAGED]" : "DREADNOUGHT FLAGSHIP";
    int titleW = MeasureText(bossTitle, 16);
    DrawText(bossTitle, (1280 - titleW) / 2, barY - 20, 16, Color{255, 220, 220, 255});
}
