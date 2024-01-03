import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";

import { useTheme } from "../../theme/ThemeProvider";

import styles from "./index.styles";

const Cart: React.FC = (): React.ReactElement => {
  const item = {
    id: 1,
    product: {
      id: 1,
      name: "Produit 1",
      image: "https://via.placeholder.com/150",
      price: 9.99,
    },
    quantity: 2,
  };

  const theme = useTheme();

  const cartItems = useSelector((state: any) => state.cart.cartItems);

  function onRemovePress(item: any): void {
    throw new Error("Function not implemented.");
  }

  function addItem(arg0: {
    id: number;
    name: string;
    price: string;
    image: string;
    quantity: number;
  }): void {
    throw new Error("Function not implemented.");
  }

  function removeItem(item: {
    id: number;
    product: { id: number; name: string; image: string; price: number };
    quantity: number;
  }): void {
    throw new Error("Function not implemented.");
  }

  function increaseQuantity(item: {
    id: number;
    product: { id: number; name: string; image: string; price: number };
    quantity: number;
  }): void {
    throw new Error("Function not implemented.");
  }

  return (
    <View style={styles.container(theme)}>
      <Text style={styles.title(theme)}>Shopping Cart</Text>

      <View key={item.id} style={styles.itemContainer(theme)}>
        <Image
          source={{ uri: item.product.image }}
          style={styles.image(theme)}
        />
        <View style={styles.infoContainer(theme)}>
          <Text style={styles.name(theme)}>{item.product.name}</Text>
          <Text style={styles.price(theme)}>{item.product.price}</Text>
        </View>
        <View style={styles.quantityContainer(theme)}>
          <Button title="-" onPress={() => console.log("-")} />
          <Text style={styles.quantity(theme)}>{item.quantity}</Text>
          <Button title="+" onPress={() => increaseQuantity(item)} />
        </View>
        <View style={styles.removeButton(theme)}>
          <Button title="Remove" onPress={() => removeItem(item)} />
        </View>
      </View>

      {/* <Button
        title="Add Item"
        onPress={() =>
          addItem({
            id: Math.random(),
            name: "Item 1",
            price: "$10",
            image: "https://www.bootdey.com/image/280x280/00FFFF/000000",
            quantity: 1,
          })
        }
      /> */}
    </View>
  );
};

export default Cart;
