import { Product } from "@/features/products/types/products.types";
import React, { useContext } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { CartContext } from "../context/CartContext";

interface CartItemsCardProps {
  product: Product;
  quantity: number;
}

export default function CartItemsCard({
  product,
  quantity,
}: CartItemsCardProps) {
  const cartContext = useContext(CartContext);
  const dispatch = cartContext?.dispatch;

  const handleIncreaseQuantity = () => {
    if (dispatch) {
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: {
          productId: product.id,
          quantity: quantity + 1,
        },
      });
    }
  };

  const handleDecreaseQuantity = () => {
    if (dispatch && quantity > 0) {
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: {
          productId: product.id,
          quantity: quantity - 1,
        },
      });
    }
  };

  return (
    <Pressable>
      <View className="flex flex-col justify-center">
        <View className="p-8 mb-8 border border-gray-200 bg-white">
          <Text className="m-4 text-lg font-bold text-center">
            {product?.productName}
          </Text>
          <Text className="m-4 text-center text-orange-500 font-semibold">
            ${product?.price}
          </Text>
          <View className="flex flex-row justify-evenly mt-2 mb-2">
            <Pressable onPress={handleIncreaseQuantity}>
              <Text className="py-2 px-4 font-bold border border-gray-200">
                +
              </Text>
            </Pressable>
            <TextInput
              editable={false}
              className="py-2 px-4 border border-gray-200 text-center"
              value={String(quantity)}
            />
            <Pressable onPress={handleDecreaseQuantity}>
              <Text className="py-2 px-4 font-bold border border-gray-200">
                -
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
