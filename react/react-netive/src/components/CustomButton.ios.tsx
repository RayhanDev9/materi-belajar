import { Text, StyleSheet, Pressable } from "react-native";

export default function CustomButton({ title, onPress }: { title: string; onPress: () => void }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>🍎 {title} (iOS / Universal Style)</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 20, // Rounded kapsul khas iOS
    alignItems: "center",
    marginVertical: 8,
    // Bayangan khas iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  pressed: {
    opacity: 0.6, // Efek fade out khas tombol iOS saat ditekan
  },
  text: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 16,
  },
});
