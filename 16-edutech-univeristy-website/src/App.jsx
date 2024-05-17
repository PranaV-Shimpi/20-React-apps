import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Title subtitle="Our Program" title="What We Offer"/>
      <Programs />
      <About/>
      <Title subtitle="Gallery" title="Campus Photos"/>
      <Campus/>
    </div>
  );
};

export default App;
