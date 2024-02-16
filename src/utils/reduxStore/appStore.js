import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../storeSlices/userSlice";
import movieReducer from "../storeSlices/moviesSlice";
import gptReducer from "../storeSlices/gptSlice";
import langReducer from "../storeSlices/configSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gpt: gptReducer,
    lang: langReducer,
  },
});

export default store;
