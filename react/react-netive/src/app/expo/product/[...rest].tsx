import React from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function CatchAllProductDetail() {
  const { rest, name, price } = useLocalSearchParams<{
    rest?: string[];
    name?: string;
    price?: string;
  }>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Catch-All Produk</Text>

      {/* Menampilkan parameter rest dari URL */}
      <View style={styles.card}>
        <Text style={styles.label}>Kategori / Path:</Text>
        <Text style={styles.value}>
          {Array.isArray(rest) ? rest.join("  ➔  ") : rest || "-"}
        </Text>

        {name ? (
          <>
            <Text style={styles.label}>Nama Produk:</Text>
            <Text style={styles.value}>{name}</Text>
          </>
        ) : null}

        {price ? (
          <>
            <Text style={styles.label}>Harga:</Text>
            <Text style={styles.value}>Rp {Number(price).toLocaleString("id-ID")}</Text>
          </>
        ) : null}
      </View>

      <Link href={"/expo/product" as any} style={styles.backLink}>
        <Text>← Kembali ke Daftar Produk</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    gap: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  card: {
    width: "100%",
    backgroundColor: "#f3f4f6",
    padding: 16,
    borderRadius: 10,
    gap: 6,
  },
  label: {
    fontSize: 14,
    color: "#6b7280",
    fontWeight: "600",
  },
  value: {
    fontSize: 16,
    color: "#111827",
    fontWeight: "500",
    marginBottom: 8,
  },
  backLink: {
    marginTop: 12,
    color: "#2563eb",
  },
});
