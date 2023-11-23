import React, { useEffect } from "react";

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  NotificationScreen,
  ProfileScreen,
  SettingsScreen,
  Home,
} from "@screens";
import { useTheme } from "../theme/ThemeProvider.tsx";
import { useTranslation } from "../locale/useTranslation.js";

const Tab = createMaterialBottomTabNavigator();

const BottomTabsNavigator = (props) => {
  const theme = useTheme();
  const { t, changeLanguage, language } = useTranslation();

  return (
    <Tab.Navigator
      initialRouteName={"Home"}
      activeColor={theme.colors.white}
      inactiveColor={theme.colors.secondary}
      barStyle={{
        backgroundColor: theme.colors.primary,
        borderTopWidth: 1,
        borderTopColor: theme.colors.primary,
      }}
      labeled
      shifting
      {...props}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: t("Home"),
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          tabBarLabel: t("Notifications"),
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-notifications" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: t("Settings"),
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-settings" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: t("Profile"),
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-person" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
