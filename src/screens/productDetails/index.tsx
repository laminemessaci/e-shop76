import { View, Image, Button, ScrollView } from "react-native";
import React, { useState } from "react";

import { useTheme } from "../../theme/ThemeProvider";

import styles from "./index.style";
import { Container, Heading, Center, Text } from "native-base";

interface Item {
  image: string,
  name: string;
  price: number;
}

/**
 * Render the product details component.
 * @returns JSX.Element
 */
const ProductDetails = ({item}: {item: Item}): JSX.Element => {
  const [product, setProduct] = useState<Item>(item);

  const theme = useTheme();

  return (
<Center>
  <Container>
    
    <ScrollView 
     contentContainerStyle = {{flex:1, alignItems:"center", padding:10, paddingTop:60,  elevation:2}}
      >
      <Image
            style={styles.image(theme)}
            source={{uri: product?.image ?
               product.image :
              "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png"}}
          />
      <Heading>Details</Heading>
      <Text fontSize={"2xl"}>FIFA 2023</Text>
      <Text fontSize={"lg"}>Price: {product.price} €</Text>
    </ScrollView>
  </Container>
  </Center>
 
  );
};

export default ProductDetails;
