import { computed, type Ref } from "vue";
import type { FoodProduct } from "@/types/Product";

const useFilteredProducts = (
  products: Ref<FoodProduct[] | undefined>,
  searchQuery: Ref<string>,
  selectedCategory: Ref<string>,
  onlySpicy: Ref<boolean>,
  onlyDiscount: Ref<boolean>,
  sortBy: Ref<"popular" | "price-asc" | "price-desc" | string>
) => {
  return computed(() => {
    if (!products.value) return [];

    let result = [...products.value];

    // Filter Kategori
    if (selectedCategory.value !== "all") {
      result = result.filter(
        (item) => item.category === selectedCategory.value
      );
    }

    // Filter Search
    if (searchQuery.value.trim() !== "") {
      const q = searchQuery.value.toLowerCase();
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q)
      );
    }

    // Filter Hanya Pedas
    if (onlySpicy.value) {
      result = result.filter((item) => item.isSpicy);
    }

    // Filter Hanya Diskon
    if (onlyDiscount.value) {
      result = result.filter(
        (item) => item.discountPercent && item.discountPercent > 0
      );
    }

    // Pengurutan (Sorting)
    if (sortBy.value === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy.value === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy.value === "popular") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  });
};

export default useFilteredProducts;