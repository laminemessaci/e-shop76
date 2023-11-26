import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

import BottomTabsNavigator from "./BottomTabsNavigator.js";

const Stack = createStackNavigator();

export default function AppStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabsNavigator}
        headerShown={true}
        options={{
          headerLeft: ({ color }) => (
            <Ionicons name="mmenu" color="black" size={26} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
