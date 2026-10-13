<template>
  <div class="relative-lab">
    <div class="lab-card">
      <div class="lab-heading">
        <span class="lab-badge">🔗 Laboratorium Penggabung Kalimat</span>
        <h4>Pilih Relative Pronoun untuk Menggabungkan 2 Kalimat:</h4>
      </div>

      <div class="connector-tabs">
        <button
          v-for="item in relativeCases"
          :key="item.key"
          class="connector-btn"
          :class="{ active: selectedCase.key === item.key }"
          @click="selectedCase = item"
        >
          <strong>{{ item.word }}</strong> ({{ item.target }})
        </button>
      </div>

      <!-- Before and After -->
      <div class="transformation-view">
        <div class="before-box">
          <span class="box-tag">2 Kalimat Terpisah (Kaku):</span>
          <div class="sentence-part">1️⃣ "{{ selectedCase.sent1 }}"</div>
          <div class="sentence-part">2️⃣ "{{ selectedCase.sent2 }}"</div>
        </div>

        <div class="connector-arrow">
          <span>Digabung dengan <strong>{{ selectedCase.word }}</strong> ⬇️</span>
        </div>

        <div class="after-box">
          <span class="box-tag success">Kalimat Alami & Lancar:</span>
          <div class="combined-sentence">
            "{{ selectedCase.prefix }} <span class="highlight-connector">{{ selectedCase.word }}</span> {{ selectedCase.suffix }}"
          </div>
          <div class="combined-meaning">
            Artinya: <em>"{{ selectedCase.meaning }}"</em>
          </div>
          <div class="action-row">
            <AudioButton :text="selectedCase.fullCombined" label="Dengarkan Kalimat" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AudioButton from '../AudioButton.vue';

const relativeCases = [
  {
    key: 'who',
    word: 'WHO',
    target: 'Untuk Manusia',
    sent1: 'I met a doctor.',
    sent2: 'The doctor lives next door.',
    prefix: 'I met a doctor',
    suffix: 'lives next door.',
    fullCombined: 'I met a doctor who lives next door.',
    meaning: 'Saya bertemu seorang dokter yang tinggal di sebelah rumah.'
  },
  {
    key: 'which',
    word: 'WHICH',
    target: 'Untuk Benda / Hewan',
    sent1: 'I bought a laptop.',
    sent2: 'The laptop is very fast.',
    prefix: 'I bought a laptop',
    suffix: 'is very fast.',
    fullCombined: 'I bought a laptop which is very fast.',
    meaning: 'Saya membeli sebuah laptop yang sangat cepat.'
  },
  {
    key: 'that',
    word: 'THAT',
    target: 'Serbaguna (Santai)',
    sent1: 'She recommended a movie.',
    sent2: 'The movie was amazing.',
    prefix: 'She recommended a movie',
    suffix: 'was amazing.',
    fullCombined: 'She recommended a movie that was amazing.',
    meaning: 'Dia merekomendasikan sebuah film yang luar biasa.'
  },
  {
    key: 'whose',
    word: 'WHOSE',
    target: 'Kepemilikan (Yang ...-nya)',
    sent1: 'I have a friend.',
    sent2: 'His father is a pilot.',
    prefix: 'I have a friend',
    suffix: 'father is a pilot.',
    fullCombined: 'I have a friend whose father is a pilot.',
    meaning: 'Saya punya teman yang ayahnya adalah seorang pilot.'
  }
];

const selectedCase = ref(relativeCases[0]);
</script>

<style scoped>
.relative-lab {
  margin-top: 1rem;
}

.lab-card {
  background: var(--surface, #ffffff);
  border: 1.5px solid var(--border-color, #e2e8f0);
  border-radius: 1.25rem;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
}

.lab-badge {
  font-size: 0.72rem;
  font-weight: 700;
  background: #eff6ff;
  color: #2563eb;
  padding: 0.2rem 0.6rem;
  border-radius: 9999px;
  display: inline-block;
  margin-bottom: 0.35rem;
}

.lab-heading h4 {
  font-size: 1.05rem;
  color: var(--text-title, #0f172a);
  margin-bottom: 1.25rem;
}

.connector-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}

.connector-btn {
  background: var(--surface-2, #f1f5f9);
  border: 1px solid var(--border-color, #e2e8f0);
  padding: 0.45rem 0.9rem;
  border-radius: 9999px;
  font-size: 0.85rem;
  cursor: pointer;
  color: var(--text-body, #334155);
  transition: all 0.2s;
}

.connector-btn:hover {
  background: var(--surface, #ffffff);
  border-color: var(--primary, #4f46e5);
}

.connector-btn.active {
  background: var(--primary, #4f46e5);
  color: white;
  border-color: var(--primary, #4f46e5);
}

.transformation-view {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.before-box {
  background: var(--surface-2, #f8fafc);
  border: 1px solid var(--border-color, #e2e8f0);
  border-radius: 0.75rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.box-tag {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--text-muted, #64748b);
  margin-bottom: 0.25rem;
}

.sentence-part {
  font-size: 0.95rem;
  color: var(--text-body, #334155);
}

.connector-arrow {
  text-align: center;
  font-size: 0.85rem;
  color: var(--primary, #4f46e5);
  font-weight: 700;
}

.after-box {
  background: #ecfdf5;
  border: 1.5px solid #a7f3d0;
  border-radius: 0.85rem;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.box-tag.success {
  color: #059669;
}

.combined-sentence {
  font-family: 'Outfit', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #065f46;
}

.highlight-connector {
  background: #10b981;
  color: white;
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
}

.combined-meaning {
  font-size: 0.9rem;
  color: #047857;
}

.action-row {
  margin-top: 0.5rem;
}
</style>
