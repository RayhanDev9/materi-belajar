import type { FoodProduct } from "@/types/Product";
import axios from "axios";

const fetchProductDetail = async (id: string): Promise<FoodProduct> => {
  const response = await axios.get(`http://localhost:3001/products/${id}`);
  return response.data;
};

export default fetchProductDetail