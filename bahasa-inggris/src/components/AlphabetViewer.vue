<template>
  <div class="alphabet-viewer">
    <div class="alphabet-header">
      <div class="filter-pills">
        <button 
          :class="{ active: filterMode === 'all' }" 
          @click="filterMode = 'all'"
        >Semua Huruf (26)</button>
        <button 
          :class="{ active: filterMode === 'vowels' }" 
          @click="filterMode = 'vowels'"
        >Huruf Vokal (A, E, I, O, U)</button>
        <button 
          :class="{ active: filterMode === 'consonants' }" 
          @click="filterMode = 'consonants'"
        >Huruf Konsonan</button>
      </div>

      <button class="random-play-btn" @click="playRandom">
        🎲 Uji Dengar Huruf Acak
      </button>
    </div>

    <!-- Active Letter Highlight Banner -->
    <div v-if="selectedLetter" class="spotlight-card">
      <div class="spotlight-letter">{{ selectedLetter.letter }}</div>
      <div class="spotlight-info">
        <div class="spotlight-phonetics">Cara baca: <strong>/{{ selectedLetter.phonetics }}/</strong></div>
        <div class="spotlight-example">
          Contoh kata: <span class="highlight">{{ selectedLetter.word }}</span> ({{ selectedLetter.meaning }})
        </div>
      </div>
      <div class="spotlight-actions">
        <AudioButton :text="selectedLetter.letter" label="Eja Huruf" />
        <AudioButton :text="`${selectedLetter.letter}. ${selectedLetter.word}`" label="Huruf & Kata" />
      </div>
    </div>

    <!-- Letters Grid -->
    <div class="letters-grid">
      <div 
        v-for="item in filteredLetters" 
        :key="item.letter"
        class="letter-card"
        :class="{ 
          'is-vowel': isVowel(item.letter),
          'is-active': selectedLetter?.letter === item.letter 
        }"
        @click="selectAndPlay(item)"
      >
        <div class="letter-badge">{{ isVowel(item.letter) ? 'Vokal' : 'Konsonan' }}</div>
        <div class="letter-char">{{ item.letter }}</div>
        <div class="phonetics">/{{ item.phonetics }}/</div>
        <div class="word-sample">
          <strong>{{ item.word }}</strong>
          <span>{{ item.meaning }}</span>
        </div>
        <div class="tap-hint">🔊 Klik dengar</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import AudioButton from './AudioButton.vue';
import { speakText } from '../utils/speech.js';

const props = defineProps({
  letters: {
    type: Array,
    required: true
  }
});

const filterMode = ref('all');
const selectedLetter = ref(props.letters[0] || null);

const vowels = ['A', 'E', 'I', 'O', 'U'];
function isVowel(char) {
  return vowels.includes(char.toUpperCase());
}

const filteredLetters = computed(() => {
  if (filterMode.value === 'vowels') {
    return props.letters.filter(item => isVowel(item.letter));
  }
  if (filterMode.value === 'consonants') {
    return props.letters.filter(item => !isVowel(item.letter));
  }
  return props.letters;
});

function selectAndPlay(item) {
  selectedLetter.value = item;
  speakText(item.letter);
}

function playRandom() {
  const randomIndex = Math.floor(Math.random() * props.letters.length);
  const randomItem = props.letters[randomIndex];
  selectedLetter.value = randomItem;
  speakText(`The letter is ${randomItem.letter}. Example: ${randomItem.word}.`);
}
</script>

<style scoped>
.alphabet-viewer {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;
}

.alphabet-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.filter-pills {
  display: flex;
  gap: 0.5rem;
  background: var(--surface-2, #f1f5f9);
  padding: 0.35rem;
  border-radius: 9999px;
}

.filter-pills button {
  border: none;
  background: transparent;
  padding: 0.4rem 0.9rem;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-muted, #64748b);
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-pills button.active {
  background: var(--surface, #ffffff);
  color: var(--primary, #4f46e5);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

.random-play-btn {
  background: linear-gradient(135deg, #ec4899, #8b5cf6);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(236, 72, 153, 0.3);
  transition: transform 0.2s ease;
}

.random-play-btn:hover {
  transform: scale(1.04);
}

.spotlight-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  color: white;
  padding: 1.25rem 1.75rem;
  border-radius: 1.25rem;
  box-shadow: 0 10px 25px -5px rgba(79, 70, 229, 0.4);
}

.spotlight-letter {
  font-size: 3.5rem;
  font-weight: 800;
  font-family: 'Outfit', sans-serif;
  line-height: 1;
  background: rgba(255, 255, 255, 0.2);
  width: 75px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
}

.spotlight-info {
  flex: 1;
}

.spotlight-phonetics {
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
}

.spotlight-example {
  font-size: 1rem;
  opacity: 0.95;
}

.spotlight-example .highlight {
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.spotlight-actions {
  display: flex;
  gap: 0.5rem;
}

.letters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 1rem;
}

.letter-card {
  position: relative;
  background: var(--surface, #ffffff);
  border: 1.5px solid var(--border-color, #e2e8f0);
  border-radius: 1rem;
  padding: 1rem 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.03);
}

.letter-card:hover {
  transform: translateY(-4px);
  border-color: var(--primary, #4f46e5);
  box-shadow: 0 8px 20px rgba(79, 70, 229, 0.15);
}

.letter-card.is-active {
  border-color: var(--primary, #4f46e5);
  background: var(--accent-light, #eef2ff);
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
}

.letter-card.is-vowel {
  border-color: #fbcfe8;
}

.letter-badge {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 0.15rem 0.4rem;
  border-radius: 9999px;
  background: var(--surface-2, #f1f5f9);
  color: var(--text-muted, #64748b);
}

.letter-card.is-vowel .letter-badge {
  background: #fce7f3;
  color: #db2777;
}

.letter-char {
  font-size: 2.2rem;
  font-weight: 800;
  font-family: 'Outfit', sans-serif;
  color: var(--text-title, #0f172a);
  margin-top: 0.5rem;
}

.letter-card.is-vowel .letter-char {
  color: #db2777;
}

.phonetics {
  font-family: 'Fira Code', monospace;
  font-size: 0.85rem;
  color: var(--primary, #4f46e5);
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.word-sample {
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  line-height: 1.25;
  color: var(--text-body, #334155);
}

.word-sample span {
  font-size: 0.72rem;
  color: var(--text-muted, #64748b);
}

.tap-hint {
  font-size: 0.68rem;
  color: var(--text-muted, #94a3b8);
  margin-top: 0.6rem;
}

@media (max-width: 640px) {
  .spotlight-card {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  .spotlight-actions {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
