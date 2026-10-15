import { useState } from "react";
import {
    Button,
    Image,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

type FormErrors = {
  username?: string;
  password?: string;
};

export default function FormLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!username) newErrors.username = "Username harus di isi";
    if (!password) newErrors.password = "Password harus di isi";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = () => {
    if(validate()) {
        console.info("Submited",username,password);
        setUsername("")
        setPassword("")
        setErrors({});
    }
  }

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 300}
      style={styles.container}
    >
      <View style={styles.form}>
        <Image
          source={require("../../../assets/images/pokemon/adaptive-icon.png")}
          style={styles.image}
        />
        <Text style={styles.label}> Username</Text>
        <TextInput
          placeholder="Masukkan Username"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        {errors.username && <Text style={styles.error}>
          {errors.username}
          </Text>}
        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Masukan Password"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
         {errors.password && <Text style={styles.error}>
          {errors.password}
          </Text>}
        <Button
          title="Login"
          onPress={handleSubmit}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  form: {
    backgroundColor: "white",
    padding: 24,
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    gap: 12,
  },
  label: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },

  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    borderRadius: 4,
  },
  image: {
    width: 200,
    height: 400,
    alignSelf: "center",
    marginBottom: 20,
  },
   error: {
    color: "red",
    fontSize: 14,
  },
  button: {
    marginTop: 12,
  },
});
