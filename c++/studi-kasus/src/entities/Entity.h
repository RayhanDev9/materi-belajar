#pragma once

#include <raylib.h>

enum class EntityType {
    PLAYER,
    ENEMY_SCOUT,
    ENEMY_CRUISER,
    ENEMY_KAMIKAZE,
    ENEMY_ASTEROID,
    BOSS,
    BULLET_PLAYER,
    BULLET_ENEMY,
    POWERUP
};

class Entity {
public:
    Entity(EntityType type, Vector2 pos, float radius)
        : type(type), position(pos), radius(radius), health(100.0f), maxHealth(100.0f), active(true) {}

    virtual ~Entity() = default;

    virtual void update(float dt) = 0;
    virtual void render() = 0;

    virtual void takeDamage(float amount) {
        health -= amount;
        if (health <= 0.0f) {
            health = 0.0f;
            active = false;
        }
    }

    EntityType getType() const { return type; }
    Vector2 getPosition() const { return position; }
    void setPosition(Vector2 pos) { position = pos; }

    Vector2 getVelocity() const { return velocity; }
    void setVelocity(Vector2 vel) { velocity = vel; }

    float getRadius() const { return radius; }
    void setRadius(float r) { radius = r; }

    float getRotation() const { return rotation; }
    void setRotation(float rot) { rotation = rot; }

    float getHealth() const { return health; }
    float getMaxHealth() const { return maxHealth; }
    void setHealth(float h) { health = h; }
    void setMaxHealth(float mh) { maxHealth = mh; health = mh; }

    bool isActive() const { return active; }
    void setActive(bool act) { active = act; }

    virtual Rectangle getBounds() const {
        return Rectangle{
            position.x - radius,
            position.y - radius,
            radius * 2.0f,
            radius * 2.0f
        };
    }

protected:
    EntityType type;
    Vector2 position;
    Vector2 velocity = { 0.0f, 0.0f };
    float rotation = 0.0f;
    float radius = 16.0f;
    float health = 100.0f;
    float maxHealth = 100.0f;
    bool active = true;
};
