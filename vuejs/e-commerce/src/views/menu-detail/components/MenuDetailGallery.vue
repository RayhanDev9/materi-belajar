<script setup lang="ts">
import { ref, computed } from "vue";

const props = defineProps<{
  images?: string[];
  productName: string;
  discountPercent?: number;
  isSpicy?: boolean;
  spicyLevel?: number;
  isHalal?: boolean;
  isVegetarian?: boolean;
}>();

const selectedImageIndex = ref(0);

const activeImage = computed(() => {
  if (!props.images?.length) {
    return "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800";
  }
  return props.images[selectedImageIndex.value] || props.images[0];
});
</script>

<template>
  <div class="gallery-column">
    <div class="main-image-wrapper">
      <img
        :src="activeImage"
        :alt="productName"
        class="main-image"
      />

      <!-- Floating Badges Sesuai Theme -->
      <div class="floating-badges">
        <span v-if="discountPercent" class="badge-discount">
          -{{ discountPercent }}% OFF
        </span>
        <span v-if="isSpicy" class="badge-spicy">
          🌶️ Lv.{{ spicyLevel || 1 }} Pedas
        </span>
      </div>

      <div class="floating-bottom-badges">
        <span v-if="isHalal" class="badge-halal">✓ 100% Halal</span>
        <span v-if="isVegetarian" class="badge-veg">🌱 Vegetarian</span>
      </div>
    </div>

    <!-- Thumbnail Selector (jika gambar > 1) -->
    <div v-if="images && images.length > 1" class="thumbnail-list">
      <button
        v-for="(img, idx) in images"
        :key="idx"
        type="button"
        class="thumb-button"
        :class="{ active: selectedImageIndex === idx }"
        @click="selectedImageIndex = idx"
      >
        <img :src="img" :alt="`${productName} preview ${idx + 1}`" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.gallery-column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.main-image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 16px;
  overflow: hidden;
  background-color: #f1f5f9;
  border: 1px solid #e2e8f0;
}

.main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.main-image-wrapper:hover .main-image {
  transform: scale(1.04);
}

.floating-badges {
  position: absolute;
  top: 14px;
  left: 14px;
  right: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  pointer-events: none;
}

.badge-discount {
  background: #ef4444;
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.35rem 0.75rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(239, 68, 68, 0.3);
}

.badge-spicy {
  background: #fef2f2;
  color: #dc2626;
  border: 1px solid #fecaca;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.35rem 0.75rem;
  border-radius: 8px;
  backdrop-filter: blur(4px);
}

.floating-bottom-badges {
  position: absolute;
  bottom: 14px;
  left: 14px;
  display: flex;
  gap: 0.5rem;
  pointer-events: none;
}

.badge-halal {
  background-color: #10b981;
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.3rem 0.7rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(16, 185, 129, 0.25);
}

.badge-veg {
  background-color: #d1fae5;
  color: #065f46;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.3rem 0.7rem;
  border-radius: 8px;
}

.thumbnail-list {
  display: flex;
  gap: 0.75rem;
  overflow-x: auto;
  padding-bottom: 0.25rem;
  scrollbar-width: none;
}

.thumbnail-list::-webkit-scrollbar {
  display: none;
}

.thumb-button {
  width: 72px;
  height: 72px;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid #e2e8f0;
  padding: 0;
  background: transparent;
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.2s ease;
}

.thumb-button.active {
  border-color: #ff5a1f;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 90, 31, 0.2);
}

.thumb-button img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
