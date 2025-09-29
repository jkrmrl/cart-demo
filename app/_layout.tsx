// app/_layout.tsx
import "../global.css";

import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home Test" }} />
    </Stack>
  );
}
