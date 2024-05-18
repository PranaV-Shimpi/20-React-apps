import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg_icon.png";
import mail_icon from "../../assets/mail_icon.png";
import phone_icon from "../../assets/phone_icon.png";
import location_icon from "../../assets/location_icon.png";
import white_arrow from "../../assets/white_arrow.png";

const APIKEY = process.env.REACT_APP_API_KEY

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", `${APIKEY}`);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
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
          <li>
            <img src={mail_icon} alt="" /> Contact@psproject.dev
          </li>
          <li>
            <img src={phone_icon} alt="" /> +91 123-456-7890
          </li>
          <li>
            <img src={location_icon} alt="" /> 77 Massachusetts Ave, Pune <br />{" "}
            MA 072493, India
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label> your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label> Phone number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit Now <img src={white_arrow} alt="arrow" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
