import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function ProductList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Produk</Text>

      {/* 1. Single Dynamic Route: Menggunakan [id].tsx */}
      <Link
        href={{
          pathname: "./[id]",
          params: { id: "1" },
        }}
        style={styles.productLink}
        relativeToDirectory
      >
        <Text>📦 Buka Produk #1 (Sepatu)</Text>
      </Link>

      <Link
        href={{
          pathname: "./[id]",
          params: { id: "2" },
        }}
        style={styles.productLink}
        relativeToDirectory
      >
        <Text>📦 Buka Produk #2 (Baju)</Text>
      </Link>

      <Link
        href={{
          pathname: "./[id]",
          params: { id: "100" },
        }}
        style={styles.productLink}
        relativeToDirectory
      >
        <Text>📦 Buka Produk #100 (Elektronik)</Text>
      </Link>

      {/* 2. Catch-All Dynamic Route: Menggunakan [...rest].tsx */}
      <Link
        style={styles.productLink}
        href={{
          pathname: "/expo/product/[...rest]",
          params: {
            rest: ["deals", "black-friday", "playstation"],
            name: "Playstation 5",
            price: "12000000",
          },
        }}
      >
        <Text>🎮 Deals: PlayStation 5 (Catch-All)</Text>
      </Link>

      <Link
        style={styles.productLink}
        href={{
          pathname: "/expo/product/[...rest]",
          params: {
            rest: ["deals", "black-friday", "android"],
            name: "Android Smartphone",
            price: "2500000",
          },
        }}
      >
        <Text>📱 Deals: Android Smartphone (Catch-All)</Text>
      </Link>

      <Link href="/" style={styles.homeLink}>
        <Text>← Kembali ke Home</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 14,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  productLink: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#eef2ff",
    borderRadius: 8,
    color: "#2563eb",
  },
  homeLink: {
    marginTop: 20,
    color: "#6b7280",
  },
});
