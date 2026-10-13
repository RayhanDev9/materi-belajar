<template>
  <div class="subject-viewer">
    <div class="subject-cards-grid">
      <div 
        v-for="act in actors" 
        :key="act.pronoun" 
        class="subject-card"
        :class="{ 'singular-group': isThirdPersonSingular(act.pronoun) }"
      >
        <div class="subject-badge">
          {{ isThirdPersonSingular(act.pronoun) ? '⭐ Orang Ketiga Tunggal' : 'Kubu Jamak / Utama' }}
        </div>
        <div class="subject-pronoun">{{ act.pronoun }}</div>
        <div class="subject-meaning">{{ act.meaning }}</div>
        <div class="subject-example">
          "{{ act.example }}"
        </div>
        <div class="subject-note">{{ act.note }}</div>
        <div class="subject-actions">
          <AudioButton :text="`${act.pronoun}. ${act.example}`" :mini="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AudioButton from './AudioButton.vue';

defineProps({
  actors: {
    type: Array,
    required: true
  }
});

function isThirdPersonSingular(pronoun) {
  return ['He', 'She', 'It'].includes(pronoun);
}
</script>

<style scoped>
.subject-viewer {
  margin-top: 1rem;
}

.subject-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
}

.subject-card {
  background: var(--surface, #ffffff);
  border: 1.5px solid var(--border-color, #e2e8f0);
  border-radius: 1rem;
  padding: 1.25rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
  transition: transform 0.2s;
}

.subject-card:hover {
  transform: translateY(-3px);
  border-color: var(--primary, #4f46e5);
}

.subject-card.singular-group {
  border-color: #cbd5e1;
  background: linear-gradient(180deg, var(--surface, #ffffff), #f8fafc);
}

.subject-badge {
  font-size: 0.68rem;
  font-weight: 700;
  color: var(--primary, #4f46e5);
  background: var(--accent-light, #eef2ff);
  padding: 0.2rem 0.5rem;
  border-radius: 9999px;
  align-self: flex-start;
}

.subject-card.singular-group .subject-badge {
  background: #fef3c7;
  color: #b45309;
}

.subject-pronoun {
  font-family: 'Outfit', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  color: var(--text-title, #0f172a);
}

.subject-meaning {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--primary, #4f46e5);
}

.subject-example {
  font-size: 0.88rem;
  font-style: italic;
  color: var(--text-body, #334155);
}

.subject-note {
  font-size: 0.75rem;
  color: var(--text-muted, #64748b);
  margin-top: auto;
  padding-top: 0.5rem;
}

.subject-actions {
  margin-top: 0.5rem;
}
</style>
