import { createContext, ReactNode, useMemo, useReducer } from "react";
import { cartReducer } from "../reducers/cart.reducers";
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
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  const contextValue: CartContextType = useMemo(
    () => ({
      cart,
      dispatch,
    }),
    [cart, dispatch]
  );

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
