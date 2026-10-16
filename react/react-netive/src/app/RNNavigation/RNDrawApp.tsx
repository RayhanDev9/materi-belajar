import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import HomeScreen from "@/screens/HomeScreen";
import AboutScreen from "@/screens/AboutScreen";

const Drawer = createDrawerNavigator();

export default function RNDrawApp() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" >
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen
            name="About"
            component={AboutScreen}
            initialParams={{ name: "Guest" }}
            options={{
                title : "About",
                drawerLabel : "About Label",
                drawerActiveBackgroundColor : "#0cdc0cff",
                drawerActiveTintColor : "#000000",
                drawerContentStyle : {
                    backgroundColor : "#0dc9c9ff"
                },
                
            }}  
            
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}

