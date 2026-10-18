import { View, Text, StyleSheet, Platform, Alert } from "react-native";
// Perhatikan impor ini: Kita tidak menulis .android atau .ios!
// React Native otomatis memilih file yang sesuai dengan OS yang sedang berjalan.
import CustomButton from "@/components/CustomButton";

export default function PlatformExampleScreen() {
  const handlePress = () => {
    Alert.alert("Tombol Diklik", `Aplikasi mendeteksi OS: ${Platform.OS.toUpperCase()}`);
  };

  return (
    <View style={styles.container}>
      {/* 1. Menggunakan Platform.OS secara langsung */}
      <View style={styles.card}>
        <Text style={styles.title}>1. Deteksi Platform.OS</Text>
        <Text style={styles.infoText}>
          Sistem Operasi Anda saat ini:{" "}
          <Text style={styles.highlight}>{Platform.OS.toUpperCase()}</Text>
        </Text>
        <Text style={styles.infoText}>
          Versi OS: <Text style={styles.highlight}>{String(Platform.Version)}</Text>
        </Text>
      </View>

      {/* 2. Styling dengan Platform.select() */}
      <View style={styles.cardSelect}>
        <Text style={styles.title}>2. Menggunakan Platform.select()</Text>
        <Text style={styles.desc}>
          Warna dan bayangan kotak ini berbeda otomatis:
          {"\n"}- Di Android: bayangan memakai 'elevation' & border hijau
          {"\n"}- Di iOS: bayangan lembut 'shadowColor' & border biru
        </Text>
      </View>

      {/* 3. File Extension Khusus (CustomButton.android vs CustomButton.ios) */}
      <View style={styles.card}>
        <Text style={styles.title}>3. Platform-Specific Files</Text>
        <Text style={styles.desc}>
          Tombol di bawah otomatis membaca file yang cocok:
        </Text>
        <CustomButton title="Klik Saya" onPress={handlePress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    padding: 20,
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  cardSelect: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    // Platform.select untuk styling dinamis:
    ...Platform.select({
      ios: {
        borderColor: "#3b82f6",
        borderWidth: 2,
        shadowColor: "#3b82f6",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
      android: {
        borderColor: "#16a34a",
        borderWidth: 2,
        elevation: 6,
      },
      default: {
        borderColor: "#cbd5e1",
        borderWidth: 1,
      },
    }),
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 8,
  },
  desc: {
    fontSize: 14,
    color: "#64748b",
    lineHeight: 20,
    marginBottom: 10,
  },
  infoText: {
    fontSize: 15,
    color: "#334155",
    marginBottom: 4,
  },
  highlight: {
    fontWeight: "bold",
    color: "#2563eb",
  },
});
