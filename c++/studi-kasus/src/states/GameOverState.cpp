#include "GameOverState.h"
#include "PlayState.h"
#include "MenuState.h"
#include "../core/Game.h"
#include "../systems/AudioSystem.h"
#include <cmath>

GameOverState::GameOverState(Game& game)
    : GameState(game),
      btnRetry(Rectangle{515, 470, 250, 48}, "TRY AGAIN", 20),
      btnMenu(Rectangle{515, 534, 250, 48}, "MAIN MENU", 20) {}

void GameOverState::enter() {
    AudioSystem::getInstance().setBgmIntensity(0.1f);
    animTimer = 0.0f;
    isNewHighScore = (game.getLastScore() >= game.getHighScore() && game.getLastScore() > 0);
}

void GameOverState::exit() {}

void GameOverState::handleInput(float dt) {
    btnRetry.update(dt);
    btnMenu.update(dt);

    if (btnRetry.isClicked() || IsKeyPressed(KEY_ENTER) || IsKeyPressed(KEY_SPACE)) {
        game.changeState(std::make_unique<PlayState>(game));
    } else if (btnMenu.isClicked() || IsKeyPressed(KEY_ESCAPE)) {
        game.changeState(std::make_unique<MenuState>(game));
    }
}

void GameOverState::update(float dt) {
    animTimer += dt;
}

void GameOverState::render() {
    // Semi-transparent dark red gradient overlay
    DrawRectangle(0, 0, 1280, 720, Color{8, 4, 10, 220});

    // Pulsing Red Title
    float pulse = 0.8f + 0.2f * sinf(animTimer * 5.0f);
    const char* title = "MISSION FAILED";
    int titleW = MeasureText(title, 44);
    DrawText(title, (1280 - titleW) / 2 + 2, 92, 44, Color{255, 0, 50, (unsigned char)(140 * pulse)});
    DrawText(title, (1280 - titleW) / 2, 90, 44, Color{255, 60, 80, 255});

    // Score breakdown card
    int cardW = 460;
    int cardH = 260;
    int cardX = (1280 - cardW) / 2;
    int cardY = 170;

    DrawRectangleRounded(Rectangle{(float)cardX, (float)cardY, (float)cardW, (float)cardH}, 0.15f, 4, Color{15, 18, 32, 240});
    DrawRectangleRoundedLines(Rectangle{(float)cardX, (float)cardY, (float)cardW, (float)cardH}, 0.15f, 4, Color{255, 60, 80, 150});

    // New High Score Badge
    if (isNewHighScore) {
        const char* newHi = "★ NEW HIGH RECORD! ★";
        int newHiW = MeasureText(newHi, 18);
        DrawRectangleRounded(Rectangle{(float)(1280 - newHiW - 30) / 2.0f, (float)(cardY - 16), (float)(newHiW + 30), 30}, 0.3f, 4, Color{255, 200, 0, 240});
        DrawText(newHi, (1280 - newHiW) / 2, cardY - 10, 18, Color{20, 20, 30, 255});
    }

    int rowY = cardY + 36;
    // Final Score
    DrawText("FINAL SCORE:", cardX + 40, rowY, 20, Color{200, 220, 240, 255});
    std::string scoreStr = TextFormat("%08d", game.getLastScore());
    int sW = MeasureText(scoreStr.c_str(), 22);
    DrawText(scoreStr.c_str(), cardX + cardW - 40 - sW, rowY - 2, 22, Color{255, 255, 255, 255});

    rowY += 44;
    // Waves Survived
    DrawText("SECTORS DEFENDED:", cardX + 40, rowY, 18, Color{180, 200, 220, 255});
    std::string waveStr = TextFormat("%d", game.getLastWave());
    int wW = MeasureText(waveStr.c_str(), 18);
    DrawText(waveStr.c_str(), cardX + cardW - 40 - wW, rowY, 18, Color{0, 220, 255, 255});

    rowY += 40;
    // Max Combo
    DrawText("MAX COMBO STREAK:", cardX + 40, rowY, 18, Color{180, 200, 220, 255});
    std::string comboStr = TextFormat("x%d", game.getLastMaxCombo());
    int cW = MeasureText(comboStr.c_str(), 18);
    DrawText(comboStr.c_str(), cardX + cardW - 40 - cW, rowY, 18, Color{255, 100, 255, 255});

    rowY += 40;
    // High Score
    DrawText("ALL-TIME HIGH SCORE:", cardX + 40, rowY, 18, Color{255, 200, 50, 255});
    std::string hiStr = TextFormat("%08d", game.getHighScore());
    int hW = MeasureText(hiStr.c_str(), 18);
    DrawText(hiStr.c_str(), cardX + cardW - 40 - hW, rowY, 18, Color{255, 220, 80, 255});

    // Buttons
    btnRetry.render();
    btnMenu.render();
}
