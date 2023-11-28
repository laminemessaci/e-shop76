import React, { useState } from "react";
import { SearchBar } from 'react-native-elements';

import styles from "./index.style"
import { useTheme } from "../../theme/ThemeProvider";
import { text } from "express";

type CustomSearchBarProps = {
  openList: () => void;
  onBlur: () => void;
  handleSearch: (text: string) => void;

};

const CustomSearchBar: React.FC<CustomSearchBarProps> = ({ openList, onBlur , handleSearch}) => {

 

  const theme = useTheme();



  return (
    <SearchBar
      placeholder="Search"
      lightTheme={true}     
      onChangeText={(text) => handleSearch}
   
      onClear={() => handleSearch("")}
      containerStyle={styles.container(theme)}
      inputContainerStyle={styles.inputContainer(theme)}
      inputStyle={styles.input(theme)}
      onFocus={openList}
      onBlur={onBlur}
    />
  );
};

export default CustomSearchBar;
