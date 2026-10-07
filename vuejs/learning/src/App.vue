<script setup lang="ts">
import { ref } from 'vue';
import Materi1Katalog from './components/materi/Materi1Katalog.vue';
import Materi2TodoList from './components/materi/Materi2TodoList.vue';

// Menu pilihan materi
const activeTab = ref<'materi1' | 'materi2'>('materi2');
</script>

<template>
  <div class="learning-container">
    <!-- Navigasi Materi Pembelajaran -->
    <nav class="nav-bar">
      <div class="nav-brand">
        📚 <strong>Vue 3 Learning Playground</strong>
      </div>
      <div class="nav-tabs">
        <button 
          :class="{ active: activeTab === 'materi1' }" 
          @click="activeTab = 'materi1'"
        >
          Materi 1: Katalog & Directives
        </button>
        <button 
          :class="{ active: activeTab === 'materi2' }" 
          @click="activeTab = 'materi2'"
        >
          Materi 2: Smart Todo List
        </button>
      </div>
    </nav>

    <!-- Konten Materi yang Sedang Aktif -->
    <main class="content-wrapper">
      <Materi1Katalog v-if="activeTab === 'materi1'" />
      <Materi2TodoList v-else-if="activeTab === 'materi2'" />
    </main>
  </div>
</template>

<style scoped>
.learning-container {
  min-height: 100vh;
  background-color: #f8fafc;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  background-color: #ffffff;
  padding: 16px 28px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid #e2e8f0;
}

.nav-brand {
  font-size: 1.15rem;
  color: #0f172a;
}

.nav-tabs {
  display: flex;
  gap: 10px;
}

.nav-tabs button {
  padding: 10px 18px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  background-color: #ffffff;
  color: #64748b;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nav-tabs button:hover {
  color: #1e293b;
  background-color: #f1f5f9;
}

.nav-tabs button.active {
  background-color: #42b883;
  color: #ffffff;
  border-color: #42b883;
  box-shadow: 0 2px 8px rgba(66, 184, 131, 0.3);
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 20px 48px;
}
</style>
