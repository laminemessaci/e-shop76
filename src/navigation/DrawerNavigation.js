import Ionicons from "@expo/vector-icons/Ionicons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../components/CustomDrawer/index.js";
import {
  NotificationScreen,
  SettingsScreen,
  ProfileScreen,
} from "@screens";
import { useTheme } from "../theme/ThemeProvider.tsx";
import AppStackNavigator from "./StackNavigator.js";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const theme = useTheme();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: theme.colors.secondary,
        drawerActiveTintColor: theme.colors.white,
        drawerInactiveTintColor: theme.colors.default,
        drawerLabelStyle: {
          fontFamily: "Montserrat",
          fontSize: 15,
          marginLeft: -26,
        },
      }}
    >
      <Drawer.Screen
        name={"Home"}
        component={AppStackNavigator}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={"Profile"}
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name={"Messages"}
        component={NotificationScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={"Settings"}
        component={SettingsScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
