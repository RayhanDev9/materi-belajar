<script setup lang="ts">


const { show, message, icon = "🛒" } = defineProps<{
  show: boolean;
  message: string;
  icon?: string;
}>();
</script>

<template>
  <Transition name="fade">
    <div v-if="show" class="toast-popup" role="alert" aria-live="polite">
      <span class="toast-icon">{{ icon }}</span>
      <p class="toast-message">{{ message }}</p>
    </div>
  </Transition>
</template>

<style scoped>
.toast-popup {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 0.65rem;
  background-color: #1e293b;
  color: #ffffff;
  padding: 0.85rem 1.25rem;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  font-size: 0.875rem;
  font-weight: 600;
}

.toast-icon {
  font-size: 1.15rem;
}

.toast-message {
  margin: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
