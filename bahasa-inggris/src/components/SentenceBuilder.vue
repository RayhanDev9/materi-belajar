<template>
  <div class="sentence-builder">
    <div class="builder-intro">
      <div class="lego-legend">
        <span class="legend-pill subject">🟦 Subject (Pelaku)</span>
        <span class="legend-pill predicate">🟩 Predicate (Aksi/To-Be)</span>
        <span class="legend-pill object">🟧 Object/Complement</span>
        <span class="legend-pill adverb">🟪 Adverb (Waktu/Tempat)</span>
      </div>
    </div>

    <!-- Active Sentence Construction Area -->
    <div class="workbench">
      <div class="block-slot subject-slot">
        <span class="slot-label">Subject</span>
        <div class="lego-brick subject-brick">
          {{ selectedSubject.en }}
          <span class="brick-id">({{ selectedSubject.id }})</span>
        </div>
      </div>

      <div class="math-plus">+</div>

      <div class="block-slot predicate-slot">
        <span class="slot-label">Predicate</span>
        <div class="lego-brick predicate-brick">
          {{ matchedPredicate.en }}
          <span class="brick-id">({{ matchedPredicate.id }})</span>
        </div>
      </div>

      <div class="math-plus">+</div>

      <div class="block-slot object-slot">
        <span class="slot-label">Object / Complement</span>
        <div class="lego-brick object-brick">
          {{ selectedObject.en }}
          <span class="brick-id">({{ selectedObject.id }})</span>
        </div>
      </div>

      <div class="math-plus">+</div>

      <div class="block-slot adverb-slot">
        <span class="slot-label">Adverb (Opsional)</span>
        <div class="lego-brick adverb-brick">
          {{ selectedAdverb.en }}
          <span class="brick-id">({{ selectedAdverb.id }})</span>
        </div>
      </div>
    </div>

    <!-- Result Banner -->
    <div class="sentence-result-card">
      <div class="sentence-output">
        <div class="english-sentence">
          "{{ assembledEnglishSentence }}"
        </div>
        <div class="indonesian-sentence">
          Artinya: <em>"{{ assembledIndoSentence }}"</em>
        </div>
      </div>
      <div class="sentence-actions">
        <AudioButton :text="assembledEnglishSentence" label="Dengarkan Kalimat" />
      </div>
    </div>

    <!-- Block Picker Selectors -->
    <div class="picker-sections">
      <div class="picker-col">
        <h4>1. Pilih Subject:</h4>
        <div class="options-list">
          <button 
            v-for="sub in subjects" 
            :key="sub.en"
            class="pick-btn subject-btn"
            :class="{ active: selectedSubject.en === sub.en }"
            @click="selectedSubject = sub"
          >
            <strong>{{ sub.en }}</strong> ({{ sub.id }})
          </button>
        </div>
      </div>

      <div class="picker-col">
        <h4>2. Pilih Tipe Aksi:</h4>
        <div class="options-list">
          <button 
            v-for="act in actions" 
            :key="act.key"
            class="pick-btn predicate-btn"
            :class="{ active: selectedActionKey === act.key }"
            @click="selectedActionKey = act.key"
          >
            <strong>{{ act.label }}</strong>
          </button>
        </div>
      </div>

      <div class="picker-col">
        <h4>3. Pilih Object:</h4>
        <div class="options-list">
          <button 
            v-for="obj in filteredObjects" 
            :key="obj.en"
            class="pick-btn object-btn"
            :class="{ active: selectedObject.en === obj.en }"
            @click="selectedObject = obj"
          >
            <strong>{{ obj.en }}</strong> ({{ obj.id }})
          </button>
        </div>
      </div>

      <div class="picker-col">
        <h4>4. Pilih Keterangan:</h4>
        <div class="options-list">
          <button 
            v-for="adv in adverbs" 
            :key="adv.en"
            class="pick-btn adverb-btn"
            :class="{ active: selectedAdverb.en === adv.en }"
            @click="selectedAdverb = adv"
          >
            <strong>{{ adv.en }}</strong> ({{ adv.id }})
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import AudioButton from './AudioButton.vue';

const subjects = [
  { en: 'I', id: 'Saya', group: 'plural' },
  { en: 'You', id: 'Kamu', group: 'plural' },
  { en: 'We', id: 'Kita', group: 'plural' },
  { en: 'They', id: 'Mereka', group: 'plural' },
  { en: 'He', id: 'Dia (pria)', group: 'singular' },
  { en: 'She', id: 'Dia (wanita)', group: 'singular' }
];

const selectedSubject = ref(subjects[0]);

const actions = [
  { 
    key: 'drink', 
    label: 'Minum (Drink)', 
    pluralVerb: 'drink', 
    singularVerb: 'drinks', 
    idText: 'minum',
    category: 'action' 
  },
  { 
    key: 'read', 
    label: 'Membaca (Read)', 
    pluralVerb: 'read', 
    singularVerb: 'reads', 
    idText: 'membaca',
    category: 'action' 
  },
  { 
    key: 'tobe', 
    label: 'To Be / Keadaan (Am/Is/Are)', 
    category: 'nominal' 
  }
];

const selectedActionKey = ref('drink');

const objectsAction = [
  { en: 'coffee', id: 'kopi' },
  { en: 'tea', id: 'teh' },
  { en: 'an English book', id: 'sebuah buku b.inggris' },
  { en: 'the newspaper', id: 'koran itu' }
];

const objectsNominal = [
  { en: 'very happy', id: 'sangat bahagia' },
  { en: 'a smart student', id: 'murid yang pintar' },
  { en: 'ready to learn', id: 'siap belajar' },
  { en: 'tired today', id: 'lelah hari ini' }
];

const filteredObjects = computed(() => {
  if (selectedActionKey.value === 'tobe') {
    return objectsNominal;
  }
  return objectsAction;
});

const selectedObject = ref(objectsAction[0]);

const adverbs = [
  { en: 'every morning', id: 'setiap pagi' },
  { en: 'at home', id: 'di rumah' },
  { en: 'in the office', id: 'di kantor' },
  { en: 'right now', id: 'sekarang juga' }
];

const selectedAdverb = ref(adverbs[0]);

const matchedPredicate = computed(() => {
  const isSingular = selectedSubject.value.group === 'singular';
  if (selectedActionKey.value === 'tobe') {
    if (selectedSubject.value.en === 'I') {
      return { en: 'am', id: 'adalah/sedang' };
    }
    if (isSingular) {
      return { en: 'is', id: 'adalah/sedang' };
    }
    return { en: 'are', id: 'adalah/sedang' };
  }

  const act = actions.find(a => a.key === selectedActionKey.value);
  if (act) {
    return {
      en: isSingular ? act.singularVerb : act.pluralVerb,
      id: act.idText
    };
  }
  return { en: 'eat', id: 'makan' };
});

const assembledEnglishSentence = computed(() => {
  return `${selectedSubject.value.en} ${matchedPredicate.value.en} ${selectedObject.value.en} ${selectedAdverb.value.en}.`;
});

const assembledIndoSentence = computed(() => {
  return `${selectedSubject.value.id} ${matchedPredicate.value.id} ${selectedObject.value.id} ${selectedAdverb.value.id}.`;
});
</script>

<style scoped>
.sentence-builder {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;
}

.lego-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.legend-pill {
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.25rem 0.65rem;
  border-radius: 9999px;
  background: var(--surface-2, #f1f5f9);
  color: var(--text-body, #334155);
}

.workbench {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  background: var(--surface-2, #f8fafc);
  border: 2px dashed var(--border-color, #cbd5e1);
  padding: 1.25rem;
  border-radius: 1rem;
}

.block-slot {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.slot-label {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--text-muted, #64748b);
}

.lego-brick {
  padding: 0.65rem 1rem;
  border-radius: 0.75rem;
  font-weight: 700;
  font-size: 1.05rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: white;
  transition: transform 0.2s ease;
}

.lego-brick:hover {
  transform: translateY(-2px);
}

.brick-id {
  font-size: 0.75rem;
  opacity: 0.85;
  font-weight: 500;
}

.subject-brick { background: #3b82f6; }
.predicate-brick { background: #10b981; }
.object-brick { background: #f59e0b; }
.adverb-brick { background: #8b5cf6; }

.math-plus {
  font-size: 1.25rem;
  font-weight: 800;
  color: #94a3b8;
  margin-top: 1rem;
}

.sentence-result-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  background: var(--surface, #ffffff);
  border: 1.5px solid var(--primary, #4f46e5);
  border-radius: 1rem;
  padding: 1.25rem 1.75rem;
  box-shadow: 0 10px 25px -5px rgba(79, 70, 229, 0.1);
}

.english-sentence {
  font-family: 'Outfit', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-title, #0f172a);
}

.indonesian-sentence {
  font-size: 0.95rem;
  color: var(--text-muted, #64748b);
  margin-top: 0.25rem;
}

.picker-sections {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.picker-col h4 {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-body, #334155);
  margin-bottom: 0.5rem;
}

.options-list {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.pick-btn {
  background: var(--surface, #ffffff);
  border: 1px solid var(--border-color, #e2e8f0);
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.82rem;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s;
  color: var(--text-body, #334155);
}

.pick-btn:hover {
  background: var(--surface-2, #f8fafc);
  transform: translateX(2px);
}

.pick-btn.active.subject-btn {
  background: #eff6ff;
  border-color: #3b82f6;
  color: #1d4ed8;
}

.pick-btn.active.predicate-btn {
  background: #ecfdf5;
  border-color: #10b981;
  color: #047857;
}

.pick-btn.active.object-btn {
  background: #fffbeb;
  border-color: #f59e0b;
  color: #b45309;
}

.pick-btn.active.adverb-btn {
  background: #f5f3ff;
  border-color: #8b5cf6;
  color: #6d28d9;
}

@media (max-width: 640px) {
  .sentence-result-card {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
