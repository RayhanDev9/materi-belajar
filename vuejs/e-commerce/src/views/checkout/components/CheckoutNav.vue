<script setup lang="ts">
import { useRouter, RouterLink } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="checkout-header-wrapper">
    <!-- Top Navigation & Breadcrumb -->
    <nav class="checkout-nav" aria-label="Breadcrumb">
      <button class="btn-back" @click="router.push('/cart')" title="Kembali ke Keranjang">
        <span class="back-arrow">←</span>
        <span>Kembali ke Keranjang</span>
      </button>

      <div class="breadcrumb">
        <RouterLink to="/menu" class="breadcrumb-link">Menu</RouterLink>
        <span class="breadcrumb-separator">/</span>
        <RouterLink to="/cart" class="breadcrumb-link">Keranjang</RouterLink>
        <span class="breadcrumb-separator">/</span>
        <span class="breadcrumb-current">Checkout</span>
      </div>
    </nav>

    <!-- Page Title Header -->
    <header class="checkout-title-bar">
      <h1 class="page-title">Selesaikan Pesanan</h1>
      <span class="security-badge">
        <span class="lock-icon">🔒</span>
        <span>Pembayaran Aman & Terverifikasi</span>
      </span>
    </header>
  </div>
</template>

<style scoped>
.checkout-header-wrapper {
  margin-bottom: 2rem;
}

.checkout-nav {
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

.checkout-title-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}

.page-title {
  font-size: 1.85rem;
  font-weight: 800;
  color: #1e293b;
  margin: 0;
}

.security-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background-color: #d1fae5;
  color: #065f46;
  font-size: 0.775rem;
  font-weight: 700;
  padding: 0.35rem 0.85rem;
  border-radius: 9999px;
}

.lock-icon {
  font-size: 0.85rem;
}
</style>
