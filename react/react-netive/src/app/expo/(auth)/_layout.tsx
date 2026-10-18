import { Slot } from "expo-router";
// 1. Ubah StyleSheets menjadi StyleSheet
import { Image, StyleSheet, View } from "react-native";

export default function AuthLayout() {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 40,
        }}
      >
        <Image
          source={require("../../../../assets/images/icon.png")} // sesuaikan nama gambarnya
          style={{ width: 80, height: 80 }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Slot />
      </View>
    </View>
  );
}

// 2. Gunakan StyleSheet.create (bukan StyleSheets)
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
