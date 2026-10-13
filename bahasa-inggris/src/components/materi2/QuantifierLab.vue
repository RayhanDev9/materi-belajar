<template>
  <div class="quantifier-lab">
    <div class="lab-card">
      <div class="lab-heading">
        <span class="lab-badge">📊 Laboratorium Kuantitas Kata</span>
        <h4>Pilih Kata Penunjuk Jumlah untuk Melihat Aturan & Contohnya:</h4>
      </div>

      <div class="quantifier-selector">
        <button
          v-for="q in quantifiers"
          :key="q.word"
          class="q-btn"
          :class="{ active: selectedQ.word === q.word }"
          @click="selectedQ = q"
        >
          <strong>{{ q.word }}</strong>
          <span>{{ q.badge }}</span>
        </button>
      </div>

      <!-- Display Box -->
      <div class="q-detail-box">
        <div class="q-title-row">
          <span class="q-big-word">{{ selectedQ.word }}</span>
          <span class="q-type-pill">{{ selectedQ.usage }}</span>
        </div>

        <p class="q-explanation">
          <strong>Aturan Penggunaan:</strong> {{ selectedQ.rule }}
        </p>

        <div class="samples-list">
          <div v-for="(ex, i) in selectedQ.examples" :key="i" class="sample-item">
            <div class="sample-lines">
              <span class="sample-en">"{{ ex.en }}"</span>
              <span class="sample-id">Artinya: {{ ex.id }}</span>
            </div>
            <AudioButton :text="ex.en" :mini="true" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AudioButton from '../AudioButton.vue';

const quantifiers = [
  {
    word: 'SOME',
    badge: 'Kalimat (+)',
    usage: 'Beberapa / Sedikit (Positif)',
    rule: 'Hanya digunakan pada kalimat pernyataan POSITIF (+). Bisa untuk countable maupun uncountable.',
    examples: [
      { en: 'I have some friends here.', id: 'Saya punya beberapa teman di sini.' },
      { en: 'I need some water, please.', id: 'Saya butuh sedikit air.' },
      { en: 'Would you like some tea?', id: 'Maukah Anda secangkir teh? (Tawaran sopan)' }
    ]
  },
  {
    word: 'ANY',
    badge: 'Kalimat (-) & (?)',
    usage: 'Sama sekali / Sedikit pun (Negatif & Tanya)',
    rule: 'Digunakan saat kalimat memiliki kata NOT (don’t, isn’t) atau saat bertanya biasa.',
    examples: [
      { en: 'I don’t have any money.', id: 'Saya tidak punya uang sama sekali.' },
      { en: 'Do you have any questions?', id: 'Apakah Anda punya pertanyaan?' },
      { en: 'There aren’t any chairs left.', id: 'Tidak ada kursi tersisa sama sekali.' }
    ]
  },
  {
    word: 'MANY',
    badge: 'Bisa Dihitung',
    usage: 'Banyak (Khusus Countable Noun)',
    rule: 'Hanya untuk benda yang bisa dihitung dengan jari dan memiliki bentuk jamak -s.',
    examples: [
      { en: 'There are many cars on the street.', id: 'Ada banyak mobil di jalan.' },
      { en: 'How many books did you buy?', id: 'Berapa banyak buku yang kamu beli?' }
    ]
  },
  {
    word: 'MUCH',
    badge: 'Tak Bisa Dihitung',
    usage: 'Banyak (Khusus Uncountable Noun)',
    rule: 'Hanya untuk benda cair, butiran, waktu, dan uang. Paling sering dipakai pada kalimat tanya dan negatif.',
    examples: [
      { en: 'How much time do we have?', id: 'Berapa banyak waktu yang kita punya?' },
      { en: 'I don’t have much cash today.', id: 'Saya tidak punya banyak uang tunai hari ini.' }
    ]
  },
  {
    word: 'A LOT OF',
    badge: '⭐ Paling Aman',
    usage: 'Banyak (Serbaguna untuk Apa Saja!)',
    rule: 'Senjata rahasia pemula! Bisa dipakai untuk benda yang bisa dihitung MAUPUN yang tidak bisa dihitung.',
    examples: [
      { en: 'She has a lot of friends.', id: 'Dia punya banyak teman (Countable).' },
      { en: 'He drinks a lot of coffee.', id: 'Dia minum banyak kopi (Uncountable).' }
    ]
  }
];

const selectedQ = ref(quantifiers[0]);
</script>

<style scoped>
.quantifier-lab {
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
  background: #fef3c7;
  color: #b45309;
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

.quantifier-selector {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}

.q-btn {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: var(--surface-2, #f1f5f9);
  border: 1.5px solid var(--border-color, #e2e8f0);
  padding: 0.5rem 0.85rem;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;
  color: var(--text-body, #334155);
}

.q-btn strong {
  font-family: 'Outfit', sans-serif;
  font-size: 0.95rem;
}

.q-btn span {
  font-size: 0.68rem;
  color: var(--text-muted, #64748b);
}

.q-btn.active {
  background: var(--primary, #4f46e5);
  color: white;
  border-color: var(--primary, #4f46e5);
}

.q-btn.active span {
  color: #e0e7ff;
}

.q-detail-box {
  background: var(--surface-2, #f8fafc);
  border: 1.5px solid var(--border-color, #e2e8f0);
  border-radius: 1rem;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.q-title-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.q-big-word {
  font-family: 'Outfit', sans-serif;
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--primary, #4f46e5);
}

.q-type-pill {
  font-size: 0.8rem;
  font-weight: 700;
  background: #e0e7ff;
  color: #3730a3;
  padding: 0.2rem 0.6rem;
  border-radius: 9999px;
}

.q-explanation {
  font-size: 0.92rem;
  color: var(--text-body, #334155);
  line-height: 1.45;
}

.samples-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.25rem;
}

.sample-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  background: var(--surface, #ffffff);
  border: 1px solid var(--border-color, #e2e8f0);
  padding: 0.65rem 0.9rem;
  border-radius: 0.5rem;
}

.sample-lines {
  display: flex;
  flex-direction: column;
}

.sample-en {
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--text-title, #0f172a);
}

.sample-id {
  font-size: 0.78rem;
  color: var(--text-muted, #64748b);
}
</style>
