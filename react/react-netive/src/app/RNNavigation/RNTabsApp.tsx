import AboutScreen from "@/screens/AboutScreen";
import HomeScreen from "@/screens/HomeScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    NavigationContainer,
    NavigationIndependentTree,
} from "@react-navigation/native";
import "react-native-gesture-handler";

const Tab = createBottomTabNavigator();

const AboutTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelPosition: "below-icon",
        tabBarShowLabel: true,
        tabBarActiveTintColor: "purple",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "My Profile",
          tabBarIcon: () => <Ionicons name="person" size={24} color="black" />,
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
};

export default function RNTabsApp() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <AboutTabs />
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
