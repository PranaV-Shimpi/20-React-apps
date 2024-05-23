import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { cardData } from "./SuggestedTexts";

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Dev.</span>
          </p>
          <p>How Can I Help You Today?</p>
        </div>
        <div className="cards">
          {cardData.map((card, index) => (
            <div className="card" key={index}>
              <p>{card.text}</p>
              <img src={assets[card.icon]} alt="icon" />
            </div>
          ))}
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a prompt here" />
            <div>
              <img src={assets.gallery_icon} alt="icon" />
              <img src={assets.mic_icon} alt="icon" />
              <img src={assets.send_icon} alt="icon" />
            </div>
          </div>
          <p className="bottom-info">
            {" "}
            Gemini may display inaccurate info, including about people, so
            double check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
