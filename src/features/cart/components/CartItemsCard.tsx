import { Product } from "@/features/products/types/products.types";
import React from "react";
import { Pressable, Switch, Text, TextInput, View } from "react-native";

interface CartItemsCardProps {
  product: Product;
  quantity: number;
}

export default function CartItemsCard({ product }: CartItemsCardProps) {
  return (
    <Pressable>
      <View className="flex justify-evenly border border-gray-200">
        <View className="p-2">
          <Switch />
        </View>
        <View className="flex flex-col p-4 mb-8">
          <Text className="m-4 text-lg font-bold text-center">
            {product?.productName}
          </Text>
          <Text className="m-4 text-center text-orange-500 font-semibold">
            ${product?.price}
          </Text>
          <View className="flex justify-evenly mt-2 mb-2">
            <Pressable>
              <Text className="p-2 border border-gray-200">+</Text>
            </Pressable>
            <TextInput editable={false}>1</TextInput>
            <Pressable>
              <Text className="p-2 border border-gray-200">+</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
