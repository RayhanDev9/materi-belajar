<script setup lang="ts"></script>

<template>
  <section class="detail-card skeleton-card" aria-label="Loading product details">
    <div class="skeleton-gallery">
      <div class="skeleton-box skeleton-main-image"></div>
      <div class="skeleton-thumbs">
        <div class="skeleton-box skeleton-thumb"></div>
        <div class="skeleton-box skeleton-thumb"></div>
      </div>
      <div class="skeleton-box skeleton-desc-line" style="margin-top: 1.5rem;"></div>
      <div class="skeleton-box skeleton-desc-line short"></div>
    </div>
    <div class="skeleton-info">
      <div class="skeleton-box skeleton-tag"></div>
      <div class="skeleton-box skeleton-title"></div>
      <div class="skeleton-box skeleton-rating"></div>
      <div class="skeleton-box skeleton-price"></div>
      <div class="skeleton-box skeleton-action-bar"></div>
    </div>
  </section>
</template>

<style scoped>
.detail-card {
  background-color: #ffffff;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.06);
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.25rem;
}

@media (min-width: 900px) {
  .detail-card {
    grid-template-columns: 460px 1fr;
    gap: 3rem;
    padding: 2.5rem;
  }
}

.skeleton-card {
  pointer-events: none;
}

.skeleton-box {
  background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 12px;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

.skeleton-main-image {
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 16px;
  margin-bottom: 1rem;
}

.skeleton-thumbs {
  display: flex;
  gap: 0.75rem;
}

.skeleton-thumb {
  width: 72px;
  height: 72px;
}

.skeleton-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skeleton-tag {
  width: 100px;
  height: 24px;
}

.skeleton-title {
  width: 80%;
  height: 38px;
}

.skeleton-rating {
  width: 140px;
  height: 20px;
}

.skeleton-price {
  width: 200px;
  height: 48px;
}

.skeleton-desc-line {
  width: 100%;
  height: 16px;
}

.skeleton-desc-line.short {
  width: 60%;
}

.skeleton-action-bar {
  margin-top: 2rem;
  width: 100%;
  height: 60px;
}
</style>
