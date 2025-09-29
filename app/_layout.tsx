import { STATIC_PRODUCTS } from "@/data/products";
import { Stack } from "expo-router";
import React from "react";
import "../global.css";
import { ProductProvider } from "../src/context/ProductContext";

export default function RootLayout() {
  return (
    <ProductProvider initialProducts={STATIC_PRODUCTS}>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Products" }} />
      </Stack>
    </ProductProvider>
  );
}
