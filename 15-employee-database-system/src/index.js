import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Banner from './components/banner/Banner';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Banner />
    <App />
  </React.StrictMode>
);
