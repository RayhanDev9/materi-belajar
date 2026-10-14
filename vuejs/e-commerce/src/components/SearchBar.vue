<script setup lang="ts">
defineProps<{
  modelValue: string;
  placeholder?: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();
</script>

<template>
  <div class="search-wrapper">
    <span class="search-icon">🔍</span>
    <input
      :value="modelValue"
      type="text"
      class="search-input"
      :placeholder="placeholder || 'Cari menu favorit...'"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <button
      v-if="modelValue"
      class="clear-search"
      title="Hapus pencarian"
      @click="emit('update:modelValue', '')"
    >
      ✕
    </button>
  </div>
</template>

<style scoped>
.search-wrapper {
  position: relative;
  min-width: 280px;
  max-width: 420px;
  width: 100%;
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1rem;
  opacity: 0.6;
  pointer-events: none;
}

.search-input {
  width: 100%;
  box-sizing: border-box;
  padding: 0.85rem 2.5rem 0.85rem 2.75rem;
  border-radius: 9999px;
  border: 1.5px solid #e2e8f0;
  background-color: #ffffff;
  color: #1e293b;
  font-size: 0.95rem;
  font-family: inherit;
  transition: all 0.25s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
}

.search-input:focus {
  outline: none;
  border-color: #ff5a1f;
  box-shadow: 0 0 0 4px rgba(255, 90, 31, 0.12);
}

.clear-search {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: #f1f5f9;
  border: none;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  color: #64748b;
  transition: all 0.2s ease;
}

.clear-search:hover {
  background: #e2e8f0;
  color: #0f172a;
}
</style>
