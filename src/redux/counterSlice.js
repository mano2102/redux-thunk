import { createSlice } from "@reduxjs/toolkit";
import { fetchIncrementByAsync } from "./counterThunk";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
    // extraReducers: (builder) => {
    //   builder
    //     .addCase(fetchIncrementByAsync.pending, (state) => {
    //       console.log(state.value);
    //       console.log("pending");
    //     })
    //     .addCase(fetchIncrementByAsync.fulfilled, (state) => {
    //       //   state.value += 5;
    //       console.log("fullfilled");
    //     });
    // },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
