<script setup lang="ts">
import { SearchBar } from "@/components";

defineProps<{
  searchQuery: string;
}>();

const emit = defineEmits<{
  (e: "update:searchQuery", value: string): void;
}>();
</script>

<template>
  <header class="menu-header">
    <div class="header-text">
      <span class="badge-sub">E-Commerce Kuliner Pilihan</span>
      <h1 class="main-title">Mau Makan Apa Hari Ini? 🍲</h1>
      <p class="subtitle">
        Jelajahi menu lezat siap santap, lauk praktis, dan camilan favorit keluarga.
      </p>
    </div>

    <!-- SEARCH INPUT COMPONENT -->
    <SearchBar
      :model-value="searchQuery"
      placeholder="Cari rendang, baso aci, kopi..."
      @update:model-value="emit('update:searchQuery', $event)"
    />
  </header>
</template>

<style scoped>
.menu-header {
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

@media (min-width: 768px) {
  .menu-header {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
}

.badge-sub {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  color: #ff5a1f;
  background-color: #fff1eb;
  padding: 0.35rem 0.75rem;
  border-radius: 9999px;
  margin-bottom: 0.5rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.main-title {
  font-size: 1.75rem;
  font-weight: 800;
  color: #0f172a;
  line-height: 1.2;
  margin: 0 0 0.5rem;
}

@media (min-width: 768px) {
  .main-title {
    font-size: 2.25rem;
  }
}

.subtitle {
  color: #64748b;
  font-size: 0.95rem;
  margin: 0;
  max-width: 520px;
}
</style>
