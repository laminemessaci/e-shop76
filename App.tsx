
import "react-native-gesture-handler";

import * as SplashScreen from 'expo-splash-screen';
import { NativeBaseProvider } from 'native-base';

import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Header from "./src/components/Header";
import { TranslationProvider } from "./src/locale/TranslationContext";
import DrawerNavigation from "./src/navigation/DrawerNavigation.js";

import { store } from "./src/redux/store/idex";
import { Provider } from "react-redux";



export default function App() {

    const [fontsLoaded] = useFonts({
     Montserrat: require("./assets/fonts/Montserrat-Light.ttf"),
  });

   const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);



  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
   <TranslationProvider>
      <NavigationContainer>
          <Provider store={store}>
         <NativeBaseProvider>
      
          <Header />
              <DrawerNavigation />
         </NativeBaseProvider>

       </Provider>
    
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
