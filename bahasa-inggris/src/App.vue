<template>
  <div class="app-layout" :data-theme="currentTheme">
    <!-- Sidebar Navigation -->
    <aside class="app-sidebar" :class="{ open: isSidebarOpen }">
      <div class="sidebar-header">
        <div class="brand-badge">
          <div class="brand-icon">🇬🇧</div>
          <div class="brand-info">
            <h1>EnglishMaster</h1>
            <span>Aplikasi Belajar Mandiri Pemula</span>
          </div>
        </div>
      </div>

      <!-- Course Level Switcher -->
      <div class="course-switcher-box">
        <span class="switcher-label">PILIH TINGKAT MATERI:</span>
        <div class="course-toggle-tabs">
          <button 
            class="course-tab-btn" 
            :class="{ active: currentCourse === 'materi1' }" 
            @click="switchCourse('materi1')"
          >
            📘 Materi 1: Fondasi
          </button>
          <button 
            class="course-tab-btn" 
            :class="{ active: currentCourse === 'materi2' }" 
            @click="switchCourse('materi2')"
          >
            📗 Materi 2: Pronoun & Noun
          </button>
        </div>
      </div>

      <div class="sidebar-search">
        <div class="search-input-wrap">
          <span class="search-icon">🔍</span>
          <input 
            type="text" 
            v-model="searchQuery" 
            placeholder="Cari materi..." 
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
            <span v-else>{{ m.number || m.id }}</span>
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
              {{ currentCompletedList.length }} / {{ currentCourseModules.length }} Modul ({{ progressPercentage }}%)
            </span>
          </div>
        </div>

        <div class="nav-actions">
          <button class="theme-btn" @click="toggleTheme">
            <span>{{ currentTheme === 'dark' ? '☀️ Terang' : '🌙 Gelap' }}</span>
          </button>
        </div>
      </header>

      <!-- Main Canvas -->
      <main class="content-canvas" @click="isSidebarOpen = false">
        <!-- Module Hero Section -->
        <section class="module-hero">
          <div class="hero-meta">
            <span class="category-tag">{{ activeModule.category }}</span>
            <span class="module-num-tag">
              {{ currentCourse === 'materi1' ? 'Materi 1' : 'Materi 2' }} • Modul {{ activeModule.number || activeModule.id }} dari {{ currentCourseModules.length }}
            </span>
          </div>
          <h2 class="hero-title">
            <span>{{ activeModule.icon }}</span>
            <span>{{ activeModule.title }}</span>
          </h2>
          <p class="hero-tagline">{{ activeModule.tagline }}</p>
          <p class="hero-intro">{{ activeModule.intro }}</p>
        </section>

        <!-- Interactive Playground Widget -->
        <section class="lesson-card">
          <h3 class="section-title">
            <span>🎮 Latihan & Eksplorasi Interaktif</span>
          </h3>

          <!-- ==================== WIDGETS MATERI 1 ==================== -->
          <template v-if="currentCourse === 'materi1'">
            <div v-if="activeModule.id === 1">
              <AlphabetViewer :letters="activeModule.alphabetList" />
            </div>
            <div v-else-if="activeModule.id === 2">
              <NumberPractice />
            </div>
            <div v-else-if="activeModule.id === 3">
              <CalendarPractice />
            </div>
            <div v-else-if="activeModule.id === 4">
              <InteractiveClock />
            </div>
            <div v-else-if="activeModule.id === 5">
              <FamilyTreeViewer :groups="activeModule.familyGroups" />
            </div>
            <div v-else-if="activeModule.id === 6 || activeModule.id === 8 || activeModule.id === 9">
              <SentenceBuilder />
            </div>
            <div v-else-if="activeModule.id === 7">
              <SubjectViewer :actors="activeModule.actors" />
            </div>
            <div v-else-if="activeModule.id === 10">
              <DemonstrativePractice initialMode="positive" />
            </div>
            <div v-else-if="activeModule.id === 11">
              <DemonstrativePractice initialMode="negative" />
            </div>
            <div v-else-if="activeModule.id === 12">
              <DemonstrativePractice initialMode="question" />
            </div>
            <div v-else-if="activeModule.id === 13 || activeModule.id === 14">
              <ArticlePractice />
            </div>
            <div v-else-if="activeModule.id === 15">
              <HaveHasPractice />
            </div>
            <div v-else-if="activeModule.id === 16">
              <ApostrophePractice />
            </div>
          </template>

          <!-- ==================== WIDGETS MATERI 2 ==================== -->
          <template v-else-if="currentCourse === 'materi2'">
            <!-- Modul 1, 2, 3, 4: Pronoun Matrix -->
            <div v-if="activeModule.id >= 101 && activeModule.id <= 104">
              <PronounMatrix />
            </div>
            <!-- Modul 5: Relative Pronoun Lab -->
            <div v-else-if="activeModule.id === 105">
              <RelativePronounLab />
            </div>
            <!-- Modul 6, 7: Indefinite & Demonstrative Pronoun -->
            <div v-else-if="activeModule.id === 106 || activeModule.id === 107">
              <DemonstrativePractice initialMode="positive" />
            </div>
            <!-- Modul 8, 9: Capital Nouns & Plural Transformer -->
            <div v-else-if="activeModule.id === 108 || activeModule.id === 109">
              <PluralTransformer />
            </div>
            <!-- Modul 10, 11: Countable & Uncountable Classifier -->
            <div v-else-if="activeModule.id === 110 || activeModule.id === 111">
              <NounClassifier />
            </div>
            <!-- Modul 12: To-Be Time Machine (Present vs Past) -->
            <div v-else-if="activeModule.id === 112">
              <ToBeTimeMachine />
            </div>
            <!-- Modul 13: Quantifier Lab (Some, Any, Many, Much, A Lot of) -->
            <div v-else-if="activeModule.id === 113">
              <QuantifierLab />
            </div>
          </template>
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
          :key="activeModule.id"
          :moduleId="activeModule.id" 
          :questions="activeModule.quiz" 
          @completed="markModuleCompleted"
        />

        <!-- Pager Navigation -->
        <div class="lesson-nav-pager">
          <button 
            class="pager-btn" 
            :disabled="isFirstModule"
            @click="goToPrevModule"
          >
            ⬅️ Modul Sebelumnya
          </button>

          <button 
            class="pager-btn primary" 
            :disabled="isLastModule"
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
import { modules as materi1List } from './data/modulesData.js';
import { materi2Modules as materi2List } from './data/materi2Data.js';

// Materi 1 Components
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

// Materi 2 Components
import PronounMatrix from './components/materi2/PronounMatrix.vue';
import RelativePronounLab from './components/materi2/RelativePronounLab.vue';
import NounClassifier from './components/materi2/NounClassifier.vue';
import PluralTransformer from './components/materi2/PluralTransformer.vue';
import ToBeTimeMachine from './components/materi2/ToBeTimeMachine.vue';
import QuantifierLab from './components/materi2/QuantifierLab.vue';

const currentCourse = ref('materi1'); // 'materi1' | 'materi2'
const activeId = ref(1);
const searchQuery = ref('');
const isSidebarOpen = ref(false);
const completedMateri1 = ref([]);
const completedMateri2 = ref([]);
const currentTheme = ref('light');

const currentCourseModules = computed(() => {
  return currentCourse.value === 'materi1' ? materi1List : materi2List;
});

const activeModule = computed(() => {
  return currentCourseModules.value.find(m => m.id === activeId.value) || currentCourseModules.value[0];
});

const filteredModules = computed(() => {
  const q = searchQuery.value.toLowerCase().trim();
  if (!q) return currentCourseModules.value;
  return currentCourseModules.value.filter(m => 
    m.title.toLowerCase().includes(q) || 
    m.tagline.toLowerCase().includes(q) ||
    m.category.toLowerCase().includes(q)
  );
});

const currentCompletedList = computed(() => {
  return currentCourse.value === 'materi1' ? completedMateri1.value : completedMateri2.value;
});

const progressPercentage = computed(() => {
  return Math.round((currentCompletedList.value.length / currentCourseModules.value.length) * 100);
});

const isFirstModule = computed(() => {
  const list = currentCourseModules.value;
  return activeId.value === list[0]?.id;
});

const isLastModule = computed(() => {
  const list = currentCourseModules.value;
  return activeId.value === list[list.length - 1]?.id;
});

function isModuleCompleted(id) {
  return currentCompletedList.value.includes(id);
}

function selectModule(id) {
  activeId.value = id;
  isSidebarOpen.value = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function switchCourse(courseKey) {
  currentCourse.value = courseKey;
  searchQuery.value = '';
  if (courseKey === 'materi1') {
    activeId.value = materi1List[0].id;
  } else {
    activeId.value = materi2List[0].id;
  }
  localStorage.setItem('english_master_course', courseKey);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goToPrevModule() {
  const list = currentCourseModules.value;
  const currentIndex = list.findIndex(m => m.id === activeId.value);
  if (currentIndex > 0) {
    selectModule(list[currentIndex - 1].id);
  }
}

function goToNextModule() {
  const list = currentCourseModules.value;
  const currentIndex = list.findIndex(m => m.id === activeId.value);
  if (currentIndex < list.length - 1) {
    selectModule(list[currentIndex + 1].id);
  }
}

function markModuleCompleted(id) {
  if (currentCourse.value === 'materi1') {
    if (!completedMateri1.value.includes(id)) {
      completedMateri1.value.push(id);
      localStorage.setItem('english_master_completed_materi1', JSON.stringify(completedMateri1.value));
    }
  } else {
    if (!completedMateri2.value.includes(id)) {
      completedMateri2.value.push(id);
      localStorage.setItem('english_master_completed_materi2', JSON.stringify(completedMateri2.value));
    }
  }
}

function toggleTheme() {
  currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', currentTheme.value);
  localStorage.setItem('english_master_theme', currentTheme.value);
}

onMounted(() => {
  const savedCourse = localStorage.getItem('english_master_course');
  if (savedCourse && (savedCourse === 'materi1' || savedCourse === 'materi2')) {
    currentCourse.value = savedCourse;
    activeId.value = savedCourse === 'materi1' ? materi1List[0].id : materi2List[0].id;
  }

  const savedM1 = localStorage.getItem('english_master_completed_materi1');
  if (savedM1) {
    try { completedMateri1.value = JSON.parse(savedM1); } catch (e) {}
  }

  const savedM2 = localStorage.getItem('english_master_completed_materi2');
  if (savedM2) {
    try { completedMateri2.value = JSON.parse(savedM2); } catch (e) {}
  }

  const savedTheme = localStorage.getItem('english_master_theme');
  if (savedTheme) {
    currentTheme.value = savedTheme;
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
});
</script>

<style scoped>
.course-switcher-box {
  padding: 0.75rem 1.25rem 0.25rem;
}

.switcher-label {
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.5px;
  color: var(--text-muted);
  display: block;
  margin-bottom: 0.4rem;
}

.course-toggle-tabs {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.course-tab-btn {
  background: var(--surface-2);
  border: 1.5px solid var(--border-color);
  padding: 0.5rem 0.75rem;
  border-radius: var(--radius-md);
  font-family: 'Outfit', sans-serif;
  font-size: 0.82rem;
  font-weight: 700;
  text-align: left;
  cursor: pointer;
  color: var(--text-body);
  transition: all 0.2s;
}

.course-tab-btn:hover {
  background: var(--surface);
  border-color: var(--primary);
}

.course-tab-btn.active {
  background: var(--primary-gradient);
  border-color: transparent;
  color: white;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
}
</style>
