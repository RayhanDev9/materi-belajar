<template>
  <div class="app-layout" :data-theme="currentTheme">
    <!-- Sidebar Navigation -->
    <aside class="app-sidebar" :class="{ open: isSidebarOpen }">
      <div class="sidebar-header">
        <div class="brand-badge">
          <div class="brand-icon">🇬🇧</div>
          <div class="brand-info">
            <h1>EnglishMaster</h1>
            <span>Materi 1: Fondasi Bahasa Inggris</span>
          </div>
        </div>
      </div>

      <div class="sidebar-search">
        <div class="search-input-wrap">
          <span class="search-icon">🔍</span>
          <input 
            type="text" 
            v-model="searchQuery" 
            placeholder="Cari materi (misal: verb, jam, angka)..." 
            class="search-input"
          />
        </div>
      </div>

      <nav class="module-nav-list">
        <button
          v-for="m in filteredModules"
          :key="m.id"
          class="nav-item"
          :class="{
            active: activeModule.id === m.id,
            completed: isModuleCompleted(m.id)
          }"
          @click="selectModule(m.id)"
        >
          <div class="nav-num">
            <span v-if="isModuleCompleted(m.id)">✓</span>
            <span v-else>{{ m.id }}</span>
          </div>
          <div class="nav-meta">
            <span class="nav-title">{{ m.icon }} {{ m.title }}</span>
            <span class="nav-cat">{{ m.category }}</span>
          </div>
        </button>
      </nav>
    </aside>

    <!-- Main Content Wrapper -->
    <div class="main-wrapper">
      <!-- Top Navbar -->
      <header class="top-navbar">
        <div style="display: flex; align-items: center; gap: 1rem;">
          <button class="mobile-toggle-btn" @click="isSidebarOpen = !isSidebarOpen">
            ☰
          </button>
          <div class="progress-widget">
            <div class="progress-bar-bg">
              <div 
                class="progress-bar-fill" 
                :style="`width: ${progressPercentage}%`"
              ></div>
            </div>
            <span class="progress-label">
              {{ completedModules.length }} / {{ modules.length }} Materi Dikuasai ({{ progressPercentage }}%)
            </span>
          </div>
        </div>

        <div class="nav-actions">
          <button class="theme-btn" @click="toggleTheme">
            <span>{{ currentTheme === 'dark' ? '☀️ Mode Terang' : '🌙 Mode Gelap' }}</span>
          </button>
        </div>
      </header>

      <!-- Main Canvas -->
      <main class="content-canvas" @click="isSidebarOpen = false">
        <!-- Module Hero Section -->
        <section class="module-hero">
          <div class="hero-meta">
            <span class="category-tag">{{ activeModule.category }}</span>
            <span class="module-num-tag">Modul {{ activeModule.id }} dari {{ modules.length }}</span>
          </div>
          <h2 class="hero-title">
            <span>{{ activeModule.icon }}</span>
            <span>{{ activeModule.title }}</span>
          </h2>
          <p class="hero-tagline">{{ activeModule.tagline }}</p>
          <p class="hero-intro">{{ activeModule.intro }}</p>
        </section>

        <!-- Interactive Playground Widget for this Module -->
        <section class="lesson-card">
          <h3 class="section-title">
            <span>🎮 Latihan & Eksplorasi Interaktif</span>
          </h3>

          <!-- Modul 1: Alphabet -->
          <div v-if="activeModule.id === 1">
            <AlphabetViewer :letters="activeModule.alphabetList" />
          </div>

          <!-- Modul 2: Numbers -->
          <div v-else-if="activeModule.id === 2">
            <NumberPractice />
          </div>

          <!-- Modul 3: Calendar -->
          <div v-else-if="activeModule.id === 3">
            <CalendarPractice />
          </div>

          <!-- Modul 4: Time Telling -->
          <div v-else-if="activeModule.id === 4">
            <InteractiveClock />
          </div>

          <!-- Modul 5: Family -->
          <div v-else-if="activeModule.id === 5">
            <FamilyTreeViewer :groups="activeModule.familyGroups" />
          </div>

          <!-- Modul 6, 8, 9: Sentence Patterns, Predicate, Objects -->
          <div v-else-if="activeModule.id === 6 || activeModule.id === 8 || activeModule.id === 9">
            <SentenceBuilder />
          </div>

          <!-- Modul 7: Subject -->
          <div v-else-if="activeModule.id === 7">
            <SubjectViewer :actors="activeModule.actors" />
          </div>

          <!-- Modul 10, 11, 12: There Is/Are, This, That -->
          <div v-else-if="activeModule.id === 10">
            <DemonstrativePractice initialMode="positive" />
          </div>
          <div v-else-if="activeModule.id === 11">
            <DemonstrativePractice initialMode="negative" />
          </div>
          <div v-else-if="activeModule.id === 12">
            <DemonstrativePractice initialMode="question" />
          </div>

          <!-- Modul 13, 14: Articles The, A, An -->
          <div v-else-if="activeModule.id === 13 || activeModule.id === 14">
            <ArticlePractice />
          </div>

          <!-- Modul 15: Have vs Has -->
          <div v-else-if="activeModule.id === 15">
            <HaveHasPractice />
          </div>

          <!-- Modul 16: Apostrophe + S -->
          <div v-else-if="activeModule.id === 16">
            <ApostrophePractice />
          </div>
        </section>

        <!-- Detailed Rules & Explanations -->
        <section v-if="activeModule.rules" class="lesson-card">
          <h3 class="section-title">
            <span>📖 Rangkuman Rumus & Penjelasan</span>
          </h3>
          <div 
            v-for="(rule, idx) in activeModule.rules" 
            :key="idx" 
            class="rule-group"
          >
            <h4>{{ rule.title }}</h4>
            <p>{{ rule.desc }}</p>
            <ul class="rule-items-list">
              <li v-for="(it, i) in rule.items" :key="i">
                {{ it }}
              </li>
            </ul>
          </div>
        </section>

        <!-- Pro Tip & Common Mistakes -->
        <div class="tip-box">
          <div class="tip-title">
            <span>💡 Trik Rahasia Ingat Cepat</span>
          </div>
          <div class="tip-content">{{ activeModule.proTip }}</div>
        </div>

        <div class="mistake-box">
          <div class="mistake-title">
            <span>⚠️ Waspada Kesalahan Pemula</span>
          </div>
          <div class="mistake-content">{{ activeModule.commonMistakes }}</div>
        </div>

        <!-- Interactive Quiz -->
        <QuizCard 
          :moduleId="activeModule.id" 
          :questions="activeModule.quiz" 
          @completed="markModuleCompleted"
        />

        <!-- Pager Navigation -->
        <div class="lesson-nav-pager">
          <button 
            class="pager-btn" 
            :disabled="activeModule.id <= 1"
            @click="goToPrevModule"
          >
            ⬅️ Modul Sebelumnya
          </button>

          <button 
            class="pager-btn primary" 
            :disabled="activeModule.id >= modules.length"
            @click="goToNextModule"
          >
            Modul Selanjutnya ➡️
          </button>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { modules } from './data/modulesData.js';

import AlphabetViewer from './components/AlphabetViewer.vue';
import NumberPractice from './components/NumberPractice.vue';
import CalendarPractice from './components/CalendarPractice.vue';
import InteractiveClock from './components/InteractiveClock.vue';
import FamilyTreeViewer from './components/FamilyTreeViewer.vue';
import SentenceBuilder from './components/SentenceBuilder.vue';
import SubjectViewer from './components/SubjectViewer.vue';
import DemonstrativePractice from './components/DemonstrativePractice.vue';
import ArticlePractice from './components/ArticlePractice.vue';
import HaveHasPractice from './components/HaveHasPractice.vue';
import ApostrophePractice from './components/ApostrophePractice.vue';
import QuizCard from './components/QuizCard.vue';

const activeId = ref(1);
const searchQuery = ref('');
const isSidebarOpen = ref(false);
const completedModules = ref([]);
const currentTheme = ref('light');

const activeModule = computed(() => {
  return modules.find(m => m.id === activeId.value) || modules[0];
});

const filteredModules = computed(() => {
  const q = searchQuery.value.toLowerCase().trim();
  if (!q) return modules;
  return modules.filter(m => 
    m.title.toLowerCase().includes(q) || 
    m.tagline.toLowerCase().includes(q) ||
    m.category.toLowerCase().includes(q)
  );
});

const progressPercentage = computed(() => {
  return Math.round((completedModules.value.length / modules.length) * 100);
});

function isModuleCompleted(id) {
  return completedModules.value.includes(id);
}

function selectModule(id) {
  activeId.value = id;
  isSidebarOpen.value = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goToPrevModule() {
  if (activeId.value > 1) {
    selectModule(activeId.value - 1);
  }
}

function goToNextModule() {
  if (activeId.value < modules.length) {
    selectModule(activeId.value + 1);
  }
}

function markModuleCompleted(id) {
  if (!completedModules.value.includes(id)) {
    completedModules.value.push(id);
    localStorage.setItem('english_master_completed', JSON.stringify(completedModules.value));
  }
}

function toggleTheme() {
  currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', currentTheme.value);
  localStorage.setItem('english_master_theme', currentTheme.value);
}

onMounted(() => {
  const savedProgress = localStorage.getItem('english_master_completed');
  if (savedProgress) {
    try {
      completedModules.value = JSON.parse(savedProgress);
    } catch (e) {}
  }

  const savedTheme = localStorage.getItem('english_master_theme');
  if (savedTheme) {
    currentTheme.value = savedTheme;
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
});
</script>
