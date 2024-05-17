import React from "react";
import "./Hero.css";
import dark_arrow from '../../assets/dark_arrow.png'



const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better education for a better world.</h1>
        <p>
          our cutting edge curriculum is designed to empover students with the
          practical knowledge, skills, and experiences needed to excel in the
          dynamic field of education.
        </p>
        <button className="btn">Explore more <img src={dark_arrow} alt="arrow" /></button>
      </div>
    </div>
  );
};

export default Hero;
