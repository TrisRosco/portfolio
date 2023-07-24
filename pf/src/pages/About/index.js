import React, { useState, useEffect } from "react";
import NavBar from "../../components/navBar";
import "./styles.css";

function About() {
  useEffect(() => {
    console.log("About loaded");
  }, []);

  return (
    <div className="about">
      <header className="about-header">
        <NavBar />
      </header>
    </div>
  );
}

export default About;
