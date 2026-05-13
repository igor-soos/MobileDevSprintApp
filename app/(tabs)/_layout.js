import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="vehicles" />
      <Tabs.Screen name="rewards" />
      <Tabs.Screen name="offers" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}