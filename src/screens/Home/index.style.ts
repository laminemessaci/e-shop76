import { ViewStyle } from "react-native";
import type { ReactNativePaper } from "react-native-paper";

interface IStyles {
  container: (arg0: ReactNativePaper.Theme) => ViewStyle;
  centered: (arg0: ReactNativePaper.Theme) => ViewStyle;
  switchContainer: (arg0: ReactNativePaper.Theme) => ViewStyle;
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

  switchContainer: (theme) => ({
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginTop: 32,
    marginBottom: 16,
    marginRight: 12,
    marginLeft: 32,
  }),
};

export default styles;
