<script setup lang="ts">
import { ref, computed } from 'vue';
import TodoItem from './TodoItem.vue';


// Tipe data untuk setiap item todo
type Todo = {
  id: number;
  text: string;
  isDone: boolean;
};


// =========================================================
// TUGAS 1: Deklarasikan State (ref)
// =========================================================
const inputTask = ref(""); // Menyimpan teks yang diketik di input

const todos = ref<Todo[]>([
  { id: 1, text: "Belajar sintaks dasar Vue 3", isDone: true },
  { id: 2, text: "Memahami konsep ref dan reactive", isDone: true },
  { id: 3, text: "Mengerjakan studi kasus penggabungan data", isDone: false },
]);

const filterStatus = ref<"all" | "active" | "done">("all");

// =========================================================
// TUGAS 2: Logika Tambah Tugas (Push ke Array)
// =========================================================
function addTask() {
  if (inputTask.value.trim()) {
    const newTask: Todo = {
      id: Date.now(),
      text: inputTask.value,
      isDone: false
    };
    
    todos.value.push(newTask);
    inputTask.value = "";
  } 
}

// =========================================================
// TUGAS 3: Penggabungan Data & Statistik (Gunakan computed)
// =========================================================
// Hitung berapa total seluruh tugas
const totalTasks = computed(() => {
  return todos.value.length;
});

// Hitung berapa tugas yang sudah selesai (isDone === true)
const completedTasks = computed(() => {
  return todos.value.filter(t => t.isDone).length;
});

// Gabungkan menjadi teks statistik, contoh: "2 dari 3 tugas selesai"
const progressSummary = computed(() => {
  return `${completedTasks.value} dari ${totalTasks.value} tugas selesai`;
});

// =========================================================
// TUGAS 4: Filter Daftar Tugas (Gunakan computed)
// =========================================================
// Kembalikan array todos berdasarkan filterStatus ("all" | "active" | "done")
const filteredTodos = computed(() => {
  if (filterStatus.value === "active") {
    return todos.value.filter(t => !t.isDone);
  }
  if (filterStatus.value === "done") {
    return todos.value.filter(t => t.isDone);
  }
  return todos.value; // default "all"
});

// =========================================================
// TUGAS 5: Ubah Status Selesai / Belum Selesai & Hapus (via Event Emit)
// =========================================================
function toggleTodo(id: number) {
  const target = todos.value.find(t => t.id === id);
  if (target) {
    target.isDone = !target.isDone;
  }
}

function deleteTask(id: number) {
  todos.value = todos.value.filter(t => t.id !== id);
}
</script>

<template>
  <main class="todo-app">
    <header class="app-header">
      <h1>📋 My Smart To-Do List</h1>
      <!-- Tampilkan gabungan teks progres di sini -->
      <p class="summary">{{ progressSummary }}</p>
    </header>

    <!-- Form Input Tambah Tugas -->
    <form class="input-form" @submit.prevent="addTask">
      <input 
        v-model="inputTask" 
        type="text" 
        placeholder="Tulis tugas baru Anda di sini..." 
      />
      <button type="submit" class="btn-add">Tambah</button>
    </form>

    <!-- Tombol Filter -->
    <div class="filter-tabs">
      <button 
        :class="{ active: filterStatus === 'all' }" 
        @click="filterStatus = 'all'"
      >
        Semua ({{ totalTasks }})
      </button>
      <button 
        :class="{ active: filterStatus === 'active' }" 
        @click="filterStatus = 'active'"
      >
        Belum Selesai ({{ totalTasks - completedTasks }})
      </button>
      <button 
        :class="{ active: filterStatus === 'done' }" 
        @click="filterStatus = 'done'"
      >
        Selesai ({{ completedTasks }})
      </button>
    </div>

    <!-- Daftar List Tugas Menggunakan Komponen Anak -->
    <ul class="task-list">
      <TodoItem 
        v-for="item in filteredTodos" 
        :key="item.id" 
        :id="item.id"
        :text="item.text"
        :is-done="item.isDone"
        @toggle="toggleTodo"
        @delete="deleteTask"
      />

      <li v-if="filteredTodos.length === 0" class="empty-state">
        Tidak ada tugas di kategori ini! 🎉
      </li>
    </ul>
  </main>
</template>

<style scoped>
.todo-app {
  max-width: 540px;
  margin: 20px auto;
  padding: 24px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  font-family: system-ui, -apple-system, sans-serif;
  color: #1e293b;
}

.app-header h1 {
  font-size: 1.5rem;
  margin: 0 0 6px;
  text-align: center;
}

.summary {
  text-align: center;
  color: #64748b;
  font-size: 0.95rem;
  margin: 0 0 20px;
}

.input-form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.input-form input {
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 0.95rem;
  outline: none;
}

.input-form input:focus {
  border-color: #42b883;
}

.btn-add {
  padding: 12px 20px;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}

.filter-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 12px;
}

.filter-tabs button {
  background: none;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  color: #64748b;
  font-size: 0.88rem;
  font-weight: 500;
}

.filter-tabs button.active {
  background-color: #eff6ff;
  color: #2563eb;
  font-weight: 600;
}

.task-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.empty-state {
  text-align: center;
  padding: 24px;
  color: #94a3b8;
  font-size: 0.95rem;
}
</style>
