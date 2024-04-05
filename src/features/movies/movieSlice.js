import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIkey } from "../../common/apis/MovieApiKey.js";


export const fetchAsyncMovieDetailByID = createAsyncThunk(
  "movies/fetchAsyncMovieDetailByID",
  async ( id ) => {
    const response = await movieApi.get(
      `?apiKey=${APIkey}&i=${id}&Plot=full&type=movie`
    );
    return response.data;
  },
  {
    serializableCheck: false
  }
);


export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async ( term ) => {
    const response = await movieApi.get(
      `?apiKey=${APIkey}&s=${term}&type=movie`
    );
    return response.data;
  },
  {
    serializableCheck: false
  }
);


export const fetchLatestMovies = createAsyncThunk(
  "movies/fetchLatestMovies",
  async () => {
    const response = await movieApi.get(
      `?apiKey=${APIkey}&type=movie&y=2024&s={part}&page=1`
    );
    return response.data;
  },
  {
    serializableCheck: false
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: {},
    selectMovie: {},
    lastMovies: {},
    favouriteMovies: [],
    watchLaterMovies: [],
  },
  reducers: {
    setSelectedmovie: (state, {payload}) => {
        state.selectMovie = payload;
    },
    removeSelectedMovie: (state) => {
      state.selectMovieOrShow = {};
    },
    addFavouriteMovie: (state, {payload}) => {
      state.favouriteMovies.push(payload);
    },
    addToWatchLater: (state, {payload}) => {
      state.watchLaterMovies.push(payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
        state.movies = payload;
      })
      
      .addCase(fetchAsyncMovieDetailByID.fulfilled, (state, {payload}) => {
        state.selectMovie = payload;
      })
      .addCase(fetchLatestMovies.fulfilled, (state, { payload }) => {
        state.lastMovies = payload;
      })
      
  },
});

export const { removeSelectedMovie} = movieSlice.actions;
export const { addFavouriteMovie } = movieSlice.actions;
export const {addToWatchLater} = movieSlice.actions
export const {setSelectedmovie} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getSelectMovieByID = (state) => state.movies.selectMovie;
export const getLatestMovies = (state) => state.movies.lastMovies;
export const getFavouriteMovies = (state) => state.movies.favouriteMovies;
export const getMoviesWatchLater = (state) => state.movies.watchLaterMovies;
export default movieSlice.reducer;
