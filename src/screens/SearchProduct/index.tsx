
import React from "react";
import { View , Image, Text} from "react-native";

import styles from "./index.style";
import { useTheme } from "../../theme/ThemeProvider";

type SearchProductProps = {
  products: Product[];
};

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};

type Theme = {
  theme: string;
};


const SearchProduct: React.FC<SearchProductProps> = (props: SearchProductProps)  => {

  const { products } = props;


  const theme: Theme = useTheme();

  if(!products) return <Text> There is no product</Text>;

products.map((product) => {
  console.log(product)
  return (

    <View key={product.id} style={styles.container(theme)}>

      <Image
        style={styles.image(theme)}
        source={{ uri: product.image }}
      />

      <Text style={styles.name(theme)}>{product.name}</Text>
      <Text style={styles.description(theme)}>{product.description}</Text>
      <Text style={styles.price(theme)}>{product.price}</Text>

    </View>
  )

});


}

export default SearchProduct;
