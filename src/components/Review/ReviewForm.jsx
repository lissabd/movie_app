import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ReviewForm.scss";
import { getSelectMovieByID } from "../../features/movies/movieSlice";
import { StarRating } from "./StarRating";
import { addReview } from "../../features/reviews/reviewSlice";


const ReviewForm = () => {
  const selectedMovieForReview = useSelector(getSelectMovieByID);
  const dispatch = useDispatch();
  const [reviewText, setReviewText] = useState("");
  const [ratings, setRatings] = useState({
    plot: null,
    actors: null,
    artDirection: null,
    visualEffects: null,
  });
 
  const handleSubmitReview = () => {
    dispatch(
      addReview(
        {
          movie: selectedMovieForReview,
          text: reviewText,
          ratings,
        } 
      )
    );
    localStorage.setItem("reviewText", reviewText);
    localStorage.setItem("ratings", JSON.stringify(ratings));
  };

  return (
    <>
      <div className="form-container">
        <div className="poster-block">
          <div className="poster">
            <img
              src={selectedMovieForReview.Poster}
              alt={selectedMovieForReview.Title}
            />
          </div>
        </div>
        <div className="review-block">
          <h1>{selectedMovieForReview.Title}</h1>
          <p>{selectedMovieForReview.Plot?.slice(0, 150)}</p>
          <div className="review-section">
            <h3>Your Review</h3>
            <textarea
              placeholder="Write your review here..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="rating-block">
          <div className="rating-section">
            <StarRating
              label="Plot"
              setRating={(rating) => setRatings({ ...ratings, plot: rating })}
            />
            <StarRating
              label="Actors"
              setRating={(rating) => setRatings({ ...ratings, actors: rating })}
            />
            <StarRating
              label="Art Direction and Costumes"
              setRating={(rating) =>
                setRatings({ ...ratings, artDirection: rating })
              }
            />
            <StarRating
              label="Visual Effects"
              setRating={(rating) =>
                setRatings({ ...ratings, visualEffects: rating })
              }
            />
            <button onClick={handleSubmitReview}>Save Review</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewForm;
