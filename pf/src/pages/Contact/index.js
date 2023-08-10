import { React, useEffect } from "react";
import "./styles.css";
import NavBar from "../../components/navBar";
import PhysicsTest from "../../components/PhysicsTest";

const Contact = () => {
  useEffect(() => {
    console.log("Contact loaded");
  }, []);

  return (
    <div className="contact-container">
      <header className="contact-header">
        <NavBar />
      </header>
      <div className="contact-content">
        <div className="contact-content-item">
          <p>Suprise, this isn't finished yet!</p>
        </div>
        <div className="contact-content-item">
          <p>But to keep you busy, here's a physics test thingy I made!</p>
          <PhysicsTest />
        </div>
        <div className="contact-content-item"></div>
      </div>
    </div>
  );
};

export default Contact;
