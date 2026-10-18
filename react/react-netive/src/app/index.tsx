import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

interface Topic {
  id: string;
  category: string;
  items: {
    title: string;
    description: string;
    route: string;
    icon: keyof typeof Ionicons.glyphMap;
    badge?: string;
  }[];
}

const curriculum: Topic[] = [
  {
    id: "nav",
    category: "1. Navigasi Modern (Expo Router)",
    items: [
      {
        title: "Tabs Navigation",
        description: "Navigasi bar bawah dengan icon, title, label, dan badge",
        route: "/(tabs)",
        icon: "albums-outline",
        badge: "Penting",
      },
      {
        title: "Drawer Navigation",
        description: "Menu laci / sidebar yang bisa digeser dari tepi kiri",
        route: "/(drawer)",
        icon: "menu-outline",
        badge: "Penting",
      },
      {
        title: "Modal via Stack",
        description: "Layar modal native menggunakan presentation: 'modal'",
        route: "/modal",
        icon: "copy-outline",
      },
    ],
  },
  {
    id: "platform",
    category: "2. Platform-Specific Code",
    items: [
      {
        title: "Platform Specific Demo",
        description: "Platform.OS, Platform.select, dan pemisahan file .android / .ios",
        route: "/platform-example",
        icon: "phone-portrait-outline",
        badge: "Konsep",
      },
    ],
  },
  {
    id: "api",
    category: "3. Fullstack & API Routes",
    items: [
      {
        title: "API Routes (+api.ts)",
        description: "Server backend REST API (GET & POST) di dalam Expo",
        route: "/api-demo",
        icon: "server-outline",
        badge: "Fullstack",
      },
    ],
  },
  {
    id: "forms_lists",
    category: "4. Komponen Dasar & Styling",
    items: [
      {
        title: "Box, Flexbox & Styling",
        description: "Materi layouting dasar React Native",
        route: "/(app)/Box",
        icon: "cube-outline",
      },
      {
        title: "SafeAreaView Layout",
        description: "Mengatasi notch kamera dan area aman layar",
        route: "/(app)/SafeAreaView",
        icon: "shield-checkmark-outline",
      },
      {
        title: "Dynamic Layout",
        description: "Layout responsif sesuai dimensi layar",
        route: "/(app)/Dynemic-Layout",
        icon: "resize-outline",
      },
    ],
  },
  {
    id: "features",
    category: "5. Form & Networking",
    items: [
      {
        title: "Form Login",
        description: "Penanganan input teks dan validasi form",
        route: "/RNForms/FormLogin",
        icon: "log-in-outline",
      },
      {
        title: "FlatList & Lists",
        description: "Performa render data list yang panjang",
        route: "/RnList/RlApp",
        icon: "list-outline",
      },
      {
        title: "Networking / HTTP Fetch",
        description: "Mengambil data eksternal lewat internet",
        route: "/RNetworking/RNetworkingApp",
        icon: "cloud-download-outline",
      },
    ],
  },
];

export default function LearningHomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header Aplikasi Belajar */}
      <View style={styles.header}>
        <View style={styles.headerBadge}>
          <Text style={styles.headerBadgeText}>Kurikulum React Native</Text>
        </View>
        <Text style={styles.headerTitle}>Peta Materi Belajar</Text>
        <Text style={styles.headerSubtitle}>
          Pilih topik materi di bawah untuk langsung membuka layarnya dan melihat kodenya.
        </Text>
      </View>

      {/* Daftar Kategori */}
      {curriculum.map((section) => (
        <View key={section.id} style={styles.section}>
          <Text style={styles.sectionTitle}>{section.category}</Text>

          {section.items.map((item, idx) => (
            <Pressable
              key={idx}
              style={({ pressed }) => [
                styles.card,
                pressed && styles.cardPressed,
              ]}
              onPress={() => router.push(item.route as any)}
            >
              <View style={styles.cardIconBox}>
                <Ionicons name={item.icon} size={22} color="#2563eb" />
              </View>

              <View style={styles.cardContent}>
                <View style={styles.cardHeader}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  {item.badge && (
                    <View style={styles.badge}>
                      <Text style={styles.badgeText}>{item.badge}</Text>
                    </View>
                  )}
                </View>
                <Text style={styles.cardDescription}>{item.description}</Text>
                <Text style={styles.cardRoute}>{item.route}</Text>
              </View>

              <Ionicons name="chevron-forward" size={18} color="#94a3b8" />
            </Pressable>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 24,
    marginTop: 10,
  },
  headerBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#dbeafe",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 8,
  },
  headerBadgeText: {
    color: "#1d4ed8",
    fontSize: 12,
    fontWeight: "700",
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "800",
    color: "#0f172a",
    marginBottom: 6,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#64748b",
    lineHeight: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#334155",
    marginBottom: 12,
    paddingLeft: 4,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e2e8f0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  cardPressed: {
    opacity: 0.75,
    transform: [{ scale: 0.99 }],
  },
  cardIconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#eff6ff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  cardContent: {
    flex: 1,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1e293b",
    marginRight: 8,
  },
  badge: {
    backgroundColor: "#f1f5f9",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  badgeText: {
    fontSize: 11,
    color: "#475569",
    fontWeight: "600",
  },
  cardDescription: {
    fontSize: 13,
    color: "#64748b",
    lineHeight: 18,
    marginBottom: 4,
  },
  cardRoute: {
    fontSize: 11,
    color: "#2563eb",
    fontFamily: "monospace",
  },
});
