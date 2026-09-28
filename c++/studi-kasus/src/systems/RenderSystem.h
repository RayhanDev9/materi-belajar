#pragma once

#include <raylib.h>
#include <vector>

struct Star {
    Vector2 position;
    float speed;
    float size;
    Color color;
};

struct ShootingStar {
    Vector2 startPos;
    Vector2 currentPos;
    Vector2 velocity;
    float length;
    float life;
    float maxLife;
    Color color;
};

class RenderSystem {
public:
    static RenderSystem& getInstance();

    RenderSystem(const RenderSystem&) = delete;
    RenderSystem& operator=(const RenderSystem&) = delete;

    void init(int screenWidth, int screenHeight);
    void update(float dt);
    void renderBackground();

    void addScreenShake(float trauma, float duration = 0.4f);
    Vector2 getScreenShakeOffset() const;

private:
    RenderSystem() = default;
    ~RenderSystem() = default;

    int screenWidth = 1280;
    int screenHeight = 720;

    std::vector<Star> starsLayer1; // Far
    std::vector<Star> starsLayer2; // Mid
    std::vector<Star> starsLayer3; // Near

    std::vector<ShootingStar> shootingStars;
    float shootingStarTimer = 0.0f;

    // Screen Shake
    float shakeTrauma = 0.0f;
    float shakeTime = 0.0f;
    float shakeDuration = 0.0f;
    Vector2 shakeOffset = { 0.0f, 0.0f };
};
