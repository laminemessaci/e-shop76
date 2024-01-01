import { TextStyle, ViewStyle, ImageStyle } from "react-native";
import type { ReactNativePaper } from "react-native-paper";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../../constants";

interface IStyles {
  container: (theme: ReactNativePaper.Theme) => ViewStyle;
  body: (theme: ReactNativePaper.Theme) => ViewStyle;
  centered: (theme: ReactNativePaper.Theme) => ViewStyle;
  image: (theme: ReactNativePaper.Theme) => ImageStyle;
}

const styles: IStyles = {
  container: (theme) => ({
    position: "relative",
    flex: 1,
    alignItems: "center",
  }),
  image: (theme) => ({
    width: SCREEN_WIDTH ,
    height: SCREEN_HEIGHT ,
    resizeMode: "contain",
    backgroundColor: theme.colors.trans,
  }),
  body: function (theme): ViewStyle {
    throw new Error("Function not implemented.");
  },
  centered: function (theme): ViewStyle {
    throw new Error("Function not implemented.");
  },
};

export default styles;
