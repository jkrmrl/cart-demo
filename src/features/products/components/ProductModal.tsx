import { Product } from "@/features/products/types/products.types";
import {
  Modal,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

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
  return (
    <Modal transparent visible={visible}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View className="flex-1 bg-black/60" />
      </TouchableWithoutFeedback>
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
          <Pressable className="p-2 items-center bg-orange-500 rounded-lg">
            <Text className="text-white font-bold text-lg">Add to Cart</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
