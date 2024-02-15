import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../storeSlices/userSlice";
import movieReducer from "../storeSlices/moviesSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
  },
});

export default store;
