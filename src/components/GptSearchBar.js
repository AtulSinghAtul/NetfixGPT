import { useSelector } from "react-redux";
import languages from "../utils/languageConstant";
import openai from "../utils/openai";
import { useRef } from "react";
import { API_OPTIONS } from "../utils/constants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.lang.lang);
  const gptSearchText = useRef(null);
  console.log(gptSearchText?.current?.value);

  //* Search movie in TMDB API using GPT movie search suggestions
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );

    const json = data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    //! Make an api call to gpt api and get movie results
    const getQuery =
      "Act as a movie recomandation system and suggest some movies for the query: " +
      gptSearchText?.current?.value +
      ". only give me names of 5 movies, comma seprated like the example result given ahed. Example: Gadar, Don, Koi mil gaya, Ham Sath Sath hain, Ravan";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: getQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices);

    if (!gptResults.choices) {
      alert("your searching results not found");
    }

    // Gadar, Don, Koi mil gaya, Ham Sath Sath hain, Ravan
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    console.log(gptMovies);
    // [Gadar, Don, Koi mil gaya, Ham Sath Sath hain, Ravan]
    // For each movie I will search TMDB API

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    console.log(promiseArray); //[Promise, Promise, Promise, Promise, Promise]
    const tmdbMovieResult = await Promise.all(promiseArray);

    console.log(tmdbMovieResult);
  };

  return (
    <div
      className="flex justify-center items-center"
      onSubmit={(e) => e.preventDefault()}
    >
      <form className="bg-black w-1/2 p-3 mt-[10%] grid grid-cols-12 gap-2">
        <input
          type="text"
          placeholder={languages[langKey]?.gptPlaceholder}
          className="col-span-9 h-12 outline-none p-2 text-[18px] text-center"
        />
        <button
          className="col-span-3 text-2xl font-medium text-center bg-red-700 text-white"
          onClick={handleGptSearchClick}
        >
          {languages[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
