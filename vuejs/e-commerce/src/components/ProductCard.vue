<script setup lang="ts">
import type { FoodProduct } from "@/types/Product";
import useFormatCurrency from "@/composables/useCurrency";
import router from "@/router";

defineProps<{
  product: FoodProduct;
}>();

const emit = defineEmits<{
  (e: "addToCart", product: FoodProduct): void;
}>();

const handleCardDetail = (productId : string) => {
  router.push({
    name : "menu-detail",
    params : {id : productId}
})
}

</script>

<template>
  <article class="product-card">
    <!-- FOTO PRODUK & BADGES -->
    <div class="image-wrapper">
      <img
        :src="product.images?.[0] || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600'"
        :alt="product.name"
        class="product-image"
        loading="lazy"
      />

      <!-- Top Floating Badges -->
      <div class="floating-badges">
        <span v-if="product.discountPercent" class="badge-discount">
          -{{ product.discountPercent }}%
        </span>
        <span v-if="product.isSpicy" class="badge-spicy">
          🌶️ Lv.{{ product.spicyLevel || 1 }}
        </span>
      </div>

      <!-- Bottom Floating Halal -->
      <span v-if="product.isHalal" class="badge-halal">Halal</span>
    </div>

    <!-- CARD BODY -->
    <div class="card-body">
      <div class="category-tag">{{ product.category }}</div>
      <h3 class="product-name" :title="product.name">
        {{ product.name }}
      </h3>

      <!-- Rating & Review -->
      <div class="rating-row">
        <span class="star-icon">★</span>
        <span class="rating-num">{{ product.rating }}</span>
        <span class="review-count">({{ product.reviewCount }})</span>
        <span v-if="product.unit" class="unit-text">• {{ product.unit }}</span>
      </div>

      <!-- Price & Action Button -->
      <div class="card-footer">
        <div class="price-container">
          <span v-if="product.originalPrice" class="price-original">
            {{ useFormatCurrency(product.originalPrice) }}
          </span>
          <span class="price-current">
            {{ useFormatCurrency(product.price) }}
          </span>
        </div>

        <div class="card-actions">
          <button
            type="button"
            class="btn-detail"
            title="Lihat Detail"
            @click="handleCardDetail(product.id)"
          >
            Detail
          </button>

          <button
            class="btn-add-cart"
            title="Tambah ke Keranjang"
            @click="emit('addToCart', product)"
          >
            <span class="plus-icon">+</span>
            <span class="btn-text">Tambah</span>
          </button>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
.product-card {
  background-color: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #f1f5f9;
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.05);
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 14px 30px rgba(255, 90, 31, 0.12), 0 4px 12px rgba(0, 0, 0, 0.05);
  border-color: #ffe6dc;
}

.image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background-color: #f1f5f9;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.product-card:hover .product-image {
  transform: scale(1.06);
}

.floating-badges {
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
}

.badge-discount {
  background-color: #ef4444;
  color: #ffffff;
  font-weight: 800;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(239, 68, 68, 0.35);
}

.badge-spicy {
  background-color: #ffffff;
  color: #dc2626;
  font-weight: 700;
  font-size: 0.7rem;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.badge-halal {
  position: absolute;
  bottom: 0.75rem;
  right: 0.75rem;
  background: rgba(16, 185, 129, 0.9);
  backdrop-filter: blur(4px);
  color: #ffffff;
  font-weight: 700;
  font-size: 0.65rem;
  padding: 0.2rem 0.55rem;
  border-radius: 9999px;
  letter-spacing: 0.03em;
}

.card-body {
  padding: 1.15rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.category-tag {
  font-size: 0.7rem;
  font-weight: 700;
  color: #ff5a1f;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.35rem;
}

.product-name {
  font-size: 1.05rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 0.5rem;
  line-height: 1.35;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 2.7em;
}

.rating-row {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.8rem;
  margin-bottom: 1rem;
}

.star-icon {
  color: #f59e0b;
  font-size: 0.95rem;
}

.rating-num {
  font-weight: 700;
  color: #1e293b;
}

.review-count,
.unit-text {
  color: #94a3b8;
}

.card-footer {
  margin-top: auto;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-top: 0.75rem;
  border-top: 1px dashed #f1f5f9;
}

.price-container {
  display: flex;
  flex-direction: column;
}

.price-original {
  font-size: 0.75rem;
  color: #94a3b8;
  text-decoration: line-through;
  line-height: 1;
  margin-bottom: 0.25rem;
}

.price-current {
  font-size: 1.15rem;
  font-weight: 800;
  color: #ff5a1f;
  line-height: 1;
}

.card-actions {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.btn-detail {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #f8fafc;
  color: #475569;
  border: 1px solid #e2e8f0;
  border-radius: 9999px;
  padding: 0.55rem 0.85rem;
  font-family: inherit;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-detail:hover {
  background-color: #fff7ed;
  color: #ff5a1f;
  border-color: #ffedd5;
  box-shadow: 0 2px 8px rgba(255, 90, 31, 0.15);
  transform: translateY(-1px);
}

.btn-detail:active {
  transform: scale(0.96);
}

.btn-add-cart {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  background-color: #ff5a1f;
  color: #ffffff;
  border: none;
  border-radius: 9999px;
  padding: 0.55rem 0.95rem;
  font-family: inherit;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-add-cart:hover {
  background-color: #e04810;
  transform: scale(1.04);
  box-shadow: 0 4px 12px rgba(255, 90, 31, 0.35);
}

.btn-add-cart:active {
  transform: scale(0.96);
}

.plus-icon {
  font-size: 1.1rem;
  line-height: 1;
}
</style>
