<template>
  <li class="task-item" :class="{ completed: isDone }">
    <label class="task-label">
      <!-- Memicu event toggle saat status checkbox berubah -->
      <input 
        type="checkbox" 
        :checked="isDone" 
        @change="handleToggle" 
      />
      <span class="task-text">{{ text }}</span>
    </label>
    <!-- Memicu event delete saat tombol hapus diklik -->
    <button 
      type="button" 
      class="btn-delete" 
      @click="handleDelete" 
      title="Hapus tugas"
    >
      🗑️
    </button>
  </li>
</template>

<script setup lang="ts">
// =========================================================
// 1. PROPS & NILAI DEFAULT (withDefaults + defineProps)
// =========================================================
interface Props {
  id: number;
  text?: string;
  isDone?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  text: "Tugas Baru (Tanpa Judul)",
  isDone: false,
});

// =========================================================
// 2. EVENT EMIT (defineEmits)
// =========================================================
const emit = defineEmits<{
  (e: "toggle", id: number): void;
  (e: "delete", id: number): void;
}>();

// =========================================================
// 3. EVENT METHODS
// =========================================================
function handleToggle() {
  emit("toggle", props.id);
}

function handleDelete() {
  emit("delete", props.id);
}
</script>

<style scoped>
.task-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  background-color: #f8fafc;
  border: 1px solid #f1f5f9;
  border-radius: 8px;
  transition: all 0.2s;
}

.task-item.completed .task-text {
  text-decoration: line-through;
  color: #94a3b8;
}

.task-label {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  flex: 1;
}

.btn-delete {
  background: none;
  border: none;
  color: #ef4444;
  font-size: 1rem;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.btn-delete:hover {
  background-color: #fee2e2;
}
</style>
