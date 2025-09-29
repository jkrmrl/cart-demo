import { Product } from "@/features/products/types/products.types";
import React from "react";
import { Pressable, Text, View } from "react-native";

interface ProductCardProps {
  product: Product;
  onPress: () => void;
}

export default function ProductCard({ product, onPress }: ProductCardProps) {
  return (
    <Pressable onPress={onPress}>
      <View className="flex flex-col justify-center">
        <View className="p-8 mb-8 border border-gray-200 bg-white">
          <Text className="m-4 text-lg font-bold text-center">
            {product?.productName}
          </Text>
          <Text className="m-4 text-center text-orange-500 font-semibold">
            ${product?.price}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
