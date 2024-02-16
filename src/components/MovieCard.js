import React from "react";
import { poster_path } from "../utils/constants";

const MovieCard = ({ posterIdPath }) => {
  return (
    <div className="flex mr-4">
      <img
        className="mr-40 flex hover:cursor-pointer"
        src={poster_path + posterIdPath}
        alt="poster_img"
      />
    </div>
  );
};

export default MovieCard;
