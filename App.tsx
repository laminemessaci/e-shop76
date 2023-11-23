
import "react-native-gesture-handler";

import { NativeBaseProvider } from 'native-base';

import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import DrawerNavigation from "./src/navigation/DrawerNavigation.js";
import React from "react";
import { TranslationProvider } from "./src/locale/TranslationContext";
import Header from "./src/components/Header";





export default function App() {
  return (
    <SafeAreaProvider>
   <TranslationProvider>
      <NavigationContainer>
         <NativeBaseProvider>
          <Header />
              <DrawerNavigation />
         </NativeBaseProvider>
    
      </NavigationContainer>
    </TranslationProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
