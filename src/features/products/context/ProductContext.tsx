import { createContext, ReactNode, useMemo } from "react";
import { Product, ProductContextType } from "../types/products.types";

interface ProductsProviderProps {
  children: ReactNode;
  initialProducts: Product[];
}

export const ProductContext = createContext<ProductContextType | undefined>(
  undefined
);

export const ProductProvider = ({
  children,
  initialProducts,
}: ProductsProviderProps) => {
  const contextValue: ProductContextType = useMemo(
    () => ({
      products: initialProducts,
    }),
    [initialProducts]
  );

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};
