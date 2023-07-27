import { useEffect } from "react";
import "./styles.css";
import NavBar from "../../components/navBar";

const LITTR = () => {
  useEffect(() => {
    console.log("LITTR loaded");
  }, []);
  return (
    <div className="littr">
      <header className="littr-header">
        <NavBar  />

      </header>
      <div className="littr-container">
        <header className="littr-title">
          <h1>LITTR</h1>
        </header>
        <div className="littr-description">
          <p>
            LITTR is a lightweight social media platform that allows users to
            to organise and volunteer for litter cleanups in their local area. 
            <br />
            The app is designed to be simple and easy to use, with a focus on 
            usability and accessibility. It was built as a mobile-first app,
            with a responsive design that scales to fit any screen size.
            <br />
            In its current state, the app is in its MVP stage, with the core
            functionality implemented. The current features are:
          </p>
        </div>
        <div className="littr-features">
          <div className="littr-features-item">
            <h2>Features</h2>
          </div>
          <div className="littr-features-item">
            <p>
              <ul>
                <li>Sign up and login</li>
                <li>A fully functional map using Google maps</li>
                <li>View and create litter clean-up events</li>
                <li>The ability to volunteer for said events</li>
                <li>A functional like button</li>
                <li>A search bar to filter events by location</li>
                <li>An integrated back-end using SupaBase</li>
                <li></li>
              </ul>
            </p>
          </div>
        </div>
        <div className="littr-tech">
          <div className="littr-tech-item">
            <h2>Tech</h2>
          </div>
          <div className="littr-tech-item">
            <p>
              <ul>
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>SupaBase</li>
                <li>PostgreSQL</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="littr-links">
          <div className="littr-links-item">
            <h2>Links</h2>
          </div>
          <div className="littr-links-item">
            <p>
              <ul>
                <li>
                  <a href="#">GitHub</a>
                </li>
                <li>
                  <a href="#">Live Demo</a>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LITTR;
