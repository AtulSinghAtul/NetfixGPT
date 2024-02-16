import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSearch",
  initialState: {
    toggleGptSearchView: false,
  },
  reducers: {
    toggleGptSearch: (state, action) => {
      state.toggleGptSearchView = !state.toggleGptSearchView;
    },
  },
});

export const { toggleGptSearch } = gptSlice.actions;
export default gptSlice.reducer;
