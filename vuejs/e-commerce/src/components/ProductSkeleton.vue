<script setup lang="ts">
withDefaults(
  defineProps<{
    count?: number;
  }>(),
  {
    count: 8,
  }
);
</script>

<template>
  <div class="product-grid">
    <div v-for="n in count" :key="n" class="skeleton-card">
      <div class="skeleton-img shimmer"></div>
      <div class="skeleton-content">
        <div class="skeleton-line shimmer title"></div>
        <div class="skeleton-line shimmer half"></div>
        <div class="skeleton-footer">
          <div class="skeleton-line shimmer price"></div>
          <div class="skeleton-btn shimmer"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1.25rem;
}

@media (min-width: 520px) {
  .product-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.25rem;
  }
}

@media (min-width: 820px) {
  .product-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.5rem;
  }
}

@media (min-width: 1120px) {
  .product-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1.5rem;
  }
}

.skeleton-card {
  background-color: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #f1f5f9;
  height: 340px;
  display: flex;
  flex-direction: column;
}

.skeleton-img {
  width: 100%;
  aspect-ratio: 4 / 3;
  background-color: #e2e8f0;
}

.skeleton-content {
  padding: 1.15rem;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  flex-grow: 1;
}

.skeleton-line {
  background-color: #e2e8f0;
  border-radius: 4px;
  height: 14px;
}

.skeleton-line.title {
  height: 20px;
  width: 85%;
}

.skeleton-line.half {
  width: 50%;
}

.skeleton-line.price {
  width: 45%;
  height: 24px;
}

.skeleton-footer {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.skeleton-btn {
  width: 70px;
  height: 32px;
  border-radius: 9999px;
  background-color: #e2e8f0;
}

.shimmer {
  background: linear-gradient(
    90deg,
    #f1f5f9 25%,
    #e2e8f0 50%,
    #f1f5f9 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
