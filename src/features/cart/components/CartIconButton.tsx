import { Href, useRouter } from "expo-router";
import { useContext } from "react";
import { Pressable, Text } from "react-native";
import { CartContext } from "../context/CartContext";

export function CartIconButton() {
  const router = useRouter();
  const cartContext = useContext(CartContext);
  const itemCount = cartContext?.cart.items.length || 0;

  return (
    <Pressable
      onPress={() => router.push("/cart" as Href)}
      style={{ marginRight: 10 }}
    >
      <Text>🛒 {itemCount > 0 ? `(${itemCount})` : ""}</Text>
    </Pressable>
  );
}
