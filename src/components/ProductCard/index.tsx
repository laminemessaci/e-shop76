import { View, Text,  Image } from "react-native";

import React from "react";
import { useTheme } from "../../theme/ThemeProvider";

import styles from "./index.style";

type ProductCardProps = {
  product: {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
  };

};

const ProductCard: React.FC<ProductCardProps> = (props : ProductCardProps   ): React.ReactElement => {



  const { image, name, price, description, id } = props.product

   const theme = useTheme();
  return (
    <View style={styles.container(theme)}>

      <Image 
            style={styles.image(theme)}
            resizeMode="contain"
            source={{uri: image ? 
                image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'}}
            />

      <Text style={styles.title(theme)}>{name.length > 15 ? `${name.substring(0, 15)}...` : name}</Text>
      <Text style={styles.description(theme)}>{description.length > 15 ? `${description.substring(0, 15)}...` : description}</Text>

      <Text style={styles.price(theme)}>{props.product.price} €</Text>
     
    </View>
  )
};

export default ProductCard;
