import React from "react";
import "./ReviewCard.scss";

const ReviewCard = ({ review }) => {
  const calculateOvetallRating = (ratings) => {
      const totalRating = Object.values(ratings).reduce((total, ratings) => total + ratings, 0);
      return totalRating / Object.keys(ratings).length;
  }
  return (
    <>
      <div className="review-card">
        <div className="poster">
          <img src={review.movie.Poster} alt={review.Title} />
        </div>
        <div className="review-details">
          <h3>{review.movie.Title}</h3>
          <h4>
            Your overall rating : {calculateOvetallRating(review.ratings)}
          </h4>
          <div className="ratings">
            <p>Plot: {review.ratings.plot}</p>
            <p>Actors: {review.ratings.actors}</p>
            <p>Art Direction: {review.ratings.artDirection}</p>
            <p>Visual Effects: {review.ratings.visualEffects}</p>
          </div>
          <p className="review-text">{review.text}</p>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
