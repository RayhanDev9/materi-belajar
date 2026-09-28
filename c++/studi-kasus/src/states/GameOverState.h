#pragma once

#include "../core/GameState.h"
#include "../ui/Button.h"

class GameOverState : public GameState {
public:
    explicit GameOverState(Game& game);

    void enter() override;
    void exit() override;
    void handleInput(float dt) override;
    void update(float dt) override;
    void render() override;

private:
    Button btnRetry;
    Button btnMenu;

    float animTimer = 0.0f;
    bool isNewHighScore = false;
};
