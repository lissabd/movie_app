import React, { useState } from "react";
import "./StarRating.scss";
import { FaStar } from "react-icons/fa";


export const StarRating = ({label, setRating}) => {
  const [hover, setHover] = useState(null);
  const [rating, setLocalRating] = useState(null);

  const handleRatingClick = (currentRating) => {
    setRating(currentRating);
    setLocalRating(currentRating);
  };

  return (
    <div className="star-rating-item">
        <div className="rating-label">{label}</div>
        {[...Array(5)].map((star, index) => {
            const currentRating = index + 1;
            return (
              <label key={index}>
                  <input 
                      type="radio" 
                      name="rating" 
                      value={currentRating}
                      onClick={() => handleRatingClick(currentRating)}
                  />
                  <FaStar 
                      size={25} 
                      className="star"
                      color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                      onMouseEnter={() => setHover(currentRating)}
                      onMouseLeave={() => setHover(null)}
                  />
              </label>
            );
        })}
    </div>
  );
};
