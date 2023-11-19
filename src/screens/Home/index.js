import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Switch,
  Container,
  Form,
  Item,
  Input,
  Button,
} from "native-base";

import styles from "./index.style";
import { useTheme } from "../../theme/ThemeProvider.tsx";
import { useTranslation } from "../../locale/useTranslation";
import FlagButton from "../../components/FlagButtob.jsx";

const Home = () => {
  const theme = useTheme();
  const { t, changeLanguage, language } = useTranslation();

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

  return (
    <Container style={styles.switchContainer(theme)}>
      <FlagButton language={language} onPress={toggleLanguage} />
    </Container>
  );
};

export default Home;
