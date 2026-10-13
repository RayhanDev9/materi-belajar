<template>
  <div class="noun-classifier">
    <div class="classifier-card">
      <div class="classifier-header">
        <span class="classifier-badge">⚖️ Uji Benda: Bisa Dihitung vs Tak Bisa Dihitung</span>
        <h4>Pilih Kata Benda untuk Melihat Sifat & Cara Menghitungnya:</h4>
      </div>

      <div class="items-grid">
        <button
          v-for="item in nounItems"
          :key="item.name"
          class="noun-pill"
          :class="{
            active: selectedNoun.name === item.name,
            'is-countable': item.type === 'countable',
            'is-uncountable': item.type === 'uncountable'
          }"
          @click="selectedNoun = item"
        >
          <span class="noun-emoji">{{ item.emoji }}</span>
          <span class="noun-name">{{ item.name }}</span>
        </button>
      </div>

      <!-- Result Card -->
      <div 
        class="result-detail" 
        :class="selectedNoun.type === 'countable' ? 'style-countable' : 'style-uncountable'"
      >
        <div class="result-top">
          <div class="result-status-tag">
            {{ selectedNoun.type === 'countable' ? '🟢 COUNTABLE (Bisa Dihitung)' : '🔵 UNCOUNTABLE (Tidak Bisa Dihitung)' }}
          </div>
          <div class="result-title">
            {{ selectedNoun.emoji }} {{ selectedNoun.name }} ({{ selectedNoun.meaning }})
          </div>
        </div>

        <div class="rules-explanation">
          <p><strong>Ciri & Sifat:</strong> {{ selectedNoun.rule }}</p>
          <div class="sample-box">
            <span class="sample-label">Cara Menggunakan / Menghitungnya:</span>
            <div class="sample-phrase">"{{ selectedNoun.howToCount }}"</div>
          </div>
        </div>

        <div class="result-actions">
          <AudioButton :text="selectedNoun.howToCount" label="Dengarkan Contoh" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AudioButton from '../AudioButton.vue';

const nounItems = [
  {
    name: 'Apple',
    meaning: 'Apel',
    emoji: '🍎',
    type: 'countable',
    rule: 'Bisa dihitung dengan jari. Jamak ditambah -s (two apples).',
    howToCount: 'I eat an apple. She has three apples.'
  },
  {
    name: 'Water',
    meaning: 'Air',
    emoji: '💧',
    type: 'uncountable',
    rule: 'Benda cair. Jangan pernah bilang "two waters"! Ukur dengan wadahnya.',
    howToCount: 'A glass of water. Two bottles of water.'
  },
  {
    name: 'Money',
    meaning: 'Uang',
    emoji: '💵',
    type: 'uncountable',
    rule: '⚠️ JEBAKAN POPULER: Kata "money" tidak bisa dihitung. Jangan bilang "many moneys"!',
    howToCount: 'How much money do you need? I have some money.'
  },
  {
    name: 'Book',
    meaning: 'Buku',
    emoji: '📖',
    type: 'countable',
    rule: 'Memiliki satuan jelas. Gunakan a/an saat satu, atau angka di depannya.',
    howToCount: 'A good book. I read five books.'
  },
  {
    name: 'Coffee',
    meaning: 'Kopi',
    emoji: '☕',
    type: 'uncountable',
    rule: 'Cairan. Untuk memesan, gunakan satuan cangkir (a cup of coffee).',
    howToCount: 'Would you like a cup of coffee?'
  },
  {
    name: 'Rice',
    meaning: 'Nasi / Beras',
    emoji: '🍚',
    type: 'uncountable',
    rule: 'Butiran halus tak terhingga. Ukur dengan mangkuk atau piring.',
    howToCount: 'A bowl of rice. I eat some rice.'
  },
  {
    name: 'Advice',
    meaning: 'Nasihat / Saran',
    emoji: '💡',
    type: 'uncountable',
    rule: 'Konsep abstrak. Jangan gunakan "an advice"! Gunakan "a piece of advice".',
    howToCount: 'Can you give me a piece of advice?'
  },
  {
    name: 'Chair',
    meaning: 'Kursi',
    emoji: '🪑',
    type: 'countable',
    rule: 'Benda padat terpisah. Gunakan How many untuk bertanya.',
    howToCount: 'There are four chairs in the room.'
  }
];

const selectedNoun = ref(nounItems[0]);
</script>

<style scoped>
.noun-classifier {
  margin-top: 1rem;
}

.classifier-card {
  background: var(--surface, #ffffff);
  border: 1.5px solid var(--border-color, #e2e8f0);
  border-radius: 1.25rem;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
}

.classifier-badge {
  font-size: 0.72rem;
  font-weight: 700;
  background: #fef3c7;
  color: #b45309;
  padding: 0.2rem 0.6rem;
  border-radius: 9999px;
  display: inline-block;
  margin-bottom: 0.35rem;
}

.classifier-header h4 {
  font-size: 1.05rem;
  color: var(--text-title, #0f172a);
  margin-bottom: 1.25rem;
}

.items-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}

.noun-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  background: var(--surface-2, #f1f5f9);
  border: 1.5px solid var(--border-color, #e2e8f0);
  padding: 0.5rem 0.85rem;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  color: var(--text-body, #334155);
}

.noun-pill:hover {
  transform: translateY(-2px);
  border-color: var(--primary, #4f46e5);
}

.noun-pill.active {
  background: var(--primary, #4f46e5);
  color: white;
  border-color: var(--primary, #4f46e5);
}

.result-detail {
  border-radius: 1rem;
  padding: 1.25rem 1.5rem;
  border: 1.5px solid;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: all 0.3s ease;
}

.style-countable {
  background: #ecfdf5;
  border-color: #a7f3d0;
}

.style-uncountable {
  background: #eff6ff;
  border-color: #bfdbfe;
}

.result-status-tag {
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.5px;
  margin-bottom: 0.25rem;
}

.style-countable .result-status-tag { color: #047857; }
.style-uncountable .result-status-tag { color: #1d4ed8; }

.result-title {
  font-family: 'Outfit', sans-serif;
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--text-title, #0f172a);
}

.rules-explanation p {
  font-size: 0.92rem;
  color: var(--text-body, #334155);
  line-height: 1.45;
  margin-bottom: 0.6rem;
}

.sample-box {
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.08);
  padding: 0.85rem;
  border-radius: 0.6rem;
}

.sample-label {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--text-muted, #64748b);
  display: block;
}

.sample-phrase {
  font-family: 'Outfit', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-title, #0f172a);
  margin-top: 0.2rem;
}
</style>
