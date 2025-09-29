import CartList from "@/features/cart/components/CartList";
import React from "react";
import { View } from "react-native";

export default function CartScreen() {
  return (
    <View className="flex-1 items-center justify-center p-6 bg-white">
      <CartList />
    </View>
  );
}
