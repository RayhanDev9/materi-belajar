import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],

  // cart: [
  //   {
  //     pizzaId: 12,
  //     name: 'lorem',
  //     quantity: 12,
  //     unitPrice: 12,
  //     totalPrice: 12,
  //   },
  // ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      // payload newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

const selectCartItem = (state) => state.cart.cart;

export const getTotalCartQuantity = createSelector(selectCartItem, (cartItem) =>
  cartItem.reduce((acc, item) => acc + item.quantity, 0)
);
export const getTotalCartPrice = createSelector(selectCartItem, (cartItem) =>
  cartItem.reduce((acc, item) => acc + item.totalPrice, 0)
);

export const getCart = (state) => state.cart.cart;

export const getCurrentQuantityById = (id) => (state) => {
  const cartItems = state.cart.cart;

  return cartItems.find((item) => item.pizzaId === id)?.quantity ?? 0;
};

export default cartSlice.reducer;
