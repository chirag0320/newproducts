import { configureStore } from "@reduxjs/toolkit";
import reducerSlice from "./ReducerSlice";
export const store = configureStore({
  reducer: { reducerSlice },
});
