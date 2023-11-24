import React, { useEffect } from "react";
import "./styles.css";
import NavBar from "../../components/navBar";
import plan from "./plan.JPG";

const Webstore = () => {
  useEffect(() => {
    document.title = "Webstore";
  }, []);

  return (
    <React.Fragment className="webstore">
      <NavBar />
      <div className="webstore_description">
        <h1>Webstore</h1>
        <p>Coming soon!</p>
        <p>
          Here's a sneak peak of what's to come:
          <br />
          On the face of it, it's a webstore that displays a variety of products
          pulled from a database via an API.
          <br />
          but, Not only is it a demonstration of my ability to create a
          webstore, it's also an exercise in Object Oriented Programming.
          <br />
          I'm using this project to learn how to use classes and objects in
          JavaScript.
        </p>
        <img src={plan} alt="plan" id="plan" />
      </div>

      <div className="webstore_container">
        <p> It'll be here somewhere</p>
      </div>
    </React.Fragment>
  );
};

export default Webstore;
