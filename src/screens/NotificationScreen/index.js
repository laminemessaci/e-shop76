import { View, Text } from "react-native";
import React from "react";

import styles from "./index.style.ts";
import { useTheme } from "../../theme/ThemeProvider.tsx";

const NotificationScreen = () => {
  const theme = useTheme();
  return (
    <View style={styles.container(theme)}>
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default NotificationScreen;
