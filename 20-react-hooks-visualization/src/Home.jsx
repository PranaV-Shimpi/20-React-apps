import React from "react";
import "./Home.css";
import HookList from "./HookList";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <h1 className="home-title">React Hooks Visualization</h1>
      </div>
      <HookList />
    </>
  );
};

export default Home;
