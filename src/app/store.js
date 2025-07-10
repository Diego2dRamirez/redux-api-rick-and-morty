import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/data/dataSlice"
import pageReducer from "../features/page/pageSlice"

export const store = configureStore({
  reducer: {
    data: dataReducer,
    page: pageReducer,
  },
})