import React from "react";
import Image from "../Assets/Images/camera.png";
import "./Home.css";

const Home = () => {
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
        <h1>Review Area </h1>
      </div>
    </div>
  );
};

export default Home;
