<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

// 1. Tipe Data Produk
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

// 2. Setup Router & Route
const route = useRoute();
const router = useRouter();

// 3. State Reaktif
const product = ref<Product | null>(null);
const isLoading = ref<boolean>(true);
const errorMessage = ref<string | null>(null);
const quantity = ref<number>(1);

// 4. Fetch Detail Produk berdasarkan ID dari URL Params
async function fetchProductDetail(id: string | string[]) {
  isLoading.value = true;
  errorMessage.value = null;

  try {
    const res = await axios.get<Product>(`http://localhost:3001/products/${id}`);
    product.value = res.data;
  } catch (error: any) {
    console.error('Error saat fetch detail produk:', error);
    errorMessage.value = error.response?.status === 404
      ? 'Produk tidak ditemukan atau telah dihapus.'
      : 'Gagal terhubung ke server (Pastikan JSON-Server di port 3001 aktif).';
  } finally {
    isLoading.value = false;
  }
}

// 5. watchEffect: Mengambil data otomatis saat parameter :id di URL berubah
watchEffect(() => {
  const id = route.params.id;
  if (id) {
    fetchProductDetail(id);
  }
});

// 6. Kontrol Quantity
function increaseQty() {
  quantity.value++;
}

function decreaseQty() {
  if (quantity.value > 1) {
    quantity.value--;
  }
}

// 7. Hapus Produk (DELETE)
async function deleteThisProduct() {
  if (!product.value) return;
  const isConfirmed = confirm(`Apakah Anda yakin ingin menghapus produk "${product.value.title}"?`);
  if (!isConfirmed) return;

  try {
    await axios.delete(`http://localhost:3001/products/${product.value.id}`);
    alert('Produk berhasil dihapus!');
    router.push('/getdata');
  } catch (error: any) {
    alert('Gagal menghapus produk: ' + error.message);
  }
}

// 8. Navigasi Kembali
function goBack() {
  router.push('/getdata');
}
</script>

<template>
  <div class="product-detail-page container py-4">
    <!-- Breadcrumb & Tombol Kembali -->
    <div class="d-flex align-items-center justify-content-between mb-4">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb m-0">
          <li class="breadcrumb-item">
            <button class="btn btn-link p-0 text-decoration-none text-secondary" @click="goBack">
              Katalog API
            </button>
          </li>
          <li class="breadcrumb-item active fw-semibold text-dark" aria-current="page">
            Detail Produk #{{ route.params.id }}
          </li>
        </ol>
      </nav>

      <button class="btn btn-outline-secondary btn-sm rounded-pill px-3 d-flex align-items-center gap-1" @click="goBack">
        <span>&larr;</span> Kembali ke Katalog
      </button>
    </div>

    <!-- 1. Kondisi Loading -->
    <div v-if="isLoading" class="text-center py-5">
      <div class="spinner-border text-primary mb-3" role="status" style="width: 3rem; height: 3rem;">
        <span class="visually-hidden">Memuat...</span>
      </div>
      <h5 class="text-secondary">Sedang memuat rincian produk...</h5>
      <p class="small text-muted">Mohon tunggu sebentar.</p>
    </div>

    <!-- 2. Kondisi Error -->
    <div v-else-if="errorMessage" class="alert alert-danger shadow-sm p-4 text-center my-4 rounded-4">
      <div class="fs-1 mb-2">âš ï¸</div>
      <h5 class="fw-bold">Gagal Menampilkan Produk!</h5>
      <p class="mb-3 text-muted small">{{ errorMessage }}</p>
      <button class="btn btn-primary btn-sm px-4 fw-semibold rounded-pill" @click="goBack">
        Kembali ke Katalog
      </button>
    </div>

    <!-- 3. Kondisi Sukses: Tampilan Detail Produk -->
    <div v-else-if="product" class="card border-0 shadow-sm rounded-4 overflow-hidden bg-white p-4 p-lg-5">
      <div class="row g-4 g-lg-5 align-items-center">
        <!-- Kolom Kiri: Foto Produk -->
        <div class="col-12 col-md-5">
          <div class="detail-img-wrapper position-relative rounded-4 overflow-hidden shadow-sm">
            <img 
              :src="product.image" 
              :alt="product.title" 
              class="w-100 h-100 object-fit-cover"
            />
            <span class="badge bg-success position-absolute top-0 end-0 m-3 px-3 py-2 shadow-sm rounded-pill">
              Stok Tersedia
            </span>
          </div>

          <!-- Keunggulan Singkat -->
          <div class="row g-2 mt-3 text-center">
            <div class="col-4">
              <div class="p-2 border rounded-3 bg-light">
                <small class="d-block fw-bold text-dark">ðŸšš Gratis</small>
                <small class="text-muted" style="font-size: 0.7rem;">Ongkir Se-ID</small>
              </div>
            </div>
            <div class="col-4">
              <div class="p-2 border rounded-3 bg-light">
                <small class="d-block fw-bold text-dark">ðŸ›¡ï¸ 100%</small>
                <small class="text-muted" style="font-size: 0.7rem;">Original</small>
              </div>
            </div>
            <div class="col-4">
              <div class="p-2 border rounded-3 bg-light">
                <small class="d-block fw-bold text-dark">ðŸ”„ 7 Hari</small>
                <small class="text-muted" style="font-size: 0.7rem;">Garansi Retur</small>
              </div>
            </div>
          </div>
        </div>

        <!-- Kolom Kanan: Informasi & Aksi Beli -->
        <div class="col-12 col-md-7">
          <div class="d-flex align-items-center justify-content-between mb-2">
            <span class="badge bg-primary-subtle text-primary px-3 py-1 rounded-pill fw-semibold">
              ID Produk: #{{ product.id }}
            </span>

            <!-- Tombol Edit & Hapus Cepat -->
            <div class="d-flex gap-2">
              <RouterLink 
                :to="`/product/edit/${product.id}`" 
                class="btn btn-outline-warning btn-sm rounded-pill px-3 fw-semibold text-decoration-none d-flex align-items-center gap-1"
              >
                <span>âœï¸</span> Edit
              </RouterLink>
              <button 
                class="btn btn-outline-danger btn-sm rounded-pill px-3 fw-semibold d-flex align-items-center gap-1"
                @click="deleteThisProduct"
              >
                <span>ðŸ—‘ï¸</span> Hapus
              </button>
            </div>
          </div>

          <h2 class="fw-bold text-dark mb-3">{{ product.title }}</h2>

          <!-- Rating & Ulasan Dummy -->
          <div class="d-flex align-items-center gap-2 mb-3">
            <div class="text-warning">
              â­â­â­â­â­
            </div>
            <span class="fw-semibold text-dark small">4.9</span>
            <span class="text-muted small">(128 Ulasan Terverifikasi)</span>
          </div>

          <!-- Harga -->
          <div class="p-3 bg-light rounded-3 mb-4">
            <span class="text-muted small d-block mb-1">Harga Spesial</span>
            <h3 class="fw-bold text-primary m-0">
              Rp {{ Number(product.price).toLocaleString('id-ID') }}
            </h3>
          </div>

          <!-- Deskripsi Produk -->
          <div class="mb-4">
            <h6 class="fw-bold text-dark mb-2">Deskripsi Produk:</h6>
            <p class="text-secondary leading-relaxed mb-0">
              {{ product.description }}
            </p>
          </div>

          <hr class="my-4 text-muted" />

          <!-- Jumlah Beli (Quantity) -->
          <div class="d-flex align-items-center gap-3 mb-4">
            <span class="fw-bold text-dark small">Jumlah:</span>
            <div class="input-group input-group-sm" style="max-width: 130px;">
              <button class="btn btn-outline-secondary" type="button" @click="decreaseQty">-</button>
              <input 
                v-model="quantity" 
                type="text" 
                class="form-control text-center fw-bold bg-white" 
                readonly 
              />
              <button class="btn btn-outline-secondary" type="button" @click="increaseQty">+</button>
            </div>
            <small class="text-muted">Total: <strong>Rp {{ (Number(product.price) * quantity).toLocaleString('id-ID') }}</strong></small>
          </div>

          <!-- Tombol Aksi Beli -->
          <div class="d-flex gap-3">
            <button class="btn btn-outline-primary btn-lg flex-grow-1 rounded-pill fw-semibold d-flex align-items-center justify-content-center gap-2">
              ðŸ›’ + Keranjang
            </button>
            <button class="btn btn-primary btn-lg flex-grow-1 rounded-pill fw-semibold shadow-sm">
              âš¡ Beli Langsung
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.detail-img-wrapper {
  height: 380px;
  background-color: #f8fafc;
}

.leading-relaxed {
  line-height: 1.7;
}
</style>
