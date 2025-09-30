import ProductList from "@/features/products/components/ProductList";
import React from "react";
import { ScrollView, View } from "react-native";

export default function ProductsScreen() {
  return (
    <ScrollView className="flex-grow p-10 bg-white">
      <View className="flex-1 items-center justify-center p-6 bg-white">
        <ProductList />
      </View>
    </ScrollView>
  );
}
