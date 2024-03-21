import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import Dashboard from "./pages/Dashboard";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import "./App.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app">
          {/* site header */}
          <SiteHeader />

          {/* routes */}
          <Routes>
            <Route index element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
