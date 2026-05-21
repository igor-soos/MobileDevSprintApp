import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function Layout() {

  const [fontsLoaded] = useFonts({
    FordScript: require("../assets/fonts/Fordscript.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "slide_from_bottom",
      }}
      
    />
  );
}