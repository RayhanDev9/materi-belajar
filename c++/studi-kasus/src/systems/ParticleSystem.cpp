#include "ParticleSystem.h"
#include <cmath>
#include <cstdlib>
#include <algorithm>

static Color LerpColor(Color c1, Color c2, float t) {
    t = std::clamp(t, 0.0f, 1.0f);
    return Color{
        (unsigned char)(c1.r + (c2.r - c1.r) * t),
        (unsigned char)(c1.g + (c2.g - c1.g) * t),
        (unsigned char)(c1.b + (c2.b - c1.b) * t),
        (unsigned char)(c1.a + (c2.a - c1.a) * t)
    };
}

ParticleSystem& ParticleSystem::getInstance() {
    static ParticleSystem instance;
    return instance;
}

void ParticleSystem::clear() {
    particles.clear();
    floatingTexts.clear();
    shockwaves.clear();
}

void ParticleSystem::update(float dt) {
    // Update particles
    for (auto it = particles.begin(); it != particles.end();) {
        it->life -= dt;
        if (it->life <= 0.0f) {
            it = particles.erase(it);
        } else {
            it->position.x += it->velocity.x * dt;
            it->position.y += it->velocity.y * dt;
            it->velocity.x *= (1.0f - dt * 1.5f); // drag
            it->velocity.y *= (1.0f - dt * 1.5f);
            it->rotation += it->rotationSpeed * dt;
            ++it;
        }
    }

    // Update floating texts
    for (auto it = floatingTexts.begin(); it != floatingTexts.end();) {
        it->life -= dt;
        if (it->life <= 0.0f) {
            it = floatingTexts.erase(it);
        } else {
            it->position.x += it->velocity.x * dt;
            it->position.y += it->velocity.y * dt;
            it->velocity.y *= (1.0f - dt * 0.8f);
            ++it;
        }
    }

    // Update shockwaves
    for (auto it = shockwaves.begin(); it != shockwaves.end();) {
        it->life -= dt;
        if (it->life <= 0.0f) {
            it = shockwaves.erase(it);
        } else {
            float progress = 1.0f - (it->life / it->maxLife);
            it->radius = it->maxRadius * progress;
            ++it;
        }
    }
}

void ParticleSystem::render() {
    // Render Shockwaves
    for (const auto& sw : shockwaves) {
        float alphaFactor = sw.life / sw.maxLife;
        Color swCol = sw.color;
        swCol.a = (unsigned char)(sw.color.a * alphaFactor);
        DrawCircleLines((int)sw.position.x, (int)sw.position.y, sw.radius, swCol);
        if (sw.radius > 3.0f) {
            Color innerCol = swCol;
            innerCol.a = (unsigned char)(swCol.a * 0.5f);
            DrawCircleLines((int)sw.position.x, (int)sw.position.y, sw.radius - 2.0f, innerCol);
        }
    }

    // Render Particles (Additive Blend for glowing effects)
    BeginBlendMode(BLEND_ADDITIVE);
    for (const auto& p : particles) {
        float t = 1.0f - (p.life / p.maxLife);
        Color col = LerpColor(p.startColor, p.endColor, t);
        float currentSize = p.startSize + (p.endSize - p.startSize) * t;

        if (p.isAdditive) {
            DrawCircleGradient((int)p.position.x, (int)p.position.y, currentSize, col, Color{col.r, col.g, col.b, 0});
        } else {
            DrawCircleV(p.position, currentSize, col);
        }
    }
    EndBlendMode();

    // Render Floating texts
    for (const auto& ft : floatingTexts) {
        float alphaFactor = std::min(1.0f, (ft.life / ft.maxLife) * 1.5f);
        Color textCol = ft.color;
        textCol.a = (unsigned char)(255.0f * alphaFactor);

        int fontSize = (int)(20.0f * ft.scale);
        int textWidth = MeasureText(ft.text.c_str(), fontSize);

        // Shadow outline
        Color shadowCol = Color{0, 0, 0, (unsigned char)(180.0f * alphaFactor)};
        DrawText(ft.text.c_str(), (int)ft.position.x - textWidth / 2 + 1, (int)ft.position.y + 1, fontSize, shadowCol);
        DrawText(ft.text.c_str(), (int)ft.position.x - textWidth / 2, (int)ft.position.y, fontSize, textCol);
    }
}

void ParticleSystem::emitExplosion(Vector2 position, Color color, int count, float speed) {
    emitShockwave(position, color, 60.0f, 0.35f);

    for (int i = 0; i < count; ++i) {
        float angle = ((float)rand() / (float)RAND_MAX) * 2.0f * PI;
        float spd = speed * (0.3f + 0.7f * ((float)rand() / (float)RAND_MAX));
        float life = 0.3f + 0.4f * ((float)rand() / (float)RAND_MAX);
        float startSize = 4.0f + 6.0f * ((float)rand() / (float)RAND_MAX);

        Particle p;
        p.position = position;
        p.velocity = { cosf(angle) * spd, sinf(angle) * spd };
        p.startColor = Color{255, 255, 200, 255};
        p.endColor = Color{color.r, color.g, color.b, 0};
        p.startSize = startSize;
        p.endSize = 0.5f;
        p.life = life;
        p.maxLife = life;
        p.rotation = 0.0f;
        p.rotationSpeed = 0.0f;
        p.isAdditive = true;

        particles.push_back(p);
    }
}

void ParticleSystem::emitSparks(Vector2 position, Vector2 direction, Color color, int count) {
    float baseAngle = atan2f(direction.y, direction.x);

    for (int i = 0; i < count; ++i) {
        float spread = ((float)rand() / (float)RAND_MAX - 0.5f) * 1.2f;
        float angle = baseAngle + spread;
        float speed = 120.0f + ((float)rand() / (float)RAND_MAX) * 150.0f;
        float life = 0.15f + ((float)rand() / (float)RAND_MAX) * 0.2f;

        Particle p;
        p.position = position;
        p.velocity = { cosf(angle) * speed, sinf(angle) * speed };
        p.startColor = Color{255, 255, 255, 255};
        p.endColor = Color{color.r, color.g, color.b, 0};
        p.startSize = 3.0f;
        p.endSize = 0.5f;
        p.life = life;
        p.maxLife = life;
        p.rotation = 0.0f;
        p.rotationSpeed = 0.0f;
        p.isAdditive = true;

        particles.push_back(p);
    }
}

void ParticleSystem::emitEngineTrail(Vector2 position, Vector2 direction, Color color) {
    float angle = atan2f(direction.y, direction.x) + PI + ((float)rand() / (float)RAND_MAX - 0.5f) * 0.4f;
    float speed = 60.0f + ((float)rand() / (float)RAND_MAX) * 80.0f;
    float life = 0.15f + ((float)rand() / (float)RAND_MAX) * 0.15f;

    Particle p;
    p.position = position;
    p.velocity = { cosf(angle) * speed, sinf(angle) * speed };
    p.startColor = Color{255, 240, 150, 220};
    p.endColor = Color{color.r, color.g, color.b, 0};
    p.startSize = 4.0f + ((float)rand() / (float)RAND_MAX) * 3.0f;
    p.endSize = 0.0f;
    p.life = life;
    p.maxLife = life;
    p.rotation = 0.0f;
    p.rotationSpeed = 0.0f;
    p.isAdditive = true;

    particles.push_back(p);
}

void ParticleSystem::emitDebris(Vector2 position, Color color, int count) {
    for (int i = 0; i < count; ++i) {
        float angle = ((float)rand() / (float)RAND_MAX) * 2.0f * PI;
        float speed = 40.0f + ((float)rand() / (float)RAND_MAX) * 120.0f;
        float life = 0.5f + ((float)rand() / (float)RAND_MAX) * 0.5f;

        Particle p;
        p.position = position;
        p.velocity = { cosf(angle) * speed, sinf(angle) * speed };
        p.startColor = color;
        p.endColor = Color{color.r, color.g, color.b, 0};
        p.startSize = 3.0f + ((float)rand() / (float)RAND_MAX) * 3.0f;
        p.endSize = 1.0f;
        p.life = life;
        p.maxLife = life;
        p.rotation = ((float)rand() / (float)RAND_MAX) * 360.0f;
        p.rotationSpeed = ((float)rand() / (float)RAND_MAX - 0.5f) * 720.0f;
        p.isAdditive = false;

        particles.push_back(p);
    }
}

void ParticleSystem::emitShockwave(Vector2 position, Color color, float maxRadius, float duration) {
    Shockwave sw;
    sw.position = position;
    sw.radius = 2.0f;
    sw.maxRadius = maxRadius;
    sw.life = duration;
    sw.maxLife = duration;
    sw.color = color;
    shockwaves.push_back(sw);
}

void ParticleSystem::emitFloatingText(Vector2 position, const std::string& text, Color color, float scale) {
    FloatingText ft;
    ft.position = position;
    ft.velocity = { ((float)rand() / (float)RAND_MAX - 0.5f) * 20.0f, -40.0f - ((float)rand() / (float)RAND_MAX) * 20.0f };
    ft.text = text;
    ft.color = color;
    ft.life = 0.9f;
    ft.maxLife = 0.9f;
    ft.scale = scale;
    floatingTexts.push_back(ft);
}
