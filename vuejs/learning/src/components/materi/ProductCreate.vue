<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

// 1. Setup Router
const router = useRouter();

// 2. State Form Data Produk
const form = reactive({
  title: '',
  price: null as number | null,
  description: '',
  image: '',
});

// 3. State Status Pengiriman
const isSubmitting = ref<boolean>(false);
const errorMessage = ref<string | null>(null);
const successMessage = ref<string | null>(null);

// Preset gambar cepat jika user tidak punya URL gambar
const sampleImages = [
  { label: 'ðŸ’» Laptop', url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80' },
  { label: 'ðŸŽ§ Headphone', url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80' },
  { label: 'âŒš Smartwatch', url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80' },
  { label: 'ðŸ“· Kamera', url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80' },
];

function setPresetImage(url: string) {
  form.image = url;
}

// 4. Submit Form ke JSON-Server (Metode POST)
async function handleSubmit() {
  errorMessage.value = null;
  successMessage.value = null;

  // Validasi Sederhana
  if (!form.title.trim() || !form.price || !form.description.trim() || !form.image.trim()) {
    errorMessage.value = 'Semua field wajib diisi!';
    return;
  }

  if (form.price <= 0) {
    errorMessage.value = 'Harga produk harus lebih dari 0.';
    return;
  }

  isSubmitting.value = true;

  try {
    const payload = {
      title: form.title.trim(),
      price: Number(form.price),
      description: form.description.trim(),
      image: form.image.trim(),
    };

    // Kirim data via axios POST ke JSON-Server
    const res = await axios.post('http://localhost:3001/products', payload);
    
    successMessage.value = `Produk "${res.data.title}" berhasil ditambahkan!`;

    // Reset Form
    form.title = '';
    form.price = null;
    form.description = '';
    form.image = '';

    // Otomatis arahkan kembali ke katalog setelah 1.5 detik
    setTimeout(() => {
      router.push('/getdata');
    }, 1500);
  } catch (error: any) {
    console.error('Error simpan produk:', error);
    errorMessage.value = error.message || 'Gagal menyimpan produk ke JSON-Server.';
  } finally {
    isSubmitting.value = false;
  }
}

// 5. Batalkan & Kembali ke Katalog
function cancel() {
  router.push('/getdata');
}
</script>

<template>
  <div class="product-create-page container py-4">
    <!-- Header Halaman -->
    <div class="d-flex align-items-center justify-content-between mb-4">
      <div>
        <h2 class="fw-bold text-dark m-0">âœ¨ Tambah Produk Baru</h2>
        <p class="text-secondary small mb-0">
          Kirim data produk baru ke REST API JSON-Server dengan metode <code>POST</code>.
        </p>
      </div>

      <button class="btn btn-outline-secondary btn-sm rounded-pill px-3" @click="cancel">
        &larr; Kembali ke Katalog
      </button>
    </div>

    <!-- Alert Notifikasi Sukses -->
    <div v-if="successMessage" class="alert alert-success shadow-sm d-flex align-items-center gap-2 mb-4">
      <span class="fs-4">ðŸŽ‰</span>
      <div>
        <strong>Berhasil!</strong> {{ successMessage }}
        <div class="small text-muted">Sedang mengalihkan ke katalog produk...</div>
      </div>
    </div>

    <!-- Alert Notifikasi Error -->
    <div v-if="errorMessage" class="alert alert-danger shadow-sm d-flex align-items-center gap-2 mb-4">
      <span class="fs-4">âš ï¸</span>
      <div>
        <strong>Peringatan:</strong> {{ errorMessage }}
      </div>
    </div>

    <div class="row g-4">
      <!-- Kolom Kiri: Form Input -->
      <div class="col-12 col-lg-7">
        <div class="card border-0 shadow-sm rounded-4 bg-white p-4 p-md-5">
          <form @submit.prevent="handleSubmit">
            <!-- 1. Judul Produk -->
            <div class="mb-3">
              <label class="form-label fw-bold text-dark small">Nama Produk <span class="text-danger">*</span></label>
              <input 
                v-model="form.title" 
                type="text" 
                class="form-control" 
                placeholder="Contoh: MacBook Pro M3 Max 14 Inch" 
                required
              />
            </div>

            <!-- 2. Harga Produk -->
            <div class="mb-3">
              <label class="form-label fw-bold text-dark small">Harga (Rp) <span class="text-danger">*</span></label>
              <div class="input-group">
                <span class="input-group-text bg-light fw-bold text-secondary">Rp</span>
                <input 
                  v-model.number="form.price" 
                  type="number" 
                  class="form-control" 
                  placeholder="Contoh: 28500000" 
                  min="1000" 
                  required
                />
              </div>
            </div>

            <!-- 3. URL Gambar -->
            <div class="mb-3">
              <label class="form-label fw-bold text-dark small">URL Gambar Produk <span class="text-danger">*</span></label>
              <input 
                v-model="form.image" 
                type="url" 
                class="form-control" 
                placeholder="https://images.unsplash.com/..." 
                required
              />
              <!-- Contoh Cepat Preset Gambar -->
              <div class="d-flex align-items-center gap-1 flex-wrap mt-2">
                <small class="text-muted me-1">Pilih Cepat:</small>
                <button 
                  v-for="img in sampleImages" 
                  :key="img.label"
                  type="button" 
                  class="btn btn-sm btn-light border py-0 px-2 rounded-pill"
                  style="font-size: 0.75rem;"
                  @click="setPresetImage(img.url)"
                >
                  {{ img.label }}
                </button>
              </div>
            </div>

            <!-- 4. Deskripsi Produk -->
            <div class="mb-4">
              <label class="form-label fw-bold text-dark small">Deskripsi Produk <span class="text-danger">*</span></label>
              <textarea 
                v-model="form.description" 
                class="form-control" 
                rows="4" 
                placeholder="Tuliskan spesifikasi atau keunggulan produk secara lengkap..." 
                required
              ></textarea>
            </div>

            <!-- Tombol Aksi -->
            <div class="d-flex justify-content-end gap-2 pt-3 border-top">
              <button 
                type="button" 
                class="btn btn-outline-secondary px-4 rounded-pill" 
                :disabled="isSubmitting"
                @click="cancel"
              >
                Batal
              </button>
              <button 
                type="submit" 
                class="btn btn-primary px-4 rounded-pill fw-semibold shadow-sm d-flex align-items-center gap-2"
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting" class="spinner-border spinner-border-sm" role="status"></span>
                <span>{{ isSubmitting ? 'Menyimpan...' : 'ðŸ’¾ Simpan Produk' }}</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- Kolom Kanan: Live Preview Kartu Produk -->
      <div class="col-12 col-lg-5">
        <div class="position-sticky" style="top: 20px;">
          <h6 class="fw-bold text-secondary mb-3 d-flex align-items-center gap-2">
            <span>ðŸ‘ï¸</span> Pratinjau Tampilan (Live Preview)
          </h6>

          <div class="card border-0 shadow-sm rounded-4 overflow-hidden bg-white">
            <!-- Gambar Preview -->
            <div class="preview-img-wrapper position-relative bg-light">
              <img 
                v-if="form.image" 
                :src="form.image" 
                alt="Preview" 
                class="w-100 h-100 object-fit-cover"
                @error="form.image = ''"
              />
              <div v-else class="h-100 d-flex flex-column align-items-center justify-content-center text-muted p-4 text-center">
                <span class="fs-1 mb-2">ðŸ–¼ï¸</span>
                <small>URL gambar akan tampil di sini</small>
              </div>
              <span class="badge bg-success position-absolute top-0 end-0 m-3 px-2 py-1 shadow-sm">
                Tersedia
              </span>
            </div>

            <!-- Body Preview -->
            <div class="card-body p-4">
              <h5 class="card-title fw-bold text-dark text-truncate mb-2">
                {{ form.title || 'Nama Produk Anda' }}
              </h5>
              <p class="card-text text-secondary small line-clamp-2 mb-3">
                {{ form.description || 'Deskripsi rincian produk akan ditampilkan di sini...' }}
              </p>

              <div class="d-flex justify-content-between align-items-center pt-3 border-top">
                <div>
                  <span class="text-muted d-block small" style="font-size: 0.75rem;">Harga</span>
                  <span class="fw-bold text-primary fs-6">
                    Rp {{ form.price ? Number(form.price).toLocaleString('id-ID') : '0' }}
                  </span>
                </div>
                <button class="btn btn-primary btn-sm px-3 rounded-pill fw-semibold shadow-sm" disabled>
                  Beli Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.preview-img-wrapper {
  height: 220px;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 38px;
}
</style>
