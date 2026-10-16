import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  NavigationIndependentTree,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

// --------------------------------------------------------------------------
// 1. DATA DUMMY PRODUK
// --------------------------------------------------------------------------
const PRODUCTS = [
  {
    id: "1",
    title: "Sepatu Running Nike",
    price: "Rp 1.200.000",
    description: "Sepatu running super ringan dengan bantalan empuk untuk lari harian.",
  },
  {
    id: "2",
    title: "Headphone Bluetooth Sony",
    price: "Rp 2.500.000",
    description: "Headphone noise cancelling terbaik dengan baterai tahan hingga 30 jam.",
  },
  {
    id: "3",
    title: "Smartwatch Garmin",
    price: "Rp 3.800.000",
    description: "Smartwatch outdoor dengan GPS presisi tinggi dan pemantau detak jantung.",
  },
];

// --------------------------------------------------------------------------
// 2. LAYAR-LAYAR UNTUK STACK NAVIGATOR
// --------------------------------------------------------------------------

// Layar 1: Daftar Produk
function ProductListScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.headerSubtitle}>
        Pilih produk untuk melihat alur Stack di dalam Tab:
      </Text>

      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ gap: 12, marginTop: 12 }}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() =>
              navigation.navigate("ProductDetail", {
                id: item.id,
                title: item.title,
                price: item.price,
                description: item.description,
              })
            }
          >
            <View>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardPrice}>{item.price}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#666" />
          </Pressable>
        )}
      />
    </View>
  );
}

// Layar 2: Detail Produk (di-push ke atas daftar produk)
function ProductDetailScreen() {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const { title, price, description } = route.params || {};

  return (
    <View style={[styles.container, { justifyContent: "space-between" }]}>
      <View>
        <Text style={styles.detailTitle}>{title}</Text>
        <Text style={styles.detailPrice}>{price}</Text>
        <Text style={styles.detailDesc}>{description}</Text>
      </View>

      <Pressable
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={18} color="white" />
        <Text style={styles.backButtonText}>Kembali ke Daftar (Pop Stack)</Text>
      </Pressable>
    </View>
  );
}

// --------------------------------------------------------------------------
// 3. STACK NAVIGATOR (ANAK / INNER NAVIGATOR)
// --------------------------------------------------------------------------
const HomeStack = createNativeStackNavigator();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#4f46e5" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <HomeStack.Screen
        name="ProductList"
        component={ProductListScreen}
        options={{ title: "Katalog Toko" }}
      />
      <HomeStack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={({ route }: any) => ({
          title: route.params?.title || "Detail Produk",
        })}
      />
    </HomeStack.Navigator>
  );
}

// --------------------------------------------------------------------------
// 4. LAYAR PROFILE (UNTUK TAB KEDUA)
// --------------------------------------------------------------------------
function ProfileScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={[styles.container, { justifyContent: "center", alignItems: "center" }]}>
      <Ionicons name="person-circle-outline" size={80} color="#4f46e5" />
      <Text style={styles.profileName}>Rayhan Daffa</Text>
      <Text style={styles.profileRole}>React Native Developer</Text>

      {/* Contoh pindah antar-navigator bersarang: dari Tab Profile langsung ke Detail Produk di Tab Home */}
      <Pressable
        style={[styles.backButton, { marginTop: 24, backgroundColor: "#4f46e5" }]}
        onPress={() => {
          navigation.navigate("HomeTab", {
            screen: "ProductDetail",
            params: PRODUCTS[0],
          });
        }}
      >
        <Text style={styles.backButtonText}>Buka Produk Unggulan di Tab Home</Text>
      </Pressable>
    </View>
  );
}

// --------------------------------------------------------------------------
// 5. TAB NAVIGATOR (INDUK / ROOT NAVIGATOR)
// --------------------------------------------------------------------------
const Tab = createBottomTabNavigator();

export default function RNNestedApp() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false, // Disembunyikan karena Stack di dalamnya sudah punya header sendiri
            tabBarActiveTintColor: "#4f46e5",
            tabBarInactiveTintColor: "#9ca3af",
            tabBarStyle: { height: 60, paddingBottom: 8, paddingTop: 6 },
          }}
        >
          {/* Tab 1: Berisi STACK NAVIGATOR (Bukan cuma 1 layar biasa) */}
          <Tab.Screen
            name="HomeTab"
            component={HomeStackNavigator}
            options={{
              tabBarLabel: "Toko",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="storefront" size={size} color={color} />
              ),
            }}
          />

          {/* Tab 2: Layar biasa */}
          <Tab.Screen
            name="ProfileTab"
            component={ProfileScreen}
            options={{
              headerShown: true, // Untuk tab ini, tampilkan header bawaan tab
              title: "Profil Saya",
              tabBarLabel: "Profil",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}

// --------------------------------------------------------------------------
// 6. STYLES
// --------------------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9fafb",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 8,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1f2937",
  },
  cardPrice: {
    fontSize: 14,
    color: "#4f46e5",
    fontWeight: "600",
    marginTop: 4,
  },
  detailTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 8,
  },
  detailPrice: {
    fontSize: 18,
    color: "#4f46e5",
    fontWeight: "bold",
    marginBottom: 16,
  },
  detailDesc: {
    fontSize: 15,
    color: "#4b5563",
    lineHeight: 22,
  },
  backButton: {
    backgroundColor: "#ef4444",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  backButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 12,
    color: "#1f2937",
  },
  profileRole: {
    fontSize: 14,
    color: "#6b7280",
    marginTop: 4,
  },
});
