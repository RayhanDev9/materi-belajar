<script setup lang="ts">
import { ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import useFilteredProducts from "@/composables/useFilterMenu";
import type { FoodProduct } from "@/types/Product";

// Shared Reusable UI Components
import {
  ProductCard,
  ToastNotification,
  EmptyState,
  ProductSkeleton,
} from "@/components";

// Menu View Specific Data & Components
import { menuCategories } from "./data/menuData";
import MenuHeader from "./components/MenuHeader.vue";
import MenuCategoryPills from "./components/MenuCategoryPills.vue";
import MenuFilterBar from "./components/MenuFilterBar.vue";
import fetchProducts from "@/services/fetchProducts";
import { useCartStore } from "@/stores/useCart";

const cartStore = useCartStore();

// 1. Fetch Data dari Server
const {
  data: products,
  isLoading,
  isError,
  error,
  refetch,
} = useQuery<FoodProduct[]>({
  queryKey: ["products"],
  queryFn: fetchProducts,
});

// 2. State Filter & Interaksi
const searchQuery = ref("");
const selectedCategory = ref("all");
const onlySpicy = ref(false);
const onlyDiscount = ref(false);
const sortBy = ref<"popular" | "price-asc" | "price-desc">("popular");
const toastMessage = ref("");
const showToast = ref(false);

// 3. Computed: Filter & Urutkan Produk
const filteredProducts = useFilteredProducts(
  products,
  searchQuery,
  selectedCategory,
  onlySpicy,
  onlyDiscount,
  sortBy
);

// 4. Action: Tambah ke Keranjang
const handleAddToCart = (product: FoodProduct) => {
  cartStore.addToCart(product, 1);
  toastMessage.value = `Berhasil menambahkan "${product.name}" ke keranjang!`;
  showToast.value = true;
  setTimeout(() => {
    showToast.value = false;
  }, 2500);
};

// 5. Reset Filter
const resetFilter = () => {
  searchQuery.value = "";
  selectedCategory.value = "all";
  onlySpicy.value = false;
  onlyDiscount.value = false;
  sortBy.value = "popular";
};
</script>

<template>
  <div class="menu-page">
    <!-- Toast Notifikasi (Reusable) -->
    <ToastNotification :show="showToast" :message="toastMessage" />

    <div class="menu-container">
      <!-- HEADER & SEARCH (Menu Component) -->
      <MenuHeader v-model:search-query="searchQuery" />

      <!-- CATEGORY TABS (Menu Component) -->
      <MenuCategoryPills
        v-model="selectedCategory"
        :categories="menuCategories"
      />

      <!-- QUICK FILTERS & SORTING (Menu Component) -->
      <MenuFilterBar
        v-model:only-discount="onlyDiscount"
        v-model:only-spicy="onlySpicy"
        v-model:sort-by="sortBy"
      />

      <!-- CONTENT STATES -->
      <!-- 1. LOADING SKELETON (Reusable) -->
      <ProductSkeleton v-if="isLoading" :count="8" />

      <!-- 2. ERROR STATE (Reusable) -->
      <EmptyState
        v-else-if="isError"
        icon="⚠️"
        title="Gagal Menghubungkan ke Server"
        :description="error?.message || 'Gagal memuat data produk, silakan periksa koneksi internet Anda.'"
      >
        <button class="btn-primary" @click="() => refetch()">Coba Lagi</button>
      </EmptyState>

      <!-- 3. EMPTY STATE (Reusable) -->
      <EmptyState
        v-else-if="filteredProducts.length === 0"
        icon="🔍"
        title="Menu Tidak Ditemukan"
        description="Tidak ada makanan yang cocok dengan kriteria pencarian Anda."
      >
        <button class="btn-outline" @click="resetFilter">Reset Semua Filter</button>
      </EmptyState>

      <!-- 4. PRODUCT GRID (Reusable Cards) -->
      <div v-else class="product-grid">
        <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
          @add-to-cart="handleAddToCart"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

.menu-page {
  font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  background-color: #f8fafc;
  min-height: 100vh;
  color: #1e293b;
  padding: 1.5rem 1rem 4rem;
}

.menu-container {
  max-width: 1280px;
  margin: 0 auto;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1.25rem;
}

@media (min-width: 520px) {
  .product-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.25rem;
  }
}

@media (min-width: 820px) {
  .product-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.5rem;
  }
}

@media (min-width: 1120px) {
  .product-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1.5rem;
  }
}

.btn-primary {
  background-color: #ff5a1f;
  color: white;
  border: none;
  border-radius: 9999px;
  padding: 0.65rem 1.5rem;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background-color: #e04810;
}

.btn-outline {
  background-color: transparent;
  color: #ff5a1f;
  border: 1.5px solid #ff5a1f;
  border-radius: 9999px;
  padding: 0.65rem 1.5rem;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-outline:hover {
  background-color: #fff1eb;
}
</style>
