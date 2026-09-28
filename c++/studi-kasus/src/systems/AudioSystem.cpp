#include "AudioSystem.h"
#include <cmath>
#include <cstdlib>
#include <algorithm>
#include <iostream>

AudioSystem& AudioSystem::getInstance() {
    static AudioSystem instance;
    return instance;
}

void AudioSystem::audioInputCallback(void* buffer, unsigned int frames) {
    AudioSystem::getInstance().updateMusicSynth((float*)buffer, (int)frames);
}

void AudioSystem::init() {
    if (streamActive) return;

    SetAudioStreamBufferSizeDefault(4096);
    synthStream = LoadAudioStream(44100, 32, 1);
    SetAudioStreamCallback(synthStream, audioInputCallback);
    PlayAudioStream(synthStream);
    streamActive = true;
    bgmPlaying = true;
}

void AudioSystem::shutdown() {
    if (streamActive) {
        StopAudioStream(synthStream);
        UnloadAudioStream(synthStream);
        streamActive = false;
        bgmPlaying = false;
    }
}

void AudioSystem::update(float dt) {
    if (!streamActive || !bgmPlaying) return;

    float currentBPM = (bgmIntensity > 1.5f) ? 140.0f : ((bgmIntensity > 0.8f) ? 128.0f : 110.0f);
    float secondsPer16th = (60.0f / currentBPM) / 4.0f;

    beatTimer += dt;
    while (beatTimer >= secondsPer16th) {
        beatTimer -= secondsPer16th;
        currentBeat = (currentBeat + 1) % 64;

        int step = currentBeat % 16;
        int bar = (currentBeat / 16) % 4;

        // Cyberpunk Chords: Dm (D F A), Bb (Bb D F), F (F A C), C (C E G)
        float rootNotes[4] = { 146.83f, 116.54f, 174.61f, 130.81f }; // D3, Bb2, F3, C3
        float root = rootNotes[bar];

        // 16th-step Bass trigger
        if (step % 2 == 0 || step == 3 || step == 7 || step == 11 || step == 14) {
            bassEnv = 1.0f;
        }

        // Arp pattern
        float scaleOffsets[8] = { 0.0f, 3.0f, 7.0f, 12.0f, 15.0f, 19.0f, 12.0f, 7.0f }; // Minor arpeggio
        int noteIdx = step % 8;
        targetLeadFreq = root * 2.0f * powf(2.0f, scaleOffsets[noteIdx] / 12.0f);
        leadEnv = 1.0f;

        // Drums trigger
        if (bgmIntensity > 0.3f) {
            // Kick on 0, 4, 8, 12 (4-on-the-floor)
            if (step % 4 == 0) kickEnv = 1.0f;

            // Snare on 4, 12 (backbeat)
            if (step == 4 || step == 12) snareEnv = 1.0f;

            // Hihat on offbeats
            if (step % 2 == 1 || (bgmIntensity > 1.0f && step % 1 == 0)) hihatEnv = 1.0f;
        }
    }
}

void AudioSystem::updateMusicSynth(float* buffer, int frames) {
    if (muted || !bgmPlaying || musicVolume <= 0.001f) {
        std::fill(buffer, buffer + frames, 0.0f);
        return;
    }

    float sampleRate = 44100.0f;
    float dt = 1.0f / sampleRate;

    for (int i = 0; i < frames; ++i) {
        synthTime += dt;

        // Portamento for lead synth
        currentLeadFreq += (targetLeadFreq - currentLeadFreq) * 0.005f;
        leadPhase += 2.0f * PI * currentLeadFreq * dt;
        if (leadPhase > 2.0f * PI) leadPhase -= 2.0f * PI;

        // Lead waveform: Sawtooth + Square sub-oscillator
        float leadSaw = (leadPhase / PI) - 1.0f;
        float leadSquare = (leadPhase < PI) ? 0.6f : -0.6f;
        float leadSample = (leadSaw * 0.6f + leadSquare * 0.4f) * leadEnv * 0.18f;

        // Bass synth (Octave down Sawtooth)
        float currentBassFreq = targetLeadFreq * 0.25f;
        bassPhase += 2.0f * PI * currentBassFreq * dt;
        if (bassPhase > 2.0f * PI) bassPhase -= 2.0f * PI;
        float bassSaw = (bassPhase / PI) - 1.0f;
        float bassSample = bassSaw * bassEnv * 0.25f;

        // Kick Drum (Pitch drop sine wave)
        float kickPitch = 150.0f * kickEnv + 45.0f;
        float kickSample = sinf(synthTime * 2.0f * PI * kickPitch) * kickEnv * 0.45f;

        // Snare Drum (Noise + snappy sine)
        float noise = ((float)rand() / (float)RAND_MAX) * 2.0f - 1.0f;
        float snareTone = sinf(synthTime * 2.0f * PI * 200.0f) * 0.3f;
        float snareSample = (noise * 0.7f + snareTone) * snareEnv * 0.30f;

        // Hi-hat (Filtered high noise)
        float hihatSample = noise * hihatEnv * 0.12f;

        // Decay envelopes
        leadEnv *= (1.0f - dt * 6.0f);
        bassEnv *= (1.0f - dt * 8.0f);
        kickEnv *= (1.0f - dt * 16.0f);
        snareEnv *= (1.0f - dt * 12.0f);
        hihatEnv *= (1.0f - dt * 35.0f);

        // Mix all channels
        float totalMix = (leadSample + bassSample + kickSample + snareSample + hihatSample) * musicVolume * 0.7f;
        // Soft clipper / limiter
        totalMix = tanhf(totalMix);

        buffer[i] = totalMix;
    }
}

void AudioSystem::playSound(SoundID id, float volume, float pitch) {
    if (muted || sfxVolume <= 0.001f) return;

    Sound snd = ResourceManager::getInstance().getSound(id);
    if (snd.stream.buffer != nullptr) {
        SetSoundVolume(snd, std::clamp(volume * sfxVolume, 0.0f, 1.0f));
        SetSoundPitch(snd, std::clamp(pitch, 0.5f, 2.0f));
        PlaySound(snd);
    }
}

void AudioSystem::playSoundVaried(SoundID id, float volume, float pitchVariation) {
    float variation = ((float)rand() / (float)RAND_MAX - 0.5f) * 2.0f * pitchVariation;
    playSound(id, volume, 1.0f + variation);
}

void AudioSystem::setSfxVolume(float vol) {
    sfxVolume = std::clamp(vol, 0.0f, 1.0f);
}

void AudioSystem::setMusicVolume(float vol) {
    musicVolume = std::clamp(vol, 0.0f, 1.0f);
}

void AudioSystem::toggleMute() {
    muted = !muted;
}

void AudioSystem::startBGM() {
    bgmPlaying = true;
}

void AudioSystem::stopBGM() {
    bgmPlaying = false;
}

void AudioSystem::setBgmIntensity(float intensity) {
    bgmIntensity = intensity;
}
