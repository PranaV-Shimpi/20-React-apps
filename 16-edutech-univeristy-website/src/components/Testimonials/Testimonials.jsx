import React, { useRef, useState } from "react";
import "./Testimonials.css";
import next_arrow from "../../assets/next_arrow.png";
import back_arrow from "../../assets/back_arrow.png";
import Slider from "../Slider/Slider";
import testimonialsData from "./TestimonialsData";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalTestimonials = testimonialsData.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % totalTestimonials);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 2 + totalTestimonials) % totalTestimonials
    );
  };

  return (
    <div className="container testimonials">
      <img
        src={next_arrow}
        alt="next arrow"
        className="next-btn"
        onClick={handleNext}
      />
      <img
        src={back_arrow}
        alt="back arrow"
        className="back-btn"
        onClick={handlePrev}
      />

      <Slider testimonials={testimonialsData} currentIndex={currentIndex} />
    </div>
  );
};

export default Testimonials;
