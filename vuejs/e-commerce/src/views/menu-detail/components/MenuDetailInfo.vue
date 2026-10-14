<script setup lang="ts">
import { computed } from "vue";
import type { FoodProduct } from "@/types/Product";
import useFormatCurrency from "@/composables/useCurrency";

const props = defineProps<{
  product: FoodProduct;
}>();

// Pastikan selalu ada Harga Normal & Harga Diskon
const normalPrice = computed(() => {
  return props.product.originalPrice || Math.round(props.product.price * 1.25);
});

const discountPercent = computed(() => {
  if (props.product.discountPercent) return props.product.discountPercent;
  const original = normalPrice.value;
  return Math.round(((original - props.product.price) / original) * 100);
});
</script>

<template>
  <div class="info-column">
    <!-- Category & Tags -->
    <div class="header-tags">
      <span class="category-pill">{{ product.category }}</span>
      <span
        v-for="tag in product.tags"
        :key="tag"
        class="custom-tag"
      >
        {{ tag }}
      </span>
    </div>

    <!-- Product Name -->
    <h1 class="product-title">{{ product.name }}</h1>

    <!-- Rating & Unit Details -->
    <div class="meta-row">
      <div class="rating-box">
        <span class="star-icon">★</span>
        <strong class="rating-score">{{ product.rating }}</strong>
        <span class="review-count">({{ product.reviewCount }} ulasan)</span>
      </div>
      <span class="meta-dot">•</span>
      <span class="unit-badge">Porsi: {{ product.unit }}</span>
      <span class="meta-dot">•</span>
      <span class="stock-badge" :class="{ 'low-stock': product.stock <= 5 }">
        Stok: {{ product.stock }}
      </span>
    </div>

    <!-- Price Section: Menampilkan 2 Harga (Normal & Diskon) -->
    <div class="price-section">
      <!-- 1. Harga Normal -->
      <div class="price-box normal-box">
        <span class="price-label">Harga Normal</span>
        <span class="price-normal-val">
          {{ useFormatCurrency(normalPrice) }}
        </span>
      </div>

      <div class="price-separator"></div>

      <!-- 2. Harga Diskon -->
      <div class="price-box discount-box">
        <div class="price-discount-header">
          <span class="price-label">Harga Diskon</span>
          <span class="discount-badge-pill">-{{ discountPercent }}%</span>
        </div>
        <span class="price-discount-val">
          {{ useFormatCurrency(product.price) }}
        </span>
      </div>
    </div>

    <!-- Nutrition Facts Grid -->
    <div v-if="product.nutrition" class="nutrition-section">
      <h2 class="section-title">Informasi Nutrisi</h2>
      <div class="nutrition-grid">
        <div class="nutrition-card">
          <span class="nutrition-value">{{ product.nutrition.calories }}</span>
          <span class="nutrition-label">Kalori (kcal)</span>
        </div>
        <div class="nutrition-card">
          <span class="nutrition-value">{{ product.nutrition.protein }}g</span>
          <span class="nutrition-label">Protein</span>
        </div>
        <div class="nutrition-card">
          <span class="nutrition-value">{{ product.nutrition.carbs }}g</span>
          <span class="nutrition-label">Karbo</span>
        </div>
        <div class="nutrition-card">
          <span class="nutrition-value">{{ product.nutrition.fat }}g</span>
          <span class="nutrition-label">Lemak</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.info-column {
  display: flex;
  flex-direction: column;
}

.header-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.category-pill {
  background-color: #fff1eb;
  color: #ff5a1f;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.3rem 0.75rem;
  border-radius: 9999px;
}

.custom-tag {
  background-color: #f1f5f9;
  color: #475569;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.3rem 0.75rem;
  border-radius: 9999px;
}

.product-title {
  font-size: 1.85rem;
  font-weight: 800;
  line-height: 1.25;
  color: #1e293b;
  margin: 0 0 0.85rem;
}

@media (min-width: 768px) {
  .product-title {
    font-size: 2.15rem;
  }
}

.meta-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.6rem;
  font-size: 0.875rem;
  color: #64748b;
  margin-bottom: 1.5rem;
}

.rating-box {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
}

.star-icon {
  color: #f59e0b;
  font-size: 1.1rem;
}

.rating-score {
  color: #1e293b;
  font-weight: 700;
}

.review-count {
  color: #94a3b8;
}

.meta-dot {
  color: #cbd5e1;
}

.unit-badge,
.stock-badge {
  font-weight: 500;
}

.stock-badge.low-stock {
  color: #dc2626;
  font-weight: 700;
}

/* PRICE DISPLAY SECTION (DUA HARGA: NORMAL & DISKON) */
.price-section {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1.15rem 1.4rem;
  background-color: #f8fafc;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  margin-bottom: 1.75rem;
}

.price-box {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.price-label {
  font-size: 0.75rem;
  font-weight: 700;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.price-normal-val {
  font-size: 1.15rem;
  color: #94a3b8;
  font-weight: 600;
  text-decoration: line-through;
}

.price-separator {
  width: 1px;
  height: 48px;
  background-color: #e2e8f0;
}

.discount-box {
  flex: 1;
}

.price-discount-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.discount-badge-pill {
  background-color: #ef4444;
  color: #ffffff;
  font-size: 0.7rem;
  font-weight: 800;
  padding: 0.15rem 0.5rem;
  border-radius: 6px;
}

.price-discount-val {
  font-size: 1.85rem;
  font-weight: 800;
  color: #ff5a1f;
  line-height: 1.1;
}

.section-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 0.65rem;
}

/* NUTRITION GRID */
.nutrition-section {
  margin-bottom: 1.75rem;
}

.nutrition-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;
}

@media (max-width: 500px) {
  .nutrition-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.nutrition-card {
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 0.75rem 0.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.nutrition-value {
  font-size: 1.1rem;
  font-weight: 800;
  color: #ff5a1f;
}

.nutrition-label {
  font-size: 0.75rem;
  color: #64748b;
  font-weight: 500;
}
</style>
