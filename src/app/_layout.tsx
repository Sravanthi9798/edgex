import { Stack } from "expo-router";

import { AssetProvider } from "@/context/AssetContext";

export default function RootLayout() {
  return (
    <AssetProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </AssetProvider>
  );
}