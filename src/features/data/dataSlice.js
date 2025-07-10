import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addData: (state, action) => {
      // const news = action.payload.filter(
      //   char => !state.some(existing => existing.id === char.id)
      // );
      // state.push(...news);
      state.length = 0;             // Limpia el array
      state.push(...action.payload); // Agrega nueva página
    }
  }
});

export const { addData } = dataSlice.actions;

export default dataSlice.reducer;