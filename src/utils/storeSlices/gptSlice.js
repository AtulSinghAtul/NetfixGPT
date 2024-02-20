import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSearch",
  initialState: {
    toggleGptSearchView: false,
    moviesName: null,
    moviesResult: null,
  },
  reducers: {
    toggleGptSearch: (state, action) => {
      state.toggleGptSearchView = !state.toggleGptSearchView;
    },
    addGptMovieResult: (state, action) => {
      const { movieName, movieResults } = action.payload;
      state.moviesName = movieName;
      state.moviesResult = movieResults;
    },
  },
});

export const { toggleGptSearch, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
