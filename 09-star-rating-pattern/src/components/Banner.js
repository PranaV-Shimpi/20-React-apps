import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <div className="left">
        <a href="/" className="project-name">🌟Star Rating</a>
      </div>
      <div className="right">
        <a href="https://github.com/PranaV-Shimpi/20-React-apps/tree/main/09-star-rating-pattern" className="github-link">📄Source Code </a>
        <a href="https://github.com/pranav-shimpi/20-React-apps/" className="all-projects-link">🚀20 React Projects </a>
      </div>
    </div>
  );
};

export default Banner;