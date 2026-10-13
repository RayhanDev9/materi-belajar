<template>
  <div class="demo-practice">
    <!-- Mode Switcher -->
    <div class="mode-bar">
      <span class="mode-label">Pilih Bentuk Kalimat:</span>
      <div class="mode-buttons">
        <button 
          :class="{ active: currentSentenceMode === 'positive' }" 
          @click="currentSentenceMode = 'positive'"
        >
          ➕ Kalimat Positif
        </button>
        <button 
          :class="{ active: currentSentenceMode === 'negative' }" 
          @click="currentSentenceMode = 'negative'"
        >
          ➖ Kalimat Negatif (NOT)
        </button>
        <button 
          :class="{ active: currentSentenceMode === 'question' }" 
          @click="currentSentenceMode = 'question'"
        >
          ❓ Kalimat Tanya (Inversion)
        </button>
      </div>
    </div>

    <!-- Interactive Simulator Cards -->
    <div class="matrix-grid">
      <!-- Card 1: There is/are -->
      <div class="matrix-card">
        <div class="card-badge">Menyatakan Keberadaan (Ada)</div>
        <div class="card-title">There Is / There Are</div>
        
        <div class="matrix-example-box">
          <div class="item-quantity-toggle">
            <button 
              :class="{ selected: thereCount === 1 }" 
              @click="thereCount = 1"
            >1 Apel (Tunggal)</button>
            <button 
              :class="{ selected: thereCount === 3 }" 
              @click="thereCount = 3"
            >3 Apel (Jamak)</button>
          </div>

          <div class="generated-sentence">
            <span class="en-text">{{ getThereSentence.en }}</span>
            <span class="id-text">Artinya: "{{ getThereSentence.id }}"</span>
          </div>

          <AudioButton :text="getThereSentence.en" label="Dengarkan" />
        </div>
      </div>

      <!-- Card 2: This / That -->
      <div class="matrix-card">
        <div class="card-badge">Menunjuk Jarak (Ini / Itu)</div>
        <div class="card-title">This / That</div>

        <div class="matrix-example-box">
          <div class="item-distance-toggle">
            <button 
              :class="{ selected: distance === 'near' }" 
              @click="distance = 'near'"
            >📍 Dekat (This / Ini)</button>
            <button 
              :class="{ selected: distance === 'far' }" 
              @click="distance = 'far'"
            >🔭 Jauh (That / Itu)</button>
          </div>

          <div class="generated-sentence">
            <span class="en-text">{{ getThisThatSentence.en }}</span>
            <span class="id-text">Artinya: "{{ getThisThatSentence.id }}"</span>
          </div>

          <AudioButton :text="getThisThatSentence.en" label="Dengarkan" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import AudioButton from './AudioButton.vue';

const props = defineProps({
  initialMode: {
    type: String,
    default: 'positive'
  }
});

const currentSentenceMode = ref(props.initialMode);
const thereCount = ref(1);
const distance = ref('near');

const getThereSentence = computed(() => {
  const isOne = thereCount.value === 1;

  if (currentSentenceMode.value === 'positive') {
    return isOne 
      ? { en: 'There is an apple on the table.', id: 'Ada sebuah apel di atas meja.' }
      : { en: 'There are three apples on the table.', id: 'Ada tiga apel di atas meja.' };
  }
  if (currentSentenceMode.value === 'negative') {
    return isOne 
      ? { en: 'There is not (isn’t) an apple on the table.', id: 'Tidak ada apel di atas meja.' }
      : { en: 'There are not (aren’t) any apples on the table.', id: 'Tidak ada apel-apel di atas meja.' };
  }
  // Question mode
  return isOne 
    ? { en: 'Is there an apple on the table? - Yes, there is.', id: 'Apakah ada sebuah apel di atas meja? - Ya, ada.' }
    : { en: 'Are there apples on the table? - Yes, there are.', id: 'Apakah ada apel-apel di atas meja? - Ya, ada.' };
});

const getThisThatSentence = computed(() => {
  const isNear = distance.value === 'near';
  const word = isNear ? 'This' : 'That';
  const idWord = isNear ? 'Ini' : 'Itu';

  if (currentSentenceMode.value === 'positive') {
    return {
      en: `${word} is my new phone.`,
      id: `${idWord} adalah handphone baru saya.`
    };
  }
  if (currentSentenceMode.value === 'negative') {
    return {
      en: `${word} is not (isn’t) my phone.`,
      id: `${idWord} bukan handphone saya.`
    };
  }
  // Question mode
  return {
    en: `Is ${word.toLowerCase()} your phone? - Yes, it is.`,
    id: `Apakah ${idWord.toLowerCase()} handphone Anda? - Ya, betul.`
  };
});
</script>

<style scoped>
.demo-practice {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 1rem;
}

.mode-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  background: var(--surface-2, #f1f5f9);
  padding: 0.65rem 1rem;
  border-radius: 0.75rem;
}

.mode-label {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--text-muted, #64748b);
}

.mode-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.mode-buttons button {
  background: var(--surface, #ffffff);
  border: 1px solid var(--border-color, #cbd5e1);
  padding: 0.4rem 0.85rem;
  border-radius: 9999px;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  color: var(--text-body, #334155);
  transition: all 0.2s;
}

.mode-buttons button.active {
  background: var(--primary, #4f46e5);
  color: white;
  border-color: var(--primary, #4f46e5);
  box-shadow: 0 2px 8px rgba(79, 70, 229, 0.25);
}

.matrix-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
}

.matrix-card {
  background: var(--surface, #ffffff);
  border: 1.5px solid var(--border-color, #e2e8f0);
  border-radius: 1rem;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
}

.card-badge {
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--primary, #4f46e5);
  background: var(--accent-light, #eef2ff);
  padding: 0.2rem 0.5rem;
  border-radius: 9999px;
  align-self: flex-start;
}

.card-title {
  font-family: 'Outfit', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-title, #0f172a);
}

.matrix-example-box {
  background: var(--surface-2, #f8fafc);
  border: 1px solid var(--border-color, #e2e8f0);
  border-radius: 0.75rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.item-quantity-toggle, .item-distance-toggle {
  display: flex;
  gap: 0.4rem;
}

.item-quantity-toggle button, .item-distance-toggle button {
  flex: 1;
  background: var(--surface, #ffffff);
  border: 1px solid var(--border-color, #cbd5e1);
  padding: 0.35rem 0.6rem;
  border-radius: 6px;
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  color: var(--text-body, #334155);
}

.item-quantity-toggle button.selected, .item-distance-toggle button.selected {
  background: #3b82f6;
  color: white;
  border-color: #3b82f6;
}

.generated-sentence {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.en-text {
  font-family: 'Outfit', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-title, #0f172a);
}

.id-text {
  font-size: 0.85rem;
  color: var(--text-muted, #64748b);
}
</style>
