import React from "react";

interface RatingStarsProps {
  rate: number;
}

const Rating: React.FC<RatingStarsProps> = ({ rate }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const filled = i <= Math.round(rate);
      stars.push(
        <span key={i} role="img" aria-label={`Star ${i}`}>
          {filled ? "⭐" : "☆"}
        </span>
      );
    }
    return stars;
  };

  return <div>{renderStars()}</div>;
};

export default Rating;
