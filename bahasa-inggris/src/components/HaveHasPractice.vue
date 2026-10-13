<template>
  <div class="have-has-practice">
    <div class="two-camps">
      <!-- Camp HAVE -->
      <div class="camp-card camp-have">
        <div class="camp-header">
          <span class="camp-title">Kubu Jamak & Utama: <strong>HAVE</strong></span>
          <span class="camp-subjects">I, You, We, They</span>
        </div>
        <div class="sample-sentences">
          <div v-for="item in haveSamples" :key="item.en" class="sentence-row">
            <div class="sentence-texts">
              <span class="en-line">{{ item.en }}</span>
              <span class="id-line">{{ item.id }}</span>
            </div>
            <AudioButton :text="item.en" :mini="true" />
          </div>
        </div>
      </div>

      <!-- Camp HAS -->
      <div class="camp-card camp-has">
        <div class="camp-header">
          <span class="camp-title">Kubu Tunggal: <strong>HAS</strong></span>
          <span class="camp-subjects">He, She, It (atau nama 1 orang)</span>
        </div>
        <div class="sample-sentences">
          <div v-for="item in hasSamples" :key="item.en" class="sentence-row">
            <div class="sentence-texts">
              <span class="en-line">{{ item.en }}</span>
              <span class="id-line">{{ item.id }}</span>
            </div>
            <AudioButton :text="item.en" :mini="true" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AudioButton from './AudioButton.vue';

const haveSamples = [
  { en: 'I have a new laptop.', id: 'Saya punya laptop baru.' },
  { en: 'You have a good idea.', id: 'Kamu punya ide bagus.' },
  { en: 'They have two cars.', id: 'Mereka punya dua mobil.' }
];

const hasSamples = [
  { en: 'He has a motorcycle.', id: 'Dia (pria) punya motor.' },
  { en: 'She has a lovely smile.', id: 'Dia (wanita) punya senyum ramah.' },
  { en: 'Budi has a big dog.', id: 'Budi punya anjing besar.' }
];
</script>

<style scoped>
.have-has-practice {
  margin-top: 1rem;
}

.two-camps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
}

.camp-card {
  background: var(--surface, #ffffff);
  border: 1.5px solid var(--border-color, #e2e8f0);
  border-radius: 1rem;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
}

.camp-have {
  border-top: 5px solid #3b82f6;
}

.camp-has {
  border-top: 5px solid #10b981;
}

.camp-title {
  font-family: 'Outfit', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  display: block;
}

.camp-subjects {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-muted, #64748b);
  background: var(--surface-2, #f1f5f9);
  padding: 0.15rem 0.5rem;
  border-radius: 9999px;
  display: inline-block;
  margin-top: 0.25rem;
}

.sample-sentences {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.sentence-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  background: var(--surface-2, #f8fafc);
  padding: 0.65rem 0.85rem;
  border-radius: 0.5rem;
}

.sentence-texts {
  display: flex;
  flex-direction: column;
}

.en-line {
  font-weight: 700;
  font-size: 0.92rem;
  color: var(--text-title, #0f172a);
}

.id-line {
  font-size: 0.78rem;
  color: var(--text-muted, #64748b);
}
</style>
