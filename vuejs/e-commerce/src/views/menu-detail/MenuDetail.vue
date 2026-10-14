<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { useQuery } from "@tanstack/vue-query";
import fetchProductDetail from "@/services/fetchProductDetail";

import { useCartStore } from "@/stores/useCart";

// Shared Components
import { EmptyState, ToastNotification } from "@/components";

// Menu Detail View Specific Components
import MenuDetailNav from "./components/MenuDetailNav.vue";
import MenuDetailGallery from "./components/MenuDetailGallery.vue";
import MenuDetailDescription from "./components/MenuDetailDescription.vue";
import MenuDetailInfo from "./components/MenuDetailInfo.vue";
import MenuDetailPurchaseBox from "./components/MenuDetailPurchaseBox.vue";
import MenuDetailSkeleton from "./components/MenuDetailSkeleton.vue";

const props = defineProps<{
  id: string;
}>();

const cartStore = useCartStore();

// 1. Fetch Detail Produk dari TanStack Query
const { data: product, isLoading, isError } = useQuery({
  queryKey: ["menu-detail", () => props.id],
  queryFn: () => fetchProductDetail(props.id),
});

// 2. State Lokal untuk Interaksi
const quantity = ref(1);
const showToast = ref(false);
const toastMessage = ref("");

// 3. Action Handlers
const handleAddToCart = () => {
  if (!product.value) return;
  cartStore.addToCart(product.value, quantity.value);
  toastMessage.value = `Berhasil menambahkan ${quantity.value}x "${product.value.name}" ke keranjang!`;
  showToast.value = true;
  setTimeout(() => {
    showToast.value = false;
  }, 2500);
};
</script>

<template>
  <main class="menu-detail-page">
    <div class="menu-detail-container">
      <!-- 1. Top Navigation & Breadcrumb -->
      <MenuDetailNav :product-name="product?.name" />

      <!-- 2. Loading State -->
      <MenuDetailSkeleton v-if="isLoading" />

      <!-- 3. Error / Not Found State -->
      <section v-else-if="isError || !product" class="error-container">
        <EmptyState
          icon="🍽️"
          title="Menu Tidak Ditemukan"
          description="Menu makanan yang Anda cari mungkin sudah habis atau tautan tidak valid."
        >
          <RouterLink to="/menu" class="btn-back-home">
            Kembali ke Daftar Menu
          </RouterLink>
        </EmptyState>
      </section>

      <!-- 4. Main Detail Content -->
      <article v-else class="detail-card">
        <!-- Kolom Kiri: Foto Produk + Deskripsi & Bahan/Rempah -->
        <div class="left-column">
          <MenuDetailGallery
            :images="product.images"
            :product-name="product.name"
            :discount-percent="product.discountPercent"
            :is-spicy="product.isSpicy"
            :spicy-level="product.spicyLevel"
            :is-halal="product.isHalal"
            :is-vegetarian="product.isVegetarian"
          />

          <MenuDetailDescription
            :description="product.description"
            :ingredients="product.ingredients"
          />
        </div>

        <!-- Kolom Kanan: Info Produk (2 Harga, Nutrisi) & Form Pemesanan -->
        <div class="right-column">
          <MenuDetailInfo :product="product" />

          <MenuDetailPurchaseBox
            :price="product.price"
            :stock="product.stock"
            v-model:quantity="quantity"
            @add-to-cart="handleAddToCart"
          />
        </div>
      </article>
    </div>

    <!-- Toast Notification -->
    <ToastNotification :show="showToast" :message="toastMessage" />
  </main>
</template>

<style scoped>
.menu-detail-page {
  min-height: 100vh;
  background-color: #f8fafc;
  color: #1e293b;
  font-family: "Plus Jakarta Sans", system-ui, -apple-system, sans-serif;
  padding: 1.5rem 1rem 3.5rem;
}

.menu-detail-container {
  max-width: 1180px;
  margin: 0 auto;
}

.detail-card {
  background-color: #ffffff;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.06);
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.25rem;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

@media (min-width: 900px) {
  .detail-card {
    grid-template-columns: 460px 1fr;
    gap: 3rem;
    padding: 2.5rem;
  }
}

.left-column,
.right-column {
  display: flex;
  flex-direction: column;
}

.error-container {
  padding: 2rem 0;
}

.btn-back-home {
  display: inline-block;
  background-color: #ff5a1f;
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.25s ease;
  margin-top: 1rem;
}

.btn-back-home:hover {
  background-color: #e04810;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 90, 31, 0.3);
}
</style>