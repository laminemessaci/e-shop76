import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import type { ReactNativePaper } from "react-native-paper";
import { SCREEN_WIDTH } from "../../constants";

interface IStyles {
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
    width: SCREEN_WIDTH / 2 - 20 - 10,
    height: SCREEN_WIDTH / 2 - 20 - 30,
    resizeMode: "contain",
    backgroundColor: theme.colors.trans,
    top: -55,
  }),
  title: (theme) => ({
    fontSize: 15,
    fontWeight: "bold",
    color: theme.colors.primary,
  }),
  price: (theme: { colors: { trans: any } }) => ({
    fontSize: 15,
    fontWeight: "bold",
    color: theme.colors.trans,
  }),
};

export default styles;
