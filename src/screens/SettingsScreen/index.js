import { View, Text, Button } from "react-native";
import React from "react";

import styles from "./index.style";
import { useTheme } from "../../theme/ThemeProvider.tsx";

const SettingsScreen = ({ navigation, ...props }) => {
  const theme = useTheme();
  return (
    <View style={styles.container(theme)}>
      <Text>SettingsScreen</Text>
    </View>
  );
};

export default SettingsScreen;
