import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  const route = useRoute<any>();
  const name = route.params?.name ?? "Guest";

  const navigation = useNavigation<any>();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [name, navigation]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>AboutScreen {name}</Text>
      <Button
        title="Kembali ke Home"
        onPress={() =>
          navigation.navigate("Home", { result: "Data form about" })
        }
      />
      <Button
        title="Update name"
        onPress={() => navigation.setParams({ name: "Update name" })}
      />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer?.()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
