<script setup lang="ts">
import { ref, computed } from "vue";
import type { FoodProduct } from "@/types/Product";
import useFormatCurrency from "@/composables/useCurrency";
import {
  Search,
  X,
  UtensilsCrossed,
  BadgeCheck,
  Flame,
  Leaf,
  Star,
  Pencil,
  Trash2,
} from "lucide-vue-next";

const props = defineProps<{
  products: FoodProduct[];
  isLoading: boolean;
}>();

const emit = defineEmits<{
  (e: "editProduct", product: FoodProduct): void;
  (e: "deleteProduct", product: FoodProduct): void;
}>();

const searchQuery = ref("");
const selectedCategory = ref("all");

const filteredProducts = computed(() => {
  return props.products.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.value.toLowerCase());

    const matchCategory = selectedCategory.value === "all" || item.category === selectedCategory.value;

    return matchSearch && matchCategory;
  });
});
</script>

<template>
  <div class="admin-table-container">
    <!-- Filter & Search Toolbar -->
    <div class="table-toolbar">
      <div class="search-box">
        <Search :size="18" class="search-icon" />
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Cari nama menu makanan..."
          class="search-input"
        />
        <button
          v-if="searchQuery"
          type="button"
          class="clear-search"
          aria-label="Hapus pencarian"
          @click="searchQuery = ''"
        >
          <X :size="16" />
        </button>
      </div>

      <div class="filter-group">
        <select v-model="selectedCategory" class="category-select">
          <option value="all">Semua Kategori</option>
          <option value="makanan-berat">Makanan Berat</option>
          <option value="snack">Camilan / Snack</option>
          <option value="minuman">Minuman Segar</option>
          <option value="dessert">Dessert / Penutup</option>
        </select>
      </div>
    </div>

    <!-- Table Content -->
    <div class="table-responsive">
      <table class="product-table">
        <thead>
          <tr>
            <th>Menu Makanan</th>
            <th>Kategori</th>
            <th>Harga Jual</th>
            <th>Stok & Porsi</th>
            <th>Karakteristik</th>
            <th>Rating</th>
            <th class="text-right">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="isLoading">
            <td colspan="7" class="loading-cell">
              <div class="table-loader">
                <span class="spinner"></span>
                <span>Memuat data produk dari server...</span>
              </div>
            </td>
          </tr>

          <tr v-else-if="filteredProducts.length === 0">
            <td colspan="7" class="empty-cell">
              <div class="empty-table-state">
                <div class="empty-icon-box">
                  <UtensilsCrossed :size="32" class="empty-icon" />
                </div>
                <strong>Tidak Ada Menu Ditemukan</strong>
                <p>Coba gunakan kata kunci pencarian lain atau ganti kategori.</p>
              </div>
            </td>
          </tr>

          <tr
            v-for="product in filteredProducts"
            :key="product.id"
            class="product-row"
          >
            <!-- FOTO & NAMA -->
            <td class="menu-cell">
              <div class="menu-cell-content">
                <img
                  :src="product.images?.[0] || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200'"
                  :alt="product.name"
                  class="table-thumb"
                />
                <div class="menu-info">
                  <strong class="menu-name">{{ product.name }}</strong>
                  <span class="menu-slug">{{ product.slug || product.id }}</span>
                </div>
              </div>
            </td>

            <!-- KATEGORI -->
            <td>
              <span class="category-badge">{{ product.category }}</span>
            </td>

            <!-- HARGA -->
            <td>
              <div class="price-stack">
                <strong class="price-val">{{ useFormatCurrency(product.price) }}</strong>
                <span v-if="product.originalPrice" class="price-strike">
                  {{ useFormatCurrency(product.originalPrice) }}
                </span>
                <span v-if="product.discountPercent" class="discount-tag">
                  -{{ product.discountPercent }}%
                </span>
              </div>
            </td>

            <!-- STOK -->
            <td>
              <div class="stock-stack">
                <span
                  class="stock-pill"
                  :class="{
                    'stock-out': product.stock <= 0,
                    'stock-low': product.stock > 0 && product.stock <= 5,
                    'stock-safe': product.stock > 5,
                  }"
                >
                  {{ product.stock <= 0 ? 'Habis' : `${product.stock} Tersisa` }}
                </span>
                <span class="unit-text">{{ product.unit || '1 porsi' }}</span>
              </div>
            </td>

            <!-- BADGES (HALAL, SPICY, VEG) -->
            <td>
              <div class="badges-row">
                <span v-if="product.isHalal" class="badge-tag halal" title="100% Halal">
                  <BadgeCheck :size="14" />
                  <span>Halal</span>
                </span>
                <span v-if="product.isSpicy" class="badge-tag spicy" title="Level Pedas">
                  <Flame :size="14" />
                  <span>Lv.{{ product.spicyLevel || 1 }}</span>
                </span>
                <span v-if="product.isVegetarian" class="badge-tag veg" title="Vegetarian">
                  <Leaf :size="14" />
                  <span>Veg</span>
                </span>
              </div>
            </td>

            <!-- RATING -->
            <td>
              <div class="rating-cell">
                <Star :size="15" class="star" />
                <strong>{{ product.rating }}</strong>
                <span class="count">({{ product.reviewCount }})</span>
              </div>
            </td>

            <!-- AKSI -->
            <td class="text-right">
              <div class="action-buttons">
                <button
                  type="button"
                  class="btn-action edit"
                  title="Edit Data Produk"
                  @click="emit('editProduct', product)"
                >
                  <Pencil :size="15" />
                  <span>Edit</span>
                </button>
                <button
                  type="button"
                  class="btn-action delete"
                  title="Hapus Produk"
                  @click="emit('deleteProduct', product)"
                >
                  <Trash2 :size="15" />
                  <span>Hapus</span>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.admin-table-container {
  background-color: #ffffff;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.05);
  overflow: hidden;
}

/* TOOLBAR */
.table-toolbar {
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  background-color: #ffffff;
}

.search-box {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  max-width: 380px;
}

.search-icon {
  position: absolute;
  left: 1rem;
  color: #94a3b8;
  pointer-events: none;
}

.search-input {
  width: 100%;
  padding: 0.65rem 2.4rem 0.65rem 2.75rem;
  font-size: 0.9rem;
  border: 1px solid #e2e8f0;
  border-radius: 9999px; /* Pill */
  background-color: #f8fafc;
  color: #1e293b;
  outline: none;
  transition: all 0.2s ease;
}

.search-input:focus {
  border-color: #ff5a1f;
  background-color: #ffffff;
  box-shadow: 0 0 0 3px rgba(255, 90, 31, 0.12);
}

.clear-search {
  position: absolute;
  right: 0.75rem;
  background: none;
  border: none;
  color: #94a3b8;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 50%;
  transition: color 0.15s ease;
}

.clear-search:hover {
  color: #475569;
}

.category-select {
  padding: 0.65rem 1.25rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #334155;
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 9999px; /* Pill */
  outline: none;
  cursor: pointer;
  transition: border-color 0.2s ease;
}

.category-select:focus {
  border-color: #ff5a1f;
}

/* TABLE */
.table-responsive {
  width: 100%;
  overflow-x: auto;
}

.product-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

.product-table th {
  background-color: #f8fafc;
  padding: 1rem 1.25rem;
  font-size: 0.775rem;
  font-weight: 700;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid #e2e8f0;
  white-space: nowrap;
}

.product-table td {
  padding: 1.15rem 1.25rem;
  font-size: 0.9rem;
  color: #334155;
  border-bottom: 1px solid #f1f5f9;
  vertical-align: middle;
}

.product-row:hover {
  background-color: #fbfcfe;
}

/* CELL STYLES */
.menu-cell-content {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.table-thumb {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  object-fit: cover;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
}

.menu-info {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.menu-name {
  font-size: 0.95rem;
  font-weight: 700;
  color: #1e293b;
}

.menu-slug {
  font-size: 0.75rem;
  color: #94a3b8;
}

.category-badge {
  display: inline-block;
  padding: 0.3rem 0.75rem;
  background-color: #f1f5f9;
  color: #475569;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: capitalize;
}

/* PRICE */
.price-stack {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.price-val {
  font-size: 0.95rem;
  font-weight: 800;
  color: #1e293b;
}

.price-strike {
  font-size: 0.75rem;
  color: #94a3b8;
  text-decoration: line-through;
}

.discount-tag {
  display: inline-block;
  font-size: 0.65rem;
  font-weight: 800;
  color: #dc2626;
  background-color: #fee2e2;
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
  width: fit-content;
}

/* STOCK */
.stock-stack {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.stock-pill {
  display: inline-block;
  padding: 0.3rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.775rem;
  font-weight: 700;
  width: fit-content;
}

.stock-safe {
  background-color: #dcfce7;
  color: #166534;
}

.stock-low {
  background-color: #fee2e2;
  color: #991b1b;
}

.stock-out {
  background-color: #f1f5f9;
  color: #64748b;
}

.unit-text {
  font-size: 0.75rem;
  color: #94a3b8;
}

/* BADGES */
.badges-row {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  flex-wrap: wrap;
}

.badge-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 700;
}

.badge-tag.halal {
  background-color: #dcfce7;
  color: #15803d;
}

.badge-tag.spicy {
  background-color: #ffedd5;
  color: #c2410c;
}

.badge-tag.veg {
  background-color: #e0f2fe;
  color: #0369a1;
}

/* RATING */
.rating-cell {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.875rem;
}

.rating-cell .star {
  color: #f59e0b;
  fill: #f59e0b;
}

.rating-cell .count {
  color: #94a3b8;
  font-size: 0.75rem;
}

/* ACTION BUTTONS */
.action-buttons {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-action {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.45rem 0.85rem;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.2s ease;
}

.btn-action.edit {
  background-color: #eff6ff;
  border-color: #dbeafe;
  color: #2563eb;
}

.btn-action.edit:hover {
  background-color: #dbeafe;
  color: #1d4ed8;
}

.btn-action.delete {
  background-color: #fef2f2;
  border-color: #fee2e2;
  color: #dc2626;
}

.btn-action.delete:hover {
  background-color: #fee2e2;
  color: #b91c1c;
}

.text-right {
  text-align: right;
}

/* EMPTY & LOADING STATE */
.empty-cell,
.loading-cell {
  padding: 4rem 1.5rem !important;
  text-align: center;
}

.empty-table-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.empty-icon-box {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background-color: #fff1eb;
  color: #ff5a1f;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
}

.empty-table-state strong {
  font-size: 1.1rem;
  color: #1e293b;
}

.empty-table-state p {
  color: #64748b;
  margin: 0;
  font-size: 0.9rem;
}

.table-loader {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: #64748b;
}

.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid #e2e8f0;
  border-top-color: #ff5a1f;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
