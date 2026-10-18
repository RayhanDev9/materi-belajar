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
      <Text style={styles.text}>🌐 {title} (Default/Web Style)</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0284c7",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 8,
    cursor: "pointer" as any,
  },
  pressed: {
    opacity: 0.8,
  },
  text: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 16,
  },
});
