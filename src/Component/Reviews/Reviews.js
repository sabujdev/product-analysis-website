import React from "react";
import useReviews from "../Hook/useReviews";
import Review from "../Review/Review";
import "./Reviews.css";

const Reviews = () => {
  const [reviews] = useReviews();
  console.log(reviews);
  return (
    <div className="allReviews">
      {reviews.map((review) => (
        <Review key={review.id} review={review}></Review>
      ))}
    </div>
  );
};

export default Reviews;
