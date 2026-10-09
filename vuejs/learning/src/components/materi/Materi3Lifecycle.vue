<script setup lang="ts">
import { ref, onErrorCaptured } from 'vue';
import LifecycleChild from './LifecycleChild.vue';

interface LogItem {
  id: number;
  time: string;
  hook: string;
  color: string;
  message: string;
}

const logs = ref<LogItem[]>([]);
const isChildVisible = ref(true);
const useKeepAlive = ref(false); // Toggle mode KeepAlive vs Unmount biasa
const capturedError = ref<string | null>(null);

function addLog(hook: string, color: string, message: string) {
  const now = new Date();
  const time = now.toTimeString().split(' ')[0] + '.' + String(now.getMilliseconds()).padStart(3, '0');
  logs.value.unshift({
    id: Date.now() + Math.random(),
    time,
    hook,
    color,
    message,
  });
}

function clearLogs() {
  logs.value = [];
}

// 7. onErrorCaptured (Error Boundary)
onErrorCaptured((err, instance, info) => {
  addLog(
    'onErrorCaptured',
    'bg-danger text-white',
    `Menangkap error dari anak: "${(err as Error).message}" (Info: ${info})`
  );
  capturedError.value = (err as Error).message;
  // Remount agar komponen kembali bersih
  isChildVisible.value = false;
  setTimeout(() => {
    isChildVisible.value = true;
  }, 100);
  return false;
});
</script>

<template>
  <div class="container py-4">
    <!-- Header Card -->
    <div class="card shadow-sm border-0 mb-4 bg-white">
      <div class="card-body p-4">
        <h2 class="card-title fw-bold text-dark mb-2">
          🔬 Vue 3 Complete Lifecycle Hooks Visualizer (12 Hooks)
        </h2>
        <p class="text-secondary mb-0">
          Uji coba interaktif untuk melihat langsung seluruh <strong>12 Lifecycle Hooks</strong> di Vue 3: Standard (Mount, Update, Unmount), Debugging (RenderTracked, RenderTriggered), Cache (KeepAlive Activated/Deactivated), SSR (ServerPrefetch), dan Error Handling.
        </p>
      </div>
    </div>

    <!-- Bar Kontrol Utama & Toggle Mode KeepAlive -->
    <div class="card shadow-sm border-0 mb-4 p-3 bg-white">
      <div class="d-flex flex-wrap gap-3 align-items-center justify-content-between">
        <!-- Kontrol Tampil / Sembunyi -->
        <div class="d-flex gap-2 flex-wrap align-items-center">
          <button 
            class="btn fw-semibold"
            :class="isChildVisible ? 'btn-danger' : 'btn-success'"
            @click="isChildVisible = !isChildVisible"
          >
            {{ isChildVisible ? (useKeepAlive ? '📦 Sembunyikan (Memicu onDeactivated)' : '🔴 Lepas Komponen (Unmount)') : (useKeepAlive ? '⚡ Tampilkan (Memicu onActivated)' : '🟢 Pasang Komponen (Mount)') }}
          </button>

          <!-- Toggle Mode KeepAlive -->
          <div class="form-check form-switch ms-2 d-flex align-items-center gap-2">
            <input 
              v-model="useKeepAlive" 
              class="form-check-input" 
              type="checkbox" 
              id="keepAliveSwitch" 
            />
            <label class="form-check-label small fw-bold text-dark" for="keepAliveSwitch">
              Mode &lt;KeepAlive&gt; (Uji Coba onActivated / onDeactivated)
            </label>
          </div>

          <button 
            v-if="capturedError" 
            class="btn btn-outline-warning btn-sm ms-2"
            @click="capturedError = null"
          >
            Reset Status Error
          </button>
        </div>

        <button class="btn btn-outline-secondary btn-sm" @click="clearLogs">
          🧹 Bersihkan Log
        </button>
      </div>
    </div>

    <!-- Alert jika onErrorCaptured terpicu -->
    <div v-if="capturedError" class="alert alert-danger shadow-sm d-flex align-items-center gap-3 mb-4 animate__animated animate__shakeX">
      <span class="fs-3">🛡️</span>
      <div>
        <strong class="d-block">onErrorCaptured() Berhasil Menangkap Error!</strong>
        <span class="small">Pesan error: <code>{{ capturedError }}</code> (Komponen berhasil di-recover otomatis).</span>
      </div>
    </div>

    <!-- Grid Layout Dua Kolom -->
    <div class="row g-4">
      <!-- Sisi Kiri: Komponen Target -->
      <div class="col-lg-6">
        <h5 class="fw-bold text-dark mb-3">📍 Area Komponen Target</h5>

        <!-- RENDER DENGAN / TANPA KEEPALIVE -->
        <KeepAlive v-if="useKeepAlive">
          <LifecycleChild v-if="isChildVisible" @log="addLog" />
        </KeepAlive>
        
        <LifecycleChild v-else-if="isChildVisible" @log="addLog" />

        <div v-if="!isChildVisible" class="card p-5 text-center text-muted bg-light border-dashed">
          <p class="fs-1 mb-2">{{ useKeepAlive ? '📦' : '💤' }}</p>
          <h5>{{ useKeepAlive ? 'Komponen Masuk Cache Memori (Deactivated)' : 'Komponen Dicopot dari DOM (Unmounted)' }}</h5>
          <p class="small mb-0">
            {{ useKeepAlive ? 'Komponen tidak dihancurkan! Nilai counter & input teks masih utuh di RAM.' : 'Komponen dihancurkan sepenuhnya dari DOM & memori.' }}
          </p>
        </div>

        <!-- Panduan 12 Lifecycle Hooks -->
        <div class="card mt-4 border-0 shadow-sm bg-white p-3 text-start">
          <h6 class="fw-bold mb-2">📚 Daftar Lengkap 12 Lifecycle Hooks:</h6>
          <div class="row g-2 small text-secondary">
            <div class="col-6">
              <strong class="d-block text-dark">Siklus Standar:</strong>
              • <code>onBeforeMount</code><br>
              • <code>onMounted</code><br>
              • <code>onBeforeUpdate</code><br>
              • <code>onUpdated</code><br>
              • <code>onBeforeUnmount</code><br>
              • <code>onUnmounted</code>
            </div>
            <div class="col-6">
              <strong class="d-block text-dark">Khusus &amp; Debugging:</strong>
              • <code>onRenderTracked</code> (Debug)<br>
              • <code>onRenderTriggered</code> (Debug)<br>
              • <code>onActivated</code> (KeepAlive)<br>
              • <code>onDeactivated</code> (KeepAlive)<br>
              • <code>onServerPrefetch</code> (SSR)<br>
              • <code>onErrorCaptured</code> (Error)
            </div>
          </div>
        </div>
      </div>

      <!-- Sisi Kanan: Live Terminal Log Hooks -->
      <div class="col-lg-6">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h5 class="fw-bold text-dark m-0">🖥️ Live Terminal Log Hooks</h5>
          <span class="badge bg-secondary">{{ logs.length }} event tercatat</span>
        </div>

        <div class="log-terminal p-3 rounded bg-dark text-light shadow-sm">
          <div v-if="logs.length === 0" class="text-secondary text-center py-5">
            <p class="mb-1">Belum ada aktivitas.</p>
            <small>Lakukan aksi di sebelah kiri untuk melihat log lifecycle.</small>
          </div>

          <div v-else class="log-list">
            <div 
              v-for="log in logs" 
              :key="log.id" 
              class="log-row p-2 mb-2 rounded border border-secondary border-opacity-25 animate__animated animate__fadeInDown"
            >
              <div class="d-flex justify-content-between align-items-center mb-1">
                <span class="badge font-monospace" :class="log.color">
                  {{ log.hook }}()
                </span>
                <span class="text-secondary small font-monospace">{{ log.time }}</span>
              </div>
              <p class="m-0 text-light small font-monospace ps-1">{{ log.message }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.border-dashed {
  border: 2px dashed #cbd5e1;
}

.log-terminal {
  min-height: 520px;
  max-height: 580px;
  overflow-y: auto;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  background-color: #0f172a !important;
}

.log-row {
  background-color: rgba(255, 255, 255, 0.04);
}

.log-row:hover {
  background-color: rgba(255, 255, 255, 0.08);
}
</style>
