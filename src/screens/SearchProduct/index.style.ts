import { ViewStyle, TextStyle } from "react-native";
import type { ReactNativePaper } from "react-native-paper";

export interface IStyles {
  name: (theme: ReactNativePaper.Theme) => TextStyle;
  container: (theme: ReactNativePaper.Theme) => ViewStyle;
  title: (theme: ReactNativePaper.Theme) => TextStyle;
  description: (theme: ReactNativePaper.Theme) => TextStyle;
  price: (theme: ReactNativePaper.Theme) => TextStyle;
  image: (theme: ReactNativePaper.Theme) => ViewStyle;
  
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
  price: (theme : ReactNativePaper.Theme) => ({
    fontSize: 15,
    color: theme.colors.primary,
  }),
  image: (theme: ReactNativePaper.Theme) => ({
    width: 100,
    height: 100,
  }),

  
};
export default styles;
