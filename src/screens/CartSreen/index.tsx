import React from "react";
import { ScrollView, Text } from "react-native";
import { useSelector } from "react-redux";

import { useTheme } from "../../theme/ThemeProvider";

import Cart, { IProduct } from "../../components/Cart";

import styles from "./index.styles";
import { Title } from "react-native-paper";

const CartScreen: React.FC = (): React.ReactElement => {
  const theme = useTheme();

  const cartItems: IProduct[] = useSelector<any>(
    (state: any) => state.cart.cartItems
  );

  const renderProducts = () => {
    return cartItems.map((item: IProduct) => {
      return <Cart key={item.id} item={item} />;
    });
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 10, paddingTop: 60 }}>
      <Text style={styles.title(theme)}>Cart</Text>
      {renderProducts()}
    </ScrollView>
  );
};

export default CartScreen;
