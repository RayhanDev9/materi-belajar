<script setup lang="ts">
import type { CartItem } from "@/stores/useCart";
import useFormatCurrency from "@/composables/useCurrency";

defineProps<{
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  shippingFee: number;
  serviceFee: number;
  totalDiscount: number;
  voucherDiscount: number;
  finalTotal: number;
  isSubmitting: boolean;
}>();

const emit = defineEmits<{
  (e: "submitOrder"): void;
}>();
</script>

<template>
  <aside class="checkout-summary-column">
    <div class="summary-card">
      <h2 class="summary-title">Ringkasan Pembayaran</h2>

      <!-- Mini Item List Preview -->
      <div class="mini-items-container">
        <h3 class="mini-section-label">Pesanan Anda ({{ totalItems }} porsi):</h3>
        <div class="mini-items-list">
          <div
            v-for="item in items"
            :key="item.id"
            class="mini-item-row"
          >
            <img :src="item.image" :alt="item.name" class="mini-thumb" />
            <div class="mini-item-info">
              <span class="mini-item-name">{{ item.name }}</span>
              <span class="mini-item-meta">{{ item.quantity }}x @ {{ useFormatCurrency(item.price) }}</span>
            </div>
            <span class="mini-item-subtotal">
              {{ useFormatCurrency(item.price * item.quantity) }}
            </span>
          </div>
        </div>
      </div>

      <div class="summary-divider"></div>

      <!-- Rincian Biaya -->
      <div class="breakdown-list">
        <div class="breakdown-row">
          <span class="label">Subtotal Makanan</span>
          <span class="value">{{ useFormatCurrency(subtotal + totalDiscount) }}</span>
        </div>

        <div v-if="totalDiscount > 0" class="breakdown-row promo-row">
          <span class="label">Diskon Menu Promo</span>
          <span class="value">-{{ useFormatCurrency(totalDiscount) }}</span>
        </div>

        <div class="breakdown-row">
          <span class="label">Biaya Pengiriman</span>
          <span class="value" :class="{ 'free-highlight': shippingFee === 0 }">
            {{ shippingFee === 0 ? 'GRATIS' : useFormatCurrency(shippingFee) }}
          </span>
        </div>

        <div class="breakdown-row">
          <span class="label">Biaya Layanan & Pengemasan</span>
          <span class="value">{{ useFormatCurrency(serviceFee) }}</span>
        </div>

        <div v-if="voucherDiscount > 0" class="breakdown-row promo-row">
          <span class="label">Voucher Promo Diskon</span>
          <span class="value">-{{ useFormatCurrency(voucherDiscount) }}</span>
        </div>
      </div>

      <div class="summary-divider"></div>

      <!-- Total Tagihan -->
      <div class="total-row">
        <div class="total-label-box">
          <span class="total-label">Total Tagihan</span>
          <span class="tax-info">Pajak sudah termasuk</span>
        </div>
        <strong class="total-amount">{{ useFormatCurrency(finalTotal) }}</strong>
      </div>

      <!-- Tombol Aksi Pesan Sekarang -->
      <button
        type="button"
        class="btn-submit-order"
        :disabled="isSubmitting"
        @click="emit('submitOrder')"
      >
        <span v-if="isSubmitting" class="spinner"></span>
        <span v-else class="btn-content">
          <span>Konfirmasi & Bayar</span>
          <span class="arrow">→</span>
        </span>
      </button>

      <div class="guarantee-box">
        <span>🛡️ Jaminan 100% makanan higienis & terkirim hangat</span>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.checkout-summary-column {
  position: sticky;
  top: 1.5rem;
}

.summary-card {
  background-color: #ffffff;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  padding: 1.75rem;
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.06);
}

.summary-title {
  font-size: 1.25rem;
  font-weight: 800;
  color: #1e293b;
  margin: 0 0 1.25rem;
}

/* MINI ITEMS PREVIEW */
.mini-items-container {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.mini-section-label {
  font-size: 0.775rem;
  font-weight: 700;
  color: #64748b;
  text-transform: uppercase;
  margin: 0;
  letter-spacing: 0.04em;
}

.mini-items-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-height: 220px;
  overflow-y: auto;
  padding-right: 0.25rem;
}

.mini-item-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.825rem;
}

.mini-thumb {
  width: 44px;
  height: 44px;
  border-radius: 8px;
  object-fit: cover;
  flex-shrink: 0;
  background-color: #f1f5f9;
  border: 1px solid #e2e8f0;
}

.mini-item-info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.mini-item-name {
  font-weight: 700;
  color: #1e293b;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mini-item-meta {
  font-size: 0.75rem;
  color: #94a3b8;
}

.mini-item-subtotal {
  font-weight: 700;
  color: #1e293b;
  flex-shrink: 0;
}

.summary-divider {
  height: 1px;
  background-color: #e2e8f0;
  margin: 1.25rem 0;
  border-top: 1px dashed #e2e8f0;
}

/* BREAKDOWN */
.breakdown-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.breakdown-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.85rem;
}

.breakdown-row .label {
  color: #64748b;
}

.breakdown-row .value {
  font-weight: 600;
  color: #1e293b;
}

.promo-row .label,
.promo-row .value {
  color: #10b981;
  font-weight: 700;
}

.free-highlight {
  color: #10b981;
  font-weight: 800;
}

/* TOTAL */
.total-row {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.total-label-box {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.total-label {
  font-size: 0.95rem;
  font-weight: 700;
  color: #1e293b;
}

.tax-info {
  font-size: 0.725rem;
  color: #94a3b8;
}

.total-amount {
  font-size: 1.85rem;
  font-weight: 800;
  color: #ff5a1f;
  line-height: 1;
}

/* BUTTON */
.btn-submit-order {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ff6b35 0%, #ff3d00 100%);
  color: #ffffff;
  border: none;
  border-radius: 9999px;
  padding: 0.95rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(255, 90, 31, 0.3);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  min-height: 52px;
}

.btn-submit-order:hover:not(:disabled) {
  background: #e04810;
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(255, 90, 31, 0.38);
}

.btn-submit-order:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-content {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.arrow {
  font-size: 1.15rem;
  line-height: 1;
}

.spinner {
  width: 22px;
  height: 22px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.guarantee-box {
  text-align: center;
  margin-top: 0.9rem;
  font-size: 0.75rem;
  color: #94a3b8;
}
</style>
