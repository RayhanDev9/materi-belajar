#include "PowerUp.h"
#include <cmath>

PowerUp::PowerUp(PowerUpType pType, Vector2 pos)
    : Entity(EntityType::POWERUP, pos, 16.0f), powerUpType(pType), startX(pos.x) {
    velocity = { 0.0f, 65.0f };

    switch (pType) {
        case PowerUpType::SHIELD:
            textureId = TextureID::POWERUP_SHIELD;
            break;
        case PowerUpType::WEAPON_UPGRADE:
            textureId = TextureID::POWERUP_WEAPON;
            break;
        case PowerUpType::HEALTH:
            textureId = TextureID::POWERUP_HEALTH;
            break;
        case PowerUpType::NUKE_BOMB:
            textureId = TextureID::POWERUP_BOMB;
            break;
        case PowerUpType::SPEED:
            textureId = TextureID::POWERUP_SPEED;
            break;
    }
}

void PowerUp::update(float dt) {
    animTimer += dt;
    position.y += velocity.y * dt;
    position.x = startX + sinf(animTimer * 2.5f) * 20.0f;

    if (position.y > 720 + 40) {
        active = false;
    }
}

void PowerUp::render() {
    float pulse = 1.0f + 0.12f * sinf(animTimer * 6.0f);
    Texture2D tex = ResourceManager::getInstance().getTexture(textureId);

    if (tex.id != 0) {
        Rectangle source = { 0.0f, 0.0f, (float)tex.width, (float)tex.height };
        Rectangle dest = { position.x, position.y, (float)tex.width * pulse, (float)tex.height * pulse };
        Vector2 origin = { ((float)tex.width * pulse) / 2.0f, ((float)tex.height * pulse) / 2.0f };

        // Outer glow halo
        DrawCircleGradient((int)position.x, (int)position.y, 24.0f * pulse, Color{255, 255, 255, 60}, Color{255, 255, 255, 0});
        DrawTexturePro(tex, source, dest, origin, 0.0f, WHITE);
    } else {
        DrawCircleV(position, radius * pulse, Color{255, 200, 50, 255});
    }
}
