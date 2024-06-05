import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="left">
        <a href="/" className="project-name">
          🌟React Hooks Visualization
        </a>
      </div>
      <div className="right">
        <a
          href="https://github.com/PranaV-Shimpi/20-React-apps/blob/main/19-url-shortner/README.md"
          className="github-link"
        >
          👨‍💻Source Code
        </a>
        <a
          href="https://github.com/pranav-shimpi/20-React-apps/"
          className="all-projects-link"
        >
          🚀20 React Projects{" "}
        </a>
      </div>
    </div>
  );
};

export default Banner;
