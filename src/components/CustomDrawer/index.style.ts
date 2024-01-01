import { ViewStyle, TextStyle } from "react-native";
import type { ReactNativePaper } from "react-native-paper";

interface IStyles {
  container: (arg0: ReactNativePaper.Theme) => ViewStyle;
  item: (arg0: ReactNativePaper.Theme) => ViewStyle;
  icon: (arg0: ReactNativePaper.Theme) => ViewStyle;
  label: (arg0: ReactNativePaper.Theme) => ViewStyle;
  button: (arg0: ReactNativePaper.Theme) => ViewStyle;
  buttonLabel: (arg0: ReactNativePaper.Theme) => ViewStyle;
  buttonIcon: (arg0: ReactNativePaper.Theme) => ViewStyle;
  buttonContainer: (arg0: ReactNativePaper.Theme) => ViewStyle;
  divider: (arg0: ReactNativePaper.Theme) => ViewStyle;
  header: (arg0: ReactNativePaper.Theme) => ViewStyle;
  headerText: (arg0: ReactNativePaper.Theme) => ViewStyle;
  headerButton: (arg0: ReactNativePaper.Theme) => ViewStyle;
  headerButtonIcon: (arg0: ReactNativePaper.Theme) => ViewStyle;
  headerButtonLabel: (arg0: ReactNativePaper.Theme) => ViewStyle;
  headerButtonContainer: (arg0: ReactNativePaper.Theme) => ViewStyle;
  headerContainer: (arg0: ReactNativePaper.Theme) => ViewStyle;
  headerDivider: (arg0: ReactNativePaper.Theme) => ViewStyle;
  headerTitle: (arg0: ReactNativePaper.Theme) => ViewStyle;
  headerTitleContainer: (arg0: ReactNativePaper.Theme) => ViewStyle;
  headerTitleText: (arg0: ReactNativePaper.Theme) => ViewStyle;
  headerTitleDivider: (arg0: ReactNativePaper.Theme) => ViewStyle;
  headerTitleButton: (arg0: ReactNativePaper.Theme) => ViewStyle;
  headerTitleButtonIcon: (arg0: ReactNativePaper.Theme) => ViewStyle;
  headerTitleButtonLabel: (arg0: ReactNativePaper.Theme) => ViewStyle;
  headerTitleButtonContainer: (arg0: ReactNativePaper.Theme) => ViewStyle;
}
const styles: IStyles = {
  container: (theme) => ({
    flex: 1,
    backgroundColor: theme.colors.primary,
  }),
  item: (theme) => ({
    backgroundColor: theme.colors.primary,
  }),
  icon: (theme): TextStyle => ({
    color: theme.colors.primary,
  }),
  label: (theme): TextStyle => ({
    color: theme.colors.white,
    fontSize: 15,
    marginLeft: 5,
  }),
  // Add the missing properties here
  headerText: (theme) => ({
   
  }),
  headerButton: (theme) => ({
    // Add your implementation here
  }),
  headerButtonIcon: (theme) => ({
    // Add your implementation here
  }),
  headerButtonLabel: (theme) => ({
    // Add your implementation here
  }),
  button: function (arg0: ReactNativePaper.Theme): ViewStyle {
    throw new Error("Function not implemented.");
  },
  buttonLabel: function (arg0: ReactNativePaper.Theme): ViewStyle {
    throw new Error("Function not implemented.");
  },
  buttonIcon: function (arg0: ReactNativePaper.Theme): ViewStyle {
    throw new Error("Function not implemented.");
  },
  buttonContainer: function (arg0: ReactNativePaper.Theme): ViewStyle {
    throw new Error("Function not implemented.");
  },
  divider: function (arg0: ReactNativePaper.Theme): ViewStyle {
    throw new Error("Function not implemented.");
  },
  header: function (arg0: ReactNativePaper.Theme): ViewStyle {
    throw new Error("Function not implemented.");
  },
  headerButtonContainer: function (arg0: ReactNativePaper.Theme): ViewStyle {
    throw new Error("Function not implemented.");
  },
  headerContainer: function (arg0: ReactNativePaper.Theme): ViewStyle {
    throw new Error("Function not implemented.");
  },
  headerDivider: function (arg0: ReactNativePaper.Theme): ViewStyle {
    throw new Error("Function not implemented.");
  },
  headerTitle: function (arg0: ReactNativePaper.Theme): ViewStyle {
    throw new Error("Function not implemented.");
  },
  headerTitleContainer: function (arg0: ReactNativePaper.Theme): ViewStyle {
    throw new Error("Function not implemented.");
  },
  headerTitleText: function (arg0: ReactNativePaper.Theme): ViewStyle {
    throw new Error("Function not implemented.");
  },
  headerTitleDivider: function (arg0: ReactNativePaper.Theme): ViewStyle {
    throw new Error("Function not implemented.");
  },
  headerTitleButton: function (arg0: ReactNativePaper.Theme): ViewStyle {
    throw new Error("Function not implemented.");
  },
  headerTitleButtonIcon: function (arg0: ReactNativePaper.Theme): ViewStyle {
    throw new Error("Function not implemented.");
  },
  headerTitleButtonLabel: function (arg0: ReactNativePaper.Theme): ViewStyle {
    throw new Error("Function not implemented.");
  },
  headerTitleButtonContainer: function (
    arg0: ReactNativePaper.Theme
  ): ViewStyle {
    throw new Error("Function not implemented.");
  },
};
export default styles;
