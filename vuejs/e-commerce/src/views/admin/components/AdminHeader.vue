<script setup lang="ts">
import {
  Settings,
  Plus,
  UtensilsCrossed,
  AlertTriangle,
  Tag,
} from "lucide-vue-next";

defineProps<{
  totalProducts: number;
  lowStockCount: number;
  promoCount: number;
}>();

const emit = defineEmits<{
  (e: "openAddModal"): void;
}>();
</script>

<template>
  <div class="admin-header-wrapper">
    <!-- Top Bar: Title & Action -->
    <div class="header-top-row">
      <div class="title-group">
        <h1 class="page-title">
          <div class="title-icon-box">
            <Settings :size="24" class="title-icon" />
          </div>
          <span>Manajemen Produk Makanan</span>
        </h1>
        <p class="page-subtitle">
          Kelola katalog menu, update harga diskon, atur ketersediaan stok, dan informasi makanan
        </p>
      </div>

      <button
        type="button"
        class="btn-add-product"
        @click="emit('openAddModal')"
      >
        <Plus :size="18" class="plus-icon" />
        <span>Tambah Menu Baru</span>
      </button>
    </div>

    <!-- Stats Cards Summary Sesuai tham.txt -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon-wrap primary">
          <UtensilsCrossed :size="22" />
        </div>
        <div class="stat-info">
          <span class="stat-label">Total Menu Makanan</span>
          <strong class="stat-value">{{ totalProducts }}</strong>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon-wrap warning" :class="{ alert: lowStockCount > 0 }">
          <AlertTriangle :size="22" />
        </div>
        <div class="stat-info">
          <span class="stat-label">Stok Menipis (≤ 5)</span>
          <strong class="stat-value" :class="{ 'text-danger': lowStockCount > 0 }">
            {{ lowStockCount }} Menu
          </strong>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon-wrap success">
          <Tag :size="22" />
        </div>
        <div class="stat-info">
          <span class="stat-label">Menu Sedang Promo</span>
          <strong class="stat-value text-success">{{ promoCount }} Menu</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.admin-header-wrapper {
  margin-bottom: 2rem;
}

.header-top-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 1.75rem;
  flex-wrap: wrap;
}

.title-group {
  max-width: 650px;
}

.page-title {
  font-size: 1.75rem;
  font-weight: 800;
  color: #1e293b;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 0 0 0.4rem 0;
  letter-spacing: -0.02em;
}

.title-icon-box {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: #fff1eb;
  color: #ff5a1f;
}

.page-subtitle {
  font-size: 0.95rem;
  color: #64748b;
  margin: 0;
  line-height: 1.5;
}

.btn-add-product {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #ff5a1f 0%, #ff3d00 100%);
  color: #ffffff;
  padding: 0.75rem 1.4rem;
  font-size: 0.925rem;
  font-weight: 700;
  border-radius: 9999px; /* Pill */
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(255, 90, 31, 0.35);
  transition: all 0.25s ease;
}

.btn-add-product:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 90, 31, 0.45);
}

.plus-icon {
  stroke-width: 2.5;
}

/* STATS GRID */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.stat-card {
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.15rem;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.03);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(15, 23, 42, 0.06);
}

.stat-icon-wrap {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.stat-icon-wrap.primary {
  background-color: #fff1eb;
  color: #ff5a1f;
}

.stat-icon-wrap.warning {
  background-color: #fef3c7;
  color: #d97706;
}

.stat-icon-wrap.warning.alert {
  background-color: #fee2e2;
  color: #dc2626;
  animation: pulse 2s infinite;
}

.stat-icon-wrap.success {
  background-color: #dcfce7;
  color: #16a34a;
}

.stat-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.stat-label {
  font-size: 0.8rem;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 800;
  color: #1e293b;
  line-height: 1.1;
}

.stat-value.text-danger {
  color: #dc2626;
}

.stat-value.text-success {
  color: #16a34a;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

@media (max-width: 900px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
