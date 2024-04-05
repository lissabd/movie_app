import React from "react";
import "./Reviews.scss";
import { useSelector } from "react-redux";
import ReviewCard from "../../Review/ReviewCard/ReviewCard";


const Reviews = () => {
  const reviews = useSelector((state) => state.review);

  return (
    <>
      <div className="fav-mov-info">
        <h1>Your Reviews</h1>
      </div>

      <div className="reviews-container">
        {reviews.length === 0 ? (
          <div className="movies-errorr">
            <h3>No reviews found</h3>
          </div>
        ) : (
          reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))
        )}
      </div>
    </>
  );
};

export default Reviews;
