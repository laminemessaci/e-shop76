import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import type { ReactNativePaper } from "react-native-paper";
import { SCREEN_WIDTH } from "../../constants";

interface IStyles {
  container: (arg0: ReactNativePaper.Theme) => ViewStyle;
  image: (arg0: ReactNativePaper.Theme) => ImageStyle;
  title: (arg0: ReactNativePaper.Theme) => TextStyle;
}

const styles: IStyles = {
  container: (theme: ReactNativePaper.Theme) => ({
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    width: SCREEN_WIDTH,
    backgroundColor: theme.colors.secondary,
  }),
  image: (theme) => ({
    width: 50,
    height: 50,
    resizeMode: "contain",
    backgroundColor: theme.colors.trans,
  }),
  title: (theme) => ({
    color: theme.colors.white,
    fontSize: 20,
    fontWeight: "bold",
  }),
};

export default styles;
