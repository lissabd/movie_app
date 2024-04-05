import React from "react";
import { useSelector } from "react-redux";
import { getMoviesWatchLater } from "../../../features/movies/movieSlice";
import MovieCard from "../../MovieCard/MovieCard";
import "./Favourites.scss";


const WatchLater = () => {
  const watchLaterMovies = useSelector(getMoviesWatchLater);
  let renderLaterMovies = "";
  if (watchLaterMovies.length > 0) {
    renderLaterMovies = watchLaterMovies.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ));
  } else {
    renderLaterMovies = (
      <div className="movies-error">
        <h3>No movies to watch later</h3>
      </div>
    );
  }

  return (
    <>
      <div className="user-latter-movies-container">
        <div className="latter-mov-info">
          <h1>Films for the future</h1>
        </div>
        <div className="latter-movies">{renderLaterMovies}</div>
      </div>
    </>
  );
};

export default WatchLater;
