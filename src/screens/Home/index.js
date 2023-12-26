import React, { useCallback, useEffect, useState } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";

import styles from "./index.style";
import { useTheme } from "../../theme/ThemeProvider.tsx";
import { useTranslation } from "../../locale/useTranslation";
import FlagButton from "../../components/FlagButtob.jsx";
import ProductCard from "../../components/ProductCard";
import useApi from "../../services/useApi.ts";

import { products as mockedProducts } from "../../../assets/data/products.js";

import SearchProduct from "../../screens/SearchProduct";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { SearchBar } from "react-native-elements";
import Banner from "../../components/Banner";
import CategoryFilter from "../../components/CategoryFilter";
import { FontAwesome } from "@expo/vector-icons";

const Home = () => {
  const [focus, setFocus] = useState();
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [searchText, setSearchText] = useState("");

  const theme = useTheme();

  const navigate = useNavigation();

  const openList = () => {
    console.log("open");
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  const searchProduct = (text) => {
    setSearchText(text);
    setProductsFiltered(
      products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
    );
  };

  useFocusEffect(
    useCallback(() => {
      setFocus(false);
      setProducts(mockedProducts);

      return () => {
        setProducts([]);
        setProductsFiltered([]);
        setFocus();
      };
    }, [])
  );

  return (
    <>
      <View style={{ justifyContent: "end", top: 10 }}>
        <FontAwesome
          name="bars"
          onPress={() => navigate.openDrawer()}
          size={24}
          color="black"
          style={{
            marginLeft: 10,
            position: "absolute",
            zIndex: 1,
          }}
        />
      </View>

      <SearchBar
        placeholder="Search"
        lightTheme={true}
        onChangeText={(text) => searchProduct(text)}
        value={searchText}
        onClear={() => searchProduct("")}
        containerStyle={styles.searchBarContainer(theme)}
        inputContainerStyle={styles.inputContainer(theme)}
        inputStyle={styles.input(theme)}
        onFocus={openList}
        onPointerDown={onBlur}
      />

      <View style={styles.container(theme)}>
        <Banner text="Banner" />
        <CategoryFilter />
        <FlatList
          data={focus ? productsFiltered : products}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigate.navigate("ProductDetails", item)}
            >
              <ProductCard product={item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
};

export default Home;
