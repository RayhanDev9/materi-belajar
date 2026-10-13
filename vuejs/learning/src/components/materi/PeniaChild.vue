<script setup lang="ts">
// ===============================================================
// LEVEL 2: KOMPONEN ANAK (CHILD)
// Komponen perantara yang menjadi contoh "PROP DRILLING":
// Komponen ini sebenarnya tidak memerlukan data red, green, blue
// untuk dirinya sendiri, tetapi terpaksa menerima props dan emits
// hanya untuk diteruskan ke komponen cucu (PeniaGrandChild).
// ===============================================================

import { inject } from 'vue';
import PeniaGrandChild from './PeniaGrandChild.vue';
import { storeToRefs } from 'pinia';
import useNumbers from '@/stores/numbers.ts';



const red =inject("red")
const green = inject("green")
const blue = inject("blue")

const store = useNumbers();
const { numbers } = storeToRefs(store); // ✅ Reaktif tetap terjaga
const { addNumber, filterNumbers } = store; // Action/method tidak perlu storeToRefs


const emit = defineEmits<{
  (e: 'update:red', value: number): void;
  (e: 'update:green', value: number): void;
  (e: 'update:blue', value: number): void;
}>();

console.info(numbers)
</script>

<template>
  <div>
    <span v-for="number in numbers">
{{ number }}
    </span><br/>
    <span v-for="value in filterNumbers(2)">
      {{ value }}
    </span>
    <button @click="addNumber()">Add Number</button>
  </div>
  <div class="child-box p-3 rounded-3 border bg-white shadow-sm">
    <div class="mb-2">
      <span class="badge bg-primary me-2">Level 2</span>
      <strong>Komponen Anak (Child - Perantara)</strong>
    </div>
    <p class="text-muted small mb-3">
      Komponen ini hanya meneruskan (*drill*) props ke bawah dan me-relay emit ke atas.
    </p>

    <!-- Prop drilling: mengoper props dan emit ke level cucu -->
    <PeniaGrandChild
      :red="red"
      :green="green"
      :blue="blue"
      @update:red="emit('update:red', $event)"
      @update:green="emit('update:green', $event)"
      @update:blue="emit('update:blue', $event)"
    />
  </div>
</template>

<style scoped>
.child-box {
  min-width: 280px;
}
</style>
