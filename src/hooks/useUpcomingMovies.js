import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpComingMovies } from "../utils/storeSlices/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useUpComingMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  //! Doing MEMOIZATION to unnecessary API call
  const upComingMovies = useSelector((store) => store.movies.upComingMovies);

  const getUpComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );

    console.log(data);
    const json = await data?.json();

    dispatch(addUpComingMovies(json));
  };

  useEffect(() => {
    if (!upComingMovies) getUpComingMovies();
  }, []);
};

export default useUpComingMovies;
