import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import HookDetail from "./HookDetail";
import Banner from "./components/Banner/Banner";

const App = () => {
  return (
    <>
      <Banner />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:hookName" element={<HookDetail />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
