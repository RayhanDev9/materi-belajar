import { defineStore } from "pinia";
import type { FoodProduct } from "@/types/Product";

export interface CartItem {
  id: string;
  name: string;
  slug?: string;
  category: string;
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  unit?: string;
  image: string;
  quantity: number;
  notes?: string;
}

interface CartState {
  items: CartItem[];
}

const STORAGE_KEY = "food_ecommerce_cart";

const getSavedCart = (): CartItem[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return [];
  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
};



export const useCartStore = defineStore("cart", {
  // ==========================================
  // 1. STATE
  // ==========================================
  state: (): CartState => ({
    items: getSavedCart(),
  }),


 

  // ==========================================
  // 2. GETTERS
  // ==========================================
  getters: {
    totalItems(state): number {
      return state.items.reduce((total, item) => total + item.quantity, 0);
    },


    totalPrice(state): number {
      return state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

  

    totalDiscount(state): number {
      return state.items.reduce((total, item) => {
        if (item.originalPrice && item.originalPrice > item.price) {
          return total + (item.originalPrice - item.price) * item.quantity;
        }
        return total;
      }, 0);
    },

    isEmpty(state): boolean {
      return state.items.length === 0;
    },
  },

  // ==========================================
  // 3. ACTIONS
  // ==========================================
  actions: {
    saveToStorage() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.items));
    },




    addToCart(product: FoodProduct, quantity = 1, notes?: string) {
      const existingItem = this.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += quantity;
        if (notes) {
          existingItem.notes = notes;
        }
      } else {
        this.items.push({
          id: product.id,
          name: product.name,
          slug: product.slug,
          category: product.category,
          price: product.price,
          originalPrice: product.originalPrice,
          discountPercent: product.discountPercent,
          unit: product.unit,
          image:
            product.images?.[0] ||
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600",
          quantity,
          notes: notes || "",
        });
      }

      this.saveToStorage();
    },

    updateQuantity(productId: string, quantity: number) {
      const item = this.items.find((i) => i.id === productId);
      if (!item) return;

      if (quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        item.quantity = quantity;
        this.saveToStorage();
      }
    },

    removeFromCart(productId: string) {
      this.items = this.items.filter((item) => item.id !== productId);
      this.saveToStorage();
    },

    updateNotes(productId: string, notes: string) {
      const item = this.items.find((i) => i.id === productId);
      if (item) {
        item.notes = notes;
        this.saveToStorage();
      }
    },

    clearCart() {
      this.items = [];
      this.saveToStorage();
    },
  },
});
