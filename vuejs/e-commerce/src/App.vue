<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <!-- <header class="app-header">
    <div class="header-content">
      <div class="brand">
        <span class="logo">📦</span>
        <h1>Vue E-Commerce</h1>
      </div>
      <nav class="nav-links">
        <RouterLink to="/" class="nav-link" :class="{ active: $route.path === '/' }">Menu</RouterLink>
        <RouterLink to="/cart" class="nav-link" :class="{ active: $route.path === '/cart' }">Keranjang</RouterLink>
      </nav>
    </div>
  </header> -->
  <main class="app-main">
    <RouterView />
  </main>
</template>

<style scoped></style>
