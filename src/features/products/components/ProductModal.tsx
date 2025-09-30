import { CartContext } from "@/features/cart/context/CartContext";
import { Product } from "@/features/products/types/products.types";
import { useContext } from "react";
import { Modal, Pressable, Text, View } from "react-native";

interface ProductModalProps {
  visible: boolean;
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({
  visible,
  product,
  onClose,
}: ProductModalProps) {
  const cartContext = useContext(CartContext);
  const dispatch = cartContext?.dispatch;

  const handleAddtoCart = () => {
    if (product && dispatch) {
      dispatch({ type: "ADD_TO_CART", payload: product });
      onClose();
    }
  };

  return (
    <Modal transparent visible={visible}>
      <Pressable
        onPress={onClose}
        className="absolute top-0 left-0 right-0 bottom-0"
      >
        <View className="flex-1 bg-black/60" />
      </Pressable>
      <View className="flex p-6 justify-center items-center absolute inset-0">
        <View className="p-6 bg-white rounded-3xl">
          <Text className="mb-2 text-2xl font-bold">
            {product?.productName}
          </Text>
          <Text className="mb-4 text-orange-500 text-lg font-semibold">
            ${product?.price}
          </Text>
          <Text className="mb-6 text-gray-500 text-justify">
            {product?.description}
          </Text>
          <Pressable
            onPress={handleAddtoCart}
            className="p-2 items-center bg-orange-500 rounded-lg"
          >
            <Text className="text-white font-bold text-lg">Add to Cart</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
