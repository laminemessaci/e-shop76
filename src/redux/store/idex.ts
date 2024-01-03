import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../Cart/CardSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
