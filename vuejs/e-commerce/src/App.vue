<script setup lang="ts">
import { RouterView } from "vue-router";
import { TheNavbar } from "@/components";
</script>

<template>
  <div class="app-layout">
    <!-- Navbar Global: Menu, Admin, & Keranjang dengan Counter -->
    <TheNavbar />

    <!-- Halaman Konten Rute -->
    <main class="app-main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-main {
  flex: 1;
}
</style>
