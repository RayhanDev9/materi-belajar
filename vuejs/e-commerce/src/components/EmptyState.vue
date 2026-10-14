<script setup lang="ts">
withDefaults(
  defineProps<{
    icon?: string;
    title: string;
    description?: string;
  }>(),
  {
    icon: "🔍",
  }
);
</script>

<template>
  <div class="state-box">
    <div class="state-icon">{{ icon }}</div>
    <h3 class="state-title">{{ title }}</h3>
    <p v-if="description" class="state-desc">{{ description }}</p>
    <div v-if="$slots.default" class="state-actions">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.state-box {
  background-color: #ffffff;
  border-radius: 16px;
  padding: 3.5rem 1.5rem;
  text-align: center;
  border: 1px dashed #cbd5e1;
  max-width: 480px;
  margin: 2rem auto;
}

.state-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.state-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
  color: #0f172a;
}

.state-desc {
  color: #64748b;
  font-size: 0.9rem;
  margin: 0 0 1.5rem;
}

.state-actions {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
}
</style>
