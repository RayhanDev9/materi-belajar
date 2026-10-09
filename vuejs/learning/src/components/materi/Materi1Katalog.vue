<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';

type product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  image_title: string;
  category?: string;
};

const products = ref<product[]>([
  {
    id: "1",
    name: "Laptop Gaming Pro",
    description: "Laptop bertenaga tinggi untuk gaming dan editing video dengan grafis RTX.",
    price: 18500000,
    image_title: "laptop-gaming-pro",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
    category: "Elektronik"
  },
  {
    id: "2",
    name: "Wireless Headphones",
    description: "Headphone nirkabel dengan fitur noise cancelling dan bass yang mendalam.",
    price: 1250000,
    image_title: "wireless-headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    category: "Audio"
  },
  {
    id: "3",
    name: "Mechanical Keyboard",
    description: "Keyboard mekanikal RGB dengan switch responsif dan keycap tahan lama.",
    price: 850000,
    image_title: "mechanical-keyboard",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
    category: "Elektronik"
  },
  {
    id: "4",
    name: "Smartwatch Modern",
    description: "Jam tangan pintar dengan pelacak detak jantung, kebugaran, dan layar AMOLED.",
    price: 2100000,
    image_title: "smartwatch-modern",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    category: "Aksesoris"
  },
  {
    id: "5",
    name: "Tumbler Stainless Steel",
    description: "Botol minum kedap panas dan dingin tahan hingga 24 jam dengan desain minimalis.",
    price: 320000,
    image_title: "tumbler-stainless-steel",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
    category: "Aksesoris"
  }
]);

const nama = ref("Leptop");
const description = ref("Leptop Gaming");
const price = ref(15000000);
const category = ref("Elektronik");
const image = ref("https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80");
const cart = ref<product[]>([]);
const isCartOpen = ref(false);

const totalCartPrice = computed(() => {
  return cart.value.reduce((total, item) => total + Number(item.price || 0), 0);
});

function removeCartItem(index: number) {
  cart.value.splice(index, 1);
}


const totalHarga = computed(() => {
  let total: number = 0;
  for (let product = 0; product < products.value.length; product++) {
    const element = products.value[product]?.price;
    total += Number(element?? 0);
  }

  return total;
})

let intervalId: any = null;
const now =ref(String(new Date().getSeconds()))

onMounted(() => {
 intervalId = setInterval(() => {
    now.value = String(new Date().getSeconds());
  },1000)
})

onUnmounted(()=> {
 if (intervalId) clearInterval(intervalId);

}
)


// Contoh Kasus v-html: Teks dari CMS/Backend yang memiliki format HTML
const promoBanner = ref(
  "🔥 Promo Kilat: Gunakan kupon <strong>VUEHEMAT</strong> dan dapatkan cashback <span style='color: #10b981; font-weight: bold;'>20%</span>!"
);

// ==========================================
// PENGKATEGORIAN DATA ARRAY
// ==========================================
const selectedCategory = ref('Semua');

// 1. Ambil daftar kategori unik dari array produk
const categories = computed(() => {
  const cats = products.value.map(p => p.category || 'Umum');
  return ['Semua', ...new Set(cats)];
});

// 2. Filter produk sesuai kategori yang dipilih
const filteredProducts = computed(() => {
  if (selectedCategory.value === 'Semua') {
    return products.value;
  }
  return products.value.filter(p => (p.category || 'Umum') === selectedCategory.value);
});

const addProduct = () => {
  products.value.push({
    id: Date.now().toString(),
    name: nama.value,
    description: description.value,
    price: Number(price.value),
    category: category.value || 'Umum',
    image: image.value,
    image_title: nama.value.toLowerCase().replace(/\s+/g, '-'),
  });

  // Reset form
  nama.value = "";
  description.value = "";
  price.value = 0;
  category.value = "Elektronik";
  image.value = "";
};

function addCart(item: product) {
  cart.value.push(item);
}

onMounted(async () => {
  try {
    const res = await fetch(`https://hplussport.com/api/products/order/price`);
    const data = await res.json();
    console.log(data);
    products.value = data.map((item: any) => ({
      ...item,
      category: item.category || 'Olahraga'
    }));
  } catch (error) {
    console.error("Gagal mengambil data dari API:", error);
  }
});

const html = "<em>tes </em>";

function onBeforeEnter (el : Element) {
  const htmlEl = el as HTMLElement;
  htmlEl.style.opacity = "0";
  htmlEl.style.transform = "translateY(-20px)";
}

function onEnter (el : Element, done : () => void) {
  const htmlEl = el as HTMLElement;
  const animation = htmlEl.animate([
    { opacity: 0, transform: "translateY(-20px)" },
    { opacity: 1, transform: "translateY(0px)" }
  ], {
    duration: 350,
    easing: "ease-out",
  });

  animation.onfinish = () => {
    // PENTING: Bersihkan inline style agar kartu tidak kembali ke opacity 0
    htmlEl.style.opacity = "";
    htmlEl.style.transform = "";
    done();
  };
}

function onLeave(el: Element, done: () => void) {
  const htmlEl = el as HTMLElement;
  // Jalankan animasi keluar (menghilang & bergeser ke bawah)
  const animation = htmlEl.animate([
    { opacity: 1, transform: 'scale(1)' },
    { opacity: 0, transform: 'scale(0.8)' }
  ], {
    duration: 300,
    easing: 'ease-in'
  });
  // WAJIB: Panggil done() agar Vue benar-benar menghapus elemen dari DOM setelah animasi beres
  animation.onfinish = () => {
    done();
  };
}
</script>

<template>
  <div class="app-layout">
    <!-- Header -->
    <header class="catalog-header">
      <div>
        <h1 v-html="html"></h1>
        <p class="subtitle">Pilihan produk terbaik untuk Anda</p>
      </div>

      <!-- KASUS v-once: Membekukan nilai saat pertama kali dimuat -->
      <div class="stats-bar">
        <!-- 1. v-once: Nilai ini TERKUNCI selamanya (tidak berubah saat tambah produk) -->
        <span v-once class="stat-badge stat-locked">
          🔒 Stok Awal Toko: {{ products.length }} item (v-once)
        </span>

        <!-- 2. Reaktif biasa: Nilai ini AKAN BERTAMBAH saat submit form -->
        <span class="stat-badge stat-live">
          📦 Total Produk: {{ products.length }} item
        </span>

        <!-- Dropdown Keranjang Belanja -->
        <div class="position-relative">
          <button 
            class="btn btn-sm btn-outline-success d-flex align-items-center gap-2"
            @click="isCartOpen = !isCartOpen"
          >
            <i class="fa-solid fa-cart-shopping"></i>
            <span>Keranjang</span>
            <span class="badge bg-success">{{ cart.length }}</span>
          </button>

          <!-- Isi Dropdown Menu -->
          <Transition
            enter-active-class="animate__animated animate__fadeIn animate__faster"
            leave-active-class="animate__animated animate__fadeOut animate__faster"
          >
            <div 
              v-if="isCartOpen" 
              class="cart-dropdown shadow-lg rounded-3 p-3 bg-white border position-absolute end-0 mt-2"
              style="width: 320px; z-index: 1050;"
            >
              <div class="d-flex justify-content-between align-items-center border-bottom pb-2 mb-2">
                <h6 class="mb-0 fw-bold">🛒 Keranjang Belanja</h6>
                <button 
                  type="button" 
                  class="btn-close btn-sm" 
                  aria-label="Close" 
                  @click="isCartOpen = false"
                ></button>
              </div>

              <!-- Daftar Barang di Keranjang -->
              <div v-if="cart.length > 0">
                <ul class="list-unstyled mb-2" style="max-height: 220px; overflow-y: auto;">
                  <li 
                    v-for="(c, idx) in cart" 
                    :key="idx" 
                    class="d-flex justify-content-between align-items-center py-2 border-bottom"
                  >
                    <div class="me-2 text-truncate" style="max-width: 210px;">
                      <div class="fw-semibold text-truncate">{{ c.name }}</div>
                      <small class="text-success fw-bold">
                        Rp {{ Number(c.price).toLocaleString('id-ID') }}
                      </small>
                    </div>
                    <button 
                      class="btn btn-sm btn-outline-danger py-0 px-2"
                      title="Hapus barang" 
                      @click="removeCartItem(idx)"
                    >
                      ✕
                    </button>
                  </li>
                </ul>

                <!-- Total Harga -->
                <div class="d-flex justify-content-between align-items-center fw-bold border-top pt-2">
                  <span>Total Belanja:</span>
                  <span class="text-success fs-6">
                    Rp {{ totalCartPrice.toLocaleString('id-ID') }}
                  </span>
                </div>
              </div>

              <!-- Jika Keranjang Masih Kosong -->
              <div v-else class="text-center py-3 text-muted">
                <p class="mb-0">Keranjang masih kosong 🛍️</p>
                <small>Klik tombol (+) pada kartu produk untuk menambahkan.</small>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </header>

    <!-- KASUS v-html: Merender kode HTML dari string variabel promoBanner -->
    <div class="promo-box" v-html="promoBanner"></div>

    <!-- Tab Filter Kategori -->
    <div class="d-flex align-items-center gap-2 mb-4 flex-wrap bg-white p-3 rounded-3 border shadow-sm">
      <span class="fw-bold text-secondary me-2">🏷️ Kategori:</span>
      <button 
        v-for="cat in categories" 
        :key="cat"
        type="button"
        class="btn btn-sm px-3 rounded-pill fw-semibold"
        :class="selectedCategory === cat ? 'btn-success shadow-sm' : 'btn-outline-secondary'"
        @click="selectedCategory = cat"
      >
        {{ cat }}
      </button>
    </div>

    <!-- Grid Kartu Produk -->
    <div>
      <TransitionGroup :css="false" @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave" tag="div" class="product-grid">
        <article v-for="item in filteredProducts" :key="item.id" class="product-card">
        <div class="image-container">
          <img :src="item.image" :alt="item.image_title || item.name" loading="lazy" />
          <!-- Badge Success -->
          <span class="badge-success">✓ Tersedia</span>
        </div>

        <div class="product-info">
          <span class="badge bg-light text-secondary border align-self-start mb-2">{{ item.category || 'Umum' }}</span>
          <h2 class="product-name">{{ item.name }}</h2>
          <!-- KASUS v-html: Merender teks deskripsi jika mengandung tag HTML -->
          <p class="product-description" v-html="item.description"></p>

          <div class="product-footer">
            <span class="product-price">Rp {{ Number(item.price).toLocaleString('id-ID') }}</span>
            <!-- Tombol Tambah (+) -->
            <button @click="addCart(item)" class="btn-plus" title="Tambah ke keranjang">
              +
            </button>
            
          </div>
        </div>
      </article>
      </TransitionGroup>
    </div>

    <!-- Form Tambah Produk Baru -->
    <section class="form-container">
      <h2>Tambah Produk Baru</h2>
      
      <form class="product-form" @submit.prevent="addProduct">
        <div class="form-group">
          <label for="nama">Nama Produk:</label>
          <input v-model="nama" type="text" id="nama" placeholder="Contoh: Mouse Wireless" required />
        </div>

        <div class="form-group">
          <label for="kategori">Kategori Produk:</label>
          <select v-model="category" id="kategori" class="form-select" required>
            <option value="Elektronik">Elektronik</option>
            <option value="Audio">Audio</option>
            <option value="Aksesoris">Aksesoris</option>
            <option value="Pakaian">Pakaian</option>
            <option value="Olahraga">Olahraga</option>
          </select>
        </div>

        <div class="form-group">
          <label for="deskripsi">Deskripsi Produk:</label>
          <textarea v-model="description" id="deskripsi" rows="3" placeholder="Tuliskan deskripsi produk..."></textarea>
        </div>

        <div class="form-group">
          <label for="harga">Harga (Rp):</label>
          <input v-model="price" type="number" id="harga" placeholder="Contoh: 150000" required />
        </div>

        <div class="form-group">
          <label for="gambar">URL Gambar (Unsplash):</label>
          <input v-model="image" type="text" id="gambar" placeholder="https://images.unsplash.com/..." required />
        </div>

        <button type="submit" class="btn-submit">Simpan Produk</button>
      </form>

      <h3>Total Harga: Rp {{ totalHarga.toLocaleString('id-ID') }}</h3>
      <p>{{ now }}</p>
    </section>
  </div>
</template>

<style scoped>
.app-layout {
  margin: 0 auto;
  padding: 20px 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #2c3e50;
}

/* Header */
.catalog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 2px solid #edf2f7;
}

.catalog-header h1 {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  color: #1a202c;
}

.catalog-header .subtitle {
  margin: 4px 0 0 0;
  color: #718096;
  font-size: 0.95rem;
}

/* Stats Bar (v-once vs Live) */
.stats-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.stat-badge {
  font-size: 0.85rem;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
}

.stat-locked {
  background-color: #f1f5f9;
  color: #475569;
  border: 1px solid #cbd5e1;
}

.stat-live {
  background-color: #eff6ff;
  color: #1d4ed8;
  border: 1px solid #bfdbfe;
}

.stat-cart {
  background-color: #f0fdf4;
  color: #15803d;
  border: 1px solid #bbf7d0;
}

/* Promo Box (v-html) */
.promo-box {
  background: linear-gradient(135deg, #ecfdf5 0%, #e0f2fe 100%);
  border: 1px solid #a7f3d0;
  color: #065f46;
  padding: 14px 20px;
  border-radius: 10px;
  margin-bottom: 28px;
  font-size: 0.95rem;
  box-shadow: 0 2px 6px rgba(16, 185, 129, 0.08);
}

/* Grid Layout Produk Responsif */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
  margin-bottom: 48px;
}

/* Card Produk */
.product-card {
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* Gambar & Badge */
.image-container {
  position: relative;
  width: 100%;
  height: 200px;
  background-color: #f8fafc;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Badge Success */
.badge-success {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #10b981;
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 20px;
  box-shadow: 0 2px 6px rgba(16, 185, 129, 0.4);
}

/* Info Produk */
.product-info {
  padding: 18px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.product-name {
  font-size: 1.15rem;
  font-weight: 600;
  margin: 0 0 8px;
  color: #1e293b;
}

.product-description {
  font-size: 0.88rem;
  color: #64748b;
  line-height: 1.45;
  margin: 0 0 16px;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Footer Card */
.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid #f1f5f9;
}

.product-price {
  font-size: 1.1rem;
  font-weight: 700;
  color: #0f172a;
}

/* Tombol Tambah (+) */
.btn-plus {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: none;
  background-color: #42b883;
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(66, 184, 131, 0.35);
}

.btn-plus:hover {
  background-color: #33a06f;
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(66, 184, 131, 0.5);
}

.btn-plus:active {
  transform: scale(0.95);
}

/* Form Styling */
.form-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 28px;
  background-color: #ffffff;
  border-radius: 14px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
}

.form-container h2 {
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 1.35rem;
  text-align: center;
  color: #1e293b;
}

.product-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #475569;
}

.form-group input,
.form-group textarea {
  padding: 10px 14px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 0.95rem;
  font-family: inherit;
  transition: border-color 0.2s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #42b883;
  box-shadow: 0 0 0 3px rgba(66, 184, 131, 0.15);
}

.btn-submit {
  margin-top: 8px;
  padding: 12px;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-submit:hover {
  background-color: #33a06f;
}
</style>
