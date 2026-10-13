<script setup lang="ts">
import { ref, computed } from 'vue';
import { useQuery, useMutation, useQueryClient } from '@tanstack/vue-query';
import axios from 'axios';

// ============================================================================
// 1. TIPE DATA PRODUK
// ============================================================================
interface Product {
  id: string | number;
  title: string;
  price: number;
  description: string;
  image: string;
}

// Inisialisasi query client untuk manajemen cache manual (invalidasi dsb.)
const queryClient = useQueryClient();

// State reaktif lokal untuk pencarian dan form
const searchQuery = ref<string>('');
const newTitle = ref<string>('');
const newPrice = ref<number | ''>('');

// ============================================================================
// 2. FUNGSI FETCH (API CALLS)
// ============================================================================
const API_URL = 'http://localhost:3000/products';

// Mengambil seluruh produk atau memfilter produk
async function getProducts(): Promise<Product[]> {
  const response = await axios.get<Product[]>(API_URL);
  return response.data;
}

// Menambahkan produk baru (POST)
async function createProduct(payload: Omit<Product, 'id'>): Promise<Product> {
  const response = await axios.post<Product>(API_URL, payload);
  return response.data;
}

// Menghapus produk (DELETE)
async function removeProduct(id: string | number): Promise<void> {
  await axios.delete(`${API_URL}/${id}`);
}

// ============================================================================
// 3. MATERI INTI 1: useQuery (PENGAMBILAN DATA & CACHING)
// ============================================================================
/**
 * KONSEP UTAMA:
 * - queryKey: Identifier unik cache. Di Vue, jika array berisi ref, Query otomatis refetch saat ref berubah.
 * - queryFn: Fungsi Promise pengambil data.
 * - staleTime: Berapa lama data dianggap "segar" (fresh) sebelum dianggap usang (stale).
 * - gcTime: Berapa lama cache yang tidak aktif disimpan di memory sebelum dibuang (Garbage Collection).
 */
const {
  data: products,
  isLoading,
  isFetching,
  isError,
  isSuccess,
  error,
  refetch,
  dataUpdatedAt
} = useQuery({
  queryKey: ['products'],
  queryFn: getProducts,
  staleTime: 1000 * 10, // 10 detik data berstatus FRESH (tidak re-fetch otomatis jika komponen di-mount ulang)
  gcTime: 1000 * 60 * 5, // 5 menit disimpan di cache memori
  retry: 2 // Coba ulang 2 kali jika request gagal
});

// Filter produk berdasarkan pencarian di sisi client
const filteredProducts = computed(() => {
  if (!products.value) return [];
  if (!searchQuery.value.trim()) return products.value;
  return products.value.filter(item => 
    item.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// Format waktu terakhir cache diperbarui
const lastUpdatedFormatted = computed(() => {
  if (!dataUpdatedAt.value) return '-';
  return new Date(dataUpdatedAt.value).toLocaleTimeString();
});

// ============================================================================
// 4. MATERI INTI 2: useMutation (MENULIS/MENGUBAH DATA)
// ============================================================================
/**
 * KONSEP UTAMA:
 * - mutationFn: Fungsi async untuk operasi POST/PUT/DELETE.
 * - onSuccess: Callback saat mutasi sukses -> Kita memicu queryClient.invalidateQueries
 *   agar data list otomatis di-fetch ulang dari server dan cache diperbarui secara instan!
 */
const addMutation = useMutation({
  mutationFn: createProduct,
  onSuccess: () => {
    // 1. Bersihkan input form
    newTitle.value = '';
    newPrice.value = '';
    // 2. KUNCI UTAMA: Batalkan validitas cache lama agar otomatis mengambil data terbaru
    queryClient.invalidateQueries({ queryKey: ['products'] });
    alert('âœ… Produk baru berhasil ditambahkan!');
  },
  onError: (err: any) => {
    alert('âŒ Gagal menambah produk: ' + (err.message || 'Error'));
  }
});

const deleteMutation = useMutation({
  mutationFn: removeProduct,
  onSuccess: () => {
    // Refresh cache data produk setelah berhasil menghapus
    queryClient.invalidateQueries({ queryKey: ['products'] });
  },
  onError: (err: any) => {
    alert('âŒ Gagal menghapus produk: ' + (err.message || 'Error'));
  }
});

// Handler saat submit form tambah produk
function handleAddProduct() {
  if (!newTitle.value.trim() || !newPrice.value) {
    alert('Judul dan harga produk wajib diisi!');
    return;
  }

  addMutation.mutate({
    title: newTitle.value,
    price: Number(newPrice.value),
    description: 'Produk ditambahkan via TanStack Vue Query demo.',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80'
  });
}

// Handler hapus produk
function handleDelete(id: string | number, title: string) {
  if (confirm(`Hapus produk "${title}"?`)) {
    deleteMutation.mutate(id);
  }
}

// Format Rupiah
function formatRupiah(val: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(val);
}
</script>

<template>
  <div class="materi-query-container container py-4">
    <!-- Header Materi -->
    <div class="hero-header card border-0 shadow-sm p-4 mb-4 text-white">
      <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
        <div>
          <span class="badge bg-light text-primary fw-bold mb-2">Materi 5 : State Manajemen Server</span>
          <h2 class="fw-bold m-0 text-white">âš¡ Master TanStack Vue Query</h2>
          <p class="text-white-50 mb-0 small mt-1">
            Mempelajari <code>useQuery</code>, <code>useMutation</code>, caching lifecycle, dan sinkronisasi data server.
          </p>
        </div>

        <!-- Tombol Menuju Halaman Tantangan -->
        <RouterLink to="/query-challenge" class="btn btn-warning text-dark fw-bold rounded-pill px-4 shadow">
          ðŸ† Buka Tantangan Latihan
        </RouterLink>
      </div>
    </div>

    <!-- Live Status Dashboard (Memantau Reaktivitas TanStack Query) -->
    <div class="card border-0 shadow-sm mb-4 bg-white p-3 rounded-4">
      <h6 class="fw-bold text-secondary mb-3 d-flex align-items-center gap-2">
        <span>ðŸ”</span> Live Query Monitor (Status Reaktif Vue Query)
      </h6>
      <div class="row g-2 text-center">
        <div class="col-6 col-md-2">
          <div class="p-2 rounded bg-light border">
            <div class="small text-muted">isLoading</div>
            <span :class="isLoading ? 'badge bg-warning text-dark' : 'badge bg-secondary'">
              {{ isLoading }}
            </span>
          </div>
        </div>
        <div class="col-6 col-md-2">
          <div class="p-2 rounded bg-light border">
            <div class="small text-muted">isFetching</div>
            <span :class="isFetching ? 'badge bg-info text-dark' : 'badge bg-secondary'">
              {{ isFetching }}
            </span>
          </div>
        </div>
        <div class="col-6 col-md-2">
          <div class="p-2 rounded bg-light border">
            <div class="small text-muted">isSuccess</div>
            <span :class="isSuccess ? 'badge bg-success' : 'badge bg-secondary'">
              {{ isSuccess }}
            </span>
          </div>
        </div>
        <div class="col-6 col-md-2">
          <div class="p-2 rounded bg-light border">
            <div class="small text-muted">isError</div>
            <span :class="isError ? 'badge bg-danger' : 'badge bg-secondary'">
              {{ isError }}
            </span>
          </div>
        </div>
        <div class="col-6 col-md-2">
          <div class="p-2 rounded bg-light border">
            <div class="small text-muted">Total Data</div>
            <span class="badge bg-primary">{{ products?.length || 0 }} Item</span>
          </div>
        </div>
        <div class="col-6 col-md-2">
          <div class="p-2 rounded bg-light border">
            <div class="small text-muted">Terakhir Update</div>
            <small class="fw-semibold text-dark">{{ lastUpdatedFormatted }}</small>
          </div>
        </div>
      </div>

      <div class="mt-3 d-flex gap-2 align-items-center flex-wrap justify-content-between pt-2 border-top">
        <div class="d-flex gap-2">
          <button 
            class="btn btn-sm btn-outline-primary rounded-pill d-flex align-items-center gap-1"
            :disabled="isFetching"
            @click="() => refetch()"
          >
            <span :class="{ 'spinner-border spinner-border-sm': isFetching }"></span>
            ðŸ”„ Trigger Refetch Manual
          </button>

          <button 
            class="btn btn-sm btn-outline-secondary rounded-pill"
            @click="queryClient.invalidateQueries({ queryKey: ['products'] })"
          >
            â™»ï¸ Invalidate Cache
          </button>
        </div>

        <small class="text-muted fst-italic">
          *staleTime diset 10 detik. Dalam 10 detik, pindah tab/halaman tidak akan fetch ulang.
        </small>
      </div>
    </div>

    <!-- Layout 2 Kolom: Form Mutasi & Daftar Produk -->
    <div class="row g-4">
      <!-- Kolom Kiri: useMutation Form -->
      <div class="col-12 col-lg-4">
        <div class="card border-0 shadow-sm rounded-4 p-4 bg-white sticky-top" style="top: 20px;">
          <h5 class="fw-bold mb-3 d-flex align-items-center gap-2">
            <span>âœï¸</span> Demo useMutation
          </h5>
          <p class="text-muted small">
            Menambah data menggunakan <code>useMutation</code>. Saat berhasil, cache <code>['products']</code> otomatis diinvalidasi sehingga daftar di kanan otomatis update!
          </p>

          <form @submit.prevent="handleAddProduct">
            <div class="mb-3">
              <label class="form-label small fw-semibold">Nama Produk</label>
              <input 
                v-model="newTitle" 
                type="text" 
                class="form-control" 
                placeholder="Contoh: AirPods Pro 2"
                required
              />
            </div>

            <div class="mb-3">
              <label class="form-label small fw-semibold">Harga (Rp)</label>
              <input 
                v-model="newPrice" 
                type="number" 
                class="form-control" 
                placeholder="Contoh: 3500000"
                required
              />
            </div>

            <button 
              type="submit" 
              class="btn btn-primary w-100 rounded-pill fw-semibold py-2 d-flex justify-content-center align-items-center gap-2 shadow-sm"
              :disabled="addMutation.isPending.value"
            >
              <span v-if="addMutation.isPending.value" class="spinner-border spinner-border-sm"></span>
              {{ addMutation.isPending.value ? 'Menyimpan ke Server...' : 'âž• Simpan Produk Baru' }}
            </button>
          </form>

          <!-- Kotak Catatan Konsep -->
          <div class="alert alert-info border-0 rounded-3 mt-4 p-3 small mb-0">
            <h6 class="fw-bold fs-7 mb-1">ðŸ’ Kenapa Bukan State Biasa?</h6>
            Vue Query membebaskan Anda dari menulis manual <code>isLoading = true</code>, <code>try/catch</code>, dan sinkronisasi array manual di setiap komponen.
          </div>
        </div>
      </div>

      <!-- Kolom Kanan: Daftar Produk Hasil useQuery -->
      <div class="col-12 col-lg-8">
        <div class="card border-0 shadow-sm rounded-4 p-4 bg-white mb-4">
          <div class="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3 mb-3">
            <div>
              <h5 class="fw-bold m-0">ðŸ“¦ Daftar Produk dari Server</h5>
              <small class="text-muted">Hasil fetch otomatis dari <code>http://localhost:3000/products</code></small>
            </div>

            <!-- Input Pencarian -->
            <div class="input-group input-group-sm" style="max-width: 250px;">
              <span class="input-group-text bg-light">ðŸ” </span>
              <input 
                v-model="searchQuery" 
                type="text" 
                class="form-control" 
                placeholder="Filter nama produk..." 
              />
            </div>
          </div>

          <!-- 1. Kondisi Loading Pertama Kali -->
          <div v-if="isLoading" class="text-center py-5">
            <div class="spinner-border text-primary mb-3" style="width: 3rem; height: 3rem;"></div>
            <h6 class="text-secondary">Sedang memuat data dari Vue Query...</h6>
          </div>

          <!-- 2. Kondisi Error -->
          <div v-else-if="isError" class="alert alert-danger p-4 text-center rounded-4">
            <h5 class="fw-bold">âš ï¸ Terjadi Kesalahan</h5>
            <p class="small text-muted">{{ error?.message }}</p>
            <button class="btn btn-danger btn-sm rounded-pill px-3" @click="() => refetch()">
              Coba Lagi
            </button>
          </div>

          <!-- 3. Kondisi Data Kosong -->
          <div v-else-if="filteredProducts.length === 0" class="text-center py-5 text-muted">
            <div class="fs-1 mb-2">ðŸ” </div>
            <h6>Tidak ada produk yang cocok</h6>
          </div>

          <!-- 4. Kondisi Sukses Menampilkan List -->
          <div v-else class="row g-3">
            <div 
              v-for="item in filteredProducts" 
              :key="item.id" 
              class="col-12 col-sm-6"
            >
              <div class="card product-item-card h-100 border border-light-subtle rounded-3 p-3 shadow-sm bg-white position-relative">
                <div class="d-flex gap-3 align-items-center">
                  <img 
                    :src="item.image" 
                    :alt="item.title" 
                    class="rounded-3 object-fit-cover shadow-xs" 
                    style="width: 70px; height: 70px;"
                  />
                  <div class="flex-grow-1 overflow-hidden">
                    <h6 class="fw-bold text-dark text-truncate mb-1" :title="item.title">
                      {{ item.title }}
                    </h6>
                    <div class="text-success fw-bold small">
                      {{ formatRupiah(item.price) }}
                    </div>
                  </div>
                </div>

                <div class="d-flex justify-content-between align-items-center mt-3 pt-2 border-top">
                  <span class="badge bg-light text-muted">ID: {{ item.id }}</span>
                  <button 
                    class="btn btn-outline-danger btn-sm rounded-pill px-2 py-0 fs-7"
                    :disabled="deleteMutation.isPending.value"
                    @click="handleDelete(item.id, item.title)"
                  >
                    ðŸ—‘ï¸ Hapus
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Rangkuman Konsep / Cheat-Sheet -->
        <div class="card border-0 shadow-sm rounded-4 p-4 bg-white">
          <h6 class="fw-bold text-dark mb-3">ðŸ“– Rangkuman Ringkas API Vue Query</h6>
          <div class="table-responsive">
            <table class="table table-bordered table-sm align-middle small mb-0">
              <thead class="table-light">
                <tr>
                  <th style="width: 30%;">Sintaks</th>
                  <th>Penjelasan & Fungsi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>useQuery({ queryKey, queryFn })</code></td>
                  <td>Hook untuk mengambil data server, otomatis mengelola state loading, error, dan caching.</td>
                </tr>
                <tr>
                  <td><code>useMutation({ mutationFn })</code></td>
                  <td>Hook untuk manipulasi data (POST, PUT, DELETE). Dilengkapi callback <code>onSuccess</code> & <code>onError</code>.</td>
                </tr>
                <tr>
                  <td><code>queryClient.invalidateQueries()</code></td>
                  <td>Menandai cache tertentu usang dan langsung men-trigger refetch otomatis dari background.</td>
                </tr>
                <tr>
                  <td><code>staleTime</code></td>
                  <td>Durasi data dianggap masih fresh (belum perlu di-fetch ulang dari server saat dibuka).</td>
                </tr>
                <tr>
                  <td><code>gcTime</code></td>
                  <td>Durasi penyimpanan di memori saat komponen dilepas (*unmounted*).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.materi-query-container {
  max-width: 1200px;
}

.hero-header {
  background: linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%);
  border-radius: 1rem;
}

.fs-7 {
  font-size: 0.8rem;
}

.product-item-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.product-item-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08) !important;
}
</style>