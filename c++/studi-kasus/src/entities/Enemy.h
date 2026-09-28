#pragma once

#include "Entity.h"
#include "Bullet.h"
#include "../core/ResourceManager.h"
#include <vector>
#include <memory>

class Enemy : public Entity {
public:
    Enemy(EntityType eType, Vector2 pos, float radius, float hp, int scoreVal);
    virtual ~Enemy() = default;

    virtual void updateAI(float dt, Vector2 playerPos, std::vector<std::unique_ptr<Bullet>>& bulletsOut) = 0;
    virtual void onDeath(std::vector<std::unique_ptr<Enemy>>& enemiesOut) { (void)enemiesOut; }

    int getScoreValue() const { return scoreValue; }
    bool isBoss() const { return type == EntityType::BOSS; }

protected:
    int scoreValue;
    float shootTimer = 0.0f;
    float shootInterval = 2.0f;
    float stateTimer = 0.0f;
    TextureID textureId;
};

// 1. Scout
class EnemyScout : public Enemy {
public:
    EnemyScout(Vector2 pos);
    void update(float dt) override;
    void updateAI(float dt, Vector2 playerPos, std::vector<std::unique_ptr<Bullet>>& bulletsOut) override;
    void render() override;
private:
    float startX;
    float freq = 3.0f;
    float amplitude = 40.0f;
};

// 2. Cruiser
class EnemyCruiser : public Enemy {
public:
    EnemyCruiser(Vector2 pos);
    void update(float dt) override;
    void updateAI(float dt, Vector2 playerPos, std::vector<std::unique_ptr<Bullet>>& bulletsOut) override;
    void render() override;
private:
    float moveTimer = 0.0f;
};

// 3. Kamikaze
class EnemyKamikaze : public Enemy {
public:
    EnemyKamikaze(Vector2 pos);
    void update(float dt) override;
    void updateAI(float dt, Vector2 playerPos, std::vector<std::unique_ptr<Bullet>>& bulletsOut) override;
    void render() override;
private:
    bool isDiving = false;
    Vector2 diveTarget = { 0.0f, 0.0f };
};

// 4. Asteroid
enum class AsteroidSize { LARGE, MEDIUM, SMALL };

class Asteroid : public Enemy {
public:
    Asteroid(Vector2 pos, AsteroidSize size, Vector2 vel);
    void update(float dt) override;
    void updateAI(float dt, Vector2 playerPos, std::vector<std::unique_ptr<Bullet>>& bulletsOut) override;
    void render() override;
    void onDeath(std::vector<std::unique_ptr<Enemy>>& enemiesOut) override;

private:
    AsteroidSize asteroidSize;
    float rotationSpeed;
};

// 5. Boss Dreadnought
class BossDreadnought : public Enemy {
public:
    BossDreadnought(Vector2 pos);
    void update(float dt) override;
    void updateAI(float dt, Vector2 playerPos, std::vector<std::unique_ptr<Bullet>>& bulletsOut) override;
    void render() override;

private:
    float hoverDirection = 1.0f;
    float attackPhaseTimer = 0.0f;
    int currentPhase = 1;
    float spiralAngle = 0.0f;
    float deathTimer = 0.0f;
    bool isDying = false;
};
