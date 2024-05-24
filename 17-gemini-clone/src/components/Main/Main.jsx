import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { cardData } from "./SuggestedTexts";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const handleImgClick = () => {
    alert(
      "Sorry, we're experiencing heavy traffic right now. Please try with submit option."
    );
  };

  return (
    <div className="main">
      <div className="nav">
        <div className="nav-left">
          <p>Gemini AI Search</p>
          <a href="https://github.com/PranaV-Shimpi/20-React-apps">
            🚀20 React Projects
          </a>
          <a href="https://github.com/PranaV-Shimpi/20-React-apps/tree/main/17-gemini-clone">
            👨‍💻Get Souce Code
          </a>
        </div>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
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
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="icon" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="icon" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }} />
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <img
                onClick={() => handleImgClick()}
                src={assets.gallery_icon}
                alt="icon"
              />
              <img
                onClick={() => handleImgClick()}
                src={assets.mic_icon}
                alt="icon"
              />
              {input ? (
                <img
                  onClick={() => onSent()}
                  src={assets.send_icon}
                  alt="icon"
                />
              ) : null}
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
