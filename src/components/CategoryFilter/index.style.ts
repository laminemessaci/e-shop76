import { ViewStyle, TextStyle } from "react-native";
import type { ReactNativePaper } from "react-native-paper";
import { FontFamily } from "../../types/themes";

export interface IStyles {
  item: (arg0: ReactNativePaper.Theme) => ViewStyle;
  container: (arg0: ReactNativePaper.Theme) => ViewStyle;
  name: (arg0: ReactNativePaper.Theme) => TextStyle;
}

const styles: IStyles = {
  container: (theme) => ({
    flexDirection: "row",
    marginVertical: 0,
    alignItems: "center",
    justifyContent: "space-between",
  }),

  item: (theme) => ({
    borderRadius: 10,
    padding: 0,
    paddingHorizontal: 0,
    margin: 0,
  }),
  name: (theme) => ({
    color: theme.colors.white,
    fontWeight: "bold",
  }),
};

export default styles;
