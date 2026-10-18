import { StyleSheet, Text, View } from "react-native";

export default function Styleshets() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Styleshets</Text>
      <View
        style={[
          styles.box,
          styles.lightblueBg,
          styles.boxShadow,
          styles.androidShadow,
        ]}
      >
        <Text style={styles.whiteText}>
          Lightblue Box
          <Text style={styles.textInBold}> Text In Bold</Text>
        </Text>
      </View>
      <View
        style={[
          styles.box,
          styles.lightGreenBg,
          styles.boxShadow,
          styles.androidShadow,
        ]}
      >
        <Text style={styles.whiteText}>LightGreen Box</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: "purple",
    backgroundColor: "lightgreen",
    alignItems: "center",
    gap: 12,
  },
  title: {
    fontWeight: "bold",
  },
  box: {
    padding: 15,
    borderRadius: 8,
  },
  lightblueBg: {
    backgroundColor: "blue",
  },
  lightGreenBg: {
    backgroundColor: "green",
  },
  whiteText: {
    color: "white", // ✅ Pasang di sini
  },
  textInBold: {
    fontWeight: "bold",
  },
  boxShadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 6,
  },
  androidShadow: {
    elevation: 10,
    shadowColor: "rgba(0, 0, 0, 1)",
    shadowOffset: {
      width: 12,
      height: 12,
    },
    shadowOpacity: 1,
    shadowRadius: 12,
  },
});
