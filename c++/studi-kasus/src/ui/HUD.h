#pragma once

#include <raylib.h>
#include <string>

class Player;

class HUD {
public:
    HUD();

    void update(float dt, int targetScore, int combo, float comboTimer, float maxComboTimer, int wave);
    void render(const Player& player, int highScore);

    void showWaveBanner(const std::string& title, const std::string& subtitle, float duration = 2.5f);

private:
    float displayScore = 0.0f;
    float currentScore = 0.0f;
    int currentWave = 1;
    int currentCombo = 1;
    float comboProgress = 0.0f;

    // Health & Shield smooth visual interpolation
    float displayHealth = 100.0f;
    float displayShield = 100.0f;

    // Wave announcement banner
    std::string bannerTitle;
    std::string bannerSubtitle;
    float bannerTimer = 0.0f;
    float bannerDuration = 2.5f;
};
