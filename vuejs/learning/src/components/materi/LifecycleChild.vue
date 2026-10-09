<template>
  <div class="card shadow-sm p-4 border-2 border-primary mb-3 bg-white">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h5 class="m-0 text-primary fw-bold">🟢 Komponen Anak (Aktif)</h5>
      <span class="badge bg-success">Status: Aktif di Layar</span>
    </div>

    <!-- Tampilan Nilai DOM & Input yang Di-cache -->
    <div class="bg-light p-3 rounded mb-3 border">
      <div class="text-center mb-3">
        <p class="text-muted mb-1 small">Elemen Teks DOM Fisik:</p>
        <h3 ref="domTextRef" class="fw-bold text-dark mb-0">Nilai Hitungan: {{ counter }}</h3>
      </div>

      <!-- Input untuk membuktikan KeepAlive mempertahankan isi teks -->
      <div class="form-group text-start">
        <label class="form-label small text-muted mb-1 fw-semibold">
          Ketik teks di sini (Uji Coba KeepAlive &amp; Cache):
        </label>
        <input 
          v-model="dummyText" 
          type="text" 
          class="form-control form-control-sm"
          placeholder="Ketik sesuatu, lalu coba sembunyikan dengan KeepAlive..." 
        />
        <small class="text-muted fst-italic">Saat mode KeepAlive aktif, teks ini tidak akan hilang saat komponen disembunyikan.</small>
      </div>
    </div>

    <!-- Tombol Mengubah State (Update & Debug Hooks) -->
    <div class="d-flex gap-2 mb-3">
      <button class="btn btn-primary btn-sm flex-fill fw-semibold py-2" @click="counter++">
        ➕ Tambah Counter (Memicu onBeforeUpdate, onUpdated &amp; onRenderTriggered)
      </button>
      <button class="btn btn-outline-secondary btn-sm" @click="counter = 0">
        🔄 Reset
      </button>
    </div>

    <!-- Simulasi onServerPrefetch -->
    <div class="p-3 border border-secondary border-opacity-25 rounded bg-light mb-2 text-start">
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <span class="badge bg-dark me-2">SSR Only</span>
          <strong class="small text-dark">onServerPrefetch()</strong>
        </div>
        <button class="btn btn-sm btn-outline-dark" @click="simulateServerPrefetch">
          🌐 Simulasi Server Fetch
        </button>
      </div>
      <p class="small text-muted mb-0 mt-1">
        Hook ini dijalankan di server (Node.js/Nuxt 3) untuk mengambil data API sebelum HTML dikirim ke browser.
      </p>
    </div>

    <!-- Tombol Memicu Error (onErrorCaptured Hook) -->
    <div class="p-3 border border-danger rounded bg-danger-subtle mt-2 text-start">
      <p class="mb-1 text-danger fw-bold small">Simulasi Error (Memicu onErrorCaptured):</p>
      <button class="btn btn-sm btn-danger fw-semibold" @click="triggerError">
        💥 Lempar Error Sengaja
      </button>
      
      <div v-if="hasError">
        {{ throwRenderError() }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { 
  ref, 
  onBeforeMount, 
  onMounted, 
  onBeforeUpdate, 
  onUpdated, 
  onBeforeUnmount, 
  onUnmounted,
  onRenderTracked,
  onRenderTriggered,
  onActivated,
  onDeactivated,
  onServerPrefetch
} from 'vue';

const emit = defineEmits<{
  (e: 'log', hook: string, color: string, message: string): void;
}>();

const counter = ref(0);
const dummyText = ref('Data formulir tersimpan...');
const domTextRef = ref<HTMLElement | null>(null);
const hasError = ref(false);

function emitLog(hook: string, color: string, msg: string) {
  emit('log', hook, color, msg);
}

// =============================================================================
// SIKLUS HIDUP STANDAR (MOUNTING & UPDATING)
// =============================================================================
onBeforeMount(() => {
  emitLog('onBeforeMount', 'bg-warning text-dark', 'Komponen selesai di-compile, tapi BELUM ada di DOM fisik.');
});

onMounted(() => {
  emitLog('onMounted', 'bg-success text-white', `Komponen SUDAH menempel di DOM. Nilai DOM: "${domTextRef.value?.innerText || ''}"`);
});

onBeforeUpdate(() => {
  emitLog('onBeforeUpdate', 'bg-info text-dark', `State counter berubah jadi ${counter.value}, tapi DOM masih teks lama: "${domTextRef.value?.innerText || ''}"`);
});

onUpdated(() => {
  emitLog('onUpdated', 'bg-primary text-white', `DOM selesai di-update! Nilai DOM sekarang: "${domTextRef.value?.innerText || ''}"`);
});

onBeforeUnmount(() => {
  emitLog('onBeforeUnmount', 'bg-secondary text-white', 'Komponen bersiap dihancurkan/dicopot dari DOM.');
});

onUnmounted(() => {
  emitLog('onUnmounted', 'bg-dark text-white', 'Komponen SUDAH hancur dan dicopot dari memori & DOM.');
});

// =============================================================================
// 1 & 2. DEBUGGING HOOKS (DEV ONLY)
// =============================================================================
// Dipanggil saat Vue merekam ketergantungan reaktif (dependency tracking)
onRenderTracked((e) => {
  emitLog(
    'onRenderTracked',
    'bg-warning-subtle text-warning-emphasis border border-warning',
    `Vue melacak dependensi reaktif: key="${String(e.key)}" (Tipe: ${e.type})`
  );
});

// Dipanggil saat nilai reaktif berubah dan memicu render ulang komponen
onRenderTriggered((e) => {
  emitLog(
    'onRenderTriggered',
    'bg-info-subtle text-info-emphasis border border-info',
    `Dependensi terpicu! key="${String(e.key)}" berubah dari ${JSON.stringify(e.oldValue)} -> ${JSON.stringify(e.newValue)}`
  );
});

// =============================================================================
// 3 & 4. KEEPALIVE HOOKS (CACHE SIKLUS HIDUP)
// =============================================================================
// Dipanggil saat komponen yang dibungkus <KeepAlive> diaktifkan kembali dari cache
onActivated(() => {
  emitLog(
    'onActivated',
    'bg-teal text-white',
    `Komponen DIAKTIFKAN kembali dari cache memori <KeepAlive> (State counter ${counter.value} & input tetap utuh!)`
  );
});

// Dipanggil saat komponen yang dibungkus <KeepAlive> dinonaktifkan (disimpan ke cache)
onDeactivated(() => {
  emitLog(
    'onDeactivated',
    'bg-purple text-white',
    'Komponen DINONAKTIFKAN (masuk ke cache memori, TIDAK dihancurkan).'
  );
});

// =============================================================================
// 5. SERVER-SIDE PREFETCH (SSR / NUXT ONLY)
// =============================================================================
onServerPrefetch(async () => {
  emitLog(
    'onServerPrefetch',
    'bg-dark text-warning border border-warning',
    'Dijalankan di server (Node.js/Nuxt) untuk pre-fetch data sebelum HTML dikirim ke browser.'
  );
});

function simulateServerPrefetch() {
  emitLog(
    'onServerPrefetch',
    'bg-dark text-warning border border-warning',
    '[Simulasi SSR] Mengambil data di sisi Server Node.js (misal Nuxt 3) sebelum dikirim ke client browser.'
  );
}

// Simulasi error
function triggerError() {
  hasError.value = true;
}

function throwRenderError() {
  throw new Error('Simulasi Crash: Komponen anak gagal memproses data server!');
}
</script>

<style scoped>
.bg-teal {
  background-color: #0d9488 !important;
}
.bg-purple {
  background-color: #9333ea !important;
}
</style>
