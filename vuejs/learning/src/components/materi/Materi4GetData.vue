<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue';
import axios from 'axios';

// 1. Tipe Data Produk (Sesuai dengan db_products.json)
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

interface PaginationResponse {
  data: Product[];
  items?: number;
  pages?: number;
  first?: number;
  last?: number;
  next?: number | null;
  prev?: number | null;
}

// 2. State Reaktif
const products = ref<Product[]>([]);
const isLoading = ref<boolean>(true);
const errorMessage = ref<string | null>(null);
const searchQuery = ref<string>('');

// State Pagination
const currentPage = ref<number>(1);
const perPage = ref<number>(6); // 6 produk per halaman (2 baris x 3 kolom)
const totalPages = ref<number>(1);
const totalItems = ref<number>(0);

// 3. Fungsi Asinkron Fetch Data dari JSON-Server
async function fetchProducts(page = currentPage.value) {
  isLoading.value = true;
  errorMessage.value = null;

  try {
    const res = await axios.get<PaginationResponse>(
      `http://localhost:3001/products?_page=${page}&_per_page=${perPage.value}`
    );
    
    products.value = res.data.data || res.data;
    totalPages.value = res.data.pages || Math.ceil((res.data.items || products.value.length) / perPage.value) || 1;
    totalItems.value = res.data.items || products.value.length;
  } catch (error: any) {
    console.error('Error saat fetch data:', error);
    errorMessage.value = error.message || 'Gagal terhubung ke JSON-Server (Pastikan port 3001 aktif).';
  } finally {
    isLoading.value = false;
  }
}

// 4. Fungsi Hapus Produk (DELETE)
async function deleteProduct(id: number, title: string) {
  const isConfirmed = confirm(`Apakah Anda yakin ingin menghapus produk "${title}"?`);
  if (!isConfirmed) return;

  try {
    await axios.delete(`http://localhost:3001/products/${id}`);
    alert(`Produk "${title}" berhasil dihapus!`);
    // Muat ulang data setelah berhasil hapus
    fetchProducts(currentPage.value);
  } catch (error: any) {
    console.error('Gagal menghapus produk:', error);
    alert('Gagal menghapus produk: ' + (error.message || 'Terjadi kesalahan'));
  }
}

// 5. Fungsi Navigasi Halaman
function goToPage(page: number) {
  if (page >= 1 && page <= totalPages.value && page !== currentPage.value) {
    currentPage.value = page;
  }
}

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
}

// 6. watchEffect: Otomatis fetch saat currentPage berubah atau saat pertama kali dibuka
watchEffect(() => {
  fetchProducts(currentPage.value);
});

// 7. Fitur Pencarian Real-Time (Computed)
const filteredProducts = computed(() => {
  if (!searchQuery.value.trim()) {
    return products.value;
  }
  return products.value.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
</script>

<template>
  <div class="product-page container py-4">
    <!-- Header Halaman & Kontrol Pencarian -->
    <div class="card border-0 shadow-sm mb-4 bg-white p-4">
      <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
        <div>
          <div class="d-flex align-items-center gap-2 mb-1">
            <h2 class="fw-bold text-dark m-0">ðŸ“¦ Katalog Produk API</h2>
            <span v-if="!isLoading" class="badge bg-primary rounded-pill">
              {{ filteredProducts.length }} Produk Ditampilkan
            </span>
          </div>
          <p class="text-secondary small mb-0">
            Data dimuat secara asinkron dari <code>http://localhost:3001/products</code> (JSON-Server).
          </p>
        </div>

        <div class="d-flex gap-2 align-items-center flex-wrap">
          <!-- Tombol Tambah Produk Baru -->
          <RouterLink to="/product/create" class="btn btn-success btn-sm rounded-pill d-flex align-items-center gap-1 shadow-sm">
            <span>âž•</span> Tambah Produk
          </RouterLink>

          <!-- Input Pencarian -->
          <div class="input-group input-group-sm" style="max-width: 240px;">
            <span class="input-group-text bg-light">ðŸ”</span>
            <input 
              v-model="searchQuery" 
              type="text" 
              class="form-control" 
              placeholder="Cari produk..." 
            />
          </div>

          <!-- Tombol Refresh Data -->
          <button 
            class="btn btn-outline-primary btn-sm d-flex align-items-center gap-1 rounded-pill"
            :disabled="isLoading"
            @click="fetchProducts(currentPage)"
          >
            <span>ðŸ”„</span> Refresh
          </button>
        </div>
      </div>
    </div>

    <!-- 1. Kondisi Loading (Spinner) -->
    <div v-if="isLoading" class="text-center py-5">
      <div class="spinner-border text-primary mb-3" role="status" style="width: 3rem; height: 3rem;">
        <span class="visually-hidden">Memuat...</span>
      </div>
      <h5 class="text-secondary">Sedang memuat data produk dari server...</h5>
      <p class="small text-muted">Mohon tunggu sebentar.</p>
    </div>

    <!-- 2. Kondisi Error -->
    <div v-else-if="errorMessage" class="alert alert-danger shadow-sm p-4 text-center my-4 animate__animated animate__headShake">
      <div class="fs-1 mb-2">âš ï¸</div>
      <h5 class="fw-bold">Gagal Mengambil Data Produk!</h5>
      <p class="mb-3 text-muted small">{{ errorMessage }}</p>
      <button class="btn btn-danger btn-sm px-4 fw-semibold" @click="fetchProducts(currentPage)">
        ðŸ”„ Coba Lagi
      </button>
    </div>

    <!-- 3. Kondisi Data Kosong (Hasil Pencarian Nihil) -->
    <div v-else-if="filteredProducts.length === 0" class="card border-dashed p-5 text-center text-muted bg-white my-4">
      <div class="fs-1 mb-2">ðŸ”</div>
      <h5>Produk Tidak Ditemukan</h5>
      <p class="small mb-0">
        {{ searchQuery ? `Tidak ada produk yang cocok dengan "${searchQuery}".` : 'Belum ada data produk di server.' }}
      </p>
    </div>

    <!-- 4. Kondisi Sukses: Looping Grid Kartu Produk -->
    <div v-else>
      <div class="row g-4">
        <div 
          v-for="item in filteredProducts" 
          :key="item.id" 
          class="col-12 col-sm-6 col-lg-4"
        >
          <div class="card product-card h-100 shadow-sm border-0 rounded-4 overflow-hidden bg-white">
            <!-- Gambar Produk -->
            <div class="product-img-wrapper position-relative">
              <img 
                :src="item.image" 
                :alt="item.title" 
                class="card-img-top w-100" 
                loading="lazy"
              />
              <span class="badge bg-success position-absolute top-0 end-0 m-3 px-2 py-1 shadow-sm">
                Tersedia
              </span>
            </div>

            <!-- Informasi Produk -->
            <div class="card-body d-flex flex-column justify-content-between p-4">
              <div>
                <h5 class="card-title fw-bold text-dark line-clamp-1 mb-2" :title="item.title">
                  {{ item.title }}
                </h5>
                <p class="card-text text-secondary small line-clamp-2 mb-3">
                  {{ item.description }}
                </p>
              </div>

              <!-- Footer: Harga & Tombol Aksi CRUD -->
              <div class="pt-3 border-top">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <span class="text-muted d-block small" style="font-size: 0.75rem;">Harga</span>
                    <span class="fw-bold text-primary fs-6">
                      Rp {{ Number(item.price).toLocaleString('id-ID') }}
                    </span>
                  </div>

                  <!-- Tombol Detail -->
                  <RouterLink 
                    :to="`/product/${item.id}`" 
                    class="btn btn-outline-primary btn-sm px-3 rounded-pill fw-semibold text-decoration-none"
                  >
                    Detail âž”
                  </RouterLink>
                </div>

                <!-- Tombol Edit & Hapus (CRUD Actions) -->
                <div class="d-flex gap-2">
                  <RouterLink 
                    :to="`/product/edit/${item.id}`" 
                    class="btn btn-outline-warning btn-sm flex-grow-1 rounded-pill fw-semibold text-decoration-none d-flex align-items-center justify-content-center gap-1"
                  >
                    <span>âœï¸</span> Edit
                  </RouterLink>

                  <button 
                    class="btn btn-outline-danger btn-sm flex-grow-1 rounded-pill fw-semibold d-flex align-items-center justify-content-center gap-1"
                    @click="deleteProduct(item.id, item.title)"
                  >
                    <span>ðŸ—‘ï¸</span> Hapus
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 5. Kontrol Pagination Modern -->
      <div v-if="totalPages > 1 && !searchQuery" class="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3 mt-5 pt-3 border-top">
        <span class="text-secondary small">
          Menampilkan Halaman <strong class="text-dark">{{ currentPage }}</strong> dari <strong class="text-dark">{{ totalPages }}</strong> (Total {{ totalItems }} Produk)
        </span>

        <nav aria-label="Navigasi Halaman Produk">
          <ul class="pagination pagination-sm m-0 shadow-sm">
            <!-- Tombol Sebelumnya -->
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
              <button 
                class="page-link" 
                :disabled="currentPage === 1"
                @click="prevPage"
              >
                &laquo; Prev
              </button>
            </li>

            <!-- Angka Halaman -->
            <li 
              v-for="page in totalPages" 
              :key="page" 
              class="page-item" 
              :class="{ active: page === currentPage }"
            >
              <button class="page-link" @click="goToPage(page)">
                {{ page }}
              </button>
            </li>

            <!-- Tombol Selanjutnya -->
            <li class="page-item" :class="{ disabled: currentPage === totalPages }">
              <button 
                class="page-link" 
                :disabled="currentPage === totalPages"
                @click="nextPage"
              >
                Next &raquo;
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Kartu Produk Styling */
.product-card {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  border: 1px solid #edf2f7;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08) !important;
}

.product-img-wrapper {
  height: 200px;
  background-color: #f8fafc;
  overflow: hidden;
}

.product-img-wrapper img {
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.product-card:hover .product-img-wrapper img {
  transform: scale(1.05);
}

/* Membatasi teks agar rapi seragam */
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 38px;
}

.border-dashed {
  border: 2px dashed #cbd5e1;
}

/* Pagination Styling */
.pagination .page-link {
  color: #0d6efd;
  cursor: pointer;
  padding: 0.375rem 0.75rem;
}

.pagination .page-item.active .page-link {
  background-color: #0d6efd;
  border-color: #0d6efd;
  color: white;
  font-weight: 600;
}

.pagination .page-item.disabled .page-link {
  color: #6c757d;
  cursor: not-allowed;
  background-color: #f8f9fa;
}
</style>
