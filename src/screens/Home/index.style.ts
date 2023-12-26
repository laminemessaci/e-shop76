import { TextStyle, ViewStyle } from "react-native";
import type  { ReactNativePaper }  from "react-native-paper";

interface IStyles {
  container: (arg0: ReactNativePaper.Theme) => ViewStyle;
  centered: (arg0: ReactNativePaper.Theme) => ViewStyle;

  searchBarContainer: (arg0: ReactNativePaper.Theme) => ViewStyle;
  inputContainer: (arg0: ReactNativePaper.Theme) => ViewStyle;
  input: (arg0: ReactNativePaper.Theme) => TextStyle;
}

const styles: IStyles = {
  container: (theme) => ({
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.white,
  }),
  centered: (theme) => ({
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.white,
  }),

  searchBarContainer: (theme) => ({
    marginLeft: 40,
    backgroundColor: theme.colors.white,
  }),
  inputContainer: (theme) => ({
    backgroundColor: theme.colors.lightGrey,
    height: 30,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
   
  }),

  input: (theme) => ({
    fontSize: theme.fonts.body2.fontSize,
    flex: 1,
    marginHorizontal: 10,
  }),
};

export default styles;
