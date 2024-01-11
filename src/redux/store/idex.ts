import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../RootReducers";

export const store = configureStore({
  reducer: {
    cart: rootReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
