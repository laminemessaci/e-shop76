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

  return <Container style={styles.switchContainer(theme)}></Container>;
};

export default Home;
