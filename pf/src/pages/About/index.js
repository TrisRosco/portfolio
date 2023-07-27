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
      <div className="about-container">
        <div className="about-content">
          <div className="about-content-text">
            <h1 id="hey">
              Hey,
              <br /> I'm <span className="my-name">Tristan!</span>
            </h1>
            <p>
              I'm a full stack developer with experience in React, Node,
              Express, PostgreSQL, and so much more!
            </p>
            <p>
              Features: <br />
              - Quick learner <br />
              - Hard worker <br />
              - Creative thinker and problem solver <br />
              - Team player <br />
              - Great sense of humour <br />
            </p>
            <p>
              He's also a full stack developer with experience in React, Node,
              Express, PostgreSQL, and so much more!
            </p>
            <p>Hire now! Call us at 1-800-TRISTAN</p>
            <p>Shareware version also avaliable</p>
            <p>
              <a
                href="https://www.linkedin.com/in/tristan-roscorla"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* The noopner noreferrer thingy is to prevent a security vulnerability */}
                LinkedIn
              </a>
            </p>
            <p>
              <a
                href="https://www.github.com/trisrosco"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
