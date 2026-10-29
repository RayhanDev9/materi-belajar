import { Text, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 w-full gap-4">
      {/* Navbar */}
      <View className="mt-2 flex-row  justify-between ">
        <View>
          <Text className="text-2xl font-extrabold">Route Tracker</Text>
          <Text className="text-base">Map Explorer</Text>
        </View>

        <View>
          <Text>Tes</Text>
        </View>
      </View>

      <View className="flex flex-row justify-between">
        <Text className="font-semibold">GPS Aktif - akurat</Text>
        <Text className="font-semibold">Akurasi 3m</Text>
      </View>

      <View>
        <Text className="font-semibold text-3xl ">Mau Kemana Hari ini</Text>
        <Text>Pantau rute perjalanan mu secara real time dan akurat</Text>
      </View>

      <View>
        <View className="p-3 border  bg-white  rounded-xl shadow-lg shadow-black/40">
          <View>
            <Text className="font-semibold ">Jalur Tol & Arteri Cepat</Text>
            <View className="flex-row gap-3">
              <Text>Paling cepat 24m </Text>
              <Text>Bebas | Hambatan</Text>
            </View>
            <Text>Lalu lintas relative lancar</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
