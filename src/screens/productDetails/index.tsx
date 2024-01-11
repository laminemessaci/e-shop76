import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constants";
import { useTheme } from "../../theme/ThemeProvider";

import styles from "./index.style";

interface Item {
  image: string;
  name: string;
  price: number;
}

/**
 * Render the product details component.
 * @returns JSX.Element
 */
const ProductDetails = ({ item }: { item: Item }): JSX.Element => {
  const [product, setProduct] = useState<Item>(item);

  const theme = useTheme();
  const productImages = [
    "https://via.placeholder.com/350x150",
    "https://via.placeholder.com/350x150",
    "https://via.placeholder.com/350x150",
    "https://via.placeholder.com/350x150",
  ];

  const handleAddToCart = () => {
    // Logique pour ajouter au panier
    console.log("Produit ajouté au panier !");
  };

  return (
    <View style={styles.container(theme)}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.imageScrollView}
      >
        {productImages.map((image, index) => (
          <Image
            key={index}
            style={styles.image(theme)}
            source={{ uri: image }}
          />
        ))}
      </ScrollView>

      <Text style={styles.title(theme)}>Nom du produit</Text>
      <Text style={styles.price(theme)}>Prix : 99,99 $</Text>
      <View style={styles.quantityContainer(theme)}>
        <Text style={styles.quantity(theme)}>Quantité : 5</Text>
      </View>
      <View style={styles.removeButton(theme)}>{/* ... */}</View>
      <View style={styles.infoContainer(theme)}>
        <Text style={styles.name(theme)}>Nom du produit</Text>
      </View>
      <View style={styles.itemContainer(theme)}>{/* ... */}</View>

      {/* Bouton Ajouter au panier */}
      <TouchableOpacity
        style={styles.addToCartButton(theme)}
        onPress={handleAddToCart}
      >
        <Text style={styles.addToCartButtonText(theme)}>Ajouter au panier</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetails;
