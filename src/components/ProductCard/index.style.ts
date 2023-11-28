import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import type { ReactNativePaper } from "react-native-paper";
import { SCREEN_WIDTH } from "../../constants";
import { ITheme } from "../../types/themes";

interface IStyles {
  description(theme: ITheme): import("react-native").StyleProp<TextStyle>;
  container: (arg0: ReactNativePaper.Theme) => ViewStyle;
  body: (arg0: ReactNativePaper.Theme) => ViewStyle;
  centered: (arg0: ReactNativePaper.Theme) => ViewStyle;
  image: (arg0: ReactNativePaper.Theme) => ImageStyle;
  title: (arg0: ReactNativePaper.Theme) => TextStyle;
  price: (arg0: ReactNativePaper.Theme) => TextStyle;
}

const styles: IStyles = {
  container: (theme) => ({
    width: SCREEN_WIDTH / 2 - 20,
    height: SCREEN_WIDTH / 1.7,
    padding: 10,
    borderRadius: 10,
    marginTop: 55,
    marginBottom: 5,
    marginLeft: 10,
    alignItems: "center",
    elevation: 8,
    backgroundColor: theme.colors.white,
  }),
  centered: (theme) => ({
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.white,
  }),
  body: (theme) => ({
    marginTop: 10,
    alignItems: "center",
    backgroundColor: theme.colors.white,
  }),
  image: (theme) => ({
    width: SCREEN_WIDTH / 2 - 20 - 15,
    height: SCREEN_WIDTH / 2 - 20 - 35,
    resizeMode: "contain",
    backgroundColor: theme.colors.trans,
    top: -55,
  }),
  title: (theme) => ({
    fontFamily: "Montserrat",
    fontSize: 15,
    fontWeight: "bold",
    color: theme.colors.primary,
  }),

  description: (theme) => ({
    fontSize: 11,
    fontWeight: "bold",
    color: theme.colors.primaryDark,
  }),
  price: (theme) => ({
    fontSize: 16,
    fontWeight: "bold",
    color: theme.colors.warning,
    fontFamily: "Montserrat",
  }),
};

export default styles;
