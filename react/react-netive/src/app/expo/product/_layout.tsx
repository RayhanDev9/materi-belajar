import { Slot } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function ProductLayout() {
  return (
    <View style={styles.container}>
      <Slot />
      <View>
        <Text>Discont</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
