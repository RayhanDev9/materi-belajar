#pragma once

#include "../core/GameState.h"
#include "../ui/Button.h"

class PauseState : public GameState {
public:
    explicit PauseState(Game& game);

    void enter() override;
    void exit() override;
    void handleInput(float dt) override;
    void update(float dt) override;
    void render() override;

private:
    Button btnResume;
    Button btnRestart;
    Button btnAudio;
    Button btnMenu;
};
