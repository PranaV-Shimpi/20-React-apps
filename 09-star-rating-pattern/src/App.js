import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import "./App.css";

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    let timeout;
    if (showMessage) {
      timeout = setTimeout(() => {
        setShowMessage(false);
      }, 2000); // 2 seconds
    }
    return () => clearTimeout(timeout);
  }, [showMessage]);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
    setShowMessage(true);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="star-rating-container">
      <div className="star-rating">
        {[...Array(noOfStars)].map((_, index) => {
          index += 1;

          return (
            <FaStar
              key={index}
              className={index <= (hover || rating) ? "active" : "inactive"}
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
              size={40}
            />
          );
        })}
      </div>
      {rating > 0 && showMessage && (
        <div className="thank-you-message">
          Thank you for {rating} {rating === 1 ? "star" : "stars"}⭐!
        </div>
      )}
    </div>
  );
}
