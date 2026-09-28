#pragma once

#include "../core/GameState.h"
#include "../ui/Button.h"
#include <vector>

class MenuState : public GameState {
public:
    explicit MenuState(Game& game);

    void enter() override;
    void exit() override;
    void handleInput(float dt) override;
    void update(float dt) override;
    void render() override;

private:
    Button btnPlay;
    Button btnHelp;
    Button btnAudio;
    Button btnExit;

    bool showHelpModal = false;
    float animTimer = 0.0f;
    Vector2 shipPos;
};
