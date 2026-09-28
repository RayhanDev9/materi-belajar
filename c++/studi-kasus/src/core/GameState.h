#pragma once

class Game;

class GameState {
public:
    explicit GameState(Game& game) : game(game) {}
    virtual ~GameState() = default;

    virtual void enter() = 0;
    virtual void exit() = 0;
    virtual void handleInput(float dt) = 0;
    virtual void update(float dt) = 0;
    virtual void render() = 0;

protected:
    Game& game;
};
