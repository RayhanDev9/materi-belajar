export interface CategoryItem {
  id: string;
  name: string;
  icon: string;
}

export interface SortOptionItem {
  value: "popular" | "price-asc" | "price-desc";
  label: string;
}

export const menuCategories: CategoryItem[] = [
  { id: "all", name: "Semua Menu", icon: "🍽️" },
  { id: "makanan-berat", name: "Makanan Berat", icon: "🍛" },
  { id: "snack", name: "Camilan & Snack", icon: "🍿" },
  { id: "minuman", name: "Minuman Segar", icon: "🥤" },
  { id: "dessert", name: "Dessert & Kue", icon: "🍰" },
  { id: "bumbu-instan", name: "Sambal & Bumbu", icon: "🌶️" },
];

export const menuSortOptions: SortOptionItem[] = [
  { value: "popular", label: "⭐ Paling Populer" },
  { value: "price-asc", label: "💵 Harga Terendah" },
  { value: "price-desc", label: "💎 Harga Tertinggi" },
];
