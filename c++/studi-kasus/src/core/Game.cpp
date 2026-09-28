#include "Game.h"
#include "ResourceManager.h"
#include "../systems/AudioSystem.h"
#include "../systems/ParticleSystem.h"
#include "../systems/RenderSystem.h"
#include "../states/MenuState.h"
#include <fstream>
#include <iostream>

Game::Game(int width, int height, const std::string& title)
    : screenWidth(width), screenHeight(height), title(title) {
    init();
}

Game::~Game() {
    cleanup();
}

void Game::init() {
    SetConfigFlags(FLAG_VSYNC_HINT | FLAG_MSAA_4X_HINT);
    InitWindow(screenWidth, screenHeight, title.c_str());
    InitAudioDevice();
    SetTargetFPS(60);

    ResourceManager::getInstance().init();
    AudioSystem::getInstance().init();
    RenderSystem::getInstance().init(screenWidth, screenHeight);

    loadHighScore();

    isRunning = true;
    changeState(std::make_unique<MenuState>(*this));
}

void Game::cleanup() {
    saveHighScore();
    stateStack.clear();
    pendingState = nullptr;

    AudioSystem::getInstance().shutdown();
    ResourceManager::getInstance().unload();

    CloseAudioDevice();
    CloseWindow();
}

void Game::loadHighScore() {
    std::ifstream file("highscore.dat", std::ios::binary);
    if (file.is_open()) {
        file.read(reinterpret_cast<char*>(&highScore), sizeof(highScore));
        file.close();
    } else {
        highScore = 5000; // Default starter high score
    }
}

void Game::saveHighScore() {
    std::ofstream file("highscore.dat", std::ios::binary);
    if (file.is_open()) {
        file.write(reinterpret_cast<const char*>(&highScore), sizeof(highScore));
        file.close();
    }
}

void Game::submitScore(int score) {
    if (score > highScore) {
        highScore = score;
        saveHighScore();
    }
}

void Game::changeState(std::unique_ptr<GameState> newState) {
    pendingState = std::move(newState);
    shouldPopState = false;
}

void Game::pushState(std::unique_ptr<GameState> newState) {
    if (newState) {
        newState->enter();
        stateStack.push_back(std::move(newState));
    }
}

void Game::popState() {
    shouldPopState = true;
}

void Game::run() {
    while (!WindowShouldClose() && isRunning) {
        float dt = GetFrameTime();
        if (dt > 0.05f) dt = 0.05f; // Clamping max dt to prevent spiral of death on lag

        // State changes
        if (shouldPopState) {
            if (!stateStack.empty()) {
                stateStack.back()->exit();
                stateStack.pop_back();
            }
            shouldPopState = false;
        }

        if (pendingState) {
            while (!stateStack.empty()) {
                stateStack.back()->exit();
                stateStack.pop_back();
            }
            stateStack.push_back(std::move(pendingState));
            stateStack.back()->enter();
            pendingState = nullptr;
        }

        // Global systems update
        RenderSystem::getInstance().update(dt);
        ParticleSystem::getInstance().update(dt);
        AudioSystem::getInstance().update(dt);

        // Handle Input & Update active state
        if (!stateStack.empty()) {
            stateStack.back()->handleInput(dt);
            stateStack.back()->update(dt);
        }

        // -------------------------------------------------------------
        // Master Render Pipeline
        // -------------------------------------------------------------
        BeginDrawing();
        ClearBackground(BLACK);

        // Render Parallax Background
        RenderSystem::getInstance().renderBackground();

        // Screen Shake Camera Offset
        Vector2 shake = RenderSystem::getInstance().getScreenShakeOffset();
        Camera2D camera;
        camera.offset = shake;
        camera.target = Vector2{ 0.0f, 0.0f };
        camera.rotation = 0.0f;
        camera.zoom = 1.0f;

        BeginMode2D(camera);

        // Render all states in stack (e.g. PlayState underneath PauseState)
        for (const auto& state : stateStack) {
            state->render();
        }

        // Render Particles
        ParticleSystem::getInstance().render();

        EndMode2D();

        // Optional FPS counter (small in bottom right corner)
        DrawFPS(screenWidth - 85, screenHeight - 20);

        EndDrawing();
    }
}
