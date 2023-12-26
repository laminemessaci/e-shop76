
import { View, Text,FlatList , TouchableOpacity} from 'react-native'
import React from 'react'
import { Badge, ListItem } from 'react-native-elements'
import { useTheme } from '../../theme/ThemeProvider';

import styles from './index.style';


const categoriesData = [
  { id: 1, name: 'Electronics', badgeValue: 3 },
  { id: 2, name: 'Clothing', badgeValue: 5 },
  { id: 3, name: 'Books', badgeValue: 7 },
  { id: 4, name: 'Sports', badgeValue: 9 },
  { id: 5, name: 'Home', badgeValue: 11 },
  { id: 6, name: 'Beauty', badgeValue: 13 },
  
];
const CategoryFilter = () => {

    const theme = useTheme();

   
   const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
    onPress={() => console.log(item.name)}
    style={styles.item(theme)}
    >
    <ListItem 
    bottomDivider
   
    >
      <ListItem.Content  style={styles.item(theme)}>
        <ListItem.Title style={{ color: theme.colors.warning, fontWeight: 'bold' }}>{item.name}</ListItem.Title>
      </ListItem.Content>
     
    </ListItem>
      </TouchableOpacity>
  );

  return (
    <View style={styles.container(theme)}>
      <FlatList
        data={categoriesData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCategoryItem}
        contentContainerStyle = {{padding:0, margin:2, borderRadius:18, elevation:2, backgroundColor:theme.colors.white}}
        horizontal
       
      />
    </View>
  );
}

export default CategoryFilter