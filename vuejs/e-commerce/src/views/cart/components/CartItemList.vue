<script setup lang="ts">
import { RouterLink } from "vue-router";
import type { CartItem } from "@/stores/useCart";
import useFormatCurrency from "@/composables/useCurrency";

defineProps<{
  items: CartItem[];
}>();

const emit = defineEmits<{
  (e: "updateQuantity", id: string, qty: number): void;
  (e: "removeItem", id: string, name: string): void;
}>();
</script>

<template>
  <div class="cart-items-column">
    <div class="items-list">
      <article
        v-for="item in items"
        :key="item.id"
        class="cart-item-card"
      >
        <!-- Thumbnail Gambar -->
        <div class="item-thumb-wrapper">
          <img :src="item.image" :alt="item.name" class="item-thumb" />
        </div>

        <!-- Info Menu -->
        <div class="item-details">
          <span class="item-category">{{ item.category }}</span>
          <h3 class="item-name">{{ item.name }}</h3>
          <div class="item-price-row">
            <span class="item-price">{{ useFormatCurrency(item.price) }}</span>
            <span v-if="item.originalPrice" class="item-price-original">
              {{ useFormatCurrency(item.originalPrice) }}
            </span>
            <span v-if="item.unit" class="item-unit">• {{ item.unit }}</span>
          </div>
        </div>

        <!-- Counter & Subtotal -->
        <div class="item-actions">
          <div class="counter-box">
            <button
              type="button"
              class="btn-counter"
              @click="emit('updateQuantity', item.id, item.quantity - 1)"
              title="Kurangi"
            >
              −
            </button>
            <span class="counter-value">{{ item.quantity }}</span>
            <button
              type="button"
              class="btn-counter"
              @click="emit('updateQuantity', item.id, item.quantity + 1)"
              title="Tambah"
            >
              +
            </button>
          </div>

          <strong class="item-subtotal">
            {{ useFormatCurrency(item.price * item.quantity) }}
          </strong>

          <button
            type="button"
            class="btn-delete"
            title="Hapus menu ini"
            @click="emit('removeItem', item.id, item.name)"
          >
            ✕
          </button>
        </div>
      </article>
    </div>

    <!-- Bottom Action: Tambah Menu Lain -->
    <div class="cart-bottom-actions">
      <RouterLink to="/menu" class="btn-continue-shopping">
        ← Tambah Menu Lainnya
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.cart-items-column {
  display: flex;
  flex-direction: column;
}

.items-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cart-item-card {
  background-color: #ffffff;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04);
  transition: all 0.2s ease;
}

.cart-item-card:hover {
  border-color: #fed7aa;
  box-shadow: 0 8px 24px rgba(255, 90, 31, 0.08);
}

.item-thumb-wrapper {
  width: 84px;
  height: 84px;
  border-radius: 12px;
  overflow: hidden;
  flex-shrink: 0;
  background-color: #f1f5f9;
  border: 1px solid #f1f5f9;
}

.item-thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item-details {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.item-category {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #ff5a1f;
  letter-spacing: 0.04em;
}

.item-name {
  font-size: 0.975rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.item-price-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
}

.item-price {
  font-weight: 700;
  color: #ff5a1f;
}

.item-price-original {
  font-size: 0.775rem;
  color: #94a3b8;
  text-decoration: line-through;
}

.item-unit {
  color: #94a3b8;
  font-size: 0.775rem;
}

/* ACTIONS */
.item-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.counter-box {
  display: inline-flex;
  align-items: center;
  background-color: #f8fafc;
  border: 1px solid #cbd5e1;
  border-radius: 9999px;
  padding: 0.2rem;
}

.btn-counter {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background-color: #ffffff;
  color: #1e293b;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);
}

.btn-counter:hover {
  background-color: #ff5a1f;
  color: #ffffff;
}

.counter-value {
  min-width: 28px;
  text-align: center;
  font-weight: 700;
  font-size: 0.875rem;
  color: #1e293b;
}

.item-subtotal {
  font-size: 1.05rem;
  font-weight: 800;
  color: #1e293b;
  min-width: 100px;
  text-align: right;
}

.btn-delete {
  background: transparent;
  border: none;
  color: #94a3b8;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.btn-delete:hover {
  background-color: #fee2e2;
  color: #ef4444;
}

.cart-bottom-actions {
  margin-top: 1.25rem;
}

.btn-continue-shopping {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: #ff5a1f;
  font-weight: 700;
  font-size: 0.875rem;
  text-decoration: none;
  transition: all 0.2s ease;
}

.btn-continue-shopping:hover {
  color: #e04810;
  transform: translateX(-3px);
}

@media (max-width: 640px) {
  .cart-item-card {
    flex-direction: column;
    align-items: flex-start;
  }

  .item-actions {
    width: 100%;
    justify-content: space-between;
    padding-top: 0.75rem;
    border-top: 1px dashed #f1f5f9;
  }
}
</style>
