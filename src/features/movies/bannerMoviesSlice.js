import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIkey } from "../../common/apis/MovieApiKey.js";


const movieIds = ["tt0083658", "tt4701182", "tt7286456"]; 

export const fetchAsyncSpecificMovies = createAsyncThunk(
    "movies/fetchAsyncSpecificMovies",
    async () => {
        const moviePromises = movieIds.map(async (id) => {
            const response = await movieApi.get(`?apiKey=${APIkey}&i=${id}&type=movie`);
            return response.data;
        });

        const movies = await Promise.all(moviePromises);
        return movies;
    }
);

const bannerMovieSlice = createSlice({
  name: "bannerMovies",
  initialState: {
    bannerMovies: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchAsyncSpecificMovies.fulfilled, (state, action) => {
        const flatMovies = action.payload.flat(1);
        state.bannerMovies = [...state.bannerMovies, ...flatMovies];
      });
  }
});

export default bannerMovieSlice.reducer;
export const getAllMoviesForBanner = (state) => state.bannerMovies.bannerMovies;
