import { StyleSheet, Text, View } from "react-native";

export default function Styleshets() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Styleshets</Text>
      <View style={[styles.box, styles.lightblueBg]}>
        <Text style={styles.whiteText}>Lightblue Box</Text>
      </View>
      <View style={[styles.box, styles.lightGreenBg]}>
        <Text style={styles.whiteText}>LightGreen Box</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingHorizontal : 20,
    paddingVertical : 10,
    borderWidth : 2,
    borderColor : "purple",
    backgroundColor: "lightgreen",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
  },
  box: {
    padding: 10,
    height: "25%",
    width: "25%",
    borderRadius : 5,

    
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
});
