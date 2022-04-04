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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi error
            cum repellat impedit ipsa exercitationem. Quaerat totam
            exercitationem facere dolor.
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
