#pragma once

#include "../core/GameState.h"
#include "../entities/Player.h"
#include "../entities/Enemy.h"
#include "../entities/Bullet.h"
#include "../entities/PowerUp.h"
#include "../ui/HUD.h"
#include <vector>
#include <memory>

class PlayState : public GameState {
public:
    explicit PlayState(Game& game);

    void enter() override;
    void exit() override;
    void handleInput(float dt) override;
    void update(float dt) override;
    void render() override;

private:
    void startWave(int waveNum);
    void spawnEnemy();
    void triggerNukeBomb();
    void checkCollisions();
    void spawnRandomPowerUp(Vector2 pos);

    Player player;
    std::vector<std::unique_ptr<Enemy>> enemies;
    std::vector<std::unique_ptr<Bullet>> bullets;
    std::vector<std::unique_ptr<PowerUp>> powerups;
    HUD hud;

    // Wave & Progression
    int wave = 1;
    int enemiesToSpawn = 0;
    float spawnTimer = 0.0f;
    float spawnInterval = 1.2f;
    bool isWaveActive = false;
    float waveClearDelay = 0.0f;
    bool bossActive = false;

    // Score & Multipliers
    int score = 0;
    int combo = 1;
    int maxCombo = 1;
    float comboTimer = 0.0f;
    const float maxComboTimer = 3.5f;

    // Game Over delay
    float gameOverDelay = 0.0f;
    bool isPlayerDead = false;
};
