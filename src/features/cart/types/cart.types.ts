import { Product } from "@/features/products/types/products.types";

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  voucherCode: string | null;
  discountRate: number;
}

export interface CartContextType {
  cart: CartState;
}
