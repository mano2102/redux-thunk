import { createAsyncThunk } from "@reduxjs/toolkit";
import { increment } from "./counterSlice";

export const fetchIncrementByAsync = createAsyncThunk(
  "counter/fetchIncrementByAsync",
  async (_, { dispatch }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    dispatch(increment());
  }
);
