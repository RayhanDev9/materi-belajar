<script setup lang="ts">
import type { FoodProduct } from "@/types/Product";
import { AlertTriangle, Trash2 } from "lucide-vue-next";

defineProps<{
  show: boolean;
  product: FoodProduct | null;
  isDeleting: boolean;
}>();

const emit = defineEmits<{
  (e: "close"): void;
  (e: "confirm"): void;
}>();
</script>

<template>
  <div v-if="show && product" class="modal-backdrop" @click.self="emit('close')">
    <div class="delete-card" role="dialog" aria-modal="true">
      <div class="warning-icon-wrap">
        <AlertTriangle :size="30" />
      </div>

      <h2 class="delete-title">Hapus Menu Makanan?</h2>
      <p class="delete-desc">
        Apakah Anda yakin ingin menghapus <strong>"{{ product.name }}"</strong> dari daftar menu? Tindakan ini tidak dapat dibatalkan.
      </p>

      <div class="product-preview">
        <img
          :src="product.images?.[0] || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200'"
          :alt="product.name"
          class="preview-thumb"
        />
        <div class="preview-text">
          <strong class="name">{{ product.name }}</strong>
          <span class="category">{{ product.category }} • Stok: {{ product.stock }}</span>
        </div>
      </div>

      <div class="delete-actions">
        <button type="button" class="btn-cancel" @click="emit('close')">
          Batal
        </button>
        <button
          type="button"
          class="btn-confirm-delete"
          :disabled="isDeleting"
          @click="emit('confirm')"
        >
          <span v-if="isDeleting" class="spinner"></span>
          <Trash2 v-else :size="16" />
          <span>{{ isDeleting ? 'Menghapus...' : 'Ya, Hapus Sekarang' }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(15, 23, 42, 0.65);
  backdrop-filter: blur(4px);
  z-index: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.delete-card {
  background-color: #ffffff;
  border-radius: 20px;
  width: 100%;
  max-width: 440px;
  padding: 2rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  animation: zoomIn 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.warning-icon-wrap {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #fee2e2;
  color: #dc2626;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
}

.delete-title {
  font-size: 1.3rem;
  font-weight: 800;
  color: #1e293b;
  margin: 0 0 0.5rem 0;
}

.delete-desc {
  font-size: 0.9rem;
  color: #64748b;
  line-height: 1.5;
  margin: 0 0 1.25rem 0;
}

.product-preview {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  width: 100%;
  background-color: #f8fafc;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  margin-bottom: 1.5rem;
  text-align: left;
}

.preview-thumb {
  width: 44px;
  height: 44px;
  border-radius: 8px;
  object-fit: cover;
}

.preview-text {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.preview-text .name {
  font-size: 0.9rem;
  font-weight: 700;
  color: #1e293b;
}

.preview-text .category {
  font-size: 0.75rem;
  color: #94a3b8;
  text-transform: capitalize;
}

.delete-actions {
  display: flex;
  gap: 0.75rem;
  width: 100%;
}

.btn-cancel {
  flex: 1;
  padding: 0.75rem 1rem;
  background-color: #f1f5f9;
  border: 1px solid #cbd5e1;
  border-radius: 9999px;
  font-size: 0.9rem;
  font-weight: 700;
  color: #475569;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-cancel:hover {
  background-color: #e2e8f0;
  color: #0f172a;
}

.btn-confirm-delete {
  flex: 1;
  padding: 0.75rem 1rem;
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  border: none;
  border-radius: 9999px;
  font-size: 0.9rem;
  font-weight: 700;
  color: #ffffff;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);
  transition: all 0.2s ease;
}

.btn-confirm-delete:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(220, 38, 38, 0.4);
}

.btn-confirm-delete:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
