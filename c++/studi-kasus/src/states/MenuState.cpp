#include "MenuState.h"
#include "PlayState.h"
#include "../core/Game.h"
#include "../core/ResourceManager.h"
#include "../systems/AudioSystem.h"
#include "../systems/ParticleSystem.h"
#include "../systems/RenderSystem.h"
#include <cmath>

MenuState::MenuState(Game& game)
    : GameState(game),
      btnPlay(Rectangle{515, 340, 250, 48}, "START MISSION", 20),
      btnHelp(Rectangle{515, 404, 250, 48}, "HOW TO PLAY", 20),
      btnAudio(Rectangle{515, 468, 250, 48}, "AUDIO: ON", 20),
      btnExit(Rectangle{515, 532, 250, 48}, "EXIT GAME", 20),
      shipPos({640.0f, 260.0f}) {}

void MenuState::enter() {
    AudioSystem::getInstance().setBgmIntensity(0.2f);
    showHelpModal = false;
    animTimer = 0.0f;
    btnAudio.setText(AudioSystem::getInstance().isMuted() ? "AUDIO: OFF" : "AUDIO: ON");
}

void MenuState::exit() {}

void MenuState::handleInput(float dt) {
    if (showHelpModal) {
        if (IsKeyPressed(KEY_ESCAPE) || IsKeyPressed(KEY_ENTER) || IsKeyPressed(KEY_SPACE) || IsMouseButtonPressed(MOUSE_BUTTON_LEFT)) {
            showHelpModal = false;
            AudioSystem::getInstance().playSound(SoundID::BUTTON_CLICK, 0.5f);
        }
        return;
    }

    btnPlay.update(dt);
    btnHelp.update(dt);
    btnAudio.update(dt);
    btnExit.update(dt);

    if (btnPlay.isClicked() || IsKeyPressed(KEY_ENTER) || IsKeyPressed(KEY_SPACE)) {
        game.changeState(std::make_unique<PlayState>(game));
    } else if (btnHelp.isClicked() || IsKeyPressed(KEY_H)) {
        showHelpModal = true;
    } else if (btnAudio.isClicked() || IsKeyPressed(KEY_M)) {
        AudioSystem::getInstance().toggleMute();
        btnAudio.setText(AudioSystem::getInstance().isMuted() ? "AUDIO: OFF" : "AUDIO: ON");
    } else if (btnExit.isClicked() || IsKeyPressed(KEY_ESCAPE)) {
        game.quit();
    }
}

void MenuState::update(float dt) {
    animTimer += dt;
    shipPos.y = 260.0f + sinf(animTimer * 2.0f) * 8.0f;

    // Emit gentle engine particles in showcase
    if (rand() % 3 == 0) {
        Vector2 leftEngine = { shipPos.x - 6.0f, shipPos.y + 16.0f };
        Vector2 rightEngine = { shipPos.x + 6.0f, shipPos.y + 16.0f };
        ParticleSystem::getInstance().emitEngineTrail(leftEngine, Vector2{0.0f, 1.0f}, Color{50, 180, 255, 200});
        ParticleSystem::getInstance().emitEngineTrail(rightEngine, Vector2{0.0f, 1.0f}, Color{50, 180, 255, 200});
    }
}

void MenuState::render() {
    // Glowing Title
    const char* title = "SPACE SHOOTER 2D";
    int titleW = MeasureText(title, 48);
    float glowPulse = 0.8f + 0.2f * sinf(animTimer * 4.0f);

    // Title shadow & outer glow
    DrawText(title, (1280 - titleW) / 2 + 2, 82, 48, Color{0, 120, 255, (unsigned char)(120 * glowPulse)});
    DrawText(title, (1280 - titleW) / 2, 80, 48, Color{240, 250, 255, 255});

    const char* subtitle = "- CYBER ASSAULT -";
    int subW = MeasureText(subtitle, 20);
    DrawText(subtitle, (1280 - subW) / 2, 138, 20, Color{0, 220, 255, 220});

    // High Score Badge
    std::string hiStr = TextFormat("BEST SCORE: %08d", game.getHighScore());
    int hiW = MeasureText(hiStr.c_str(), 18);
    DrawRectangleRounded(Rectangle{(float)(1280 - hiW - 40) / 2.0f, 175, (float)(hiW + 40), 32}, 0.3f, 4, Color{20, 25, 45, 200});
    DrawRectangleRoundedLines(Rectangle{(float)(1280 - hiW - 40) / 2.0f, 175, (float)(hiW + 40), 32}, 0.3f, 4, Color{255, 200, 50, 180});
    DrawText(hiStr.c_str(), (1280 - hiW) / 2, 182, 18, Color{255, 220, 80, 255});

    // Showcase ship in center
    Texture2D shipTex = ResourceManager::getInstance().getTexture(TextureID::PLAYER);
    if (shipTex.id != 0) {
        Rectangle src = { 0.0f, 0.0f, (float)shipTex.width, (float)shipTex.height };
        Rectangle dst = { shipPos.x, shipPos.y, (float)shipTex.width * 1.3f, (float)shipTex.height * 1.3f };
        Vector2 orig = { ((float)shipTex.width * 1.3f) / 2.0f, ((float)shipTex.height * 1.3f) / 2.0f };
        DrawCircleGradient((int)shipPos.x, (int)shipPos.y, 45.0f, Color{0, 180, 255, 60}, Color{0, 0, 0, 0});
        DrawTexturePro(shipTex, src, dst, orig, 0.0f, WHITE);
    }

    // Interactive buttons
    btnPlay.render();
    btnHelp.render();
    btnAudio.render();
    btnExit.render();

    // Footer info
    const char* footer = "C++17 & Raylib 5.5 | Level 2: Game 2D Grafis";
    int footW = MeasureText(footer, 14);
    DrawText(footer, (1280 - footW) / 2, 680, 14, Color{100, 130, 160, 200});

    // -------------------------------------------------------------
    // How To Play Modal Overlay
    // -------------------------------------------------------------
    if (showHelpModal) {
        DrawRectangle(0, 0, 1280, 720, Color{5, 8, 16, 230});

        int modalW = 660;
        int modalH = 460;
        int modalX = (1280 - modalW) / 2;
        int modalY = (720 - modalH) / 2;

        DrawRectangleRounded(Rectangle{(float)modalX, (float)modalY, (float)modalW, (float)modalH}, 0.1f, 4, Color{15, 20, 38, 255});
        DrawRectangleRoundedLines(Rectangle{(float)modalX, (float)modalY, (float)modalW, (float)modalH}, 0.1f, 4, Color{0, 200, 255, 200});

        DrawText("HOW TO PLAY & CONTROLS", modalX + 160, modalY + 24, 24, Color{255, 255, 255, 255});

        // Controls list
        int lineY = modalY + 75;
        DrawText("CONTROLS:", modalX + 40, lineY, 18, Color{0, 220, 255, 255});
        lineY += 28;
        DrawText("- WASD / Arrow Keys : Move Ship", modalX + 50, lineY, 16, WHITE);
        lineY += 24;
        DrawText("- SPACE / J / Z / Left Click : Fire Primary Laser", modalX + 50, lineY, 16, WHITE);
        lineY += 24;
        DrawText("- X / K / Right Click : Detonate EMP Super Bomb", modalX + 50, lineY, 16, WHITE);
        lineY += 24;
        DrawText("- P / ESC : Pause Game", modalX + 50, lineY, 16, WHITE);

        lineY += 34;
        DrawText("POWER-UPS:", modalX + 40, lineY, 18, Color{255, 200, 50, 255});
        lineY += 28;
        DrawText("- [W] Yellow : Upgrade Primary Weapon (Up to Lv 5)", modalX + 50, lineY, 16, Color{255, 220, 80, 255});
        lineY += 24;
        DrawText("- [S] Blue   : Replenish Energy Shield", modalX + 50, lineY, 16, Color{100, 220, 255, 255});
        lineY += 24;
        DrawText("- [+] Green  : Repair Hull Health", modalX + 50, lineY, 16, Color{100, 255, 120, 255});
        lineY += 24;
        DrawText("- [B] Red    : +1 EMP Super Bomb", modalX + 50, lineY, 16, Color{255, 100, 100, 255});
        lineY += 24;
        DrawText("- [>] Purple : Hyper-Drive Speed & Fire Rate Boost", modalX + 50, lineY, 16, Color{220, 120, 255, 255});

        int closeW = MeasureText("Press [SPACE] or [ESC] or Click anywhere to close", 14);
        DrawText("Press [SPACE] or [ESC] or Click anywhere to close", (1280 - closeW) / 2, modalY + modalH - 30, 14, Color{140, 180, 220, 255});
    }
}
