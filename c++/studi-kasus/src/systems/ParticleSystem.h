#pragma once

#include <raylib.h>
#include <string>
#include <vector>

struct Particle {
    Vector2 position;
    Vector2 velocity;
    Color startColor;
    Color endColor;
    float startSize;
    float endSize;
    float life;
    float maxLife;
    float rotation;
    float rotationSpeed;
    bool isAdditive;
};

struct FloatingText {
    Vector2 position;
    Vector2 velocity;
    std::string text;
    Color color;
    float life;
    float maxLife;
    float scale;
};

struct Shockwave {
    Vector2 position;
    float radius;
    float maxRadius;
    float life;
    float maxLife;
    Color color;
};

class ParticleSystem {
public:
    static ParticleSystem& getInstance();

    ParticleSystem(const ParticleSystem&) = delete;
    ParticleSystem& operator=(const ParticleSystem&) = delete;

    void update(float dt);
    void render();
    void clear();

    void emitExplosion(Vector2 position, Color color, int count = 25, float speed = 180.0f);
    void emitSparks(Vector2 position, Vector2 direction, Color color, int count = 10);
    void emitEngineTrail(Vector2 position, Vector2 direction, Color color);
    void emitDebris(Vector2 position, Color color, int count = 12);
    void emitShockwave(Vector2 position, Color color, float maxRadius = 80.0f, float duration = 0.4f);
    void emitFloatingText(Vector2 position, const std::string& text, Color color, float scale = 1.0f);

private:
    ParticleSystem() = default;
    ~ParticleSystem() = default;

    std::vector<Particle> particles;
    std::vector<FloatingText> floatingTexts;
    std::vector<Shockwave> shockwaves;
};
