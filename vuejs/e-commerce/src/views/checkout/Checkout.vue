<script setup lang="ts">
import { ref, reactive, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useCartStore } from "@/stores/useCart";
import { useValidateCheckout } from "@/composables/useValidateCheckout";
import { ToastNotification } from "@/components";

// Sub-komponen Khusus Halaman Checkout
import CheckoutNav from "./components/CheckoutNav.vue";
import CheckoutCustomerForm, { type CustomerData } from "./components/CheckoutCustomerForm.vue";
import CheckoutPaymentShipping from "./components/CheckoutPaymentShipping.vue";
import CheckoutSummary from "./components/CheckoutSummary.vue";
import CheckoutSuccessModal, { type OrderSuccessDetail } from "./components/CheckoutSuccessModal.vue";

const router = useRouter();
const cartStore = useCartStore();

// 1. Guard: Alihkan ke Menu Jika Keranjang Kosong
onMounted(() => {
  if (cartStore.isEmpty) {
    router.replace("/menu");
  }
});

// 2. State Data Pelanggan & Validasi dari Composable
const customer = reactive<CustomerData>({
  name: "",
  phone: "",
  address: "",
  notes: "",
});

const { errors, validate } = useValidateCheckout();

// 3. Pilihan Metode Pengiriman & Pembayaran
const shippingMethod = ref("regular");
const paymentMethod = ref("qris");

// 4. State Feedback & Loading
const isSubmitting = ref(false);
const showToast = ref(false);
const toastMessage = ref("");

// 5. State Modal Sukses
const showSuccessModal = ref(false);
const completedOrder = ref<OrderSuccessDetail | null>(null);

// 6. Kalkulasi Biaya Terakhir
const shippingFee = computed(() => (shippingMethod.value === "instant" ? 10000 : 0));
const serviceFee = computed(() => 2000);
const voucherDiscount = computed(() => 0);

const finalTotal = computed(() => {
  return cartStore.totalPrice + shippingFee.value + serviceFee.value - voucherDiscount.value;
});

// 7. Handler Proses Pembayaran
const handleSubmitOrder = async () => {
  if (!validate(customer)) {
    toastMessage.value = "Mohon lengkapi formulir pengiriman yang bertanda bintang";
    showToast.value = true;
    setTimeout(() => {
      showToast.value = false;
    }, 2500);
    return;
  }

  isSubmitting.value = true;

  // Simulasi proses transaksi order ke server
  setTimeout(() => {
    const orderId = `ORD-${Date.now().toString().slice(-6)}`;
    const estimate = shippingMethod.value === "instant" ? "30 - 45 Menit" : "1 - 2 Jam";

    completedOrder.value = {
      orderId,
      customerName: customer.name,
      phone: customer.phone,
      address: customer.address + (customer.notes ? ` (Patokan: ${customer.notes})` : ""),
      paymentMethod: paymentMethod.value,
      totalPayment: finalTotal.value,
      deliveryEstimate: estimate,
      itemsCount: cartStore.totalItems,
    };

    // Kosongkan keranjang belanja setelah checkout sukses
    cartStore.clearCart();

    isSubmitting.value = false;
    showSuccessModal.value = true;
  }, 1000);
};
</script>

<template>
  <main class="checkout-page">
    <div class="checkout-container">
      <!-- 1. Navigation & Header -->
      <CheckoutNav />

      <!-- 2. Grid Layout (2 Kolom) -->
      <div v-if="!cartStore.isEmpty || showSuccessModal" class="checkout-grid">
        <!-- Kolom Kiri: Form Penerima & Pilihan Pengiriman/Pembayaran -->
        <div class="checkout-forms-column">
          <CheckoutCustomerForm
            :customer="customer"
            :errors="errors"
          />

          <CheckoutPaymentShipping
            v-model:shipping-method="shippingMethod"
            v-model:payment-method="paymentMethod"
          />
        </div>

        <!-- Kolom Kanan: Ringkasan Biaya & Tombol Bayar -->
        <CheckoutSummary
          :items="cartStore.items"
          :total-items="cartStore.totalItems"
          :subtotal="cartStore.totalPrice"
          :shipping-fee="shippingFee"
          :service-fee="serviceFee"
          :total-discount="cartStore.totalDiscount"
          :voucher-discount="voucherDiscount"
          :final-total="finalTotal"
          :is-submitting="isSubmitting"
          @submit-order="handleSubmitOrder"
        />
      </div>
    </div>

    <!-- 3. Modal Sukses Transaksi -->
    <CheckoutSuccessModal
      v-if="showSuccessModal && completedOrder"
      :order="completedOrder"
    />

    <!-- Toast Notification -->
    <ToastNotification :show="showToast" :message="toastMessage" />
  </main>
</template>

<style scoped>
/* ==========================================================================
   THEME KONSISTENSI THAM.TXT (CHECKOUT VIEW)
   ========================================================================== */

.checkout-page {
  min-height: 100vh;
  background-color: #f8fafc; /* Slate 50 */
  color: #1e293b; /* Slate 800 */
  font-family: "Plus Jakarta Sans", system-ui, -apple-system, sans-serif;
  padding: 1.5rem 1rem 4rem;
}

.checkout-container {
  max-width: 1180px;
  margin: 0 auto;
}

.checkout-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: start;
}

@media (min-width: 960px) {
  .checkout-grid {
    grid-template-columns: 1fr 400px;
    gap: 2.5rem;
  }
}

.checkout-forms-column {
  display: flex;
  flex-direction: column;
}
</style>