import { useNavigation, useRoute } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const { navigate } = useNavigation<any>();
  const route = useRoute<any>();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen {route.params?.result}</Text>
      <Button
        title="Go to About"
        onPress={() =>
          navigate("About", {
            name: "Alfan Rayhan Daffa",
            title: "Title React Netive",
          })
        }
      />
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
