import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [
    {
      id: 1,
      product: {
        id: 1,
        name: "Produit 1",
        image: "https://via.placeholder.com/150",
        price: 9.99,
      },
      quantity: 2,
    },
    {
      id: 2,
      product: {
        id: 2,
        name: "Produit 2",
        image: "https://via.placeholder.com/150",
        price: 19.99,
      },
      quantity: 1,
    },
    {
      id: 3,
      product: {
        id: 3,
        name: "Produit 3",
        image: "https://via.placeholder.com/150",
        price: 29.99,
      },
      quantity: 3,
    },
  ],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }

      //  localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeFromCart: (state, action) => {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.cartItems = nextCartItems;
      // localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    decreaseCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        state.cartItems = nextCartItems;
      } else {
        return;
      }
    },

    clearCart: (state, action) => {
      state.cartItems = [];
      // localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart, removeFromCart, decreaseCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
