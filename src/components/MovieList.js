import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <>
      <div className=" px-4">
        <h1 className="text-xl font-medium py-4 text-white">{title}</h1>
        <div className="flex scroll-bar overflow-x-scroll  w-full  ">
          {movies?.results?.map((movie) => (
            <MovieCard key={movie.id} posterIdPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieList;
