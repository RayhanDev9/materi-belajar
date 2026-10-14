import type { FoodProduct } from "@/types/Product";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "https://6acf56e103feaa52b21e5bdc.mockapi.io/products";

export const createProduct = async (product: Omit<FoodProduct, "id"> & { id?: string }): Promise<FoodProduct> => {
  const payload = {
    ...product,
    id: product.id || `prod-${Date.now().toString().slice(-4)}`,
  };
  const response = await axios.post<FoodProduct>(API_URL, payload);
  return response.data;
};

export const updateProduct = async (id: string, product: Partial<FoodProduct>): Promise<FoodProduct> => {
  const response = await axios.patch<FoodProduct>(`${API_URL}/${id}`, product);
  return response.data;
};

export const deleteProduct = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
