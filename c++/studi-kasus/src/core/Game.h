#pragma once

#include <raylib.h>
#include <memory>
#include <vector>
#include <string>
#include "GameState.h"

enum class StateType {
    MENU,
    PLAY,
    PAUSE,
    GAME_OVER
};

class Game {
public:
    Game(int width = 1280, int height = 720, const std::string& title = "SPACE SHOOTER 2D - ARCADE");
    ~Game();

    void run();

    void changeState(std::unique_ptr<GameState> newState);
    void pushState(std::unique_ptr<GameState> newState);
    void popState();

    int getScreenWidth() const { return screenWidth; }
    int getScreenHeight() const { return screenHeight; }

    int getHighScore() const { return highScore; }
    void submitScore(int score);

    int getLastScore() const { return lastScore; }
    void setLastScore(int score) { lastScore = score; }

    int getLastWave() const { return lastWave; }
    void setLastWave(int wave) { lastWave = wave; }

    int getLastMaxCombo() const { return lastMaxCombo; }
    void setLastMaxCombo(int combo) { lastMaxCombo = combo; }

    void quit() { isRunning = false; }

private:
    void init();
    void cleanup();
    void loadHighScore();
    void saveHighScore();

    int screenWidth;
    int screenHeight;
    std::string title;
    bool isRunning = false;

    int highScore = 0;
    int lastScore = 0;
    int lastWave = 1;
    int lastMaxCombo = 1;

    std::vector<std::unique_ptr<GameState>> stateStack;
    std::unique_ptr<GameState> pendingState = nullptr;
    bool shouldPopState = false;
};
