import { useState } from "react";
import {
    Button,
    StatusBar,
    StyleSheet,
    Switch,
    Text,
    TextInput,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FormsApp() {
  const [name, setName] = useState("");
  const [isDrakMode, setIsDrakMode] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Text>FormsApp</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Name"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Text>{name}</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="numeric"
      />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TextInput
        style={styles.multilineinput}
        placeholder="Message"
        multiline={true}
      />
      <Button title="Submit" onPress={() => console.log("Submitted")} />
      <View style={styles.switchContainer}>
        <Text style={styles.switchText}>Dark Mode</Text>
        <Switch
          value={isDrakMode}
          onValueChange={() => setIsDrakMode(!isDrakMode)}
          trackColor={{ false: "#767577", true: "lightgreen" }}
          thumbColor={isDrakMode ? "#f5dd4b" : "#f4f3f4"}
        />
      </View>   
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 12,
    borderWidth: 1,
  },
  multilineinput: {
    minHeight: 100,
    margin: 12,
    padding: 12,
    borderWidth: 1,
    textAlignVertical: "top",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 12,
  },
  switchText: {
    fontSize: 22,
  },
});
