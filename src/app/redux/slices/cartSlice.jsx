// import { createSlice } from "@reduxjs/toolkit";

// const initialState = { cartItems: [], itemsPrice: 0, totalPrice: 0 };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const item = action.payload;
//       const existingItem = state.cartItems.find((p) => p.id === item.id);
//       if (existingItem) {
//         state.cartItems = state.cartItems.map((p) =>
//           p.id === existingItem.id ? { ...p, qty: p.qty + 1 } : p
//         );
//       } else {
//         state.cartItems = [...state.cartItems, { ...item, qty: 1 }];
//       }
//       state.itemsPrice = state.cartItems.reduce(
//         (acc, cur) => acc + cur.price * cur.qty,
//         0
//       );
//       state.totalPrice = state.itemsPrice;
//     },
//     removeFromCart: (state, action) => {
//       state.cartItems = state.cartItems.filter((p) => p.id !== action.payload);
//       state.itemsPrice = state.cartItems.reduce(
//         (acc, cur) => acc + cur.price * cur.qty,
//         0
//       );
//       state.totalPrice = state.itemsPrice;
//     },
//   },
// });

// export const { addToCart, removeFromCart } = cartSlice.actions;
// export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartItems: [], itemsPrice: 0, totalPrice: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // addToCart: (state, action) => {
    //   const item = action.payload;
    //   const existingItem = state.cartItems.find((p) => p.id === item.id);
    //   if (existingItem) {
    //     state.cartItems = state.cartItems.map((p) =>
    //       p.id === existingItem.id ? { ...p, qty: p.qty + 1 } : p
    //     );
    //   } else {
    //     state.cartItems = [...state.cartItems, { ...item, qty: 1 }];
    //   }
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((x) => x.id === item.id);
      if (existingItem) {
        existingItem.qty += item.qty;
      } else {
        state.cartItems.push(item);
      }
      state.itemsPrice = state.cartItems.reduce(
        (acc, cur) => acc + cur.price * cur.qty,
        0
      );
      state.totalPrice = state.itemsPrice;
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((p) => p.id !== action.payload);
      state.itemsPrice = state.cartItems.reduce(
        (acc, cur) => acc + cur.price * cur.qty,
        0
      );
      state.totalPrice = state.itemsPrice;
    },
    increment: (state, action) => {
      const item = state.cartItems.find((p) => p.id === action.payload);
      if (item) {
        item.qty++;
        state.itemsPrice = state.cartItems.reduce(
          (acc, cur) => acc + cur.price * cur.qty,
          0
        );
        state.totalPrice = state.itemsPrice;
      }
    },
    decrement: (state, action) => {
      const item = state.cartItems.find((p) => p.id === action.payload);
      if (item && item.qty > 0) {
        item.qty--;
        state.itemsPrice = state.cartItems.reduce(
          (acc, cur) => acc + cur.price * cur.qty,
          0
        );
        state.totalPrice = state.itemsPrice;
      }
    },
  },
});

export const { addToCart, removeFromCart, increment, decrement } =
  cartSlice.actions;
export default cartSlice.reducer;
