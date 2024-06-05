import React from "react";
import { Link } from "react-router-dom";
import HooksDocs from "./HooksDocs";
import "./HookList.css"; // Import custom CSS file

const HookList = () => {
  return (
    <div className="hook-list-container">
      <div className="hook-list">
        {Object.keys(HooksDocs).map((hookName) => (
          <div className="hook-item" key={hookName}>
            <Link to={`/detail/${hookName}`} className="hook-link">
              {hookName}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HookList;
