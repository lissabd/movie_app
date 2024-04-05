import {configureStore} from '@reduxjs/toolkit';
import moviesReducer from "./movies/movieSlice";
import bannerMovieReducer from "./movies/bannerMoviesSlice";
import searchReducer from "./search-bar/searchSlice";
import userReducer from "./users/userSlice";
import reviewReducer from "./reviews/reviewSlice";


export const store = configureStore({
    reducer: {
        movies: moviesReducer, 
        bannerMovies: bannerMovieReducer,
        search: searchReducer,
        user: userReducer,
        review:  reviewReducer,
    }
})