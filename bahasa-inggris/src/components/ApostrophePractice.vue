<template>
  <div class="apostrophe-practice">
    <div class="possession-builder-card">
      <div class="builder-heading">
        <span class="heading-badge">🏷️ Perakit Kepemilikan</span>
        <h4>Pilih Pemilik & Benda untuk Melihat Penggunaan 's Otomatis:</h4>
      </div>

      <div class="picker-row">
        <!-- Pick Owner -->
        <div class="picker-group">
          <label>1. Pemilik (Owner):</label>
          <div class="pill-list">
            <button 
              v-for="o in owners" 
              :key="o.name"
              class="pill-btn"
              :class="{ active: selectedOwner.name === o.name }"
              @click="selectedOwner = o"
            >
              {{ o.name }}
            </button>
          </div>
        </div>

        <!-- Pick Item -->
        <div class="picker-group">
          <label>2. Benda Milik:</label>
          <div class="pill-list">
            <button 
              v-for="it in items" 
              :key="it.en"
              class="pill-btn"
              :class="{ active: selectedItem.en === it.en }"
              @click="selectedItem = it"
            >
              {{ it.en }}
            </button>
          </div>
        </div>
      </div>

      <!-- Result Banner -->
      <div class="possession-result">
        <div class="result-formula">
          <span class="res-owner">{{ selectedOwner.name }}</span>
          <span class="res-apostrophe">{{ selectedOwner.isPluralS ? "'" : "'s" }}</span>
          <span class="res-item">{{ selectedItem.en }}</span>
        </div>
        <div class="result-meaning">
          Artinya: <strong>"{{ selectedItem.id }} milik {{ selectedOwner.name }}"</strong>
        </div>
        <div v-if="selectedOwner.isPluralS" class="plural-rule-tip">
          💡 <strong>Perhatikan:</strong> Karena kata "{{ selectedOwner.name }}" sudah berakhiran huruf "s" (jamak), kita HANYA menambahkan tanda petik atas <code>'</code> tanpa huruf "s" tambahan!
        </div>
        <div class="result-action">
          <AudioButton :text="spokenText" label="Dengarkan Pelafalan" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import AudioButton from './AudioButton.vue';

const owners = [
  { name: 'John', isPluralS: false },
  { name: 'My mother', isPluralS: false },
  { name: 'Sarah', isPluralS: false },
  { name: 'The cat', isPluralS: false },
  { name: 'My parents', isPluralS: true }, // plural ending with s
  { name: 'The students', isPluralS: true }
];

const items = [
  { en: 'car', id: 'mobil' },
  { en: 'house', id: 'rumah' },
  { en: 'new phone', id: 'handphone baru' },
  { en: 'books', id: 'buku-buku' },
  { en: 'tail', id: 'ekor' }
];

const selectedOwner = ref(owners[0]);
const selectedItem = ref(items[0]);

const spokenText = computed(() => {
  const suffix = selectedOwner.value.isPluralS ? "'" : "'s";
  return `${selectedOwner.value.name}${suffix} ${selectedItem.value.en}`;
});
</script>

<style scoped>
.apostrophe-practice {
  margin-top: 1rem;
}

.possession-builder-card {
  background: var(--surface, #ffffff);
  border: 1.5px solid var(--border-color, #e2e8f0);
  border-radius: 1.25rem;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
}

.heading-badge {
  font-size: 0.72rem;
  font-weight: 700;
  background: #fef3c7;
  color: #b45309;
  padding: 0.2rem 0.6rem;
  border-radius: 9999px;
  display: inline-block;
  margin-bottom: 0.35rem;
}

.builder-heading h4 {
  font-size: 1.05rem;
  color: var(--text-title, #0f172a);
  margin-bottom: 1.25rem;
}

.picker-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.25rem;
  margin-bottom: 1.5rem;
}

.picker-group label {
  display: block;
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--text-muted, #64748b);
  margin-bottom: 0.5rem;
}

.pill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.pill-btn {
  background: var(--surface-2, #f1f5f9);
  border: 1px solid var(--border-color, #e2e8f0);
  padding: 0.4rem 0.8rem;
  border-radius: 9999px;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  color: var(--text-body, #334155);
}

.pill-btn:hover {
  background: var(--surface, #ffffff);
  border-color: var(--primary, #4f46e5);
}

.pill-btn.active {
  background: var(--primary, #4f46e5);
  color: white;
  border-color: var(--primary, #4f46e5);
}

.possession-result {
  background: #f8fafc;
  border: 1.5px solid var(--border-color, #e2e8f0);
  border-radius: 1rem;
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.result-formula {
  font-family: 'Outfit', sans-serif;
  font-size: 1.75rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  color: var(--text-title, #0f172a);
}

.res-owner {
  color: #2563eb;
}

.res-apostrophe {
  color: #dc2626;
  background: #fee2e2;
  padding: 0 0.3rem;
  border-radius: 4px;
}

.res-item {
  color: #059669;
}

.result-meaning {
  font-size: 0.95rem;
  color: var(--text-body, #334155);
}

.plural-rule-tip {
  font-size: 0.85rem;
  background: #fffbeb;
  border: 1px solid #fde68a;
  padding: 0.6rem 0.85rem;
  border-radius: 0.5rem;
  color: #92400e;
}
</style>
