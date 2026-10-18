import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Pressable,
  ActivityIndicator,
  Alert,
} from "react-native";

interface User {
  id: number;
  name: string;
  role: string;
}

export default function ApiDemoScreen() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [name, setName] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [submitting, setSubmitting] = useState<boolean>(false);

  // 1. Fungsi GET: Mengambil data dari API Route kita
  const fetchUsers = async () => {
    try {
      setLoading(true);
      // Memanggil endpoint API Route yang tadi kita buat: /api/users
      const res = await fetch("/api/users");
      const json = await res.json();
      if (json.success) {
        setUsers(json.data);
      }
    } catch (err: any) {
      Alert.alert("Error", "Gagal memanggil API: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Panggil saat layar pertama kali dibuka
  useEffect(() => {
    fetchUsers();
  }, []);

  // 2. Fungsi POST: Mengirim data baru ke API Route
  const handleAddUser = async () => {
    if (!name.trim()) {
      Alert.alert("Peringatan", "Nama wajib diisi!");
      return;
    }

    try {
      setSubmitting(true);
      const res = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          role: role.trim() || "Member",
        }),
      });

      const json = await res.json();
      if (json.success) {
        Alert.alert("Berhasil! 🎉", json.message);
        setName("");
        setRole("");
        // Refresh daftar user
        fetchUsers();
      } else {
        Alert.alert("Gagal", json.message);
      }
    } catch (err: any) {
      Alert.alert("Error", err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header Info */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>⚡ Demo API Routes</Text>
        <Text style={styles.headerSubtitle}>
          Endpoint: <Text style={styles.codeText}>/api/users</Text>
        </Text>
      </View>

      {/* Form Input (POST) */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>➕ Tambah User Baru (POST)</Text>
        <TextInput
          style={styles.input}
          placeholder="Nama (contoh: Rayhan)"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Role (contoh: Backend Dev)"
          value={role}
          onChangeText={setRole}
        />
        <Pressable
          style={[styles.btn, submitting && styles.btnDisabled]}
          onPress={handleAddUser}
          disabled={submitting}
        >
          {submitting ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.btnText}>Kirim ke Server (POST)</Text>
          )}
        </Pressable>
      </View>

      {/* List Data (GET) */}
      <Text style={styles.sectionTitle}>📋 Data dari Server (GET):</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#2563eb" style={{ marginTop: 20 }} />
      ) : (
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.userItem}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{item.name.charAt(0)}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.userName}>{item.name}</Text>
                <Text style={styles.userRole}>{item.role}</Text>
              </View>
              <Text style={styles.userId}>ID #{item.id}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
    padding: 16,
  },
  header: {
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0f172a",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#64748b",
    marginTop: 4,
  },
  codeText: {
    backgroundColor: "#e2e8f0",
    fontWeight: "bold",
    color: "#2563eb",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#1e293b",
  },
  input: {
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    marginBottom: 10,
    backgroundColor: "#f8fafc",
  },
  btn: {
    backgroundColor: "#2563eb",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  btnDisabled: {
    opacity: 0.6,
  },
  btnText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#334155",
    marginBottom: 10,
  },
  userItem: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 10,
    marginBottom: 8,
    elevation: 1,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#dbeafe",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  avatarText: {
    color: "#2563eb",
    fontWeight: "bold",
    fontSize: 16,
  },
  userName: {
    fontSize: 15,
    fontWeight: "600",
    color: "#0f172a",
  },
  userRole: {
    fontSize: 13,
    color: "#64748b",
  },
  userId: {
    fontSize: 12,
    color: "#94a3b8",
    fontWeight: "500",
  },
});
