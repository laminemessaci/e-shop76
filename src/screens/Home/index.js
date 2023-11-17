import { View, ActivityIndicator, Button } from "react-native";
import React, { useEffect } from "react";

import styles from "./index.style";
import { useTheme } from "../../theme/ThemeProvider.tsx";

const Home = ({ navigation, ...props }) => {
  const theme = useTheme();

  return (
    <View style={styles.centered(theme)}>
      <View></View>
    </View>
  );
};

export default Home;
