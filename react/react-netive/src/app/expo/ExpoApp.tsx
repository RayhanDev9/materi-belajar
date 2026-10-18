import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function ExpoApp() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Page</Text>

      <Link href="/expo/About" style={styles.link}>
        <Text>Tentang</Text>
      </Link>
      <Link href="/expo/profile/profile/rayhan" style={styles.link}>
        <Text>Profile</Text>
      </Link>
      {/* Mengarah ke /expo/product (bukan /expo/product/index) agar tidak tertangkap oleh [id] */}
      <Link href={"/expo/product" as any} style={styles.link}>
        <Text>Daftar Product</Text>
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
    marginBottom: 8,
  },
  link: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    color: "#2563eb",
  },
});
