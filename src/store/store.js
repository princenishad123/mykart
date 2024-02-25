import { configureStore } from "@reduxjs/toolkit";

import CartSlice from "./CartSlice";
import OrderStatusSlice from "./OrderStatusSlice";
const store = configureStore({
  reducer: {
    cart: CartSlice,
    status: OrderStatusSlice,
  },
});

export default store;
