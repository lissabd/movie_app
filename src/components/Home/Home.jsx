import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import {useDispatch} from 'react-redux';
import MainBanner from "../MainBanner/MainBanner.jsx";
import { fetchAsyncMovies, fetchLatestMovies } from "../../features/movies/movieSlice.js";


const Home = () => {
  const dispatch = useDispatch();
  const movieText = "One";
  useEffect(() => {
      dispatch(fetchAsyncMovies(movieText));
      dispatch(fetchLatestMovies());
  }, [dispatch])
  return (
      <>
        <MainBanner/>
        <MovieListing/>
      </>
  );
};

export default Home;
