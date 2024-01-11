import { View, Text, Image, Button } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

import { useTheme } from "../../theme/ThemeProvider";

import styles from "./index.styles";
import { AntDesign } from "@expo/vector-icons";

interface IProduct {
  id: number;
  name: string;
  image: string;
  price: number;
}

const Cart: React.FC<IProduct> = (props: IProduct): React.ReactElement => {
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

  function onRemovePress(id: string): void {}

  return (
    <View style={styles.container(theme)}>
     
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
          <Button title="+" onPress={() => console.log(item)} />
        </View>
        <View style={styles.removeButton(theme)}>
          {/* <Ic title="Remove" onPress={() => console.log(item)} /> */}
          <AntDesign name="delete" size={24} color="red" />
        </View>
      </View>
    </View>
  );
};

export default Cart;
