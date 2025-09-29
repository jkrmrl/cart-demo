import { createContext, ReactNode, useMemo, useState } from "react";
import { CartContextType, CartState } from "../types/cart.types";

interface CartProviderProps {
  children: ReactNode;
  initialCart?: CartState;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CartProvider = ({
  children,
  initialCart = { items: [], voucherCode: null, discountRate: 0 },
}: CartProviderProps) => {
  const [cart, setCart] = useState<CartState>(initialCart);

  const contextValue: CartContextType = useMemo(
    () => ({
      cart,
    }),
    [cart]
  );

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
