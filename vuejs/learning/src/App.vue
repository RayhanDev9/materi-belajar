<script setup lang="ts">
import { reactive } from 'vue';

// State sederhana untuk styling judul
const styles = reactive({
  heading: 'text-center text-primary',
  size: 38,
});
</script>

<template>
  <div class="learning-container">
    <!-- Header Halaman -->
    <header class="py-3 bg-white border-bottom shadow-sm">
      <h1 
        :class="styles.heading" 
        class="animate__animated animate__bounce"
        :style="{ fontSize: styles.size + 'px' }"
      >
        Belajar Vue 3 &amp; VueRouter
      </h1>
    </header>

    <!-- Bar Navigasi (RouterLink) -->
    <nav class="nav-bar">
      <div class="nav-brand">
        📚 <strong>Vue 3 Learning Playground</strong>
      </div>

      <div class="nav-tabs">
        <!-- 
          RouterLink: Komponen resmi Vue Router untuk berpindah halaman tanpa reload.
          Class 'active' otomatis ditambahkan ketika URL cocok dengan 'to="..."'.
        -->
        <RouterLink to="/katalog" class="nav-link-btn">
          Katalog Buku
        </RouterLink>

        <RouterLink to="/todo-list" class="nav-link-btn">
          Daftar Tugas
        </RouterLink>

        <RouterLink to="/lifecycle" class="nav-link-btn">
          Materi 3: Lifecycle Hooks
        </RouterLink>

        <RouterLink to="/getdata" class="nav-link-btn">
          Materi 4: Get Data
        </RouterLink>
      </div>
    </nav>

    <!-- Wadah Penampil Halaman (RouterView) -->
    <main class="content-wrapper">
      <!-- 
        RouterView: Merender halaman yang sesuai dengan rute URL aktif saat ini.
        Menggunakan Transition agar pergantian halaman memiliki animasi fade yang halus.
      -->
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>
  </div>
</template>

<style scoped>
/* 1. Tata Letak Dasar */
.learning-container {
  min-height: 100vh;
  background-color: #f8fafc;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* 2. Navigasi */
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

/* 3. Tombol Navigasi (RouterLink) */
.nav-link-btn {
  display: inline-block;
  padding: 10px 18px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  background-color: #ffffff;
  color: #64748b;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nav-link-btn:hover {
  color: #1e293b;
  background-color: #f1f5f9;
}

/* Class 'active' otomatis ditempelkan oleh Vue Router ke link yang sedang dikunjungi */
.nav-link-btn.active {
  background-color: #42b883;
  color: #ffffff;
  border-color: #42b883;
  box-shadow: 0 2px 8px rgba(66, 184, 131, 0.3);
}

/* 4. Area Konten Halaman */
.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 20px 48px;
}

/* 5. Animasi Transisi Halus Saat Berpindah Rute */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
