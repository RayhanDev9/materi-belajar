#pragma once

#include <raylib.h>
#include "../core/ResourceManager.h"
#include <string>
#include <vector>

class AudioSystem {
public:
    static AudioSystem& getInstance();

    AudioSystem(const AudioSystem&) = delete;
    AudioSystem& operator=(const AudioSystem&) = delete;

    void init();
    void update(float dt);
    void shutdown();

    void playSound(SoundID id, float volume = 1.0f, float pitch = 1.0f);
    void playSoundVaried(SoundID id, float volume = 1.0f, float pitchVariation = 0.15f);

    void setSfxVolume(float vol);
    float getSfxVolume() const { return sfxVolume; }

    void setMusicVolume(float vol);
    float getMusicVolume() const { return musicVolume; }

    void toggleMute();
    bool isMuted() const { return muted; }

    void startBGM();
    void stopBGM();
    void setBgmIntensity(float intensity); // 0.0 = chill menu, 1.0 = frantic battle, 2.0 = boss fight!

private:
    AudioSystem() = default;
    ~AudioSystem() = default;

    float sfxVolume = 0.8f;
    float musicVolume = 0.6f;
    bool muted = false;
    bool bgmPlaying = false;
    float bgmIntensity = 0.5f;

    // Procedural Synth Music Engine using AudioStream
    AudioStream synthStream;
    bool streamActive = false;
    float synthTime = 0.0f;
    int currentBeat = 0;
    float tempo = 128.0f; // BPM
    float beatTimer = 0.0f;

    // Synthesizer state
    float currentLeadFreq = 0.0f;
    float targetLeadFreq = 0.0f;
    float leadPhase = 0.0f;
    float bassPhase = 0.0f;
    float leadEnv = 0.0f;
    float bassEnv = 0.0f;
    float kickEnv = 0.0f;
    float snareEnv = 0.0f;
    float hihatEnv = 0.0f;

    void updateMusicSynth(float* buffer, int frames);
    static void audioInputCallback(void* buffer, unsigned int frames);
};
