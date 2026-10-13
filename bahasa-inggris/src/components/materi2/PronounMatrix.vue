<template>
  <div class="pronoun-matrix">
    <div class="matrix-controls">
      <span class="ctrl-label">Pilih Aktor Utama:</span>
      <div class="actor-tabs">
        <button
          v-for="row in matrixRows"
          :key="row.subject"
          class="actor-tab-btn"
          :class="{ active: selectedRow.subject === row.subject }"
          @click="selectedRow = row"
        >
          {{ row.subject }} ({{ row.meaning }})
        </button>
      </div>
    </div>

    <!-- Active Actor Transformation Showcase -->
    <div class="showcase-card">
      <div class="showcase-header">
        <div class="actor-title">
          Perubahan Bentuk: <strong>{{ selectedRow.subject }}</strong>
        </div>
        <div class="actor-sub">Perhatikan bagaimana satu kata berubah sesuai fungsinya!</div>
      </div>

      <div class="cards-flow">
        <!-- 1. Subject -->
        <div class="role-box role-subject">
          <div class="role-badge">1. Subject (Pelaku)</div>
          <div class="role-word">{{ selectedRow.subject }}</div>
          <div class="role-sample">"{{ selectedRow.sampleSubject }}"</div>
          <AudioButton :text="selectedRow.sampleSubject" :mini="true" />
        </div>

        <div class="flow-arrow">➡️</div>

        <!-- 2. Object -->
        <div class="role-box role-object">
          <div class="role-badge">2. Object (Sasaran)</div>
          <div class="role-word">{{ selectedRow.object }}</div>
          <div class="role-sample">"{{ selectedRow.sampleObject }}"</div>
          <AudioButton :text="selectedRow.sampleObject" :mini="true" />
        </div>

        <div class="flow-arrow">➡️</div>

        <!-- 3. Possessive Adj -->
        <div class="role-box role-pos-adj">
          <div class="role-badge">3. Milik + Benda</div>
          <div class="role-word">{{ selectedRow.posAdj }} ...</div>
          <div class="role-sample">"{{ selectedRow.samplePosAdj }}"</div>
          <AudioButton :text="selectedRow.samplePosAdj" :mini="true" />
        </div>

        <div class="flow-arrow">➡️</div>

        <!-- 4. Possessive Pronoun -->
        <div class="role-box role-pos-pro">
          <div class="role-badge">4. Milik Mandiri</div>
          <div class="role-word">{{ selectedRow.posPro }}</div>
          <div class="role-sample">"{{ selectedRow.samplePosPro }}"</div>
          <AudioButton :text="selectedRow.samplePosPro" :mini="true" />
        </div>

        <div class="flow-arrow">➡️</div>

        <!-- 5. Reflexive -->
        <div class="role-box role-reflexive">
          <div class="role-badge">5. Diri Sendiri</div>
          <div class="role-word">{{ selectedRow.reflexive }}</div>
          <div class="role-sample">"{{ selectedRow.sampleReflexive }}"</div>
          <AudioButton :text="selectedRow.sampleReflexive" :mini="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AudioButton from '../AudioButton.vue';

const matrixRows = [
  {
    subject: 'I',
    meaning: 'Saya',
    object: 'me',
    posAdj: 'my',
    posPro: 'mine',
    reflexive: 'myself',
    sampleSubject: 'I learn English.',
    sampleObject: 'Call me tomorrow.',
    samplePosAdj: 'This is my car.',
    samplePosPro: 'The car is mine.',
    sampleReflexive: 'I made it myself.'
  },
  {
    subject: 'You',
    meaning: 'Kamu',
    object: 'you',
    posAdj: 'your',
    posPro: 'yours',
    reflexive: 'yourself',
    sampleSubject: 'You are kind.',
    sampleObject: 'I respect you.',
    samplePosAdj: 'Take your bag.',
    samplePosPro: 'The bag is yours.',
    sampleReflexive: 'Take care of yourself.'
  },
  {
    subject: 'We',
    meaning: 'Kita / Kami',
    object: 'us',
    posAdj: 'our',
    posPro: 'ours',
    reflexive: 'ourselves',
    sampleSubject: 'We play soccer.',
    sampleObject: 'Join us today.',
    samplePosAdj: 'This is our house.',
    samplePosPro: 'The house is ours.',
    sampleReflexive: 'We believe in ourselves.'
  },
  {
    subject: 'They',
    meaning: 'Mereka',
    object: 'them',
    posAdj: 'their',
    posPro: 'theirs',
    reflexive: 'themselves',
    sampleSubject: 'They work hard.',
    sampleObject: 'Listen to them.',
    samplePosAdj: 'Their school is big.',
    samplePosPro: 'The victory is theirs.',
    sampleReflexive: 'They solved it themselves.'
  },
  {
    subject: 'He',
    meaning: 'Dia (Pria)',
    object: 'him',
    posAdj: 'his',
    posPro: 'his',
    reflexive: 'himself',
    sampleSubject: 'He drives carefully.',
    sampleObject: 'I saw him.',
    samplePosAdj: 'This is his phone.',
    samplePosPro: 'The phone is his.',
    sampleReflexive: 'He cooks for himself.'
  },
  {
    subject: 'She',
    meaning: 'Dia (Wanita)',
    object: 'her',
    posAdj: 'her',
    posPro: 'hers',
    reflexive: 'herself',
    sampleSubject: 'She sings well.',
    sampleObject: 'Give her water.',
    samplePosAdj: 'Her dress is blue.',
    samplePosPro: 'The blue dress is hers.',
    sampleReflexive: 'She looks at herself.'
  },
  {
    subject: 'It',
    meaning: 'Benda/Hewan',
    object: 'it',
    posAdj: 'its',
    posPro: '-',
    reflexive: 'itself',
    sampleSubject: 'It runs fast.',
    sampleObject: 'I like it.',
    samplePosAdj: 'Its tail is long.',
    samplePosPro: 'Not commonly used',
    sampleReflexive: 'The door closes itself.'
  }
];

const selectedRow = ref(matrixRows[0]);
</script>

<style scoped>
.pronoun-matrix {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 1rem;
}

.matrix-controls {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.ctrl-label {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-muted, #64748b);
}

.actor-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.actor-tab-btn {
  background: var(--surface-2, #f1f5f9);
  border: 1px solid var(--border-color, #e2e8f0);
  border-radius: 9999px;
  padding: 0.45rem 0.9rem;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  color: var(--text-body, #334155);
  transition: all 0.2s;
}

.actor-tab-btn:hover {
  background: var(--surface, #ffffff);
  border-color: var(--primary, #4f46e5);
}

.actor-tab-btn.active {
  background: var(--primary, #4f46e5);
  color: white;
  border-color: var(--primary, #4f46e5);
  box-shadow: 0 4px 10px rgba(79, 70, 229, 0.25);
}

.showcase-card {
  background: var(--surface, #ffffff);
  border: 1.5px solid var(--border-color, #e2e8f0);
  border-radius: 1.25rem;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
}

.showcase-header {
  margin-bottom: 1.25rem;
}

.actor-title {
  font-family: 'Outfit', sans-serif;
  font-size: 1.25rem;
  color: var(--text-title, #0f172a);
}

.actor-title strong {
  color: var(--primary, #4f46e5);
}

.actor-sub {
  font-size: 0.85rem;
  color: var(--text-muted, #64748b);
}

.cards-flow {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.75rem;
  align-items: stretch;
}

.flow-arrow {
  display: none;
}

.role-box {
  border-radius: 0.85rem;
  padding: 1rem 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  border: 1.5px solid;
}

.role-badge {
  font-size: 0.68rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.role-word {
  font-family: 'Outfit', sans-serif;
  font-size: 1.6rem;
  font-weight: 800;
}

.role-sample {
  font-size: 0.82rem;
  font-style: italic;
  margin-top: auto;
  line-height: 1.3;
}

/* Colors for roles */
.role-subject {
  background: #eff6ff;
  border-color: #93c5fd;
  color: #1e40af;
}

.role-object {
  background: #fdf2f8;
  border-color: #f9a8d4;
  color: #9d174d;
}

.role-pos-adj {
  background: #f0fdf4;
  border-color: #86efac;
  color: #166534;
}

.role-pos-pro {
  background: #fffbeb;
  border-color: #fde68a;
  color: #92400e;
}

.role-reflexive {
  background: #f5f3ff;
  border-color: #c4b5fd;
  color: #5b21b6;
}
</style>
