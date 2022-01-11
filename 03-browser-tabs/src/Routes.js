import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import PageNotFound from './pages/404-page';
export default function Router() {
  return (
    <Routes>
      <Route path="/about" >
        <About />
      </Route>
      <Route path="/features" >
        <Features />
      </Route>
      <Route path="/" exact={true}>
        <Home />
      </Route>
      <Route >
        <PageNotFound />
      </Route>
    </Routes>
  );
}