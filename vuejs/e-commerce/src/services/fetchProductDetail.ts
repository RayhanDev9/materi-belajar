import type { FoodProduct } from "@/types/Product";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "https://6acf56e103feaa52b21e5bdc.mockapi.io/products";

const fetchProductDetail = async (id: string): Promise<FoodProduct> => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export default fetchProductDetail