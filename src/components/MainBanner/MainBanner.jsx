import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncSpecificMovies } from "../../features/movies/bannerMoviesSlice";
import { getAllMoviesForBanner } from "../../features/movies/bannerMoviesSlice";
import poster2 from "../../images/poster1.jpg";
import poster3 from "../../images/poster2.jpeg";
import poster1 from "../../images/poster3.jpg";
import "./MainBanner.scss";
import MovieInfo from "./MovieInfo";


const MainBanner = () => {
  const dispatch = useDispatch();
  const bannerMovies = useSelector(getAllMoviesForBanner);
  const [slide, setSlide] = useState(0);
  const [currentMovie, setCurrentMovie] = useState(bannerMovies[0]);

  useEffect(() => {
    dispatch(fetchAsyncSpecificMovies());
  }, [dispatch]);

  useEffect(() => {
    if (bannerMovies.length > 0) {
      setCurrentMovie(bannerMovies[slide]);
    }
  }, [bannerMovies, slide]);


  const getImageByTitle = (title) => {
    if (bannerMovies.length === 0) {
      return null;
    }
    switch (title) {
      case bannerMovies[0]?.Title:
        return poster1;
      case bannerMovies[1]?.Title:
        return poster2;
      case bannerMovies[2]?.Title:
        return poster3;
      default:
        return null;
    }
  };  
  
  return (
    <>
      <div className="carousel">
        {bannerMovies.slice(0, 3).map((item, idx) => (
          <div
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          >
            <img src={getImageByTitle(item.Title)} alt={item.Title} />
            {currentMovie && slide === idx && (
              <MovieInfo
                title={currentMovie?.Title}
                genre={currentMovie?.Genre}
                runtime={currentMovie?.Runtime}
                plot={currentMovie?.Plot}
                rating={currentMovie?.imdbRating}
              />
            )}
          </div>
        ))}
        <span className="indicators">
          {bannerMovies.slice(0, 3).map((_, idx) => (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          ))}
        </span>
      </div>
    </>
  );
};

export default MainBanner;
