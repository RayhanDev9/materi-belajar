<script setup lang="ts">
import { ref } from 'vue';
import { useQuery, useMutation, useQueryClient } from '@tanstack/vue-query';
import axios from 'axios';

// ============================================================================
// INSTRUKSI TANTANGAN:
// 1. Anda diminta melengkapi kode di bawah ini (cari tanda komentar TODO).
// 2. Tantangan ini menguji pemahaman Anda tentang:
//    - useQuery dengan Query Key Reaktif (mengambil 1 produk berdasarkan selectedId).
//    - useMutation untuk mengupdate harga produk (PATCH).
//    - queryClient.invalidateQueries untuk memperbarui cache secara otomatis.
// ============================================================================

interface Product {
  id: string | number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const queryClient = useQueryClient();

// ID Produk yang sedang dipilih di dropdown (default ke ID 3 yang tersedia di database)
const selectedId = ref<string>('3');
const updatedPrice = ref<number | ''>('');
const showHint = ref<boolean>(false);

// API URL
const BASE_URL = 'http://localhost:3000/products';

// Query untuk mengambil opsi produk di dropdown secara dinamis
const { data: productList } = useQuery({
  queryKey: ['products'],
  queryFn: async () => {
    const res = await axios.get<Product[]>(BASE_URL);
    return res.data;
  }
});

// ----------------------------------------------------------------------------
// TODO 1: LENGKAPI FUNGSI FETCH PRODUK TUNGGAL
// Ambil data satu produk dari: `${BASE_URL}/${id}`
// ----------------------------------------------------------------------------
async function fetchProductById(id: string): Promise<Product> {
  // Tulis axios.get atau fetch di sini
  const res = await axios.get<Product>(`${BASE_URL}/${id}`);
  return res.data;
}                                                 

// ----------------------------------------------------------------------------
// TODO 2: LENGKAPI useQuery DENGAN QUERY KEY REAKTIF
// - queryKey harus menyertakan ref `selectedId`, misal: ['product', selectedId]
// - queryFn harus memanggil `fetchProductById(selectedId.value)`
// - staleTime: 1000 * 5 (5 detik)
// ----------------------------------------------------------------------------
const {
  data: product,
  isLoading,
  isFetching,
  isError,
  error
} = useQuery({
  queryKey: ['product', selectedId],
  queryFn: () => fetchProductById(selectedId.value),
  staleTime: 1000 * 5
});

// ----------------------------------------------------------------------------
// TODO 3: LENGKAPI FUNGSI MUTASI UPDATE HARGA (PATCH)
// Update harga produk ke endpoint `${BASE_URL}/${id}` dengan payload `{ price }`
// ----------------------------------------------------------------------------
async function updatePriceApi(payload: { id: string | number; price: number }): Promise<Product> {
  const res = await axios.patch<Product>(`${BASE_URL}/${payload.id}`, {
    price: payload.price
  });
  return res.data;
}

// ----------------------------------------------------------------------------
// TODO 4: LENGKAPI useMutation UNTUK UPDATE HARGA
// - Di onSuccess:
//   1. Kosongkan `updatedPrice.value = ''`
//   2. Panggil `queryClient.invalidateQueries` untuk key ['product', selectedId]
//      dan ['products'] agar data list umum juga terupdate!
// ----------------------------------------------------------------------------
const priceMutation = useMutation({
  mutationFn: updatePriceApi,
  onSuccess: () => {
    updatedPrice.value = '';
    // Invalidasi cache produk yang sedang aktif
    queryClient.invalidateQueries({ queryKey: ['product', selectedId] });
    // Invalidasi cache list produk global jika ada
    queryClient.invalidateQueries({ queryKey: ['products'] });
    alert('âœ… Berhasil memperbarui harga produk!');
  },
  onError: (err: any) => {
    alert('â Œ Gagal memperbarui harga: ' + (err.message || 'Error'));
  }
});

// Handler form submit
function handleUpdatePrice() {
  if (!updatedPrice.value || Number(updatedPrice.value) <= 0) {
    alert('Masukkan nominal harga baru yang valid!');
    return;
  }

  priceMutation.mutate({
    id: selectedId.value,
    price: Number(updatedPrice.value)
  });
}

function formatRupiah(val?: number): string {
  if (!val) return 'Rp 0';
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(val);
}
</script>

<template>
  <div class="challenge-container container py-4">
    <!-- Header Tantangan -->
    <div class="card border-0 shadow-sm p-4 mb-4 bg-dark text-white rounded-4">
      <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
        <div>
          <span class="badge bg-warning text-dark fw-bold mb-2">Tantangan Praktek Mandiri</span>
          <h2 class="fw-bold m-0 text-white">ðŸŽ¯ Dynamic Query & Mutation Challenge</h2>
          <p class="text-white-50 mb-0 small mt-1">
            Uji pemahaman Anda tentang Reaktivitas Query Key dan Invalidasi Cache Bersarang.
          </p>
        </div>

        <RouterLink to="/query" class="btn btn-outline-light rounded-pill px-4">
          â¬… Kembali ke Materi 5
        </RouterLink>
      </div>
    </div>

    <!-- Deskripsi Misi Tantangan -->
    <div class="card border-0 shadow-sm rounded-4 p-4 mb-4 bg-white">
      <h5 class="fw-bold text-dark mb-3">ðŸ“‹ Misi yang Harus Diselesaikan:</h5>
      <ul class="list-group list-group-flush small mb-3">
        <li class="list-group-item d-flex align-items-center gap-2">
          <span class="badge bg-primary">Misi 1</span>
          Implementasikan <code>useQuery</code> dengan <strong>Query Key Reaktif</strong>: saat ID di dropdown berganti, data produk baru langsung di-fetch otomatis tanpa tombol submit!
        </li>
        <li class="list-group-item d-flex align-items-center gap-2">
          <span class="badge bg-success">Misi 2</span>
          Implementasikan <code>useMutation</code> (PATCH) untuk mengupdate nominal harga produk yang sedang dipilih.
        </li>
        <li class="list-group-item d-flex align-items-center gap-2">
          <span class="badge bg-warning text-dark">Misi 3</span>
          Gunakan <code>queryClient.invalidateQueries</code> di dalam <code>onSuccess</code> agar harga terbaru langsung muncul seketika di layar!
        </li>
      </ul>

      <div>
        <button class="btn btn-sm btn-link text-decoration-none p-0" @click="showHint = !showHint">
          {{ showHint ? 'ðŸ”’ Sembunyikan Kunci/Petunjuk' : 'ðŸ”‘ Lihat Petunjuk / Kisi-kisi Jawaban' }}
        </button>

        <div v-if="showHint" class="alert alert-secondary mt-3 mb-0 small">
          <strong>Kunci Reaktivitas Vue Query:</strong>
          <pre class="bg-dark text-light p-3 rounded mt-2 mb-0"><code>// Masukkan ref ke dalam array queryKey:
useQuery({
  queryKey: ['product', selectedId], // Tanpa .value agar reaktif!
  queryFn: () => fetchProductById(selectedId.value),
})</code></pre>
        </div>
      </div>
    </div>

    <!-- Area Pengujian Interaktif (Live Test Workspace) -->
    <div class="row g-4">
      <!-- Kolom Kontrol & Form -->
      <div class="col-12 col-md-5">
        <div class="card border-0 shadow-sm rounded-4 p-4 bg-white">
          <h5 class="fw-bold mb-3">âš™ï¸  Kontrol Interaktif</h5>

          <!-- 1. Dropdown Pemilihan ID Produk -->
          <div class="mb-4">
            <label class="form-label small fw-semibold">Pilih ID Produk (Memicu Query Otomatis):</label>
            <select v-model="selectedId" class="form-select">
              <template v-if="productList && productList.length > 0">
                <option v-for="item in productList" :key="item.id" :value="String(item.id)">
                  ID {{ item.id }} - {{ item.title }}
                </option>
              </template>
              <template v-else>
                <option value="3">ID 3 - Keychron K2 RGB</option>
                <option value="4">ID 4 - Apple Watch Ultra 2</option>
                <option value="5">ID 5 - Logitech MX Master 3S</option>
                <option value="6">ID 6 - Monitor Dell UltraSharp 27 Inch</option>
              </template>
            </select>
            <small class="text-muted d-block mt-1">
              Setiap kali pilihan diubah, Vue Query otomatis membaca perubahan <code>selectedId</code>!
            </small>
          </div>

          <hr class="my-4" />

          <!-- 2. Form Mutasi Update Harga -->
          <h6 class="fw-bold mb-2">ðŸ’¸ Mutasi Update Harga</h6>
          <form @submit.prevent="handleUpdatePrice">
            <div class="mb-3">
              <label class="form-label small fw-semibold">Harga Baru (Rp)</label>
              <input 
                v-model="updatedPrice" 
                type="number" 
                class="form-control" 
                placeholder="Masukkan harga baru..." 
                required 
              />
            </div>

            <button 
              type="submit" 
              class="btn btn-success w-100 rounded-pill fw-semibold py-2 shadow-sm d-flex justify-content-center align-items-center gap-2"
              :disabled="priceMutation.isPending.value"
            >
              <span v-if="priceMutation.isPending.value" class="spinner-border spinner-border-sm"></span>
              {{ priceMutation.isPending.value ? 'Menyimpan...' : 'Update Harga Sekarang' }}
            </button>
          </form>
        </div>
      </div>

      <!-- Kolom Hasil Live Render -->
      <div class="col-12 col-md-7">
        <div class="card border-0 shadow-sm rounded-4 p-4 bg-white h-100">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h5 class="fw-bold m-0">ðŸ–¥ï¸  Hasil Live Reaktivitas</h5>
            <span v-if="isFetching" class="badge bg-info text-dark d-flex align-items-center gap-1">
              <span class="spinner-border spinner-border-sm" style="width: 0.7rem; height: 0.7rem;"></span>
              Fetching background...
            </span>
          </div>

          <!-- Loading State -->
          <div v-if="isLoading" class="text-center py-5">
            <div class="spinner-border text-primary mb-3"></div>
            <p class="text-muted small">Memuat data produk ID: {{ selectedId }}...</p>
          </div>

          <!-- Error State -->
          <div v-else-if="isError" class="alert alert-danger p-4 text-center rounded-3">
            <div class="fs-2 mb-2">â Œ</div>
            <h6>Gagal memuat produk ID: {{ selectedId }}</h6>
            <p class="small text-muted mb-0">{{ error?.message }}</p>
          </div>

          <!-- Success State (Tampilan Kartu Produk) -->
          <div v-else-if="product" class="product-preview border rounded-4 p-4 bg-light">
            <div class="d-flex gap-4 align-items-center flex-column flex-sm-row">
              <img 
                :src="product.image" 
                :alt="product.title" 
                class="rounded-3 shadow-sm object-fit-cover" 
                style="width: 140px; height: 140px;" 
              />

              <div>
                <span class="badge bg-secondary mb-2">ID: {{ product.id }}</span>
                <h4 class="fw-bold text-dark mb-1">{{ product.title }}</h4>
                <div class="fs-4 fw-bold text-success mb-2">
                  {{ formatRupiah(product.price) }}
                </div>
                <p class="text-muted small mb-0">
                  {{ product.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.challenge-container {
  max-width: 1100px;
}
</style>
