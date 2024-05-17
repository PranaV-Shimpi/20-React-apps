import React from "react";
import "./Campus.css";
import gallery_1 from "../../assets/gallery_1.jpg";
import gallery_2 from "../../assets/gallery_2.jpg";
import gallery_3 from "../../assets/gallery_3.jpg";
import gallery_4 from "../../assets/gallery_4.jpg";
import white_arrow from "../../assets/white_arrow.png";

const Campus = () => {
  return (
    <div className="container campus">
      <div className="gallery">
        <img src={gallery_1} alt="gallery_photo" />
        <img src={gallery_2} alt="gallery_photo" />
        <img src={gallery_3} alt="gallery_photo" />
        <img src={gallery_4} alt="gallery_photo" />
      </div>
      <button className="btn dark-btn">
        See more here <img src={white_arrow} alt="arrow" />
      </button>
    </div>
  );
};

export default Campus;
