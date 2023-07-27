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
            <h1>This is Tristan</h1>
            <p>Tristan is a cool guy, you should hire him!</p>
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
              <a href="https://www.linkedin.com/in/tristan-roscorla">
                LinkedIn
              </a>
            </p>
            <p>
              <a href="https://www.github.com/trisrosco">GitHub</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
