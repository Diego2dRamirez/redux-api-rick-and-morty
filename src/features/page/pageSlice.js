import { createSlice } from "@reduxjs/toolkit";

const initialState = 1

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    nextPage: (state) => {
      return state += 1;
    },
    prevPage: (state) => {
      return state -= 1;
    }
  }
});

export const { nextPage, prevPage } = pageSlice.actions;
export default pageSlice.reducer;