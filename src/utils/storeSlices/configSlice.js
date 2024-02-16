import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: null,
  },
  reducers: {
    changeSearchLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changeSearchLanguage } = configSlice.actions;
export default configSlice.reducer;
