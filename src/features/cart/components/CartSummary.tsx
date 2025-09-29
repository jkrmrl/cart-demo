import { useContext, useRef } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { CartContext } from "../context/CartContext";

export default function CartSummary() {
  const cartContext = useContext(CartContext);
  const cart = cartContext?.cart;
  const dispatch = cartContext?.dispatch;

  const voucherInputRef = useRef<string>("");

  const subtotal = cart?.items.reduce((sum, item) => {
    return sum + item.product.price * item.quantity;
  }, 0);

  const handleApplyVoucher = () => {
    const code = voucherInputRef.current.trim().toUpperCase();

    if (code === "DISCOUNT10") {
      dispatch?.({
        type: "APPLY_VOUCHER",
        payload: {
          code: "DISCOUNT10",
          discountRate: 0.1,
        },
      });
    }
  };

  const discountAmount =
    subtotal && cart?.discountRate ? subtotal * cart.discountRate : 0;

  const totalAmount = subtotal ? subtotal - discountAmount : 0;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={80}
        style={{ flex: 1, width: "100%" }}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "flex-end",
          }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="w-full bg-white p-8 border-t border-gray-200 shadow-md">
            <View className="flex-col justify-between mb-4">
              <TextInput
                placeholder="Enter Voucher Code"
                placeholderTextColor="#4B5563"
                className="w-full mb-4 p-2 text-sm rounded-lg border border-gray-300"
                onChangeText={(text) => (voucherInputRef.current = text)}
              />
              <Pressable
                onPress={handleApplyVoucher}
                disabled={cart?.items.length === 0}
                className={`p-2 rounded-xl items-center ${
                  cart?.items.length === 0 ? "bg-orange-200" : "bg-orange-500"
                }`}
              >
                <Text className="text-white text-center text-lg font-bold">
                  APPLY
                </Text>
              </Pressable>
            </View>

            <View className="flex-row justify-between mb-2 border-t pt-2 border-gray-300">
              <Text className="text-gray-600">Subtotal:</Text>
              <Text className="font-semibold text-gray-800">
                ${subtotal?.toFixed(2)}
              </Text>
            </View>

            <View className="flex-row justify-between mb-2">
              <Text className="text-gray-600">
                Discount {cart?.voucherCode ? `(${cart.voucherCode})` : ""}:
              </Text>
              <Text className="font-semibold text-green-600">
                -${discountAmount.toFixed(2)}
              </Text>
            </View>

            <View className="flex-row justify-between mt-2 pt-2 border-t border-gray-300">
              <Text className="text-lg font-bold">Total Amount:</Text>
              <Text className="text-xl font-bold text-orange-500">
                ${totalAmount.toFixed(2)}
              </Text>
            </View>

            <Pressable
              disabled={cart?.items.length === 0}
              className={`mt-6 p-3 rounded-xl items-center ${
                cart?.items.length === 0 ? "bg-orange-200" : "bg-orange-500"
              }`}
            >
              <Text className="text-white text-lg font-bold">CHECKOUT</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
