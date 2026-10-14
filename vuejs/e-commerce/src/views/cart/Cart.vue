<script setup lang="ts">
import { ref } from "vue";
import { useRouter, RouterLink } from "vue-router";
import { useCartStore } from "@/stores/useCart";
import useFormatCurrency from "@/composables/useCurrency";
import { EmptyState, ToastNotification } from "@/components";

// Cart View Specific Components
import CartHeader from "./components/CartHeader.vue";
import CartItemList from "./components/CartItemList.vue";
import CartSummary from "./components/CartSummary.vue";

const router = useRouter();
const cartStore = useCartStore();


const showToast = ref(false);
const toastMessage = ref("");
const discountCodeApplied = ref(false);

const handleRemoveItem = (id: string, name: string) => {
  cartStore.removeFromCart(id);
  toastMessage.value = `"${name}" dihapus dari keranjang`;
  showToast.value = true;
  setTimeout(() => {
    showToast.value = false;
  }, 2000);
};

const handleClearCart = () => {
  if (confirm("Apakah Anda yakin ingin mengosongkan seluruh keranjang?")) {
    cartStore.clearCart();
    toastMessage.value = "Keranjang telah dikosongkan";
    showToast.value = true;
    setTimeout(() => {
      showToast.value = false;
    }, 2000);
  }
};

const handleApplyVoucher = (code: string) => {
  if (code.toUpperCase() === "MAKANENAK") {
    discountCodeApplied.value = true;
    toastMessage.value = "Voucher promo 'MAKANENAK' berhasil digunakan!";
  } else {
    toastMessage.value = "Kode voucher tidak valid atau sudah kedaluwarsa";
  }
  showToast.value = true;
  setTimeout(() => {
    showToast.value = false;
  }, 2500);
};

const handleCheckout = () => {
  router.push("/checkout");
};
</script>

<template>
  <main class="cart-page">
    <div class="cart-container">
      <!-- 1. Header & Navigation -->
      <CartHeader
        :total-items="cartStore.totalItems"
        :is-empty="cartStore.isEmpty"
        @clear-cart="handleClearCart"
      />

      <!-- 2. Empty State -->
      <section v-if="cartStore.isEmpty" class="empty-state-wrapper">
        <EmptyState
          icon="🛒"
          title="Keranjang Belanja Masih Kosong"
          description="Anda belum menambahkan menu makanan lezat ke dalam keranjang."
        >
          <RouterLink to="/menu" class="btn-explore-menu">
            🍽️ Mulai Pilih Menu Makanan
          </RouterLink>
        </EmptyState>
      </section>

      <!-- 3. Cart Content Grid (2 Kolom) -->
      <section v-else class="cart-content-grid">
        <!-- Kolom Kiri: Daftar Menu Keranjang -->
        <CartItemList
          :items="cartStore.items"
          @update-quantity="cartStore.updateQuantity"
          @remove-item="handleRemoveItem"
        />

        <!-- Kolom Kanan: Ringkasan Pesanan -->
        <CartSummary
          :total-items="cartStore.totalItems"
          :total-price="cartStore.totalPrice"
          :total-discount="cartStore.totalDiscount"
          :discount-code-applied="discountCodeApplied"
          @apply-voucher="handleApplyVoucher"
          @checkout="handleCheckout"
        />
      </section>
    </div>

    <!-- Toast Notification -->
    <ToastNotification :show="showToast" :message="toastMessage" />
  </main>
</template>

<style scoped>
.cart-page {
  min-height: 100vh;
  background-color: #f8fafc;
  color: #1e293b;
  font-family: "Plus Jakarta Sans", system-ui, -apple-system, sans-serif;
  padding: 1.5rem 1rem 4rem;
}

.cart-container {
  max-width: 1180px;
  margin: 0 auto;
}

.empty-state-wrapper {
  padding: 3rem 0;
}

.btn-explore-menu {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #ff5a1f;
  color: #ffffff;
  padding: 0.85rem 1.75rem;
  border-radius: 9999px;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  box-shadow: 0 4px 14px rgba(255, 90, 31, 0.3);
  transition: all 0.25s ease;
  margin-top: 1rem;
}

.btn-explore-menu:hover {
  background-color: #e04810;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(255, 90, 31, 0.4);
}

.cart-content-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: start;
}

@media (min-width: 960px) {
  .cart-content-grid {
    grid-template-columns: 1fr 380px;
    gap: 2.5rem;
  }
}
</style>
