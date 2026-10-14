<script setup lang="ts">
import { reactive, watch } from "vue";
import type { FoodProduct } from "@/types/Product";
import {
  Pencil,
  PlusCircle,
  X,
  BadgeCheck,
  Leaf,
  Flame,
  Save,
} from "lucide-vue-next";

const props = defineProps<{
  show: boolean;
  productToEdit: FoodProduct | null;
  isSaving: boolean;
}>();

const emit = defineEmits<{
  (e: "close"): void;
  (e: "save", data: Partial<FoodProduct>): void;
}>();

const form = reactive({
  name: "",
  category: "makanan-berat",
  price: 0,
  originalPrice: 0,
  stock: 10,
  unit: "1 porsi",
  imageUrl: "",
  description: "",
  isHalal: true,
  isVegetarian: false,
  isSpicy: false,
  spicyLevel: 1,
});

const errors = reactive<Record<string, string>>({});

watch(
  () => props.productToEdit,
  (product) => {
    if (product) {
      form.name = product.name;
      form.category = product.category;
      form.price = product.price;
      form.originalPrice = product.originalPrice || 0;
      form.stock = product.stock;
      form.unit = product.unit || "1 porsi";
      form.imageUrl = product.images?.[0] || "";
      form.description = product.description || "";
      form.isHalal = product.isHalal ?? true;
      form.isVegetarian = product.isVegetarian ?? false;
      form.isSpicy = product.isSpicy ?? false;
      form.spicyLevel = product.spicyLevel || 1;
    } else {
      // Reset form default
      form.name = "";
      form.category = "makanan-berat";
      form.price = 25000;
      form.originalPrice = 0;
      form.stock = 20;
      form.unit = "1 porsi";
      form.imageUrl = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800";
      form.description = "";
      form.isHalal = true;
      form.isVegetarian = false;
      form.isSpicy = false;
      form.spicyLevel = 1;
    }
  },
  { immediate: true }
);

const handleSubmit = () => {
  errors.name = "";
  errors.price = "";

  if (!form.name.trim()) {
    errors.name = "Nama menu wajib diisi";
    return;
  }

  if (Number(form.price) <= 0) {
    errors.price = "Harga jual harus lebih dari Rp 0";
    return;
  }

  const slug = form.name
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

  const discountPercent =
    form.originalPrice && form.originalPrice > form.price
      ? Math.round(((form.originalPrice - form.price) / form.originalPrice) * 100)
      : undefined;

  const payload: Partial<FoodProduct> = {
    name: form.name.trim(),
    slug,
    category: form.category,
    price: Number(form.price),
    originalPrice: form.originalPrice ? Number(form.originalPrice) : undefined,
    discountPercent,
    stock: Number(form.stock),
    unit: form.unit.trim(),
    images: [form.imageUrl.trim() || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800"],
    description: form.description.trim(),
    isHalal: form.isHalal,
    isVegetarian: form.isVegetarian,
    isSpicy: form.isSpicy,
    spicyLevel: form.isSpicy ? Number(form.spicyLevel) : undefined,
    rating: props.productToEdit ? props.productToEdit.rating : 4.8,
    reviewCount: props.productToEdit ? props.productToEdit.reviewCount : 1,
  };

  emit("save", payload);
};
</script>

<template>
  <div v-if="show" class="modal-backdrop" @click.self="emit('close')">
    <div class="modal-card" role="dialog" aria-modal="true">
      <header class="modal-header">
        <div class="header-text">
          <h2 class="modal-title">
            <Pencil v-if="productToEdit" :size="20" class="header-icon" />
            <PlusCircle v-else :size="20" class="header-icon" />
            <span>{{ productToEdit ? 'Edit Menu Makanan' : 'Tambah Menu Baru' }}</span>
          </h2>
          <span class="modal-subtitle">Isi data produk makanan secara lengkap dan akurat</span>
        </div>
        <button
          type="button"
          class="btn-close"
          aria-label="Tutup Modal"
          @click="emit('close')"
        >
          <X :size="20" />
        </button>
      </header>

      <form class="modal-body" @submit.prevent="handleSubmit">
        <div class="form-row">
          <!-- Nama Produk -->
          <div class="form-group flex-2">
            <label class="form-label">Nama Menu Makanan <span class="req">*</span></label>
            <input
              v-model="form.name"
              type="text"
              class="form-input"
              placeholder="Contoh: Sate Ayam Madura Bumbu Kacang"
              required
            />
            <span v-if="errors.name" class="err-text">{{ errors.name }}</span>
          </div>

          <!-- Kategori -->
          <div class="form-group flex-1">
            <label class="form-label">Kategori <span class="req">*</span></label>
            <select v-model="form.category" class="form-select" required>
              <option value="makanan-berat">Makanan Berat</option>
              <option value="snack">Camilan / Snack</option>
              <option value="minuman">Minuman Segar</option>
              <option value="dessert">Dessert / Penutup</option>
            </select>
          </div>
        </div>

        <div class="form-row">
          <!-- Harga Jual -->
          <div class="form-group">
            <label class="form-label">Harga Jual (Rp) <span class="req">*</span></label>
            <input
              v-model.number="form.price"
              type="number"
              min="0"
              class="form-input"
              placeholder="25000"
              required
            />
            <span v-if="errors.price" class="err-text">{{ errors.price }}</span>
          </div>

          <!-- Harga Coret Promo (Opsional) -->
          <div class="form-group">
            <label class="form-label">Harga Asli Sebelum Diskon (Opsional)</label>
            <input
              v-model.number="form.originalPrice"
              type="number"
              min="0"
              class="form-input"
              placeholder="30000"
            />
          </div>

          <!-- Stok -->
          <div class="form-group">
            <label class="form-label">Jumlah Stok <span class="req">*</span></label>
            <input
              v-model.number="form.stock"
              type="number"
              min="0"
              class="form-input"
              required
            />
          </div>

          <!-- Unit / Porsi -->
          <div class="form-group">
            <label class="form-label">Satuan Porsi</label>
            <input
              v-model="form.unit"
              type="text"
              placeholder="Contoh: 1 porsi, pack 250g"
              class="form-input"
            />
          </div>
        </div>

        <!-- URL Gambar -->
        <div class="form-group full-width">
          <label class="form-label">URL Foto Produk (Unsplash / CDN)</label>
          <input
            v-model="form.imageUrl"
            type="url"
            class="form-input"
            placeholder="https://images.unsplash.com/..."
          />
          <div v-if="form.imageUrl" class="img-preview-box">
            <img :src="form.imageUrl" alt="Preview Foto" class="preview-img" />
            <span class="preview-label">Live Preview Foto Produk</span>
          </div>
        </div>

        <!-- Deskripsi -->
        <div class="form-group full-width">
          <label class="form-label">Deskripsi Menu & Rasa</label>
          <textarea
            v-model="form.description"
            rows="3"
            class="form-textarea"
            placeholder="Jelaskan cita rasa makanan, kelezatan bumbu, dan keunggulannya..."
          ></textarea>
        </div>

        <!-- Karakteristik Toggles (Halal, Pedas, Veg) -->
        <div class="toggles-row">
          <label class="toggle-checkbox">
            <input v-model="form.isHalal" type="checkbox" />
            <BadgeCheck :size="16" class="icon-halal" />
            <span>100% Halal</span>
          </label>

          <label class="toggle-checkbox">
            <input v-model="form.isVegetarian" type="checkbox" />
            <Leaf :size="16" class="icon-veg" />
            <span>Vegetarian</span>
          </label>

          <label class="toggle-checkbox">
            <input v-model="form.isSpicy" type="checkbox" />
            <Flame :size="16" class="icon-spicy" />
            <span>Menu Pedas</span>
          </label>

          <div v-if="form.isSpicy" class="spicy-level-wrap">
            <label class="spicy-label">Level:</label>
            <select v-model.number="form.spicyLevel" class="spicy-select">
              <option :value="1">Level 1 (Sedang)</option>
              <option :value="2">Level 2 (Pedas)</option>
              <option :value="3">Level 3 (Ekstra Pedas)</option>
              <option :value="4">Level 4 (Gila)</option>
              <option :value="5">Level 5 (Maksimal)</option>
            </select>
          </div>
        </div>

        <!-- Modal Actions -->
        <footer class="modal-footer">
          <button type="button" class="btn-cancel" @click="emit('close')">
            Batal
          </button>
          <button type="submit" class="btn-submit" :disabled="isSaving">
            <Save :size="18" />
            <span>{{ isSaving ? 'Menyimpan...' : (productToEdit ? 'Simpan Perubahan' : 'Tambahkan Menu') }}</span>
          </button>
        </footer>
      </form>
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
  overflow-y: auto;
}

.modal-card {
  background-color: #ffffff;
  border-radius: 20px;
  width: 100%;
  max-width: 680px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  overflow: hidden;
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

.modal-header {
  padding: 1.5rem 1.75rem;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
}

.modal-title {
  font-size: 1.25rem;
  font-weight: 800;
  color: #1e293b;
  margin: 0 0 0.25rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.header-icon {
  color: #ff5a1f;
}

.modal-subtitle {
  font-size: 0.85rem;
  color: #64748b;
}

.btn-close {
  background: #f1f5f9;
  border: none;
  font-size: 1.1rem;
  color: #64748b;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.btn-close:hover {
  background: #e2e8f0;
  color: #0f172a;
}

/* FORM BODY */
.modal-body {
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-height: 75vh;
  overflow-y: auto;
}

.form-row {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  flex: 1;
  min-width: 140px;
}

.form-group.flex-2 {
  flex: 2;
  min-width: 240px;
}

.form-group.full-width {
  width: 100%;
}

.form-label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #334155;
}

.req {
  color: #dc2626;
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: 0.65rem 0.9rem;
  font-size: 0.9rem;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  background-color: #f8fafc;
  color: #1e293b;
  outline: none;
  font-family: inherit;
  transition: all 0.2s ease;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  border-color: #ff5a1f;
  background-color: #ffffff;
  box-shadow: 0 0 0 3px rgba(255, 90, 31, 0.12);
}

.form-textarea {
  resize: vertical;
}

.err-text {
  font-size: 0.775rem;
  color: #dc2626;
  font-weight: 600;
}

/* PREVIEW BOX */
.img-preview-box {
  margin-top: 0.6rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: #f8fafc;
  padding: 0.6rem 0.8rem;
  border-radius: 12px;
  border: 1px dashed #cbd5e1;
}

.preview-img {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  object-fit: cover;
}

.preview-label {
  font-size: 0.8rem;
  color: #64748b;
  font-weight: 600;
}

/* TOGGLES */
.toggles-row {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 0.75rem 1rem;
  background-color: #f8fafc;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  flex-wrap: wrap;
}

.toggle-checkbox {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  font-weight: 700;
  color: #334155;
  cursor: pointer;
}

.toggle-checkbox input[type="checkbox"] {
  width: 16px;
  height: 16px;
  accent-color: #ff5a1f;
  cursor: pointer;
}

.icon-halal {
  color: #16a34a;
}

.icon-veg {
  color: #0284c7;
}

.icon-spicy {
  color: #ea580c;
}

.spicy-level-wrap {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.spicy-label {
  font-size: 0.8rem;
  font-weight: 700;
  color: #c2410c;
}

.spicy-select {
  padding: 0.35rem 0.65rem;
  font-size: 0.8rem;
  border-radius: 8px;
  border: 1px solid #fed7aa;
  background-color: #fff7ed;
  color: #9a3412;
  font-weight: 700;
  outline: none;
}

/* FOOTER */
.modal-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
  margin-top: 0.5rem;
}

.btn-cancel {
  padding: 0.7rem 1.4rem;
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

.btn-submit {
  padding: 0.7rem 1.6rem;
  background: linear-gradient(135deg, #ff5a1f 0%, #ff3d00 100%);
  border: none;
  border-radius: 9999px;
  font-size: 0.9rem;
  font-weight: 700;
  color: #ffffff;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 12px rgba(255, 90, 31, 0.3);
  transition: all 0.2s ease;
}

.btn-submit:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(255, 90, 31, 0.4);
}

.btn-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
