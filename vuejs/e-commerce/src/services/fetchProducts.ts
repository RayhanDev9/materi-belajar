import type { FoodProduct } from "@/types/Product";
import axios from "axios";

const fetchProducts = async (): Promise<FoodProduct[]> => {
  const response = await axios.get("http://localhost:3001/products");
  return response.data;
};

export default fetchProducts