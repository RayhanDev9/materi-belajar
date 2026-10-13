<template>
  <div class="time-machine">
    <div class="machine-card">
      <div class="machine-heading">
        <span class="machine-badge">⏳ Mesin Waktu To-Be</span>
        <h4>Geser Waktu untuk Melihat Perubahan To-Be:</h4>
      </div>

      <!-- Time Switcher -->
      <div class="time-toggle-bar">
        <button 
          class="time-btn" 
          :class="{ active: currentTense === 'present' }" 
          @click="currentTense = 'present'"
        >
          ☀️ SEKARANG (Present: Am, Is, Are)
        </button>
        <button 
          class="time-btn past" 
          :class="{ active: currentTense === 'past' }" 
          @click="currentTense = 'past'"
        >
          🌙 MASA LALU (Past: Was, Were)
        </button>
      </div>

      <!-- Comparison Matrix -->
      <div class="sentences-timeline">
        <div 
          v-for="sub in subjectGroups" 
          :key="sub.subject" 
          class="timeline-row"
          :class="{ 'is-past': currentTense === 'past' }"
        >
          <div class="sub-col">
            <span class="sub-name">{{ sub.subject }}</span>
            <span class="sub-type">{{ sub.type }}</span>
          </div>

          <div class="tobe-bubble">
            {{ currentTense === 'present' ? sub.presentToBe : sub.pastToBe }}
          </div>

          <div class="sentence-col">
            <div class="en-line">
              "{{ currentTense === 'present' ? sub.presentSample : sub.pastSample }}"
            </div>
            <div class="id-line">
              Artinya: "{{ currentTense === 'present' ? sub.presentId : sub.pastId }}"
            </div>
          </div>

          <div class="audio-col">
            <AudioButton 
              :text="currentTense === 'present' ? sub.presentSample : sub.pastSample" 
              :mini="true" 
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AudioButton from '../AudioButton.vue';

const currentTense = ref('present');

const subjectGroups = [
  {
    subject: 'I (Saya)',
    type: 'Orang pertama',
    presentToBe: 'AM',
    pastToBe: 'WAS',
    presentSample: 'I am happy today.',
    presentId: 'Saya bahagia hari ini.',
    pastSample: 'I was happy yesterday.',
    pastId: 'Saya bahagia kemarin.'
  },
  {
    subject: 'He / She / It',
    type: 'Tunggal (1 orang/benda)',
    presentToBe: 'IS',
    pastToBe: 'WAS',
    presentSample: 'She is at home now.',
    presentId: 'Dia ada di rumah sekarang.',
    pastSample: 'She was at home last night.',
    pastId: 'Dia ada di rumah tadi malam.'
  },
  {
    subject: 'You / We / They',
    type: 'Jamak (Banyak orang)',
    presentToBe: 'ARE',
    pastToBe: 'WERE',
    presentSample: 'They are students now.',
    presentId: 'Mereka murid sekarang.',
    pastSample: 'They were students in 2020.',
    pastId: 'Mereka adalah murid pada tahun 2020.'
  }
];
</script>

<style scoped>
.time-machine {
  margin-top: 1rem;
}

.machine-card {
  background: var(--surface, #ffffff);
  border: 1.5px solid var(--border-color, #e2e8f0);
  border-radius: 1.25rem;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
}

.machine-badge {
  font-size: 0.72rem;
  font-weight: 700;
  background: #fef3c7;
  color: #b45309;
  padding: 0.2rem 0.6rem;
  border-radius: 9999px;
  display: inline-block;
  margin-bottom: 0.35rem;
}

.machine-heading h4 {
  font-size: 1.05rem;
  color: var(--text-title, #0f172a);
  margin-bottom: 1.25rem;
}

.time-toggle-bar {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.time-btn {
  background: var(--surface-2, #f1f5f9);
  border: 1.5px solid var(--border-color, #cbd5e1);
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  font-family: 'Outfit', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  color: var(--text-body, #334155);
  transition: all 0.2s;
}

.time-btn.active {
  background: #eff6ff;
  border-color: #3b82f6;
  color: #1d4ed8;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
}

.time-btn.past.active {
  background: #fdf2f8;
  border-color: #ec4899;
  color: #be185d;
  box-shadow: 0 4px 12px rgba(236, 72, 153, 0.2);
}

.sentences-timeline {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.timeline-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--surface-2, #f8fafc);
  border: 1.5px solid var(--border-color, #e2e8f0);
  padding: 0.9rem 1.25rem;
  border-radius: 0.85rem;
  transition: all 0.25s;
}

.timeline-row.is-past {
  border-color: #fbcfe8;
  background: #fff1f210;
}

.sub-col {
  width: 140px;
  display: flex;
  flex-direction: column;
}

.sub-name {
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--text-title, #0f172a);
}

.sub-type {
  font-size: 0.72rem;
  color: var(--text-muted, #64748b);
}

.tobe-bubble {
  font-family: 'Outfit', sans-serif;
  font-size: 1.35rem;
  font-weight: 800;
  padding: 0.35rem 0.85rem;
  border-radius: 0.5rem;
  background: #3b82f6;
  color: white;
  min-width: 75px;
  text-align: center;
}

.timeline-row.is-past .tobe-bubble {
  background: #ec4899;
}

.sentence-col {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.en-line {
  font-weight: 700;
  font-size: 1.05rem;
  color: var(--text-title, #0f172a);
}

.id-line {
  font-size: 0.82rem;
  color: var(--text-muted, #64748b);
}

@media (max-width: 640px) {
  .timeline-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>
