import { configureStore } from '@reduxjs/toolkit';
import checkboxReducer from "./actions/checkboxSlice";

export const store = configureStore({
  reducer: {
    checkbox: checkboxReducer,
  },
});
