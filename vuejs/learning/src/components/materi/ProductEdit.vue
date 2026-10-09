<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

// 1. Router & Route Setup
const route = useRoute();
const router = useRouter();
const productId = route.params.id;

// 2. State Form Edit
const form = reactive({
  title: '',
  price: null as number | null,
  description: '',
  image: '',
});

// 3. State Status
const isLoading = ref<boolean>(true);
const isSubmitting = ref<boolean>(false);
const errorMessage = ref<string | null>(null);
const successMessage = ref<string | null>(null);

// 4. Ambil Data Awal Produk Berdasarkan ID (GET)
async function fetchProductInitial() {
  isLoading.value = true;
  errorMessage.value = null;

  try {
    const res = await axios.get(`http://localhost:3001/products/${productId}`);
    // Isi form dengan data lama yang sudah ada di database
    form.title = res.data.title;
    form.price = res.data.price;
    form.description = res.data.description;
    form.image = res.data.image;
  } catch (error: any) {
    console.error('Gagal mengambil data produk lama:', error);
    errorMessage.value = 'Produk tidak ditemukan atau gagal memuat data.';
  } finally {
    isLoading.value = false;
  }
}

// 5. Submit Pembaruan Data (Metode PUT)
async function handleUpdate() {
  errorMessage.value = null;
  successMessage.value = null;

  if (!form.title.trim() || !form.price || !form.description.trim() || !form.image.trim()) {
    errorMessage.value = 'Semua field wajib diisi!';
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

    // Panggil REST API dengan method PUT untuk update data
    await axios.put(`http://localhost:3001/products/${productId}`, payload);

    successMessage.value = 'Data produk berhasil diperbarui!';

    // Alihkan ke katalog setelah 1.5 detik
    setTimeout(() => {
      router.push('/getdata');
    }, 1500);
  } catch (error: any) {
    console.error('Gagal update produk:', error);
    errorMessage.value = error.message || 'Gagal memperbarui produk ke server.';
  } finally {
    isSubmitting.value = false;
  }
}

function cancel() {
  router.push('/getdata');
}

onMounted(() => {
  fetchProductInitial();
});
</script>

<template>
  <div class="product-edit-page container py-4">
    <!-- Header -->
    <div class="d-flex align-items-center justify-content-between mb-4">
      <div>
        <h2 class="fw-bold text-dark m-0">âœï¸ Edit Produk #{{ productId }}</h2>
        <p class="text-secondary small mb-0">
          Ubah data produk dan kirim ke server menggunakan HTTP Method <code>PUT</code>.
        </p>
      </div>

      <button class="btn btn-outline-secondary btn-sm rounded-pill px-3" @click="cancel">
        &larr; Batal & Kembali
      </button>
    </div>

    <!-- Loading State saat fetch awal -->
    <div v-if="isLoading" class="text-center py-5">
      <div class="spinner-border text-primary mb-3" role="status"></div>
      <h5 class="text-secondary">Memuat data produk lama...</h5>
    </div>

    <!-- Alert Notifikasi -->
    <div v-else>
      <div v-if="successMessage" class="alert alert-success shadow-sm d-flex align-items-center gap-2 mb-4">
        <span class="fs-4">ðŸŽ‰</span>
        <div>
          <strong>Berhasil!</strong> {{ successMessage }}
          <div class="small text-muted">Sedang mengalihkan ke katalog produk...</div>
        </div>
      </div>

      <div v-if="errorMessage" class="alert alert-danger shadow-sm d-flex align-items-center gap-2 mb-4">
        <span class="fs-4">âš ï¸</span>
        <div><strong>Peringatan:</strong> {{ errorMessage }}</div>
      </div>

      <!-- Form Edit & Live Preview -->
      <div class="row g-4">
        <div class="col-12 col-lg-7">
          <div class="card border-0 shadow-sm rounded-4 bg-white p-4 p-md-5">
            <form @submit.prevent="handleUpdate">
              <div class="mb-3">
                <label class="form-label fw-bold text-dark small">Nama Produk</label>
                <input v-model="form.title" type="text" class="form-control" required />
              </div>

              <div class="mb-3">
                <label class="form-label fw-bold text-dark small">Harga (Rp)</label>
                <div class="input-group">
                  <span class="input-group-text bg-light fw-bold text-secondary">Rp</span>
                  <input v-model.number="form.price" type="number" class="form-control" min="1000" required />
                </div>
              </div>

              <div class="mb-3">
                <label class="form-label fw-bold text-dark small">URL Gambar</label>
                <input v-model="form.image" type="url" class="form-control" required />
              </div>

              <div class="mb-4">
                <label class="form-label fw-bold text-dark small">Deskripsi Produk</label>
                <textarea v-model="form.description" class="form-control" rows="4" required></textarea>
              </div>

              <div class="d-flex justify-content-end gap-2 pt-3 border-top">
                <button type="button" class="btn btn-outline-secondary px-4 rounded-pill" :disabled="isSubmitting" @click="cancel">
                  Batal
                </button>
                <button type="submit" class="btn btn-warning px-4 rounded-pill fw-semibold shadow-sm d-flex align-items-center gap-2" :disabled="isSubmitting">
                  <span v-if="isSubmitting" class="spinner-border spinner-border-sm" role="status"></span>
                  <span>{{ isSubmitting ? 'Menyimpan...' : 'ðŸ’¾ Simpan Perubahan' }}</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        <!-- Live Preview -->
        <div class="col-12 col-lg-5">
          <div class="position-sticky" style="top: 20px;">
            <h6 class="fw-bold text-secondary mb-3 d-flex align-items-center gap-2">
              <span>ðŸ‘ï¸</span> Pratinjau Tampilan Baru
            </h6>

            <div class="card border-0 shadow-sm rounded-4 overflow-hidden bg-white">
              <div class="preview-img-wrapper position-relative bg-light">
                <img v-if="form.image" :src="form.image" alt="Preview" class="w-100 h-100 object-fit-cover" />
                <span class="badge bg-warning text-dark position-absolute top-0 end-0 m-3 px-2 py-1 shadow-sm">
                  Mode Edit
                </span>
              </div>

              <div class="card-body p-4">
                <h5 class="card-title fw-bold text-dark text-truncate mb-2">
                  {{ form.title || 'Nama Produk' }}
                </h5>
                <p class="card-text text-secondary small line-clamp-2 mb-3">
                  {{ form.description || 'Deskripsi rincian produk...' }}
                </p>

                <div class="d-flex justify-content-between align-items-center pt-3 border-top">
                  <div>
                    <span class="text-muted d-block small" style="font-size: 0.75rem;">Harga</span>
                    <span class="fw-bold text-primary fs-6">
                      Rp {{ form.price ? Number(form.price).toLocaleString('id-ID') : '0' }}
                    </span>
                  </div>
                </div>
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
