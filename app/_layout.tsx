import { STATIC_PRODUCTS } from "@/data/products";
import { CartIconButton } from "@/features/cart/components/CartIconButton";
import { CartProvider } from "@/features/cart/context/CartContext";
import { ProductProvider } from "@/features/products/context/ProductContext";
import { Stack } from "expo-router";
import React from "react";
import "../global.css";

export default function RootLayout() {
  return (
    <ProductProvider initialProducts={STATIC_PRODUCTS}>
      <CartProvider>
        <Stack
          screenOptions={{
            headerShown: true,
            headerTitleAlign: "center",
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              title: "Products",
              headerRight: () => <CartIconButton />,
            }}
          />
          <Stack.Screen name="cart" options={{ title: "Cart" }} />
        </Stack>
      </CartProvider>
    </ProductProvider>
  );
}
