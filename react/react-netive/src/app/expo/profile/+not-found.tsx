import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function CoustumNotFound() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>404</Text>
      <Text style={styles.subtitle}>Halaman Profile Tidak Ditemukan</Text>
      <Link href={"./expo/profile/profile"} style={styles.subtitle}>
        Go To Profile
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
  subtitle: {
    fontSize: 14,
    color: "#6b7280",
  },
});
