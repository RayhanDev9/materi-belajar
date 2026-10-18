import { View, Text, StyleSheet, Pressable } from "react-native";
import { router } from "expo-router";

export default function DrawerHome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏠 Halaman Beranda (Drawer)</Text>
      <Text style={styles.subtitle}>
        Geser layar dari sisi kiri ke kanan atau klik icon ☰ di pojok kiri atas untuk membuka menu Drawer.
      </Text>

      <Pressable
        style={styles.modalButton}
        onPress={() => router.push("/modal")}
      >
        <Text style={styles.modalButtonText}>🚀 Buka Halaman Modal</Text>
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#f8fafc",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    color: "#64748b",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 24,
  },
  modalButton: {
    backgroundColor: "#2563eb",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    elevation: 3,
  },
  modalButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

