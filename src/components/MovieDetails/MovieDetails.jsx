import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncMovieDetailByID, setSelectedmovie } from "../../features/movies/movieSlice";
import { getSelectMovieByID } from "../../features/movies/movieSlice";
import { removeSelectedMovie } from "../../features/movies/movieSlice";
import { addFavouriteMovie } from "../../features/movies/movieSlice";
import { addToWatchLater } from "../../features/movies/movieSlice";
import { getFavouriteMovies } from "../../features/movies/movieSlice";
import { getMoviesWatchLater } from "../../features/movies/movieSlice";
import "./MovieDetails.scss";


const MovieDetails = () => {
  const userFavouriteMovies = useSelector(getFavouriteMovies);
  const userMoviesToWatchLater =useSelector(getMoviesWatchLater);
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const dataMovie = useSelector(getSelectMovieByID);
  const [isAddedToFavourites, setIsAddedToFavourites] = useState(false);
  const [isAddedToWatchLater, setIsAddedToWatchLater] = useState(false);

  useEffect(() => {
    dispatch(fetchAsyncMovieDetailByID(imdbID));
    return () => {
      dispatch(removeSelectedMovie());
    };
  }, [dispatch, imdbID]);
  // imdbID тоже тк нужно чтобы при смене айди мы получали актуальные для выбранного айди детали фильма

  const handleAddToFavourites = () => {
    const isMovieInFavourites = userFavouriteMovies.some(movie => movie.imdbID === dataMovie.imdbID);
    if (!isMovieInFavourites){
      dispatch(addFavouriteMovie(dataMovie));
      setIsAddedToFavourites(true);
    }
  };

  const handleAddToWatchLaterMovie = () => {
    const isMovieInWatchLater = userMoviesToWatchLater.some(movie => movie.imdbID === dataMovie.imdbID);
    if (!isMovieInWatchLater) {
      dispatch(addToWatchLater(dataMovie));
      setIsAddedToWatchLater(true);
    }
  }

  const handleNavigateToForm = () => { 
    dispatch(setSelectedmovie(dataMovie))
  }

  return (
    <>
      <div className="movie-section">
        <div className="section-left">
          <div className="movie-title">
            {dataMovie.Title}
          </div>
          <div className="movie-rating">
            <span>
              IMDB Rating <i className="fa fa-star"></i> :{" "}
              {dataMovie.imdbRating}
            </span>
            <span>
              IMDB Votes <i className="fa fa-thumbs-up"></i> :{" "}
              {dataMovie.imdbVotes}
            </span>
            <span>
              Runtime <i className="fa fa-film"></i> : {dataMovie.Runtime}
            </span>
            <span>
              Year <i className="fa fa-calendar"></i> : {dataMovie.Year}
            </span>
          </div>
          <div className="movie-plot">{dataMovie.Plot}</div>
          <div className="movie-information">
            <div className="item-info-about-movie">
              <span>Director : </span>
              <span>{dataMovie.Director}</span>
            </div>
            <div className="item-info-about-movie">
              <span>Stars : </span>
              <span>{dataMovie.Actors}</span>
            </div>
            <div className="item-info-about-movie">
              <span>Generes : </span>
              <span>{dataMovie.Genre}</span>
            </div>
            <div className="item-info-about-movie">
              <span>Languages : </span>
              <span>{dataMovie.Language}</span>
            </div>
            <div className="item-info-about-movie">
              <span>Awards : </span>
              <span>{dataMovie.Awards}</span>
            </div>
          </div>
          <div className="buttons-to-add">
            <button onClick={handleAddToFavourites} className="but-item"> Add To List </button>
            <Link to={`/reviewForm/${dataMovie.imdbID}`}><button onClick={handleNavigateToForm} className="but-item">Write a review</button></Link>
            <button onClick={handleAddToWatchLaterMovie} className="but-item">Watch it later</button>
          </div>
        </div>
        <div className="section-right">
          <img src={dataMovie.Poster} alt={dataMovie.Title} />
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
