<template>
  <button 
    class="audio-btn" 
    :class="{ 'is-playing': isPlaying, 'mini': mini }" 
    @click.stop="handlePlay" 
    :title="`Dengarkan pelafalan: ${text}`"
    type="button"
  >
    <span class="icon">
      <svg v-if="!isPlaying" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
      </svg>
      <span v-else class="sound-wave">
        <span></span><span></span><span></span>
      </span>
    </span>
    <span v-if="label" class="label-text">{{ label }}</span>
  </button>
</template>

<script setup>
import { ref } from 'vue';
import { speakText } from '../utils/speech.js';

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: ''
  },
  mini: {
    type: Boolean,
    default: false
  },
  rate: {
    type: Number,
    default: 0.9
  }
});

const isPlaying = ref(false);

function handlePlay() {
  if (isPlaying.value) return;
  isPlaying.value = true;
  speakText(
    props.text,
    () => { isPlaying.value = true; },
    () => { isPlaying.value = false; },
    props.rate
  );
}
</script>

<style scoped>
.audio-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  background: var(--accent-light, #eef2ff);
  color: var(--primary, #4f46e5);
  border: 1px solid var(--border-color, #c7d2fe);
  border-radius: 9999px;
  padding: 0.35rem 0.75rem;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
}

.audio-btn:hover {
  background: var(--primary, #4f46e5);
  color: #ffffff;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.25);
}

.audio-btn:active {
  transform: translateY(0);
}

.audio-btn.mini {
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
}

.audio-btn.is-playing {
  background: var(--primary, #4f46e5);
  color: #ffffff;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.3);
}

.sound-wave {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  height: 14px;
}

.sound-wave span {
  display: inline-block;
  width: 2.5px;
  background-color: currentColor;
  border-radius: 2px;
  animation: wave 0.8s ease-in-out infinite;
}

.sound-wave span:nth-child(1) { height: 8px; animation-delay: 0.1s; }
.sound-wave span:nth-child(2) { height: 14px; animation-delay: 0.2s; }
.sound-wave span:nth-child(3) { height: 10px; animation-delay: 0.3s; }

@keyframes wave {
  0%, 100% { transform: scaleY(0.4); }
  50% { transform: scaleY(1); }
}
</style>
