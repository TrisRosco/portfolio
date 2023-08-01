import React, { useEffect } from "react";
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
      <div className="about-container">
        <div className="about-content">
          <div className="about-content-text">
            <h1 id="hey">
              Hey!
              <br /> I'm <span className="my-name">Tristan!</span>
            </h1>
            <div id="link-container">
            <p>
              <a
                href="https://www.linkedin.com/in/tristan-roscorla"
                target="_blank"
                rel="noopener noreferrer"
                id="linkedin-github"
              >
                {/* The noopner noreferrer thingy is to prevent a security vulnerability */}
                LinkedIn &nbsp;
              </a>
            </p>
            <p>|</p>
            <p>
              <a
                href="https://www.github.com/trisrosco"
                target="_blank"
                rel="noopener noreferrer"
                id="linkedin-github"
              >
               &nbsp; GitHub
              </a>
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
