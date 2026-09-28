#pragma once

#include "Entity.h"
#include "Bullet.h"
#include "../core/ResourceManager.h"
#include <vector>
#include <memory>

class Player : public Entity {
public:
    Player(Vector2 pos);

    void update(float dt) override;
    void render() override;
    void takeDamage(float amount) override;

    void handleInput(float dt, std::vector<std::unique_ptr<Bullet>>& bulletsOut, bool& bombTriggered);

    // Powerup modifiers
    void addWeaponUpgrade();
    void addShield(float amount);
    void addHealth(float amount);
    void addBomb();
    void addSpeedBoost(float duration = 8.0f);

    float getShield() const { return shield; }
    float getMaxShield() const { return maxShield; }
    int getWeaponLevel() const { return weaponLevel; }
    int getBombCount() const { return bombCount; }
    bool isInvulnerable() const { return invulnerableTimer > 0.0f; }

    void reset(Vector2 pos);

private:
    float speed = 320.0f;
    float acceleration = 1800.0f;
    float friction = 8.0f;

    float shield = 100.0f;
    float maxShield = 100.0f;
    float shieldRegenTimer = 0.0f;
    float shieldRegenDelay = 3.0f;

    int weaponLevel = 1;
    int bombCount = 2;
    int maxBombs = 5;

    float shootCooldown = 0.0f;
    float shootRate = 0.16f; // Time between shots
    float missileCooldown = 0.0f;

    float speedBoostTimer = 0.0f;
    float invulnerableTimer = 0.0f;

    float engineTrailTimer = 0.0f;
    float tiltAngle = 0.0f;
};
