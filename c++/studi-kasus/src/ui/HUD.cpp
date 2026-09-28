#include "HUD.h"
#include "../entities/Player.h"
#include "../core/ResourceManager.h"
#include <algorithm>
#include <cmath>

HUD::HUD() {}

void HUD::update(float dt, int targetScore, int combo, float comboTimer, float maxComboTimer, int wave) {
    currentScore = (float)targetScore;
    currentCombo = combo;
    currentWave = wave;

    // Smooth rolling score
    displayScore += (currentScore - displayScore) * 10.0f * dt;
    if (std::abs(currentScore - displayScore) < 1.0f) {
        displayScore = currentScore;
    }

    // Combo progress bar
    if (maxComboTimer > 0.001f) {
        comboProgress = std::clamp(comboTimer / maxComboTimer, 0.0f, 1.0f);
    } else {
        comboProgress = 0.0f;
    }

    // Banner timer
    if (bannerTimer > 0.0f) {
        bannerTimer -= dt;
    }
}

void HUD::showWaveBanner(const std::string& title, const std::string& subtitle, float duration) {
    bannerTitle = title;
    bannerSubtitle = subtitle;
    bannerDuration = duration;
    bannerTimer = duration;
}

void HUD::render(const Player& player, int highScore) {
    // -------------------------------------------------------------
    // Top Left: Player Status Panel (Health, Shield, Bombs, Weapon Level)
    // -------------------------------------------------------------
    int panelX = 20;
    int panelY = 16;
    int panelW = 240;
    int panelH = 92;

    // Glass panel background
    DrawRectangleRounded(Rectangle{(float)panelX, (float)panelY, (float)panelW, (float)panelH}, 0.2f, 4, Color{10, 15, 28, 200});
    DrawRectangleRoundedLines(Rectangle{(float)panelX, (float)panelY, (float)panelW, (float)panelH}, 0.2f, 4, Color{0, 180, 255, 120});

    // Shield Bar
    float targetShield = player.getShield();
    displayShield += (targetShield - displayShield) * 0.15f;
    float shieldPercent = std::clamp(displayShield / player.getMaxShield(), 0.0f, 1.0f);

    DrawRectangle(panelX + 34, panelY + 14, 180, 12, Color{20, 40, 60, 255});
    DrawRectangle(panelX + 34, panelY + 14, (int)(180.0f * shieldPercent), 12, Color{0, 200, 255, 255});
    DrawRectangleLines(panelX + 34, panelY + 14, 180, 12, Color{0, 255, 255, 180});
    DrawText("SHD", panelX + 8, panelY + 14, 11, Color{0, 220, 255, 255});

    // Hull (HP) Bar
    float targetHealth = player.getHealth();
    displayHealth += (targetHealth - displayHealth) * 0.15f;
    float healthPercent = std::clamp(displayHealth / player.getMaxHealth(), 0.0f, 1.0f);

    DrawRectangle(panelX + 34, panelY + 34, 180, 12, Color{60, 20, 20, 255});
    Color hpColor = (healthPercent > 0.35f) ? Color{0, 240, 120, 255} : Color{255, 60, 60, 255};
    DrawRectangle(panelX + 34, panelY + 34, (int)(180.0f * healthPercent), 12, hpColor);
    DrawRectangleLines(panelX + 34, panelY + 34, 180, 12, Color{255, 100, 100, 180});
    DrawText("HULL", panelX + 6, panelY + 34, 10, Color{255, 120, 120, 255});

    // Weapon Level Indicators
    DrawText("WEAPON:", panelX + 10, panelY + 60, 12, Color{200, 220, 240, 255});
    for (int i = 1; i <= 5; ++i) {
        Color starColor = (i <= player.getWeaponLevel()) ? Color{255, 220, 0, 255} : Color{60, 60, 70, 200};
        DrawRectangle(panelX + 68 + (i - 1) * 14, panelY + 62, 10, 8, starColor);
    }

    // Bomb Icons
    DrawText("BOMB:", panelX + 150, panelY + 60, 12, Color{255, 140, 100, 255});
    for (int i = 0; i < player.getBombCount(); ++i) {
        DrawCircle(panelX + 196 + i * 12, panelY + 66, 4, Color{255, 80, 40, 255});
    }

    // -------------------------------------------------------------
    // Top Right: Score & Multiplier Panel
    // -------------------------------------------------------------
    int scorePanelW = 260;
    int scorePanelH = 92;
    int scorePanelX = 1280 - scorePanelW - 20;
    int scorePanelY = 16;

    DrawRectangleRounded(Rectangle{(float)scorePanelX, (float)scorePanelY, (float)scorePanelW, (float)scorePanelH}, 0.2f, 4, Color{10, 15, 28, 200});
    DrawRectangleRoundedLines(Rectangle{(float)scorePanelX, (float)scorePanelY, (float)scorePanelW, (float)scorePanelH}, 0.2f, 4, Color{0, 180, 255, 120});

    // Score text
    DrawText("SCORE", scorePanelX + 14, scorePanelY + 12, 12, Color{160, 200, 240, 255});
    std::string scoreStr = TextFormat("%08d", (int)displayScore);
    DrawText(scoreStr.c_str(), scorePanelX + 70, scorePanelY + 8, 20, Color{255, 255, 255, 255});

    // High Score
    DrawText("HIGH", scorePanelX + 14, scorePanelY + 34, 11, Color{255, 200, 50, 255});
    std::string hiStr = TextFormat("%08d", highScore);
    DrawText(hiStr.c_str(), scorePanelX + 70, scorePanelY + 32, 14, Color{255, 220, 100, 255});

    // Combo Multiplier & Meter
    if (currentCombo > 1) {
        std::string comboStr = TextFormat("COMBO x%d", currentCombo);
        DrawText(comboStr.c_str(), scorePanelX + 14, scorePanelY + 58, 14, Color{255, 100, 255, 255});

        // Combo decay bar
        DrawRectangle(scorePanelX + 90, scorePanelY + 62, 150, 8, Color{40, 20, 50, 255});
        DrawRectangle(scorePanelX + 90, scorePanelY + 62, (int)(150.0f * comboProgress), 8, Color{255, 80, 255, 255});
        DrawRectangleLines(scorePanelX + 90, scorePanelY + 62, 150, 8, Color{255, 150, 255, 200});
    } else {
        DrawText("COMBO x1", scorePanelX + 14, scorePanelY + 58, 14, Color{100, 120, 140, 255});
    }

    // -------------------------------------------------------------
    // Center Top: Wave Indicator
    // -------------------------------------------------------------
    std::string waveStr = TextFormat("WAVE %d", currentWave);
    int waveW = MeasureText(waveStr.c_str(), 18);
    DrawText(waveStr.c_str(), (1280 - waveW) / 2, 20, 18, Color{0, 220, 255, 200});

    // -------------------------------------------------------------
    // Animated Center Wave Banner
    // -------------------------------------------------------------
    if (bannerTimer > 0.0f) {
        float alpha = 1.0f;
        float elapsed = bannerDuration - bannerTimer;
        if (elapsed < 0.4f) {
            alpha = elapsed / 0.4f;
        } else if (bannerTimer < 0.5f) {
            alpha = bannerTimer / 0.5f;
        }

        int bannerH = 70;
        int bannerY = 240;
        DrawRectangle(0, bannerY, 1280, bannerH, Color{10, 15, 30, (unsigned char)(210 * alpha)});
        DrawLine(0, bannerY, 1280, bannerY, Color{0, 200, 255, (unsigned char)(255 * alpha)});
        DrawLine(0, bannerY + bannerH, 1280, bannerY + bannerH, Color{0, 200, 255, (unsigned char)(255 * alpha)});

        int titleW = MeasureText(bannerTitle.c_str(), 28);
        DrawText(bannerTitle.c_str(), (1280 - titleW) / 2, bannerY + 10, 28, Color{255, 255, 255, (unsigned char)(255 * alpha)});

        int subW = MeasureText(bannerSubtitle.c_str(), 16);
        DrawText(bannerSubtitle.c_str(), (1280 - subW) / 2, bannerY + 44, 16, Color{0, 230, 255, (unsigned char)(255 * alpha)});
    }
}
