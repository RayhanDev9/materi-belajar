import { Platform, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CoustomButton from "@/components/CoustomButton/CoustomButton";

export default function PlatformExample() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>SafeAreaView</Text>
          <CoustomButton title="Pres" onPress={() => alert("Press")}/>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "plum",
  },
  container: {
    flex: 1,
    backgroundColor: "plum",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  box: {
    padding: 20,
  },
  text: {
    ...Platform.select({
      ios: {
        color: "purple",
        fontSize: 24,
        fontStyle: "italic",
      },
      android: {
        color: "lightgreen",
        fontSize: 18,
        fontStyle: "normal",
      },
    }),
    fontWeight: "bold",
    textAlign: "center",
  },
});
