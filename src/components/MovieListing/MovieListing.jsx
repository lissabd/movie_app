import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {fetchAsyncMovies, getAllMovies, getLatestMovies} from "../../features/movies/movieSlice.js";
import MovieCard from "../MovieCard/MovieCard.jsx";
import { settings } from "./settings.js";
import Slider from "react-slick";
import "./MovieListing.scss";


const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const lastMovies = useSelector(getLatestMovies);
  const searchTerm = useSelector((state) => state.search);
  const dispatch = useDispatch();
  let renderMovies = "";
  let renderLastMovies = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

    renderLastMovies =
    lastMovies.Response === "True" ? (
      lastMovies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{lastMovies.Error}</h3>
      </div>
    );

  useEffect(() => {
    if (searchTerm) {
      dispatch(fetchAsyncMovies(searchTerm));
    }
  }, [dispatch, searchTerm]);

  return (
    <>
      <div className="movie-wrapper">
        <div className="movie-list">
          <h1>Specials & Latest Movies</h1>
          <div className="movie-container">
             <Slider {...settings}>{renderLastMovies}</Slider>
          </div>
          <h2>Movies</h2>
          <div className="movie-container">
            <Slider {...settings}>{renderMovies}</Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieListing;
