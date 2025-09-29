import ProductList from "@/features/products/components/ProductList";
import React from "react";
import { View } from "react-native";

export default function ProductsScreen() {
  return (
    <View className="flex-1 items-center justify-center p-6 bg-white">
      <ProductList />
    </View>
  );
}
