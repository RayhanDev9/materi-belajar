export interface Nutrition {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface FoodProduct {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  stock: number;
  unit: string;
  rating: number;
  reviewCount: number;
  images: string[];
  isSpicy?: boolean;
  spicyLevel?: number;
  isHalal: boolean;
  isVegetarian?: boolean;
  ingredients?: string[];
  nutrition?: Nutrition;
  tags?: string[];
}

export type Product = FoodProduct;
