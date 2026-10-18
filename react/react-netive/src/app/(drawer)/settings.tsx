import { View, Text, StyleSheet } from "react-native";

export default function DrawerSettings() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚙️ Halaman Pengaturan</Text>
      <Text style={styles.subtitle}>
        Ini adalah screen kedua di dalam Drawer Navigation.
      </Text>
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
  },
  subtitle: {
    fontSize: 15,
    color: "#64748b",
    textAlign: "center",
  },
});
