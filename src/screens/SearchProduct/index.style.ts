import { ViewStyle } from "react-native";
import type { ReactNativePaper } from "react-native-paper";

export interface IStyles {
  name(theme: {
    colors: any; theme: string; 
}): import("react-native").StyleProp<import("react-native").TextStyle>;
  title(theme: {
    colors: any; theme: string; 
}): import("react-native").StyleProp<import("react-native").TextStyle>;
  description(theme: {
    colors: any; theme: string; 
}): import("react-native").StyleProp<import("react-native").TextStyle>;
  price(theme: {
    colors: any; theme: string; 
}): import("react-native").StyleProp<import("react-native").TextStyle>;
  image(theme: { theme: string; }): import("react-native").StyleProp<import("react-native").ImageStyle>;
  container: (theme: ReactNativePaper.Theme) => ViewStyle;
}

const styles: IStyles = {
  container: (theme) => ({
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.white,
  }),
  name: (theme) => ({
    fontSize: 20,
    color: theme.colors.primary,
  }),
  title: (theme) => ({
    fontSize: 20,
    color: theme.colors.primary,
  }),
  description: (theme) => ({
    fontSize: 15,
    color: theme.colors.primary,
  }),
  price: (theme) => ({
    fontSize: 15,
    color: theme.colors.primary,
  }),
  image: (theme) => ({
    width: 100,
    height: 100,
  }),

  
};
export default styles;
