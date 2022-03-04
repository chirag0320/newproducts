import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const GetData = createAsyncThunk("getdata/getdata", async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  //   console.log(data);
  const afterData = await data.json();
  //   console.log(afterData);
  return afterData;
});
export const ReducerSlice = createSlice({
  name: "counter",
  initialState: {
    products: [],
    pending: true,
    success: false,
    failed: false,
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: {
    [GetData.pending]: (state) => {
      state.pending = true;
    },
    [GetData.fulfilled]: (state, action) => {
      state.success = true;
      state.pending = false;
      state.failed = false;
      state.products = action.payload;
    },
    [GetData.rejected]: (state) => {
      state.failed = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = ReducerSlice.actions;

export default ReducerSlice.reducer;
