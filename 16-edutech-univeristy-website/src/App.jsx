import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Videoplayer from "./components/Videoplayer/Videoplayer";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <Title subtitle="Our Program" title="What We Offer" />
      <Programs />
      <div className="container">
        <About setPlayState={setPlayState} />
      </div>
      <Title subtitle="Gallery" title="Campus Photos" />
      <Campus />
      <div className="container">
        <Title subtitle="TESTIMONIALS" title="What Students Says" />
        <Testimonials />
        <Title subtitle="Contact Us" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <Videoplayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
