import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import services from "../firebase/service";
const initialState = [];

const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    changeStatus(state, action) {
      services
        .updateOrderStatus(action.payload)
        .then((result) => {
          toast.success(result);
        })
        .catch((err) => {
          console.log(err);
        });
      // console.log(action.payload);
    },
  },
});
export const { changeStatus } = statusSlice.actions;
export default statusSlice.reducer;
