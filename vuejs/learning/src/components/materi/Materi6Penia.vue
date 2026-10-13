<script setup lang="ts">
// ===============================================================
// LEVEL 1: KOMPONEN INDUK (PARENT)
// Di sini state asli berada (red, green, blue).
// Komponen ini harus mengoper props ke bawah (Prop Drilling)
// dan menerima emit untuk memperbarui state.
// ===============================================================

import { provide, ref } from 'vue';
import PeniaChild from './PeniaChild.vue';
import useColors from '@/composables/useColor.tsx';

const red = ref(50);
const green = ref(120);
const blue = ref(200);

const {colors,addColor} = useColors()
let inputColor = ref('')

provide(red,"red")
provide(green,"green")
provide(blue,"blue")



</script>

<template>
  <main :style="{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }" class="rounded-4">

    <section>
    <div v-for="color in colors" :key="color" style="display: flex; flex-wrap: wrap;">
        <p style="color: white; display: block;">
        I like color : {{ color }}

        </p>

       

    </div>
     <input type="text" name="" id="" v-model="inputColor">
<button @click="addColor(inputColor)">Add color</button>
    </section>

    <div class="card p-4 rounded-4 shadow-lg text-center" style="max-width: 420px; width: 100%;">
      <div class="mb-3">
        <span class="badge bg-success me-2">Level 1</span>
        <h4 class="d-inline-block fw-bold mb-0">Contoh Prop Drilling</h4>
      </div>

      <div class="color-preview mb-3 p-2 rounded border" :style="{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }">
        <span class="badge bg-dark fs-6">
          RGB({{ red }}, {{ green }}, {{ blue }})
        </span>
      </div>

      <p class="text-muted small mb-3">
        State ada di <strong>Parent (Materi6Penia)</strong>, lalu di-drill lewat <strong>Child</strong> hingga ke <strong>GrandChild</strong>.
      </p>

      <!-- Mengoper state ke Komponen Anak (Child) lewat Props dan menerima Update via Emit -->
      <PeniaChild
      
        @update:red="red = $event"
        @update:green="green = $event"
        @update:blue="blue = $event"
      />
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 24px;
  transition: background-color 0.3s ease;
}

.color-preview {
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
}
</style>