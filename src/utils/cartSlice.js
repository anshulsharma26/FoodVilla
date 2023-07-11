import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: {},
    cartTotalAmount: 0,
    cartTotalQuantity: 0,
  },
  reducers: {
    addItem: (state, action) => {
      if (state.items[action.payload.id]) {
        state.items[action.payload.id].count = ++state.items[action.payload.id]
          .quantity;
      } else {
        state.items[action.payload.id] = { ...action.payload, quantity: 1 };
      }
      state.cartTotalQuantity += 1;
    },
    removeItem: (state, action) => {
      if (state.items[action.payload.id].count > 1) {
        state.items[action.payload.id].count = --state.items[action.payload.id]
          .quantity;
      } else {
        delete state.items[action.payload.id];
      }
      state.cartTotalQuantity -= 1;
    },
    clearCart: (state) => {
      state.items = {};
      state.cartTotalQuantity = 0;
      state.cartTotalAmount = 0;
    },
    getTotalAmount: (state) => {
      const total = Object.values(state.items).reduce((cartTotal, cartItem) => {
        const { price, quantity, defaultPrice } = cartItem;
        cartTotal += quantity * (price || defaultPrice);
        return cartTotal;
      }, 0);
      state.cartTotalAmount = total;
    },
  },
});

export const { addItem, removeItem, clearCart, getTotalAmount } =
  cartSlice.actions;

export default cartSlice.reducer;
