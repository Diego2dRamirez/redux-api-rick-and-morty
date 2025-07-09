import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addData: (state, action) => {
      state = action.payload
    }
  }
});

export const { addData} = dataSlice.actions;

export default dataSlice.reducer;