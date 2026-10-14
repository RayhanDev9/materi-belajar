<script setup lang="ts">
import { useRouter, RouterLink } from "vue-router";

defineProps<{
  totalItems: number;
  isEmpty: boolean;
}>();

const emit = defineEmits<{
  (e: "clearCart"): void;
}>();

const router = useRouter();
</script>

<template>
  <div class="cart-header-wrapper">
    <!-- Top Navigation & Breadcrumb -->
    <nav class="cart-nav" aria-label="Breadcrumb">
      <button class="btn-back" @click="router.push('/menu')" title="Kembali ke Menu">
        <span class="back-arrow">←</span>
        <span>Lanjut Belanja</span>
      </button>

      <div class="breadcrumb">
        <RouterLink to="/menu" class="breadcrumb-link">Menu</RouterLink>
        <span class="breadcrumb-separator">/</span>
        <span class="breadcrumb-current">Keranjang</span>
      </div>
    </nav>

    <!-- Page Title Header -->
    <header class="cart-title-bar">
      <div class="title-left">
        <h1 class="page-title">Keranjang Belanja</h1>
        <span v-if="!isEmpty" class="item-badge">
          {{ totalItems }} Porsi
        </span>
      </div>

      <button
        v-if="!isEmpty"
        type="button"
        class="btn-clear-cart"
        @click="emit('clearCart')"
      >
        🗑️ Kosongkan Keranjang
      </button>
    </header>
  </div>
</template>

<style scoped>
.cart-header-wrapper {
  margin-bottom: 2rem;
}

.cart-nav {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.btn-back {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #ffffff;
  color: #1e293b;
  border: 1px solid #e2e8f0;
  border-radius: 9999px;
  padding: 0.55rem 1.1rem;
  font-family: inherit;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-back:hover {
  background-color: #fff1eb;
  color: #ff5a1f;
  border-color: #ff5a1f;
  transform: translateX(-2px);
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #64748b;
}

.breadcrumb-link {
  color: #64748b;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.breadcrumb-link:hover {
  color: #ff5a1f;
}

.breadcrumb-separator {
  color: #94a3b8;
}

.breadcrumb-current {
  color: #1e293b;
  font-weight: 600;
}

.cart-title-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}

.title-left {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.page-title {
  font-size: 1.85rem;
  font-weight: 800;
  color: #1e293b;
  margin: 0;
}

.item-badge {
  background-color: #fff1eb;
  color: #ff5a1f;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.35rem 0.8rem;
  border-radius: 9999px;
}

.btn-clear-cart {
  background: transparent;
  border: 1px solid #e2e8f0;
  color: #64748b;
  padding: 0.45rem 0.95rem;
  border-radius: 9999px;
  font-size: 0.825rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-clear-cart:hover {
  background-color: #fef2f2;
  color: #dc2626;
  border-color: #fecaca;
}
</style>
