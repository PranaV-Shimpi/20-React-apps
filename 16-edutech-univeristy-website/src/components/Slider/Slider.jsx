import React from "react";
import "./Slider.css";

const Slider = ({ testimonials, currentIndex }) => {
  const nextIndex = (currentIndex + 1) % testimonials.length;
  const currentTestimonials = [
    testimonials[currentIndex],
    testimonials[nextIndex],
  ];

  return (
    <div className="slider">
      <ul>
        {currentTestimonials.map((testimonial, index) => (
          <li key={index}>
            <div className="slide">
              <div className="user-info">
                <img src={testimonial.imgsrc} alt="user" />
                <div>
                  <h3>{testimonial.name}</h3>
                  <span>{testimonial.subinfo}</span>
                </div>
              </div>
              <p>{testimonial.testimonial}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Slider;

