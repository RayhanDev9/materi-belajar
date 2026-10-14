<script setup lang="ts">
import { ref, computed, reactive } from "vue";
import { useQuery, useQueryClient } from "@tanstack/vue-query";
import type { FoodProduct } from "@/types/Product";
import { AlertCircle } from "lucide-vue-next";
import fetchProducts from "@/services/fetchProducts";
import { createProduct, updateProduct, deleteProduct } from "@/services/adminProductService";
import AdminHeader from "./components/AdminHeader.vue";
import AdminProductTable from "./components/AdminProductTable.vue";
import AdminProductModal from "./components/AdminProductModal.vue";
import AdminDeleteModal from "./components/AdminDeleteModal.vue";
import ToastNotification from "@/components/ToastNotification.vue";

const queryClient = useQueryClient();

// Fetching Data Produk
const {
  data: products = ref<FoodProduct[]>([]),
  isLoading,
  isError,
  error,
} = useQuery<FoodProduct[]>({
  queryKey: ["products"],
  queryFn: fetchProducts,
});

// Modal States
const showProductModal = ref(false);
const productToEdit = ref<FoodProduct | null>(null);
const isSaving = ref(false);

const showDeleteModal = ref(false);
const productToDelete = ref<FoodProduct | null>(null);
const isDeleting = ref(false);

// Toast Notification
const toast = reactive({
  show: false,
  message: "",
  icon: "✅",
});

let toastTimeout: number | undefined;
const triggerToast = (message: string, icon = "✅") => {
  toast.message = message;
  toast.icon = icon;
  toast.show = true;
  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => {
    toast.show = false;
  }, 3000);
};

// Summary Statistics
const totalProducts = computed(() => products.value?.length || 0);

const lowStockCount = computed(() => {
  if (!products.value) return 0;
  return products.value.filter((p) => p.stock <= 5).length;
});

const promoCount = computed(() => {
  if (!products.value) return 0;
  return products.value.filter((p) => p.originalPrice && p.originalPrice > p.price).length;
});

// Modal Triggers
const handleOpenAddModal = () => {
  productToEdit.value = null;
  showProductModal.value = true;
};

const handleOpenEditModal = (product: FoodProduct) => {
  productToEdit.value = product;
  showProductModal.value = true;
};

const handleOpenDeleteModal = (product: FoodProduct) => {
  productToDelete.value = product;
  showDeleteModal.value = true;
};

// Save (Create / Update) Logic
const handleSaveProduct = async (formData: Partial<FoodProduct>) => {
  try {
    isSaving.value = true;
    if (productToEdit.value) {
      // Update existing product
      await updateProduct(productToEdit.value.id, formData);
      triggerToast(`Berhasil memperbarui menu "${formData.name || productToEdit.value.name}"!`);
    } else {
      // Create new product
      await createProduct(formData as Omit<FoodProduct, "id">);
      triggerToast(`Menu baru "${formData.name}" berhasil ditambahkan!`);
    }

    // Refresh query
    await queryClient.invalidateQueries({ queryKey: ["products"] });
    showProductModal.value = false;
    productToEdit.value = null;
  } catch (err) {
    console.error("Gagal menyimpan produk:", err);
    triggerToast("Gagal menyimpan produk. Pastikan json-server aktif!", "❌");
  } finally {
    isSaving.value = false;
  }
};

// Delete Logic
const handleConfirmDelete = async () => {
  if (!productToDelete.value) return;

  try {
    isDeleting.value = true;
    const name = productToDelete.value.name;
    await deleteProduct(productToDelete.value.id);
    triggerToast(`Menu "${name}" berhasil dihapus dari katalog!`, "🗑️");

    await queryClient.invalidateQueries({ queryKey: ["products"] });
    showDeleteModal.value = false;
    productToDelete.value = null;
  } catch (err) {
    console.error("Gagal menghapus produk:", err);
    triggerToast("Gagal menghapus produk. Pastikan json-server aktif!", "❌");
  } finally {
    isDeleting.value = false;
  }
};
</script>

<template>
  <main class="admin-page">
    <div class="admin-container">
      <!-- Error Alert jika server mati / fetch error -->
      <div v-if="isError" class="alert-box error" role="alert">
        <AlertCircle :size="24" class="alert-icon" />
        <div class="alert-text">
          <strong>Gagal memuat katalog menu makanan:</strong>
          <span>{{ (error as Error)?.message || 'Terjadi kesalahan pada server lokal.' }}</span>
        </div>
      </div>

      <!-- Header & Stats Cards -->
      <AdminHeader
        :total-products="totalProducts"
        :low-stock-count="lowStockCount"
        :promo-count="promoCount"
        @open-add-modal="handleOpenAddModal"
      />

      <!-- Product List & Management Table -->
      <AdminProductTable
        :products="products || []"
        :is-loading="isLoading"
        @edit-product="handleOpenEditModal"
        @delete-product="handleOpenDeleteModal"
      />

      <!-- Add/Edit Product Modal Form -->
      <AdminProductModal
        :show="showProductModal"
        :product-to-edit="productToEdit"
        :is-saving="isSaving"
        @close="showProductModal = false"
        @save="handleSaveProduct"
      />

      <!-- Delete Confirmation Modal -->
      <AdminDeleteModal
        :show="showDeleteModal"
        :product="productToDelete"
        :is-deleting="isDeleting"
        @close="showDeleteModal = false"
        @confirm="handleConfirmDelete"
      />

      <!-- Toast Feedback -->
      <ToastNotification
        :show="toast.show"
        :message="toast.message"
        :icon="toast.icon"
      />
    </div>
  </main>
</template>

<style scoped>
.admin-page {
  min-height: calc(100vh - 72px);
  background-color: #f8fafc;
  padding: 2.5rem 1.5rem 4rem;
  font-family: inherit;
  color: #1e293b;
}

.admin-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.alert-box {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border-radius: 12px;
  background-color: #fee2e2;
  border: 1px solid #fecaca;
  color: #991b1b;
  font-size: 0.95rem;
}

.alert-icon {
  font-size: 1.5rem;
}

.alert-text {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

@media (max-width: 768px) {
  .admin-page {
    padding: 1.5rem 1rem 3rem;
  }

  .admin-container {
    gap: 1.5rem;
  }
}
</style>
