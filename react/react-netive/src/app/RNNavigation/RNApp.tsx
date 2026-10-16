import AboutScreen from "@/screens/AboutScreen";
import HomeScreen from "@/screens/HomeScreen";
import {
    NavigationContainer,
    NavigationIndependentTree,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, Text } from "react-native";

const Stack = createNativeStackNavigator();

export default function RNApp() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            title: "Back to home",
            headerStyle: {
              backgroundColor: "#6a51ae",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
            headerRight: () => {
              return (
                <Pressable onPress={() => alert("Menu button press!")}>
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    Menu
                  </Text>
                </Pressable>
              );
            },
            contentStyle: {
              backgroundColor: "#e8e4f8",
            },
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="About"
            component={AboutScreen}
            initialParams={{ name: "Guest" }}
            // options={({ route }: any) => ({
            //   title: route?.params?.title || "About",
            // })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
