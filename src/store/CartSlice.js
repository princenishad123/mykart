import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    removeCartItem(state, action) {
      return state.filter((e) => e.id !== action.payload);
    },
  },
});

export const { add, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;
