import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigation from "./navigation/BottomTabNavigation";
import { Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cart } from "./screens";

const Stack = createNativeStackNavigator();

export default function App() {
  const [FontsLoaded] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (FontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [FontsLoaded]);

  if (!FontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Bottom Navigation"
          component={BottomTabNavigation} // Remove the JSX tags
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Cart"
          component={Cart} // Remove the JSX tags
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
