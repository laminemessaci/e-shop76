import React from "react";
import { View, Text, Image } from "react-native";
import { useTheme } from "../../theme/ThemeProvider";
import { useTranslation } from "../../locale/useTranslation";

import styles from "./index.style";

interface Props {}

/**
 * Renders the header component.
 *
 * @returns {React.ReactElement} The rendered header component.
 */
const Header: React.FC<Props> = (props): React.ReactElement => {
const { t, changeLanguage, language } = useTranslation();

  const theme = useTheme();

  return (
    <View style={styles.container(theme)}>
      <Image
        source={require("../../../assets/images/logo.webp")}
        style={styles.image(theme)}
        resizeMode="contain"
        
      />
     
    </View>
  );
};

export default Header;
