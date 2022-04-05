import React from "react";
import { useNavigate } from "react-router-dom";
import Image from "../Assets/Images/camera.png";
import useReviews from "../Hook/useReviews";
import Review from "../Review/Review";
import "./Home.css";

const Home = () => {
  const [reviews] = useReviews();
  const navigate = useNavigate();
  return (
    <div>
      <section>
        <div className="first_half">
          <h1>Your Next Camera</h1>
          <p>
            FUJIFILM's GFX mirrorless cameras are more than just full frame.
            These cameras combine more than 80 years of experience, knowledge,
            and research into a series of mirrorless medium-format cameras that
            redefine the boundaries and limitations of how photographers and
            filmmakers express themselves creatively.
          </p>
        </div>
        <div className="half">
          <img src={Image} alt="img" />
        </div>
      </section>

      <div className="review_container">
        {reviews.slice(0, 3).map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>

      <div className="see_allreviews">
        <button onClick={() => navigate("/reviews")}>
          <p className="btn">See All Reviews</p>
        </button>
      </div>
    </div>
  );
};

export default Home;
