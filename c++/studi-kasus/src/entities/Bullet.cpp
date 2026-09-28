#include "Bullet.h"
#include "../systems/ParticleSystem.h"
#include <cmath>

Bullet::Bullet(BulletType bType, Vector2 pos, Vector2 vel, float dmg, bool isFromPlayer)
    : Entity(isFromPlayer ? EntityType::BULLET_PLAYER : EntityType::BULLET_ENEMY, pos, 6.0f),
      bulletType(bType), damage(dmg), fromPlayer(isFromPlayer) {
    velocity = vel;

    switch (bType) {
        case BulletType::PLAYER_LASER:
            textureId = TextureID::BULLET_PLAYER;
            radius = 5.0f;
            break;
        case BulletType::PLAYER_PLASMA:
            textureId = TextureID::BULLET_PLAYER_PLASMA;
            radius = 9.0f;
            break;
        case BulletType::PLAYER_MISSILE:
            textureId = TextureID::BULLET_MISSILE;
            radius = 8.0f;
            break;
        case BulletType::ENEMY_LASER:
        case BulletType::ENEMY_PLASMA:
        case BulletType::BOSS_BULLET:
        default:
            textureId = TextureID::BULLET_ENEMY;
            radius = 6.0f;
            break;
    }

    rotation = atan2f(velocity.y, velocity.x) * RAD2DEG + 90.0f;
}

void Bullet::update(float dt) {
    lifeTime += dt;
    if (lifeTime >= maxLifeTime) {
        active = false;
        return;
    }

    // Missile Homing logic
    if (bulletType == BulletType::PLAYER_MISSILE && hasTarget) {
        Vector2 toTarget = { homingTarget.x - position.x, homingTarget.y - position.y };
        float dist = sqrtf(toTarget.x * toTarget.x + toTarget.y * toTarget.y);
        if (dist > 5.0f) {
            float desiredAngle = atan2f(toTarget.y, toTarget.x);
            float currentAngle = atan2f(velocity.y, velocity.x);
            float currentSpeed = sqrtf(velocity.x * velocity.x + velocity.y * velocity.y);

            // Steer towards target
            float diff = desiredAngle - currentAngle;
            while (diff < -PI) diff += 2.0f * PI;
            while (diff > PI) diff -= 2.0f * PI;

            float newAngle = currentAngle + diff * 4.0f * dt;
            velocity.x = cosf(newAngle) * currentSpeed;
            velocity.y = sinf(newAngle) * currentSpeed;
            rotation = newAngle * RAD2DEG + 90.0f;
        }
    }

    position.x += velocity.x * dt;
    position.y += velocity.y * dt;

    // Missile exhaust trail
    if (bulletType == BulletType::PLAYER_MISSILE) {
        trailTimer += dt;
        if (trailTimer >= 0.03f) {
            trailTimer = 0.0f;
            Vector2 trailPos = {
                position.x - cosf((rotation - 90.0f) * DEG2RAD) * 12.0f,
                position.y - sinf((rotation - 90.0f) * DEG2RAD) * 12.0f
            };
            ParticleSystem::getInstance().emitEngineTrail(trailPos, Vector2{-velocity.x, -velocity.y}, Color{255, 100, 20, 255});
        }
    }

    // Screen bounds check
    if (position.x < -50 || position.x > 1280 + 50 || position.y < -50 || position.y > 720 + 50) {
        active = false;
    }
}

void Bullet::render() {
    Texture2D tex = ResourceManager::getInstance().getTexture(textureId);
    if (tex.id != 0) {
        Rectangle source = { 0.0f, 0.0f, (float)tex.width, (float)tex.height };
        Rectangle dest = { position.x, position.y, (float)tex.width, (float)tex.height };
        Vector2 origin = { (float)tex.width / 2.0f, (float)tex.height / 2.0f };
        DrawTexturePro(tex, source, dest, origin, rotation, WHITE);
    } else {
        // Fallback rendering
        Color col = fromPlayer ? Color{0, 220, 255, 255} : Color{255, 60, 60, 255};
        DrawCircleV(position, radius, col);
    }
}
