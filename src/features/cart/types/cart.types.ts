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

export type CartAction =
  | { type: "ADD_TO_CART"; payload: Product }
  | {
      type: "UPDATE_QUANTITY";
      payload: { productId: string; quantity: number };
    }
  | { type: "APPLY_VOUCHER"; payload: { code: string; discountRate: number } };

export interface CartContextType {
  cart: CartState;
  dispatch: React.Dispatch<CartAction>;
}
