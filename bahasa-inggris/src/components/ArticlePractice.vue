<template>
  <div class="article-lab">
    <div class="lab-card">
      <div class="lab-header">
        <span class="lab-badge">🧪 Laboratorium Bunyi</span>
        <h4>Pilih Kata & Uji Apakah Pakai "A" atau "An":</h4>
      </div>

      <div class="words-pill-list">
        <button 
          v-for="item in testWords" 
          :key="item.word"
          class="word-pill"
          :class="{ active: selectedWord.word === item.word }"
          @click="selectedWord = item"
        >
          {{ item.word }}
        </button>
      </div>

      <!-- Result Banner -->
      <div class="lab-result" :class="{ 'is-an': selectedWord.article === 'An' }">
        <div class="article-display">
          <span class="article-tag">{{ selectedWord.article }}</span>
          <span class="target-word">{{ selectedWord.word }}</span>
        </div>
        <div class="reason-text">
          <strong>Alasan:</strong> {{ selectedWord.reason }}
        </div>
        <div class="lab-actions">
          <AudioButton :text="`${selectedWord.article} ${selectedWord.word}`" label="Dengarkan Pelafalannya" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AudioButton from './AudioButton.vue';

const testWords = [
  { word: 'apple', article: 'An', reason: 'Berbunyi huruf vokal "e" (an apple).' },
  { word: 'car', article: 'A', reason: 'Berbunyi huruf konsonan "k" (a car).' },
  { word: 'hour (jam)', article: 'An', reason: '⚠️ JEBAKAN: Huruf "H" tidak dibaca! Bunyinya "our" (vokal), maka wajib pakai AN HOUR.' },
  { word: 'university', article: 'A', reason: '⚠️ JEBAKAN: Huruf awal berbunyi "yu-ni-ver-si-ti" (konsonan Y), maka memakai A UNIVERSITY.' },
  { word: 'umbrella', article: 'An', reason: 'Berbunyi huruf vokal "a" (an umbrella).' },
  { word: 'honest person', article: 'An', reason: '⚠️ JEBAKAN: Huruf "H" tidak dibaca (bunyi "onest"), maka memakai AN HONEST PERSON.' },
  { word: 'house', article: 'A', reason: 'Huruf "H" di sini dibaca jelas seperti "H" (a house).' },
  { word: 'doctor', article: 'A', reason: 'Berbunyi konsonan "d" (a doctor).' }
];

const selectedWord = ref(testWords[0]);
</script>

<style scoped>
.article-lab {
  margin-top: 1rem;
}

.lab-card {
  background: var(--surface, #ffffff);
  border: 1.5px solid var(--border-color, #e2e8f0);
  border-radius: 1.25rem;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
}

.lab-header {
  margin-bottom: 1rem;
}

.lab-badge {
  font-size: 0.72rem;
  font-weight: 700;
  background: #fdf2f8;
  color: #db2777;
  padding: 0.2rem 0.6rem;
  border-radius: 9999px;
  display: inline-block;
  margin-bottom: 0.35rem;
}

.lab-header h4 {
  font-size: 1.05rem;
  color: var(--text-title, #0f172a);
}

.words-pill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}

.word-pill {
  background: var(--surface-2, #f1f5f9);
  border: 1px solid var(--border-color, #e2e8f0);
  padding: 0.45rem 0.85rem;
  border-radius: 9999px;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  color: var(--text-body, #334155);
}

.word-pill:hover {
  background: var(--surface, #ffffff);
  border-color: var(--primary, #4f46e5);
}

.word-pill.active {
  background: var(--primary, #4f46e5);
  color: white;
  border-color: var(--primary, #4f46e5);
}

.lab-result {
  background: #eff6ff;
  border: 1.5px solid #bfdbfe;
  border-radius: 1rem;
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: all 0.3s ease;
}

.lab-result.is-an {
  background: #fdf2f8;
  border-color: #fbcfe8;
}

.article-display {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.article-tag {
  font-family: 'Outfit', sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  background: #2563eb;
  color: white;
  padding: 0.2rem 0.8rem;
  border-radius: 0.5rem;
}

.lab-result.is-an .article-tag {
  background: #db2777;
}

.target-word {
  font-family: 'Outfit', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-title, #0f172a);
}

.reason-text {
  font-size: 0.92rem;
  color: var(--text-body, #334155);
  line-height: 1.45;
}
</style>
