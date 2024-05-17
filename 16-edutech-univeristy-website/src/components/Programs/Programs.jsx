import React from "react";
import "./Programs.css";
import program_1 from "../../assets/program_1.jpg";
import program_2 from "../../assets/program_2.jpg";
import program_3 from "../../assets/program_3.jpg";
import program_icon_1 from "../../assets/program_icon_1.png";
import program_icon_2 from "../../assets/program_icon_2.png";
import program_icon_3 from "../../assets/program_icon_3.png";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program_1} alt="Program1" />
        <div className="caption">
          <img src={program_icon_1} alt="program-icon1" />
          <p>Gradiation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="Program2" />
        <div className="caption">
          <img src={program_icon_2} alt="program-icon2" />
          <p>Masters Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="Program3" />
        <div className="caption">
        <img src={program_icon_3} alt="program-icon3" />
        <p>Post Degree</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
