<template>
  <div class="family-viewer">
    <div class="category-tabs">
      <button 
        v-for="(grp, idx) in groups" 
        :key="idx"
        class="tab-btn"
        :class="{ active: activeIndex === idx }"
        @click="activeIndex = idx"
      >
        {{ grp.group }}
      </button>
    </div>

    <div class="members-grid">
      <div 
        v-for="(m, i) in currentGroup.members" 
        :key="i"
        class="member-card"
      >
        <div class="member-icon">
          {{ getAvatar(m.en) }}
        </div>
        <div class="member-info">
          <div class="member-en">{{ m.en }}</div>
          <div class="member-id">{{ m.id }}</div>
        </div>
        <div class="member-action">
          <AudioButton :text="m.en" :mini="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import AudioButton from './AudioButton.vue';

const props = defineProps({
  groups: {
    type: Array,
    required: true
  }
});

const activeIndex = ref(0);
const currentGroup = computed(() => props.groups[activeIndex.value] || props.groups[0]);

function getAvatar(title) {
  const t = title.toLowerCase();
  if (t.includes('father') || t.includes('dad') || t.includes('grandpa')) return '👨';
  if (t.includes('mother') || t.includes('mom') || t.includes('grandma')) return '👩';
  if (t.includes('brother') || t.includes('son') || t.includes('nephew')) return '👦';
  if (t.includes('sister') || t.includes('daughter') || t.includes('niece')) return '👧';
  if (t.includes('baby') || t.includes('child')) return '👶';
  if (t.includes('parents') || t.includes('grandparents')) return '👥';
  return '👤';
}
</script>

<style scoped>
.family-viewer {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 1rem;
}

.category-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tab-btn {
  background: var(--surface-2, #f1f5f9);
  border: 1px solid var(--border-color, #e2e8f0);
  border-radius: 9999px;
  padding: 0.5rem 1.1rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-body, #334155);
  cursor: pointer;
  transition: all 0.2s;
}

.tab-btn:hover {
  background: var(--surface, #ffffff);
  border-color: var(--primary, #4f46e5);
}

.tab-btn.active {
  background: var(--primary, #4f46e5);
  color: white;
  border-color: var(--primary, #4f46e5);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.25);
}

.members-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
}

.member-card {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  background: var(--surface, #ffffff);
  border: 1px solid var(--border-color, #e2e8f0);
  border-radius: 0.85rem;
  padding: 0.9rem 1rem;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
}

.member-card:hover {
  transform: translateY(-2px);
  border-color: var(--primary, #4f46e5);
  box-shadow: 0 8px 16px rgba(79, 70, 229, 0.08);
}

.member-icon {
  font-size: 1.75rem;
  width: 44px;
  height: 44px;
  background: var(--surface-2, #f8fafc);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.member-info {
  flex: 1;
}

.member-en {
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--text-title, #0f172a);
}

.member-id {
  font-size: 0.78rem;
  color: var(--text-muted, #64748b);
}
</style>
