import { View, Text, StyleSheet, Pressable } from "react-native";

export default function CustomButton({ title, onPress }: { title: string; onPress: () => void }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
      android_ripple={{ color: "#93c5fd" }}
    >
      <Text style={styles.text}>🤖 {title} (Android Style)</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#16a34a",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 6, // Bayangan khusus Android
    alignItems: "center",
    marginVertical: 8,
  },
  pressed: {
    opacity: 0.85,
  },
  text: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "uppercase", // Karakteristik tombol Android Material
  },
});
