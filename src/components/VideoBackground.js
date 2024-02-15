import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideoKey = useSelector((store) => store.movies.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="w-screen">
      <iframe
        className="w-full aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideoKey?.key +
          "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
