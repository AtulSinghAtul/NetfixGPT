import React from "react";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import { BACKGROUND_IMG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="flex flex-col">
      <div className="absolute -z-50">
        <img
          src={BACKGROUND_IMG}
          alt="background-img"
          className="w-full min-h-screen "
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
