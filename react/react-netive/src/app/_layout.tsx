import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#ffffff" },
          headerTintColor: "#0f172a",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Belajar React Native",
            headerShown: true,
          }}
        />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        <Stack.Screen name="platform-example" options={{ title: "Platform Specific" }} />
        <Stack.Screen name="api-demo" options={{ title: "API Routes Demo" }} />

        
        {/* Modal Screen menggunakan fitur bawaan Stack (tanpa library tambahan) */}
        <Stack.Screen
          name="modal"
          options={{
            presentation: "modal", // <-- Kunci utamanya di sini!
            headerShown: true,
            title: "Info Modal",
          }}
        />
      </Stack>


    </GestureHandlerRootView>
  );
}

