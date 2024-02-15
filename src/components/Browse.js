import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
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

  return (
    <div className="font-bold text-2xl">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
