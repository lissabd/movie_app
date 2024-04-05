import React from "react";
import { useSelector } from "react-redux";
import { getFavouriteMovies } from "../../../features/movies/movieSlice";
import MovieCard from "../../MovieCard/MovieCard";
import "./Favourites.scss";


const Favourites = () => {
  const userFavouriteMovies = useSelector(getFavouriteMovies);
  let renderFavMovies = "";
  
  if (userFavouriteMovies.length > 0) {
    renderFavMovies = userFavouriteMovies.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ));
  } else {
    renderFavMovies = (
      <div className="movies-error">
        <h3>No favourite movies found</h3>
      </div>
    );
  }

  return (
    <>
      <div className="user-fav-movies-container">
        <div className="fav-mov-info">
          <h1>Your Favourite Movies</h1>
        </div>
        <div className="fav-movies">{renderFavMovies}</div>
      </div>
    </>
  );
};

export default Favourites;
