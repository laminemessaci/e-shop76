import React from "react";
import { useFonts } from "expo-font";

import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "../../theme/ThemeProvider.tsx";
import { useTranslation } from "../../locale/useTranslation.js";

import styles from "./index.style";
import FlagButton from "../FlagButtob.jsx";

const CustomDrawer = (props) => {
  const theme = useTheme();
  const { t, changeLanguage, language } = useTranslation();
  const [loaded] = useFonts({
    Montserrat: require("../../../assets/fonts/Montserrat-Light.ttf"),
  });

  const toggleLanguage = () => {
    switchLanguage(language);
  };
  const switchLanguage = (langage) => {
    let newLanguage = "en";

    if (langage === "en") {
      newLanguage = "fr";
    } else if (langage === "fr") {
      newLanguage = "ar";
    } else if (langage === "ar") {
      newLanguage = "en";
    }

    changeLanguage(newLanguage);
  };

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container(theme)}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: theme.colors.primary }}
      >
        <ImageBackground
          source={require("../../../assets/images/coffee-bg.jpg")}
          style={{ padding: 24 }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "start",
              justifyContent: "space-between",
            }}
          >
            <Image
              source={require("../../../assets/images/drawer-profile.jpeg")}
              style={{
                height: 80,
                width: 80,
                borderRadius: 40,
                marginBottom: 10,
              }}
            />
            <FlagButton language={language} onPress={toggleLanguage} />
          </View>
          <Text
            style={{
              color: "#fff",
              fontSize: 16,

              marginBottom: 8,
            }}
          >
            John Doe
          </Text>

          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: "#fff",

                marginRight: 8,
              }}
            >
              280 Coins
            </Text>
            <FontAwesome5 name="coins" size={14} color="#fff" />
          </View>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              name="share-social-outline"
              size={22}
              color={theme.colors.white}
            />
            <Text style={styles.label(theme)}>{t("Tell a Friend")}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              name="exit-outline"
              size={22}
              color={theme.colors.white}
            />
            <Text style={styles.label(theme)}>{t("Sign out")}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
