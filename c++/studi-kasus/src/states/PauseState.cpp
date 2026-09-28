#include "PauseState.h"
#include "PlayState.h"
#include "MenuState.h"
#include "../core/Game.h"
#include "../systems/AudioSystem.h"

PauseState::PauseState(Game& game)
    : GameState(game),
      btnResume(Rectangle{515, 270, 250, 48}, "RESUME MISSION", 20),
      btnRestart(Rectangle{515, 334, 250, 48}, "RESTART MISSION", 20),
      btnAudio(Rectangle{515, 398, 250, 48}, "AUDIO: ON", 20),
      btnMenu(Rectangle{515, 462, 250, 48}, "MAIN MENU", 20) {}

void PauseState::enter() {
    btnAudio.setText(AudioSystem::getInstance().isMuted() ? "AUDIO: OFF" : "AUDIO: ON");
}

void PauseState::exit() {}

void PauseState::handleInput(float dt) {
    btnResume.update(dt);
    btnRestart.update(dt);
    btnAudio.update(dt);
    btnMenu.update(dt);

    if (btnResume.isClicked() || IsKeyPressed(KEY_P) || IsKeyPressed(KEY_ESCAPE)) {
        game.popState();
    } else if (btnRestart.isClicked() || IsKeyPressed(KEY_R)) {
        game.changeState(std::make_unique<PlayState>(game));
    } else if (btnAudio.isClicked() || IsKeyPressed(KEY_M)) {
        AudioSystem::getInstance().toggleMute();
        btnAudio.setText(AudioSystem::getInstance().isMuted() ? "AUDIO: OFF" : "AUDIO: ON");
    } else if (btnMenu.isClicked()) {
        game.changeState(std::make_unique<MenuState>(game));
    }
}

void PauseState::update(float dt) {
    (void)dt;
}

void PauseState::render() {
    // Dark Frosted Glass Overlay
    DrawRectangle(0, 0, 1280, 720, Color{4, 6, 16, 210});

    // Pause Box
    int boxW = 400;
    int boxH = 380;
    int boxX = (1280 - boxW) / 2;
    int boxY = 170;

    DrawRectangleRounded(Rectangle{(float)boxX, (float)boxY, (float)boxW, (float)boxH}, 0.12f, 4, Color{15, 22, 40, 240});
    DrawRectangleRoundedLines(Rectangle{(float)boxX, (float)boxY, (float)boxW, (float)boxH}, 0.12f, 4, Color{0, 200, 255, 180});

    const char* title = "MISSION PAUSED";
    int titleW = MeasureText(title, 28);
    DrawText(title, (1280 - titleW) / 2, boxY + 28, 28, Color{255, 255, 255, 255});
    DrawLine(boxX + 40, boxY + 68, boxX + boxW - 40, boxY + 68, Color{0, 180, 255, 120});

    // Buttons
    btnResume.render();
    btnRestart.render();
    btnAudio.render();
    btnMenu.render();
}
