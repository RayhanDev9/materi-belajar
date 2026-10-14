<script setup lang="ts">
import { menuSortOptions } from "../data/menuData";



const onlyDiscount  = defineModel<boolean>("onlyDiscount",{default : false})
const onlySpicy = defineModel<boolean>("onlySpicy", {default : false});
const sortBy = defineModel< "popular" | "price-asc" | "price-desc"> ("sortBy",{default : "popular"})
</script>

<template>
  <section class="filter-bar">
    <div class="filter-chips">
      <button
        :class="['chip-btn', { active: onlyDiscount }]"
        @click="onlyDiscount =!onlyDiscount"
      >
        🔥 Ada Diskon
      </button>
      <button
        :class="['chip-btn', { active: onlySpicy }]"
        @click="onlySpicy = !onlySpicy"
      >
        🌶️ Menu Pedas
      </button>
    </div>

    <div class="sort-wrapper">
      <label for="sort-select" class="sort-label">Urutkan:</label>
      <select id="sort-select" v-model="sortBy" class="sort-select">
        <option
          v-for="opt in menuSortOptions"
          :key="opt.value"
          :value="opt.value"
        >
          {{ opt.label }}
        </option>
      </select>
    </div>
  </section>
</template>

<style scoped>
.filter-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 0.75rem 1rem;
  background-color: #ffffff;
  border-radius: 12px;
  border: 1px solid #f1f5f9;
}

.filter-chips {
  display: flex;
  gap: 0.5rem;
}

.chip-btn {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  color: #64748b;
  padding: 0.4rem 0.85rem;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s ease;
}

.chip-btn.active {
  background-color: #fff1eb;
  color: #ff5a1f;
  border-color: #ffc4ad;
}

.sort-wrapper {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: auto;
}

.sort-label {
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 600;
}

.sort-select {
  padding: 0.4rem 0.75rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  font-family: inherit;
  font-size: 0.85rem;
  font-weight: 600;
  color: #334155;
  background-color: #ffffff;
  cursor: pointer;
  outline: none;
}
</style>
