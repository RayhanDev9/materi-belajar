#pragma once

#include <raylib.h>
#include <string>
#include <unordered_map>
#include <vector>
#include <memory>

enum class TextureID {
    PLAYER,
    ENEMY_SCOUT,
    ENEMY_CRUISER,
    ENEMY_KAMIKAZE,
    ENEMY_ASTEROID_LARGE,
    ENEMY_ASTEROID_MED,
    ENEMY_ASTEROID_SMALL,
    BOSS_DREADNOUGHT,
    BULLET_PLAYER,
    BULLET_PLAYER_PLASMA,
    BULLET_ENEMY,
    BULLET_MISSILE,
    POWERUP_SHIELD,
    POWERUP_WEAPON,
    POWERUP_HEALTH,
    POWERUP_BOMB,
    POWERUP_SPEED,
    PARTICLE_GLOW,
    ICON_HEART,
    ICON_SHIELD,
    ICON_BOMB,
    BACKGROUND_STARS
};

enum class SoundID {
    LASER_PLAYER,
    LASER_PLASMA,
    LASER_ENEMY,
    MISSILE_FIRE,
    EXPLOSION_SMALL,
    EXPLOSION_LARGE,
    EXPLOSION_BOSS,
    HIT_SHIELD,
    HIT_HULL,
    POWERUP_PICKUP,
    BOMB_DETONATE,
    GAME_OVER,
    WAVE_START,
    BUTTON_HOVER,
    BUTTON_CLICK,
    LEVEL_UP
};

class ResourceManager {
public:
    static ResourceManager& getInstance();

    ResourceManager(const ResourceManager&) = delete;
    ResourceManager& operator=(const ResourceManager&) = delete;

    void init();
    void unload();

    Texture2D getTexture(TextureID id);
    Sound getSound(SoundID id);
    Font getFont() const;

    // Load custom asset overrides if file exists on disk
    bool loadCustomTexture(TextureID id, const std::string& filePath);
    bool loadCustomSound(SoundID id, const std::string& filePath);

private:
    ResourceManager() = default;
    ~ResourceManager() = default;

    void generateProceduralTextures();
    void generateProceduralSounds();

    std::unordered_map<TextureID, Texture2D> textures;
    std::unordered_map<SoundID, Sound> sounds;
    Font customFont;
    bool isInitialized = false;

    // Helper procedural texture builders
    Texture2D createPlayerTexture(int w, int h);
    Texture2D createScoutTexture(int w, int h);
    Texture2D createCruiserTexture(int w, int h);
    Texture2D createKamikazeTexture(int w, int h);
    Texture2D createAsteroidTexture(int radius, unsigned int seed);
    Texture2D createBossTexture(int w, int h);
    Texture2D createBulletTexture(int w, int h, Color coreColor, Color glowColor);
    Texture2D createMissileTexture(int w, int h);
    Texture2D createPowerUpTexture(int size, Color ringColor, const char* symbol);
    Texture2D createGlowParticleTexture(int size, Color color);
    Texture2D createHeartIcon(int size);
    Texture2D createShieldIcon(int size);
    Texture2D createBombIcon(int size);

    // Helper procedural synth sound builders
    Sound createLaserSound(float freqStart, float freqEnd, float duration);
    Sound createExplosionSound(float duration, float lowpass);
    Sound createChimeSound(const std::vector<float>& notes, float noteDuration);
    Sound createNoiseHitSound(float duration);
    Sound createClickSound(float freq, float duration);
};
