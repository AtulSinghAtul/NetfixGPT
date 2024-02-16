import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

/**
 *
 * Main Container
 * - Video Background
 * - Video Title
 * Secondary Container
 * - MovieList * n
 * - - cards * n
 */
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();

  const toggleSearchGpt = useSelector((store) => store.gpt.toggleGptSearchView);

  return (
    <div className="font-bold text-2xl w-screen h-fit">
      <Header />
      {toggleSearchGpt ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
