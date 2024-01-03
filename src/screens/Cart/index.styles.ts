import { ViewStyle, ImageStyle, TextStyle } from "react-native";
import type { ReactNativePaper } from "react-native-paper";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constants";

export interface IStyles {
  container: (theme: ReactNativePaper.Theme) => ViewStyle;
  image: (theme: ReactNativePaper.Theme) => ImageStyle;
  title: (theme: ReactNativePaper.Theme) => TextStyle;
  price: (theme: ReactNativePaper.Theme) => TextStyle;

  quantityContainer: (theme: ReactNativePaper.Theme) => ViewStyle;
  quantity: (theme: ReactNativePaper.Theme) => TextStyle;
  removeButton: (theme: ReactNativePaper.Theme) => ViewStyle;
  infoContainer: (theme: ReactNativePaper.Theme) => ViewStyle;
  name: (theme: ReactNativePaper.Theme) => TextStyle;
  itemContainer: (theme: ReactNativePaper.Theme) => ViewStyle;
}

const styles: IStyles = {
  container: (theme) => ({
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 8,
  }),
  image: (theme) => ({ width: 50, height: 50, borderRadius: 25 }),
  title: (theme) => ({ fontSize: 24, marginBottom: 20 }),
  price: (theme) => ({ fontSize: 16, color: "#888" }),
  quantityContainer: (theme) => ({
    flexDirection: "row",
    alignItems: "center",
  }),
  quantity: (theme) => ({ marginRight: 10 }),
  removeButton: (theme) => ({
    alignItems: "center",
  }),
  infoContainer: (theme) => ({
    marginLeft: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  }),
  name: (theme) => ({
    fontSize: 16,
    fontFamily: "Montserrat",
    color: theme.colors.primary,
    fontWeight: "bold",
  }),
  itemContainer: (theme) => ({
    flexDirection: "row",
    backgroundColor: theme.colors.white,
    alignItems: "center",
    padding: 10,
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginBottom: 10,
    borderRadius: 5,
    width: SCREEN_WIDTH - 20,
    height: SCREEN_HEIGHT / 10,
  }),
};

export default styles;
