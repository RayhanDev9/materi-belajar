#include "ResourceManager.h"
#include <cmath>
#include <cstdlib>
#include <iostream>

ResourceManager& ResourceManager::getInstance() {
    static ResourceManager instance;
    return instance;
}

void ResourceManager::init() {
    if (isInitialized) return;

    // Set font to default
    customFont = GetFontDefault();

    generateProceduralTextures();
    generateProceduralSounds();

    isInitialized = true;
}

void ResourceManager::unload() {
    if (!isInitialized) return;

    for (auto& pair : textures) {
        UnloadTexture(pair.second);
    }
    textures.clear();

    for (auto& pair : sounds) {
        UnloadSound(pair.second);
    }
    sounds.clear();

    isInitialized = false;
}

Texture2D ResourceManager::getTexture(TextureID id) {
    auto it = textures.find(id);
    if (it != textures.end()) {
        return it->second;
    }
    return Texture2D{};
}

Sound ResourceManager::getSound(SoundID id) {
    auto it = sounds.find(id);
    if (it != sounds.end()) {
        return it->second;
    }
    return Sound{};
}

Font ResourceManager::getFont() const {
    return customFont;
}

bool ResourceManager::loadCustomTexture(TextureID id, const std::string& filePath) {
    if (FileExists(filePath.c_str())) {
        Texture2D tex = LoadTexture(filePath.c_str());
        if (tex.id != 0) {
            auto it = textures.find(id);
            if (it != textures.end()) {
                UnloadTexture(it->second);
            }
            textures[id] = tex;
            return true;
        }
    }
    return false;
}

bool ResourceManager::loadCustomSound(SoundID id, const std::string& filePath) {
    if (FileExists(filePath.c_str())) {
        Sound snd = LoadSound(filePath.c_str());
        if (snd.stream.buffer != nullptr) {
            auto it = sounds.find(id);
            if (it != sounds.end()) {
                UnloadSound(it->second);
            }
            sounds[id] = snd;
            return true;
        }
    }
    return false;
}

// -------------------------------------------------------------
// Procedural Textures
// -------------------------------------------------------------
void ResourceManager::generateProceduralTextures() {
    textures[TextureID::PLAYER] = createPlayerTexture(48, 48);
    textures[TextureID::ENEMY_SCOUT] = createScoutTexture(36, 36);
    textures[TextureID::ENEMY_CRUISER] = createCruiserTexture(54, 54);
    textures[TextureID::ENEMY_KAMIKAZE] = createKamikazeTexture(32, 32);
    textures[TextureID::ENEMY_ASTEROID_LARGE] = createAsteroidTexture(32, 1337);
    textures[TextureID::ENEMY_ASTEROID_MED] = createAsteroidTexture(22, 4242);
    textures[TextureID::ENEMY_ASTEROID_SMALL] = createAsteroidTexture(14, 9999);
    textures[TextureID::BOSS_DREADNOUGHT] = createBossTexture(120, 100);

    textures[TextureID::BULLET_PLAYER] = createBulletTexture(8, 20, Color{0, 240, 255, 255}, Color{0, 120, 255, 180});
    textures[TextureID::BULLET_PLAYER_PLASMA] = createBulletTexture(14, 28, Color{120, 255, 120, 255}, Color{0, 255, 100, 180});
    textures[TextureID::BULLET_ENEMY] = createBulletTexture(8, 16, Color{255, 80, 80, 255}, Color{255, 0, 50, 180});
    textures[TextureID::BULLET_MISSILE] = createMissileTexture(12, 28);

    textures[TextureID::POWERUP_SHIELD] = createPowerUpTexture(32, Color{0, 200, 255, 255}, "S");
    textures[TextureID::POWERUP_WEAPON] = createPowerUpTexture(32, Color{255, 200, 0, 255}, "W");
    textures[TextureID::POWERUP_HEALTH] = createPowerUpTexture(32, Color{0, 255, 100, 255}, "+");
    textures[TextureID::POWERUP_BOMB] = createPowerUpTexture(32, Color{255, 80, 80, 255}, "B");
    textures[TextureID::POWERUP_SPEED] = createPowerUpTexture(32, Color{220, 100, 255, 255}, ">");

    textures[TextureID::PARTICLE_GLOW] = createGlowParticleTexture(32, Color{255, 255, 255, 255});
    textures[TextureID::ICON_HEART] = createHeartIcon(24);
    textures[TextureID::ICON_SHIELD] = createShieldIcon(24);
    textures[TextureID::ICON_BOMB] = createBombIcon(24);
}

Texture2D ResourceManager::createPlayerTexture(int w, int h) {
    Image img = GenImageColor(w, h, BLANK);

    // Sleek cyan/blue fighter jet shape
    Vector2 top = { (float)w / 2.0f, 2.0f };
    Vector2 leftWing = { 2.0f, (float)h - 6.0f };
    Vector2 rightWing = { (float)w - 2.0f, (float)h - 6.0f };

    // Main hull triangle
    ImageDrawTriangle(&img, top, leftWing, rightWing, Color{20, 130, 230, 255});
    ImageDrawTriangle(&img, top, Vector2{ (float)w * 0.25f, (float)h - 10.0f }, Vector2{ (float)w * 0.75f, (float)h - 10.0f }, Color{60, 190, 255, 255});

    // Cockpit glass
    ImageDrawTriangle(&img, Vector2{ (float)w / 2.0f, 10.0f }, Vector2{ (float)w / 2.0f - 5.0f, 24.0f }, Vector2{ (float)w / 2.0f + 5.0f, 24.0f }, Color{200, 245, 255, 255});

    // Wing cannons
    ImageDrawRectangle(&img, 4, h - 16, 4, 12, Color{100, 150, 200, 255});
    ImageDrawRectangle(&img, w - 8, h - 16, 4, 12, Color{100, 150, 200, 255});

    // Engine nozzles
    ImageDrawRectangle(&img, w / 2 - 8, h - 8, 5, 6, Color{50, 70, 100, 255});
    ImageDrawRectangle(&img, w / 2 + 3, h - 8, 5, 6, Color{50, 70, 100, 255});

    Texture2D tex = LoadTextureFromImage(img);
    UnloadImage(img);
    return tex;
}

Texture2D ResourceManager::createScoutTexture(int w, int h) {
    Image img = GenImageColor(w, h, BLANK);

    // Red sharp delta wing
    Vector2 top = { (float)w / 2.0f, (float)h - 2.0f }; // pointing downward
    Vector2 leftWing = { 2.0f, 4.0f };
    Vector2 rightWing = { (float)w - 2.0f, 4.0f };

    ImageDrawTriangle(&img, leftWing, top, rightWing, Color{230, 40, 40, 255});
    ImageDrawTriangle(&img, Vector2{ (float)w * 0.3f, 8.0f }, Vector2{ (float)w / 2.0f, (float)h - 8.0f }, Vector2{ (float)w * 0.7f, 8.0f }, Color{255, 110, 80, 255});
    ImageDrawCircle(&img, w / 2, h / 2 - 2, 4, Color{255, 230, 100, 255}); // Core eye

    Texture2D tex = LoadTextureFromImage(img);
    UnloadImage(img);
    return tex;
}

Texture2D ResourceManager::createCruiserTexture(int w, int h) {
    Image img = GenImageColor(w, h, BLANK);

    // Heavy purple/orange armored hull
    ImageDrawRectangle(&img, w / 4, 4, w / 2, h - 12, Color{130, 30, 160, 255});
    ImageDrawRectangle(&img, 4, 16, w - 8, 20, Color{170, 50, 200, 255});
    ImageDrawTriangle(&img, Vector2{ 2.0f, 26.0f }, Vector2{ (float)w / 2.0f, (float)h - 2.0f }, Vector2{ (float)w - 2.0f, 26.0f }, Color{200, 70, 70, 255});

    // Twin weapon bays
    ImageDrawRectangle(&img, 8, h - 22, 6, 16, Color{255, 160, 40, 255});
    ImageDrawRectangle(&img, w - 14, h - 22, 6, 16, Color{255, 160, 40, 255});
    ImageDrawCircle(&img, w / 2, h / 2 - 4, 7, Color{255, 220, 0, 255});

    Texture2D tex = LoadTextureFromImage(img);
    UnloadImage(img);
    return tex;
}

Texture2D ResourceManager::createKamikazeTexture(int w, int h) {
    Image img = GenImageColor(w, h, BLANK);

    // Yellow aggressive dart
    Vector2 bottom = { (float)w / 2.0f, (float)h - 2.0f };
    Vector2 left = { 4.0f, 2.0f };
    Vector2 right = { (float)w - 4.0f, 2.0f };

    ImageDrawTriangle(&img, left, bottom, right, Color{255, 190, 0, 255});
    ImageDrawTriangle(&img, Vector2{8.0f, 4.0f}, Vector2{(float)w/2.0f, (float)h - 6.0f}, Vector2{(float)w - 8.0f, 4.0f}, Color{255, 80, 0, 255});
    ImageDrawCircle(&img, w / 2, h / 2 - 2, 4, Color{255, 255, 200, 255});

    Texture2D tex = LoadTextureFromImage(img);
    UnloadImage(img);
    return tex;
}

Texture2D ResourceManager::createAsteroidTexture(int radius, unsigned int seed) {
    int size = radius * 2 + 8;
    Image img = GenImageColor(size, size, BLANK);
    Vector2 center = { (float)size / 2.0f, (float)size / 2.0f };

    srand(seed);
    int numPoints = 12;
    std::vector<Vector2> points;
    for (int i = 0; i < numPoints; ++i) {
        float angle = (float)i / (float)numPoints * 2.0f * PI;
        float r = (float)radius * (0.75f + 0.35f * ((float)rand() / (float)RAND_MAX));
        points.push_back(Vector2{ center.x + cosf(angle) * r, center.y + sinf(angle) * r });
    }

    // Fill polygon as triangles from center
    for (int i = 0; i < numPoints; ++i) {
        Vector2 p1 = points[i];
        Vector2 p2 = points[(i + 1) % numPoints];
        ImageDrawTriangle(&img, center, p1, p2, Color{110, 100, 95, 255});
    }

    // Add some crater highlights
    for (int i = 0; i < 4; ++i) {
        float crX = center.x + ((float)(rand() % (radius)) - radius * 0.5f) * 0.8f;
        float crY = center.y + ((float)(rand() % (radius)) - radius * 0.5f) * 0.8f;
        int crR = 2 + rand() % 3;
        ImageDrawCircle(&img, (int)crX, (int)crY, crR, Color{70, 65, 60, 255});
    }

    Texture2D tex = LoadTextureFromImage(img);
    UnloadImage(img);
    return tex;
}

Texture2D ResourceManager::createBossTexture(int w, int h) {
    Image img = GenImageColor(w, h, BLANK);

    // Massive Dreadnought Flagship
    // Center hull
    ImageDrawRectangle(&img, w / 4, 8, w / 2, h - 20, Color{80, 20, 40, 255});
    ImageDrawRectangle(&img, w / 4 + 8, 14, w / 2 - 16, h - 32, Color{140, 30, 60, 255});

    // Massive side wings
    ImageDrawTriangle(&img, Vector2{ 2.0f, 20.0f }, Vector2{ (float)w * 0.3f, (float)h - 10.0f }, Vector2{ (float)w * 0.3f, 20.0f }, Color{180, 40, 60, 255});
    ImageDrawTriangle(&img, Vector2{ (float)w - 2.0f, 20.0f }, Vector2{ (float)w * 0.7f, 20.0f }, Vector2{ (float)w * 0.7f, (float)h - 10.0f }, Color{180, 40, 60, 255});

    // Forward armor teeth
    ImageDrawTriangle(&img, Vector2{ (float)w * 0.35f, (float)h - 20.0f }, Vector2{ (float)w / 2.0f, (float)h - 2.0f }, Vector2{ (float)w * 0.65f, (float)h - 20.0f }, Color{220, 60, 60, 255});

    // Glowing energy core in center
    ImageDrawCircle(&img, w / 2, h / 2 - 4, 14, Color{255, 100, 0, 255});
    ImageDrawCircle(&img, w / 2, h / 2 - 4, 8, Color{255, 230, 100, 255});
    ImageDrawCircle(&img, w / 2, h / 2 - 4, 4, Color{255, 255, 255, 255});

    // Weapon turrets on wings
    ImageDrawCircle(&img, 18, 30, 7, Color{255, 50, 50, 255});
    ImageDrawCircle(&img, w - 18, 30, 7, Color{255, 50, 50, 255});
    ImageDrawRectangle(&img, 16, 30, 4, 14, Color{200, 200, 200, 255});
    ImageDrawRectangle(&img, w - 20, 30, 4, 14, Color{200, 200, 200, 255});

    Texture2D tex = LoadTextureFromImage(img);
    UnloadImage(img);
    return tex;
}

Texture2D ResourceManager::createBulletTexture(int w, int h, Color coreColor, Color glowColor) {
    Image img = GenImageColor(w, h, BLANK);

    // Glow pill shape
    ImageDrawRectangle(&img, 0, 0, w, h, glowColor);
    ImageDrawRectangle(&img, 1, 1, w - 2, h - 2, coreColor);
    ImageDrawRectangle(&img, 2, 3, w - 4, h - 6, Color{255, 255, 255, 230});

    Texture2D tex = LoadTextureFromImage(img);
    UnloadImage(img);
    return tex;
}

Texture2D ResourceManager::createMissileTexture(int w, int h) {
    Image img = GenImageColor(w, h, BLANK);

    // Missile body
    ImageDrawRectangle(&img, 3, 6, w - 6, h - 10, Color{220, 220, 230, 255});
    // Warhead nose
    ImageDrawTriangle(&img, Vector2{(float)w/2.0f, 1.0f}, Vector2{2.0f, 7.0f}, Vector2{(float)w - 2.0f, 7.0f}, Color{255, 40, 40, 255});
    // Fins
    ImageDrawTriangle(&img, Vector2{0.0f, (float)h - 2.0f}, Vector2{3.0f, (float)h - 8.0f}, Vector2{3.0f, (float)h - 2.0f}, Color{100, 100, 110, 255});
    ImageDrawTriangle(&img, Vector2{(float)w, (float)h - 2.0f}, Vector2{(float)w - 3.0f, (float)h - 2.0f}, Vector2{(float)w - 3.0f, (float)h - 8.0f}, Color{100, 100, 110, 255});

    Texture2D tex = LoadTextureFromImage(img);
    UnloadImage(img);
    return tex;
}

Texture2D ResourceManager::createPowerUpTexture(int size, Color ringColor, const char* symbol) {
    Image img = GenImageColor(size, size, BLANK);

    // Glowing outer ring and dark circle background
    ImageDrawCircle(&img, size / 2, size / 2, size / 2 - 1, ringColor);
    ImageDrawCircle(&img, size / 2, size / 2, size / 2 - 3, Color{20, 25, 40, 240});
    ImageDrawCircle(&img, size / 2, size / 2, size / 2 - 6, Color{ringColor.r, ringColor.g, ringColor.b, 60});

    // Draw text symbol in center
    ImageDrawText(&img, symbol, size / 2 - 4, size / 2 - 7, 14, WHITE);

    Texture2D tex = LoadTextureFromImage(img);
    UnloadImage(img);
    return tex;
}

Texture2D ResourceManager::createGlowParticleTexture(int size, Color color) {
    Image img = GenImageColor(size, size, BLANK);
    float center = (float)size / 2.0f;
    float maxRadius = (float)size / 2.0f;

    for (int y = 0; y < size; ++y) {
        for (int x = 0; x < size; ++x) {
            float dx = (float)x - center;
            float dy = (float)y - center;
            float dist = sqrtf(dx * dx + dy * dy);
            if (dist < maxRadius) {
                float factor = 1.0f - (dist / maxRadius);
                factor = factor * factor; // quadratic falloff
                unsigned char alpha = (unsigned char)(255.0f * factor);
                Color pixelColor = { color.r, color.g, color.b, alpha };
                ImageDrawPixel(&img, x, y, pixelColor);
            }
        }
    }

    Texture2D tex = LoadTextureFromImage(img);
    UnloadImage(img);
    return tex;
}

Texture2D ResourceManager::createHeartIcon(int size) {
    Image img = GenImageColor(size, size, BLANK);
    // Draw pixel heart
    ImageDrawCircle(&img, size / 3, size / 3, size / 4, Color{255, 50, 70, 255});
    ImageDrawCircle(&img, 2 * size / 3, size / 3, size / 4, Color{255, 50, 70, 255});
    ImageDrawTriangle(&img, Vector2{2.0f, (float)size * 0.38f}, Vector2{(float)size / 2.0f, (float)size - 2.0f}, Vector2{(float)size - 2.0f, (float)size * 0.38f}, Color{255, 50, 70, 255});

    Texture2D tex = LoadTextureFromImage(img);
    UnloadImage(img);
    return tex;
}

Texture2D ResourceManager::createShieldIcon(int size) {
    Image img = GenImageColor(size, size, BLANK);
    ImageDrawCircle(&img, size / 2, size / 2, size / 2 - 2, Color{0, 200, 255, 255});
    ImageDrawCircle(&img, size / 2, size / 2, size / 2 - 5, Color{20, 50, 80, 255});
    ImageDrawCircle(&img, size / 2, size / 2, size / 4, Color{100, 230, 255, 255});

    Texture2D tex = LoadTextureFromImage(img);
    UnloadImage(img);
    return tex;
}

Texture2D ResourceManager::createBombIcon(int size) {
    Image img = GenImageColor(size, size, BLANK);
    ImageDrawCircle(&img, size / 2, size / 2 + 2, size / 3, Color{255, 80, 40, 255});
    ImageDrawRectangle(&img, size / 2 - 2, 2, 4, 6, Color{160, 160, 160, 255});
    ImageDrawCircle(&img, size / 2 + 4, 3, 2, Color{255, 240, 0, 255});

    Texture2D tex = LoadTextureFromImage(img);
    UnloadImage(img);
    return tex;
}

// -------------------------------------------------------------
// Procedural Audio Synthesizer
// -------------------------------------------------------------
void ResourceManager::generateProceduralSounds() {
    sounds[SoundID::LASER_PLAYER] = createLaserSound(880.0f, 220.0f, 0.12f);
    sounds[SoundID::LASER_PLASMA] = createLaserSound(440.0f, 110.0f, 0.18f);
    sounds[SoundID::LASER_ENEMY] = createLaserSound(600.0f, 150.0f, 0.14f);
    sounds[SoundID::MISSILE_FIRE] = createLaserSound(300.0f, 800.0f, 0.22f);

    sounds[SoundID::EXPLOSION_SMALL] = createExplosionSound(0.25f, 0.7f);
    sounds[SoundID::EXPLOSION_LARGE] = createExplosionSound(0.55f, 0.4f);
    sounds[SoundID::EXPLOSION_BOSS] = createExplosionSound(1.2f, 0.25f);

    sounds[SoundID::HIT_SHIELD] = createNoiseHitSound(0.08f);
    sounds[SoundID::HIT_HULL] = createNoiseHitSound(0.12f);

    sounds[SoundID::POWERUP_PICKUP] = createChimeSound({523.25f, 659.25f, 783.99f, 1046.50f}, 0.06f); // C5, E5, G5, C6
    sounds[SoundID::BOMB_DETONATE] = createExplosionSound(0.9f, 0.15f);
    sounds[SoundID::GAME_OVER] = createChimeSound({440.0f, 370.0f, 311.0f, 220.0f}, 0.16f);
    sounds[SoundID::WAVE_START] = createChimeSound({392.0f, 523.25f, 659.25f}, 0.1f);
    sounds[SoundID::LEVEL_UP] = createChimeSound({440.0f, 554.37f, 659.25f, 880.0f}, 0.08f);

    sounds[SoundID::BUTTON_HOVER] = createClickSound(800.0f, 0.03f);
    sounds[SoundID::BUTTON_CLICK] = createClickSound(1200.0f, 0.05f);
}

Sound ResourceManager::createLaserSound(float freqStart, float freqEnd, float duration) {
    int sampleRate = 44100;
    int totalSamples = (int)(duration * sampleRate);
    short* data = (short*)RL_MALLOC(totalSamples * sizeof(short));

    float phase = 0.0f;
    for (int i = 0; i < totalSamples; ++i) {
        float t = (float)i / (float)totalSamples;
        float currentFreq = freqStart + (freqEnd - freqStart) * t;
        phase += 2.0f * PI * currentFreq / sampleRate;
        if (phase > 2.0f * PI) phase -= 2.0f * PI;

        // Waveform: Sine with slight square distortion
        float sample = sinf(phase);
        sample = (sample > 0.0f ? 1.0f : -1.0f) * 0.25f + sample * 0.75f;

        // Exponential decay envelope
        float envelope = (1.0f - t) * (1.0f - t);
        data[i] = (short)(sample * envelope * 24000.0f);
    }

    Wave wave = {
        (unsigned int)totalSamples,
        (unsigned int)sampleRate,
        16,
        1,
        data
    };

    Sound snd = LoadSoundFromWave(wave);
    UnloadWave(wave);
    return snd;
}

Sound ResourceManager::createExplosionSound(float duration, float lowpass) {
    int sampleRate = 44100;
    int totalSamples = (int)(duration * sampleRate);
    short* data = (short*)RL_MALLOC(totalSamples * sizeof(short));

    float lastOut = 0.0f;
    for (int i = 0; i < totalSamples; ++i) {
        float t = (float)i / (float)totalSamples;
        float whiteNoise = ((float)rand() / (float)RAND_MAX) * 2.0f - 1.0f;

        // Low-pass filter for deep rumbling explosion sound
        lastOut = lastOut + lowpass * (whiteNoise - lastOut);

        // Exponential decay
        float envelope = powf(1.0f - t, 2.5f);
        data[i] = (short)(lastOut * envelope * 28000.0f);
    }

    Wave wave = {
        (unsigned int)totalSamples,
        (unsigned int)sampleRate,
        16,
        1,
        data
    };

    Sound snd = LoadSoundFromWave(wave);
    UnloadWave(wave);
    return snd;
}

Sound ResourceManager::createChimeSound(const std::vector<float>& notes, float noteDuration) {
    int sampleRate = 44100;
    int noteSamples = (int)(noteDuration * sampleRate);
    int totalSamples = noteSamples * (int)notes.size();
    short* data = (short*)RL_MALLOC(totalSamples * sizeof(short));

    int sampleIdx = 0;
    for (float freq : notes) {
        float phase = 0.0f;
        for (int i = 0; i < noteSamples; ++i) {
            float t = (float)i / (float)noteSamples;
            phase += 2.0f * PI * freq / sampleRate;
            if (phase > 2.0f * PI) phase -= 2.0f * PI;

            // Sine chime with harmonic overtone
            float sample = sinf(phase) * 0.7f + sinf(phase * 2.0f) * 0.3f;
            float envelope = 1.0f - t;
            data[sampleIdx++] = (short)(sample * envelope * 20000.0f);
        }
    }

    Wave wave = {
        (unsigned int)totalSamples,
        (unsigned int)sampleRate,
        16,
        1,
        data
    };

    Sound snd = LoadSoundFromWave(wave);
    UnloadWave(wave);
    return snd;
}

Sound ResourceManager::createNoiseHitSound(float duration) {
    int sampleRate = 44100;
    int totalSamples = (int)(duration * sampleRate);
    short* data = (short*)RL_MALLOC(totalSamples * sizeof(short));

    for (int i = 0; i < totalSamples; ++i) {
        float t = (float)i / (float)totalSamples;
        float noise = ((float)rand() / (float)RAND_MAX) * 2.0f - 1.0f;
        float envelope = 1.0f - t;
        data[i] = (short)(noise * envelope * 18000.0f);
    }

    Wave wave = {
        (unsigned int)totalSamples,
        (unsigned int)sampleRate,
        16,
        1,
        data
    };

    Sound snd = LoadSoundFromWave(wave);
    UnloadWave(wave);
    return snd;
}

Sound ResourceManager::createClickSound(float freq, float duration) {
    int sampleRate = 44100;
    int totalSamples = (int)(duration * sampleRate);
    short* data = (short*)RL_MALLOC(totalSamples * sizeof(short));

    float phase = 0.0f;
    for (int i = 0; i < totalSamples; ++i) {
        float t = (float)i / (float)totalSamples;
        phase += 2.0f * PI * freq / sampleRate;
        if (phase > 2.0f * PI) phase -= 2.0f * PI;
        float sample = sinf(phase);
        float envelope = 1.0f - t;
        data[i] = (short)(sample * envelope * 15000.0f);
    }

    Wave wave = {
        (unsigned int)totalSamples,
        (unsigned int)sampleRate,
        16,
        1,
        data
    };

    Sound snd = LoadSoundFromWave(wave);
    UnloadWave(wave);
    return snd;
}
