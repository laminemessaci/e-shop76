import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import {
  AirQuality,
  NotificationScreen,
  ProfileScreen,
  SettingsScreen,
} from "@screens";
import { useTheme } from "../theme/ThemeProvider.tsx";

const Tab = createMaterialBottomTabNavigator();

const BottomTabsNavigator = (props) => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={theme.colors.secondaryDark}
      inactiveColor={theme.colors.secondary}
      barStyle={{
        backgroundColor: theme.colors.primary,
        borderTopWidth: 1,
        borderTopColor: theme.colors.secondary,
      }}
      labeled
      shifting
      {...props}
    >
      <Tab.Screen
        name="Home"
        component={AirQuality}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          tabBarLabel: "Notifications",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-notifications" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-settings" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-person" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
