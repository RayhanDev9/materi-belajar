#include "RenderSystem.h"
#include <cstdlib>
#include <cmath>
#include <algorithm>

RenderSystem& RenderSystem::getInstance() {
    static RenderSystem instance;
    return instance;
}

void RenderSystem::init(int width, int height) {
    screenWidth = width;
    screenHeight = height;

    starsLayer1.clear();
    starsLayer2.clear();
    starsLayer3.clear();

    // Layer 1: Far, tiny, slow
    for (int i = 0; i < 90; ++i) {
        Star s;
        s.position = { (float)(rand() % screenWidth), (float)(rand() % screenHeight) };
        s.speed = 20.0f + ((float)rand() / (float)RAND_MAX) * 15.0f;
        s.size = 1.0f;
        unsigned char b = 100 + rand() % 80;
        s.color = Color{ b, b, (unsigned char)(b + 30), 200 };
        starsLayer1.push_back(s);
    }

    // Layer 2: Mid, medium speed
    for (int i = 0; i < 50; ++i) {
        Star s;
        s.position = { (float)(rand() % screenWidth), (float)(rand() % screenHeight) };
        s.speed = 50.0f + ((float)rand() / (float)RAND_MAX) * 30.0f;
        s.size = 1.8f;
        unsigned char b = 160 + rand() % 80;
        s.color = Color{ (unsigned char)(b - 20), b, (unsigned char)std::min(255, b + 40), 240 };
        starsLayer2.push_back(s);
    }

    // Layer 3: Near, fast, bright
    for (int i = 0; i < 25; ++i) {
        Star s;
        s.position = { (float)(rand() % screenWidth), (float)(rand() % screenHeight) };
        s.speed = 100.0f + ((float)rand() / (float)RAND_MAX) * 60.0f;
        s.size = 2.5f;
        s.color = Color{ 230, 240, 255, 255 };
        starsLayer3.push_back(s);
    }
}

void RenderSystem::update(float dt) {
    // Update Far Stars
    for (auto& s : starsLayer1) {
        s.position.y += s.speed * dt;
        if (s.position.y > screenHeight) {
            s.position.y = 0.0f;
            s.position.x = (float)(rand() % screenWidth);
        }
    }

    // Update Mid Stars
    for (auto& s : starsLayer2) {
        s.position.y += s.speed * dt;
        if (s.position.y > screenHeight) {
            s.position.y = 0.0f;
            s.position.x = (float)(rand() % screenWidth);
        }
    }

    // Update Near Stars
    for (auto& s : starsLayer3) {
        s.position.y += s.speed * dt;
        if (s.position.y > screenHeight) {
            s.position.y = 0.0f;
            s.position.x = (float)(rand() % screenWidth);
        }
    }

    // Shooting stars
    shootingStarTimer += dt;
    if (shootingStarTimer > 3.5f + ((float)rand() / (float)RAND_MAX) * 4.0f) {
        shootingStarTimer = 0.0f;

        ShootingStar ss;
        ss.startPos = { (float)(rand() % screenWidth), -10.0f };
        ss.currentPos = ss.startPos;
        float angle = PI * 0.35f + ((float)rand() / (float)RAND_MAX - 0.5f) * 0.3f;
        float speed = 500.0f + ((float)rand() / (float)RAND_MAX) * 300.0f;
        ss.velocity = { cosf(angle) * speed, sinf(angle) * speed };
        ss.length = 40.0f + ((float)rand() / (float)RAND_MAX) * 30.0f;
        ss.life = 0.8f;
        ss.maxLife = 0.8f;
        ss.color = Color{ 150, 220, 255, 255 };
        shootingStars.push_back(ss);
    }

    for (auto it = shootingStars.begin(); it != shootingStars.end();) {
        it->life -= dt;
        if (it->life <= 0.0f || it->currentPos.y > screenHeight + 50) {
            it = shootingStars.erase(it);
        } else {
            it->currentPos.x += it->velocity.x * dt;
            it->currentPos.y += it->velocity.y * dt;
            ++it;
        }
    }

    // Update screen shake
    if (shakeTime > 0.0f) {
        shakeTime -= dt;
        float progress = shakeTime / shakeDuration;
        float currentTrauma = shakeTrauma * progress * progress; // Quadratic falloff

        float angle = ((float)rand() / (float)RAND_MAX) * 2.0f * PI;
        float dist = currentTrauma * 15.0f;
        shakeOffset = { cosf(angle) * dist, sinf(angle) * dist };
    } else {
        shakeTrauma = 0.0f;
        shakeOffset = { 0.0f, 0.0f };
    }
}

void RenderSystem::renderBackground() {
    // Deep space gradient background
    DrawRectangleGradientV(0, 0, screenWidth, screenHeight, Color{10, 10, 26, 255}, Color{4, 4, 12, 255});

    // Nebula subtle glow
    DrawCircleGradient(screenWidth / 4, screenHeight / 3, 300.0f, Color{40, 15, 65, 40}, Color{0, 0, 0, 0});
    DrawCircleGradient(3 * screenWidth / 4, 2 * screenHeight / 3, 350.0f, Color{15, 40, 75, 40}, Color{0, 0, 0, 0});

    // Layer 1 (Far)
    for (const auto& s : starsLayer1) {
        DrawPixel((int)s.position.x, (int)s.position.y, s.color);
    }

    // Layer 2 (Mid)
    for (const auto& s : starsLayer2) {
        DrawRectangle((int)s.position.x, (int)s.position.y, (int)s.size, (int)s.size, s.color);
    }

    // Layer 3 (Near)
    for (const auto& s : starsLayer3) {
        DrawRectangle((int)s.position.x, (int)s.position.y, (int)s.size, (int)s.size, s.color);
        // Subtle star streak
        DrawLine((int)s.position.x, (int)s.position.y, (int)s.position.x, (int)(s.position.y - 3), Color{s.color.r, s.color.g, s.color.b, 100});
    }

    // Shooting Stars
    for (const auto& ss : shootingStars) {
        float alpha = ss.life / ss.maxLife;
        Color tailCol = ss.color;
        tailCol.a = (unsigned char)(200.0f * alpha);
        Vector2 tail = {
            ss.currentPos.x - (ss.velocity.x / 500.0f) * ss.length,
            ss.currentPos.y - (ss.velocity.y / 500.0f) * ss.length
        };
        DrawLineEx(tail, ss.currentPos, 2.0f, tailCol);
        DrawCircleV(ss.currentPos, 2.5f, Color{255, 255, 255, (unsigned char)(255 * alpha)});
    }
}

void RenderSystem::addScreenShake(float trauma, float duration) {
    shakeTrauma = std::min(1.0f, shakeTrauma + trauma);
    shakeDuration = duration;
    shakeTime = duration;
}

Vector2 RenderSystem::getScreenShakeOffset() const {
    return shakeOffset;
}
