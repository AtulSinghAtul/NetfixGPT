import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

/* 
 MovieList - Popular
  - MovieCards * n
 MovieList - Now Playing
  - MovieCards * n
 MovieList - Trending
  - MovieCards * n 
*/

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="w-full">
      <div className=" bg-black w-full">
        <div className="-mt-52 z-20 relative pl-12 w-full">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Upcoming"} movies={movies.upComingMovies} />
        </div>
      </div>
    </div>
  );
};

export default SecondaryContainer;
