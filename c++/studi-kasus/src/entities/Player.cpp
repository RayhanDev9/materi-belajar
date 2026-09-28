#include "Player.h"
#include "../systems/ParticleSystem.h"
#include "../systems/AudioSystem.h"
#include <cmath>
#include <algorithm>

Player::Player(Vector2 pos)
    : Entity(EntityType::PLAYER, pos, 20.0f) {
    maxHealth = 100.0f;
    health = 100.0f;
    shield = 100.0f;
    maxShield = 100.0f;
}

void Player::reset(Vector2 pos) {
    position = pos;
    velocity = { 0.0f, 0.0f };
    health = 100.0f;
    shield = 100.0f;
    weaponLevel = 1;
    bombCount = 2;
    active = true;
    speedBoostTimer = 0.0f;
    invulnerableTimer = 2.0f;
    shootCooldown = 0.0f;
}

void Player::handleInput(float dt, std::vector<std::unique_ptr<Bullet>>& bulletsOut, bool& bombTriggered) {
    Vector2 inputDir = { 0.0f, 0.0f };

    if (IsKeyDown(KEY_W) || IsKeyDown(KEY_UP)) inputDir.y -= 1.0f;
    if (IsKeyDown(KEY_S) || IsKeyDown(KEY_DOWN)) inputDir.y += 1.0f;
    if (IsKeyDown(KEY_A) || IsKeyDown(KEY_LEFT)) inputDir.x -= 1.0f;
    if (IsKeyDown(KEY_D) || IsKeyDown(KEY_RIGHT)) inputDir.x += 1.0f;

    // Normalize diagonal input
    float len = sqrtf(inputDir.x * inputDir.x + inputDir.y * inputDir.y);
    if (len > 0.0f) {
        inputDir.x /= len;
        inputDir.y /= len;
    }

    float currentMaxSpeed = (speedBoostTimer > 0.0f) ? (speed * 1.4f) : speed;

    // Apply acceleration
    velocity.x += inputDir.x * acceleration * dt;
    velocity.y += inputDir.y * acceleration * dt;

    // Apply friction / drag
    velocity.x -= velocity.x * friction * dt;
    velocity.y -= velocity.y * friction * dt;

    // Cap max speed
    float currentSpeed = sqrtf(velocity.x * velocity.x + velocity.y * velocity.y);
    if (currentSpeed > currentMaxSpeed) {
        velocity.x = (velocity.x / currentSpeed) * currentMaxSpeed;
        velocity.y = (velocity.y / currentSpeed) * currentMaxSpeed;
    }

    // Bank angle based on horizontal velocity
    float targetTilt = (velocity.x / currentMaxSpeed) * 20.0f;
    tiltAngle += (targetTilt - tiltAngle) * 12.0f * dt;

    // Shooting input (Z, J, SPACE, or Left Mouse Button)
    bool isShooting = IsKeyDown(KEY_SPACE) || IsKeyDown(KEY_J) || IsKeyDown(KEY_Z) || IsMouseButtonDown(MOUSE_BUTTON_LEFT);

    shootCooldown -= dt;
    missileCooldown -= dt;

    if (isShooting && shootCooldown <= 0.0f) {
        shootCooldown = (speedBoostTimer > 0.0f) ? (shootRate * 0.75f) : shootRate;

        switch (weaponLevel) {
            case 1: {
                // Single center bullet
                bulletsOut.push_back(std::make_unique<Bullet>(
                    BulletType::PLAYER_LASER,
                    Vector2{ position.x, position.y - 18.0f },
                    Vector2{ 0.0f, -600.0f },
                    25.0f, true
                ));
                AudioSystem::getInstance().playSoundVaried(SoundID::LASER_PLAYER, 0.4f, 0.1f);
                break;
            }
            case 2: {
                // Dual wing bullets
                bulletsOut.push_back(std::make_unique<Bullet>(
                    BulletType::PLAYER_LASER,
                    Vector2{ position.x - 14.0f, position.y - 12.0f },
                    Vector2{ 0.0f, -620.0f },
                    22.0f, true
                ));
                bulletsOut.push_back(std::make_unique<Bullet>(
                    BulletType::PLAYER_LASER,
                    Vector2{ position.x + 14.0f, position.y - 12.0f },
                    Vector2{ 0.0f, -620.0f },
                    22.0f, true
                ));
                AudioSystem::getInstance().playSoundVaried(SoundID::LASER_PLAYER, 0.45f, 0.1f);
                break;
            }
            case 3: {
                // Triple shot (Center + slight angles)
                bulletsOut.push_back(std::make_unique<Bullet>(
                    BulletType::PLAYER_LASER,
                    Vector2{ position.x, position.y - 18.0f },
                    Vector2{ 0.0f, -650.0f },
                    24.0f, true
                ));
                bulletsOut.push_back(std::make_unique<Bullet>(
                    BulletType::PLAYER_LASER,
                    Vector2{ position.x - 14.0f, position.y - 10.0f },
                    Vector2{ -80.0f, -630.0f },
                    20.0f, true
                ));
                bulletsOut.push_back(std::make_unique<Bullet>(
                    BulletType::PLAYER_LASER,
                    Vector2{ position.x + 14.0f, position.y - 10.0f },
                    Vector2{ 80.0f, -630.0f },
                    20.0f, true
                ));
                AudioSystem::getInstance().playSoundVaried(SoundID::LASER_PLAYER, 0.5f, 0.1f);
                break;
            }
            case 4: {
                // Quad Plasma bullets
                bulletsOut.push_back(std::make_unique<Bullet>(
                    BulletType::PLAYER_PLASMA,
                    Vector2{ position.x - 10.0f, position.y - 14.0f },
                    Vector2{ -40.0f, -650.0f },
                    32.0f, true
                ));
                bulletsOut.push_back(std::make_unique<Bullet>(
                    BulletType::PLAYER_PLASMA,
                    Vector2{ position.x + 10.0f, position.y - 14.0f },
                    Vector2{ 40.0f, -650.0f },
                    32.0f, true
                ));
                bulletsOut.push_back(std::make_unique<Bullet>(
                    BulletType::PLAYER_LASER,
                    Vector2{ position.x - 20.0f, position.y - 8.0f },
                    Vector2{ -140.0f, -600.0f },
                    20.0f, true
                ));
                bulletsOut.push_back(std::make_unique<Bullet>(
                    BulletType::PLAYER_LASER,
                    Vector2{ position.x + 20.0f, position.y - 8.0f },
                    Vector2{ 140.0f, -600.0f },
                    20.0f, true
                ));
                AudioSystem::getInstance().playSoundVaried(SoundID::LASER_PLASMA, 0.55f, 0.1f);
                break;
            }
            default: { // Level 5+ Mega Overcharge
                // 5-way Plasma spread
                for (int i = -2; i <= 2; ++i) {
                    float angle = (float)i * 12.0f * DEG2RAD;
                    bulletsOut.push_back(std::make_unique<Bullet>(
                        BulletType::PLAYER_PLASMA,
                        Vector2{ position.x + (float)i * 6.0f, position.y - 16.0f },
                        Vector2{ sinf(angle) * 650.0f, -cosf(angle) * 650.0f },
                        35.0f, true
                    ));
                }
                AudioSystem::getInstance().playSoundVaried(SoundID::LASER_PLASMA, 0.6f, 0.1f);

                // Secondary missiles
                if (missileCooldown <= 0.0f) {
                    missileCooldown = 0.5f;
                    bulletsOut.push_back(std::make_unique<Bullet>(
                        BulletType::PLAYER_MISSILE,
                        Vector2{ position.x - 18.0f, position.y },
                        Vector2{ -120.0f, -350.0f },
                        80.0f, true
                    ));
                    bulletsOut.push_back(std::make_unique<Bullet>(
                        BulletType::PLAYER_MISSILE,
                        Vector2{ position.x + 18.0f, position.y },
                        Vector2{ 120.0f, -350.0f },
                        80.0f, true
                    ));
                    AudioSystem::getInstance().playSoundVaried(SoundID::MISSILE_FIRE, 0.5f, 0.15f);
                }
                break;
            }
        }
    }

    // Bomb Trigger (X, K, or Right Mouse Button)
    if ((IsKeyPressed(KEY_X) || IsKeyPressed(KEY_K) || IsMouseButtonPressed(MOUSE_BUTTON_RIGHT)) && bombCount > 0) {
        bombCount--;
        bombTriggered = true;
        AudioSystem::getInstance().playSound(SoundID::BOMB_DETONATE, 1.0f);
    }
}

void Player::update(float dt) {
    // Update position
    position.x += velocity.x * dt;
    position.y += velocity.y * dt;

    // Screen bounds clamping
    position.x = std::clamp(position.x, 24.0f, 1280.0f - 24.0f);
    position.y = std::clamp(position.y, 24.0f, 720.0f - 24.0f);

    // Timers
    if (speedBoostTimer > 0.0f) speedBoostTimer -= dt;
    if (invulnerableTimer > 0.0f) invulnerableTimer -= dt;

    // Shield regeneration
    shieldRegenTimer += dt;
    if (shieldRegenTimer >= shieldRegenDelay && shield < maxShield) {
        shield = std::min(maxShield, shield + 18.0f * dt);
    }

    // Engine thruster particles
    engineTrailTimer += dt;
    if (engineTrailTimer >= 0.025f) {
        engineTrailTimer = 0.0f;
        Vector2 leftNozzle = { position.x - 6.0f, position.y + 16.0f };
        Vector2 rightNozzle = { position.x + 6.0f, position.y + 16.0f };
        Color flameCol = (speedBoostTimer > 0.0f) ? Color{255, 100, 255, 255} : Color{50, 180, 255, 255};

        ParticleSystem::getInstance().emitEngineTrail(leftNozzle, Vector2{0.0f, 1.0f}, flameCol);
        ParticleSystem::getInstance().emitEngineTrail(rightNozzle, Vector2{0.0f, 1.0f}, flameCol);
    }
}

void Player::takeDamage(float amount) {
    if (invulnerableTimer > 0.0f) return;

    shieldRegenTimer = 0.0f; // Reset shield regen timer on hit

    if (shield > 0.0f) {
        if (shield >= amount) {
            shield -= amount;
            AudioSystem::getInstance().playSoundVaried(SoundID::HIT_SHIELD, 0.6f);
            ParticleSystem::getInstance().emitSparks(position, Vector2{0.0f, -1.0f}, Color{0, 200, 255, 255}, 12);
        } else {
            float remaining = amount - shield;
            shield = 0.0f;
            health -= remaining;
            AudioSystem::getInstance().playSoundVaried(SoundID::HIT_HULL, 0.7f);
            ParticleSystem::getInstance().emitSparks(position, Vector2{0.0f, -1.0f}, Color{255, 100, 50, 255}, 16);
        }
    } else {
        health -= amount;
        AudioSystem::getInstance().playSoundVaried(SoundID::HIT_HULL, 0.7f);
        ParticleSystem::getInstance().emitSparks(position, Vector2{0.0f, -1.0f}, Color{255, 60, 60, 255}, 20);
    }

    invulnerableTimer = 0.8f; // Short invulnerability window

    if (health <= 0.0f) {
        health = 0.0f;
        active = false;
        AudioSystem::getInstance().playSound(SoundID::EXPLOSION_LARGE, 1.0f);
        ParticleSystem::getInstance().emitExplosion(position, Color{255, 120, 0, 255}, 50, 240.0f);
    }
}

void Player::addWeaponUpgrade() {
    weaponLevel = std::min(5, weaponLevel + 1);
    AudioSystem::getInstance().playSound(SoundID::LEVEL_UP, 0.8f);
    ParticleSystem::getInstance().emitFloatingText(position, "WEAPON UPGRADE!", Color{255, 220, 0, 255}, 1.2f);
}

void Player::addShield(float amount) {
    shield = std::min(maxShield, shield + amount);
    AudioSystem::getInstance().playSound(SoundID::POWERUP_PICKUP, 0.7f);
    ParticleSystem::getInstance().emitFloatingText(position, "+SHIELD", Color{0, 220, 255, 255}, 1.0f);
}

void Player::addHealth(float amount) {
    health = std::min(maxHealth, health + amount);
    AudioSystem::getInstance().playSound(SoundID::POWERUP_PICKUP, 0.7f);
    ParticleSystem::getInstance().emitFloatingText(position, "+HEALTH", Color{0, 255, 120, 255}, 1.0f);
}

void Player::addBomb() {
    bombCount = std::min(maxBombs, bombCount + 1);
    AudioSystem::getInstance().playSound(SoundID::POWERUP_PICKUP, 0.7f);
    ParticleSystem::getInstance().emitFloatingText(position, "+1 EMP BOMB", Color{255, 80, 80, 255}, 1.2f);
}

void Player::addSpeedBoost(float duration) {
    speedBoostTimer = duration;
    AudioSystem::getInstance().playSound(SoundID::POWERUP_PICKUP, 0.7f);
    ParticleSystem::getInstance().emitFloatingText(position, "HYPER DRIVE!", Color{255, 100, 255, 255}, 1.2f);
}

void Player::render() {
    if (!active) return;

    // Invulnerability blink
    if (invulnerableTimer > 0.0f) {
        int blink = (int)(invulnerableTimer * 20.0f);
        if (blink % 2 == 0) return;
    }

    Texture2D tex = ResourceManager::getInstance().getTexture(TextureID::PLAYER);
    if (tex.id != 0) {
        Rectangle source = { 0.0f, 0.0f, (float)tex.width, (float)tex.height };
        Rectangle dest = { position.x, position.y, (float)tex.width, (float)tex.height };
        Vector2 origin = { (float)tex.width / 2.0f, (float)tex.height / 2.0f };

        DrawTexturePro(tex, source, dest, origin, tiltAngle, WHITE);
    } else {
        DrawCircleV(position, radius, Color{0, 180, 255, 255});
    }

    // Render glowing energy shield bubble if active
    if (shield > 0.0f) {
        float shieldAlpha = (shield / maxShield) * 0.45f;
        Color shieldColor = Color{0, 200, 255, (unsigned char)(255 * shieldAlpha)};
        DrawCircleLines((int)position.x, (int)position.y, radius + 6.0f, shieldColor);
        DrawCircleGradient((int)position.x, (int)position.y, radius + 8.0f, Color{0, 150, 255, (unsigned char)(60 * shieldAlpha)}, Color{0, 0, 0, 0});
    }
}
