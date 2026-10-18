import { Redirect } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function profile() {
  const isLogin = false;

  if (!isLogin) {
    return <Redirect href="/expo/(auth)/login" />;
  }
  return (
    <View>
      <Text>Profile</Text>
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
