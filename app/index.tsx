// app/index.tsx (Example)
import React from "react";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center p-6 bg-white">
      <Text className="text-4xl font-bold text-blue-600">
        Tailwind is Working!
      </Text>

      <Text className="text-gray-500 mt-4">
        This is a test of NativeWind integration.
      </Text>
    </View>
  );
}
