import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Title subtitle="Our Program" title="What We Offer" />
      <Programs />
      <About />
      <Title subtitle="Gallery" title="Campus Photos" />
      <Campus />
      <Title subtitle="TESTIMONIALS" title="What Students Says" />
      <Testimonials />
      <Title subtitle="Contact Us" title="Get in Touch" />
      <Contact />
    </div>
  );
};

export default App;
