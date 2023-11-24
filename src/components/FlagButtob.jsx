import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useTheme } from "../theme/ThemeProvider";
const FlagButton = ({ language, onPress }) => {
  const theme = useTheme();
  const getFlag = (langage) => {
    let flaf = "en";

    if (langage === "en") {
      flag = "flag-usa";
    } else if (langage === "fr") {
      flag = "flag-checkered";
    } else if (langage === "ar") {
      flag = "flag";
    }

    return flag;
  };
  const flagIcon = (language = getFlag(language) || "flag-usa");

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <FontAwesome5
        name={flagIcon}
        size={18}
        color={theme.colors.primaryLight}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  icon: {
    fontSize: 30,
  },
});

export default FlagButton;
