import { View, Text,  Image } from "react-native";
import  EasyButton   from "../Shared/EasyButton";
import React from "react";
import { useTheme } from "../../theme/ThemeProvider";

import styles from "./index.style";

type ProductCardProps = {
  title?: string;
  price?: string;
  description?: string;
  Image?: string;
  countInStock?: number | 0 ;
  onPress?: () => void;
};

const ProductCard: React.FC<ProductCardProps> = (props: ProductCardProps): React.ReactElement => {

  const { title, price, Image, countInStock =0 } = props

   const theme = useTheme();
  return (
    <View style={styles.container(theme)}>
       <Image 
       style={styles.image(theme)} 
       source={{ uri: Image ? Image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png' }}
       resizeMode="contain"
       />
        <View style={styles.body(theme)} >
            <Text style={styles.title(theme)}>{title}</Text>
            <Text style={styles.price(theme)}>{price}</Text>

             { countInStock > 0 ? (
                <View style={{ marginBottom: 60 }}>
                    <EasyButton 
                    primary
                    medium
                    onPress={() => {
                        console.log('Add to cart pressed');
                    }}
                    >
                        <Text style={{ color: "white"}}>Add</Text>
                    </EasyButton>
                </View>
            ) : <Text style={{ marginTop: 20 }}>Currently Unavailable</Text>}

        </View>
    </View>
  )
};

export default ProductCard;
