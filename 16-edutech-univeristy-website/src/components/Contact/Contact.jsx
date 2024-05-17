import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg_icon.png";
import mail_icon from "../../assets/mail_icon.png";
import phone_icon from "../../assets/phone_icon.png";
import location_icon from "../../assets/location_icon.png";

const Contact = () => {
  return (
    <div className="contact container">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="msg icon" />
        </h3>
        <p>
          Feel free to react out through form or find our contact information
          below. Your feedback, questions, and suggestions are important to us
          as we strive to provide exceptional service to our university
          community.
        </p>
        <ul>
          <li><img src={mail_icon} alt="" /> Contact@psproject.dev</li>
          <li><img src={phone_icon} alt="" /> +91 123-456-7890</li>
          <li>
            <img src={location_icon} alt="" /> 77 Massachusetts Ave, Pune <br /> MA 072493, India
          </li>
        </ul>
      </div>
      <div className="contact-col"></div>
    </div>
  );
};

export default Contact;
