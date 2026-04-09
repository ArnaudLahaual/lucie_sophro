import { configureStore, createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
  name: "test",
  initialState: {},
  reducers: {},
});
export const store = configureStore({
  reducer: {
    test: testSlice.reducer,
  },
});
