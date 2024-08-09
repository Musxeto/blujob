import { Stack } from "expo-router";
import { View } from "react-native";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();
const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("@/assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("@/assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("@/assets/fonts/DMSans-Regular.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if(!fontsLoaded) return null
  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <Stack />
    </View>
  );
};

export default Layout;