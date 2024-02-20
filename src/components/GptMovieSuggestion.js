import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const GptMovieSuggestion = () => {
  const { moviesName, moviesResult } = useSelector((store) => store.gpt);

  return (
    <div>
      {moviesName.map((moviesName, index) => (
        <MovieList
          key={moviesName}
          title={moviesName}
          movies={moviesResult[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestion;
