import { ViewStyle, TextStyle } from "react-native";
import type { ReactNativePaper } from "react-native-paper";
import { ITheme } from "../../types/themes";

interface IStyles {
  inputContainer: (theme: ITheme) => ViewStyle;

  container: (theme: ReactNativePaper.Theme) => ViewStyle;
  input: (theme: ReactNativePaper.Theme) => TextStyle;

  [key: string]: any;
}

const styles: IStyles = {
  container: (theme: ReactNativePaper.Theme) => ({
    backgroundColor: theme.colors.white,
  }),

  inputContainer: (theme: ITheme) => ({
    backgroundColor: theme.colors.lightGrey,
    height: 30,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  }),

  input: (theme: ITheme) => ({
    fontSize: theme.fonts.body2.fontSize,

    flex: 1,
    marginHorizontal: 10,
  }),
};

export default styles;
