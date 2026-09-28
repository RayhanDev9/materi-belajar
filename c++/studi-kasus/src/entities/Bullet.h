#pragma once

#include "Entity.h"
#include "../core/ResourceManager.h"

enum class BulletType {
    PLAYER_LASER,
    PLAYER_PLASMA,
    PLAYER_MISSILE,
    ENEMY_LASER,
    ENEMY_PLASMA,
    BOSS_BULLET
};

class Bullet : public Entity {
public:
    Bullet(BulletType bType, Vector2 pos, Vector2 vel, float dmg, bool isFromPlayer);

    void update(float dt) override;
    void render() override;

    bool isFriendly() const { return fromPlayer; }
    float getDamage() const { return damage; }
    BulletType getBulletType() const { return bulletType; }

    void setHomingTarget(Vector2 targetPos) {
        hasTarget = true;
        homingTarget = targetPos;
    }

private:
    BulletType bulletType;
    float damage;
    bool fromPlayer;
    float lifeTime = 0.0f;
    float maxLifeTime = 3.5f;
    TextureID textureId;
    float trailTimer = 0.0f;

    bool hasTarget = false;
    Vector2 homingTarget = { 0.0f, 0.0f };
};
