import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Review.css";

const Review = ({ review }) => {
  const { name, image, comment, rating } = review;
  return (
    <div className="review_person">
      <div className="single_container">
        <div className="review_img">
          <img src={image} alt="img" />
        </div>
        <div className="name_rating">
          <h5>{name}</h5>
          <p>
            Rating {rating}{" "}
            <span>
              <FontAwesomeIcon className="icon" icon={faStar}></FontAwesomeIcon>
            </span>
          </p>
        </div>
      </div>
      <article>
        <p>{comment}</p>
      </article>
    </div>
  );
};

export default Review;
