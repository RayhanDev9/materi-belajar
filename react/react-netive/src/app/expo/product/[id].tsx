import React from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function ProductDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Produk</Text>
      <Text style={styles.subtitle}>Product ID: {id}</Text>

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
    gap: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
  },
  backLink: {
    marginTop: 16,
    color: "#2563eb",
  },
});