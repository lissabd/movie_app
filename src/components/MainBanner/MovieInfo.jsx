import React from "react";
import "./MovieInfo.scss";
import IMDB_logo from "../../images/IMDbLOGO.png";


const MovieInfo = ({ title, genre, runtime, plot, rating , index, currentIndex }) => {
    return (
      <div className={index === currentIndex ? "movie-info" : "movie-info hidden"}>
        <h2>{title}</h2>
        <div className="rating">
            <h3> Rating: {rating}</h3>
            <img src={IMDB_logo} alt="Лого" />
        </div>
        <div className="genre-and-runtime-block">
            <p>{genre}   |  </p>
            <p>{runtime}</p>
        </div>
        <p>{plot}</p>
      </div>
    );
  };
  
  export default MovieInfo;