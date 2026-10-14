import { View, Text } from "react-native";

interface GreetProps {
  name: string;
}

export default function Greet({ name }: GreetProps) {
  return (
    <View>
      <Text>Hello, My name is {name}</Text>
    </View>
  );
}
