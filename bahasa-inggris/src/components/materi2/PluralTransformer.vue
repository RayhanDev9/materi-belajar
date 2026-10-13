<template>
  <div class="plural-transformer">
    <div class="transformer-tabs">
      <button 
        :class="{ active: activeCategory === 'irregular' }" 
        @click="activeCategory = 'irregular'"
      >
        ⭐ Bentuk Berubah Unik (Irregular)
      </button>
      <button 
        :class="{ active: activeCategory === 'rules' }" 
        @click="activeCategory = 'rules'"
      >
        📐 Aturan Regular (-s, -es, -ies, -ves)
      </button>
    </div>

    <!-- Irregular Grid -->
    <div v-if="activeCategory === 'irregular'" class="cards-grid">
      <div v-for="item in irregularList" :key="item.singular" class="plural-card">
        <div class="card-pair">
          <div class="side-col singular-col">
            <span class="count-tag">1 (Tunggal)</span>
            <span class="word-text">{{ item.singular }}</span>
            <AudioButton :text="item.singular" :mini="true" />
          </div>
          <div class="arrow-between">➡️</div>
          <div class="side-col plural-col">
            <span class="count-tag plural">Banyak (Jamak)</span>
            <span class="word-text highlight">{{ item.plural }}</span>
            <AudioButton :text="item.plural" :mini="true" />
          </div>
        </div>
        <div class="meaning-note">
          Artinya: {{ item.meaning }} (<strong>BUKAN</strong> {{ item.wrong }})
        </div>
      </div>
    </div>

    <!-- Regular Rules Grid -->
    <div v-else class="cards-grid">
      <div v-for="item in regularRules" :key="item.rule" class="rule-detail-card">
        <div class="rule-name">{{ item.rule }}</div>
        <div class="rule-desc">{{ item.desc }}</div>
        <div class="example-chips">
          <div v-for="(ex, i) in item.examples" :key="i" class="chip">
            <span>{{ ex.s }} ➔ <strong>{{ ex.p }}</strong></span>
            <AudioButton :text="`${ex.s}, ${ex.p}`" :mini="true" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AudioButton from '../AudioButton.vue';

const activeCategory = ref('irregular');

const irregularList = [
  { singular: 'Child', plural: 'Children', meaning: 'Anak', wrong: 'Childs' },
  { singular: 'Person', plural: 'People', meaning: 'Orang', wrong: 'Persons' },
  { singular: 'Man', plural: 'Men', meaning: 'Pria', wrong: 'Mans' },
  { singular: 'Woman', plural: 'Women', meaning: 'Wanita', wrong: 'Womans' },
  { singular: 'Tooth', plural: 'Teeth', meaning: 'Gigi', wrong: 'Tooths' },
  { singular: 'Foot', plural: 'Feet', meaning: 'Kaki', wrong: 'Foots' },
  { singular: 'Mouse', plural: 'Mice', meaning: 'Tikus', wrong: 'Mouses' },
  { singular: 'Fish', plural: 'Fish', meaning: 'Ikan (Bentuk sama)', wrong: 'Fishes' }
];

const regularRules = [
  {
    rule: 'Akhiran Desis (-es)',
    desc: 'Jika kata berakhiran huruf s, sh, ch, x, z:',
    examples: [
      { s: 'Box', p: 'Boxes' },
      { s: 'Watch', p: 'Watches' },
      { s: 'Bus', p: 'Buses' }
    ]
  },
  {
    rule: 'Konsonan + Y (-ies)',
    desc: 'Huruf Y diganti dengan -ies:',
    examples: [
      { s: 'Baby', p: 'Babies' },
      { s: 'City', p: 'Cities' },
      { s: 'Party', p: 'Parties' }
    ]
  },
  {
    rule: 'Akhiran F / FE (-ves)',
    desc: 'Huruf F/FE berubah menjadi -ves:',
    examples: [
      { s: 'Leaf', p: 'Leaves' },
      { s: 'Knife', p: 'Knives' },
      { s: 'Life', p: 'Lives' }
    ]
  }
];
</script>

<style scoped>
.plural-transformer {
  margin-top: 1rem;
}

.transformer-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}

.transformer-tabs button {
  background: var(--surface-2, #f1f5f9);
  border: 1px solid var(--border-color, #e2e8f0);
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  color: var(--text-body, #334155);
  transition: all 0.2s;
}

.transformer-tabs button.active {
  background: var(--primary, #4f46e5);
  color: white;
  border-color: var(--primary, #4f46e5);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.25);
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;
}

.plural-card {
  background: var(--surface, #ffffff);
  border: 1.5px solid var(--border-color, #e2e8f0);
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
}

.card-pair {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.side-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
}

.count-tag {
  font-size: 0.68rem;
  font-weight: 700;
  background: #f1f5f9;
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
  color: #64748b;
}

.count-tag.plural {
  background: #fef3c7;
  color: #b45309;
}

.word-text {
  font-family: 'Outfit', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-title, #0f172a);
}

.word-text.highlight {
  color: var(--primary, #4f46e5);
}

.arrow-between {
  font-size: 1rem;
  color: #94a3b8;
}

.meaning-note {
  font-size: 0.78rem;
  color: var(--text-muted, #64748b);
  border-top: 1px solid var(--border-color, #f1f5f9);
  padding-top: 0.4rem;
  text-align: center;
}

.meaning-note strong {
  color: #dc2626;
}

.rule-detail-card {
  background: var(--surface, #ffffff);
  border: 1.5px solid var(--border-color, #e2e8f0);
  border-radius: 1rem;
  padding: 1rem;
}

.rule-name {
  font-family: 'Outfit', sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-title, #0f172a);
}

.rule-desc {
  font-size: 0.82rem;
  color: var(--text-muted, #64748b);
  margin-bottom: 0.75rem;
}

.example-chips {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.chip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--surface-2, #f8fafc);
  padding: 0.4rem 0.65rem;
  border-radius: 6px;
  font-size: 0.85rem;
}
</style>
