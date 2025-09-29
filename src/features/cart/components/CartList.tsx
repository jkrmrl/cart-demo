import React, { useContext } from "react";
import { FlatList, Text, View } from "react-native";
import { CartContext } from "../context/CartContext";
import CartItemsCard from "./CartItemsCard";

export default function CartList() {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("Something went wrong");
  }

  const { cart } = cartContext;

  if (cart.items.length === 0) {
    return (
      <View className="flex-1 items-center justify-center bg-white px-4">
        <Text className="text-gray-500 text-lg">Your cart is empty.</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-50 px-4 pt-6">
      <FlatList
        data={cart.items}
        keyExtractor={(item) => item.product.id}
        renderItem={({ item }) => (
          <CartItemsCard product={item.product} quantity={item.quantity} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
