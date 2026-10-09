/**
 * =============================================================================
 * PRODUCT SERVICE
 * =============================================================================
 * Mengumpulkan semua fungsi yang berhubungan dengan data Produk dari server/API.
 */
import { apiClient } from './api';

// Tipe data produk dari server
export interface ProductItem {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  category: string;
}

interface ProductResponse {
  products: ProductItem[];
  total: number;
  skip: number;
  limit: number;
}

export const productService = {
  // 1. Mengambil semua daftar produk
  async getAllProducts(limit = 10): Promise<ProductItem[]> {
    const data = await apiClient<ProductResponse>(`/products?limit=${limit}`);
    return data.products;
  },

  // 2. Mengambil detail satu produk berdasarkan ID
  async getProductById(id: number): Promise<ProductItem> {
    return await apiClient<ProductItem>(`/products/${id}`);
  },

  // 3. Mencari produk berdasarkan kata kunci
  async searchProducts(query: string): Promise<ProductItem[]> {
    const data = await apiClient<ProductResponse>(`/products/search?q=${encodeURIComponent(query)}`);
    return data.products;
  },
};
