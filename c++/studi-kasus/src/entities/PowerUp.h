#pragma once

#include "Entity.h"
#include "../core/ResourceManager.h"

enum class PowerUpType {
    SHIELD,
    WEAPON_UPGRADE,
    HEALTH,
    NUKE_BOMB,
    SPEED
};

class PowerUp : public Entity {
public:
    PowerUp(PowerUpType pType, Vector2 pos);

    void update(float dt) override;
    void render() override;

    PowerUpType getPowerUpType() const { return powerUpType; }

private:
    PowerUpType powerUpType;
    TextureID textureId;
    float animTimer = 0.0f;
    float startX = 0.0f;
};
