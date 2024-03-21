import React from "react";
import { Link } from "react-router-dom";

export default function NoMatch() {
  return (
    <div className="no-match">
      <div style={{ backgroundColor: "Amour" }}>
        <div className="wrapper">
         
          <div className="info">
            <h2>404 ! Page Not Found...</h2>
            <h3>A Dog Ate this Page</h3>
            <p>
              Your dog is cute but honestly a menace. Where are my shoes? Where
              is my graduation certificate? Where is the chocolate cake I baked
              for my Aunt’s birthday? And why did you take your dog to the vet
              on that same Thursday?!
            </p>
          </div>
          <img src={require("./dog.png")} alt="dog 404" />
        </div>
      </div>
      <p style={{ padding: "10px" ,textDecoration: 'underline'}}>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
