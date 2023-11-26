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
  FlatList,
} from "native-base";

import styles from "./index.style";
import { useTheme } from "../../theme/ThemeProvider.tsx";
import { useTranslation } from "../../locale/useTranslation";
import FlagButton from "../../components/FlagButtob.jsx";
import ProductCard from "../../components/ProductCard";
import useApi from "../../services/useApi.ts";

import { products } from "../../../assets/data/products.js";

const Home = () => {
  const theme = useTheme();

  // const { data, error, loading } = useApi(json);

  // useEffect(() => {
  //   console.log("data", data);
  // }, [data]);

  // if (error) {
  //   return <Text>{error.message}</Text>;
  // }
  // if (loading) {
  //   return <Text>Loading...</Text>;
  // }

  return (
    <View style={styles.container(theme)}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;
