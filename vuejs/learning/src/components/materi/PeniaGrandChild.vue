<script setup lang="ts">
import { inject } from 'vue';

// ===============================================================
// LEVEL 3: KOMPONEN CUCU (GRANDCHILD)
// Komponen paling bawah yang menerima props dari komponen perantara
// dan meng-emit perubahan saat input diisi.
// ===============================================================
const red =inject("red")
const green = inject("green")
const blue = inject("blue")

const emit = defineEmits<{
  (e: 'update:red', value: number): void;
  (e: 'update:green', value: number): void;
  (e: 'update:blue', value: number): void;
}>();
</script>

<template>
  <div class="grandchild-box p-3 rounded-3 bg-light border">
    <small class="text-secondary fw-bold d-block mb-2">
      👶 Komponen Cucu (GrandChild) - Tempat Input Berada
    </small>

    <div class="input-group-vertical">
      <input
        type="number"
        :value="red"
        @input="emit('update:red', Number(($event.target as HTMLInputElement).value))"
        min="0"
        max="255"
        placeholder="Red (0-255)"
      />

      <input
        type="number"
        :value="green"
        @input="emit('update:green', Number(($event.target as HTMLInputElement).value))"
        min="0"
        max="255"
        placeholder="Green (0-255)"
      />

      <input
        type="number"
        :value="blue"
        @input="emit('update:blue', Number(($event.target as HTMLInputElement).value))"
        min="0"
        max="255"
        placeholder="Blue (0-255)"
      />
    </div>
  </div>
</template>

<style scoped>
.input-group-vertical {
  display: flex;
  flex-direction: column;
}

input {
  margin: 6px 0;
  padding: 10px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 14px;
}

input:focus {
  outline: none;
  border-color: #3b82f6;
}
</style>
