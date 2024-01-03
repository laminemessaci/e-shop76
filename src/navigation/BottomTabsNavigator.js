import React, { useEffect } from "react";

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  NotificationScreen,
  ProfileScreen,
  SettingsScreen,
  Home,
  Cart,
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
        height: 68,
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
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: t("Cart"),
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-cart" color={color} size={24} />
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
