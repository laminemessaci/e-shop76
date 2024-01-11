import { combineReducers } from "@reduxjs/toolkit";
import { cartSlice } from "./Cart/CartSlice";

const rootReducer = combineReducers({
  cards: cartSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
