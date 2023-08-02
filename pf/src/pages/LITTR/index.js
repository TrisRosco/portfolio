import React, { useEffect } from "react";
import "./styles.css";
import NavBar from "../../components/navBar";
import YouTubeFrame from "../../components/youtubeFrame";

const LITTR = () => {
  useEffect(() => {
    console.log("LITTR loaded");
  }, []);

  return (
    <div className="littr">
      <header className="littr-header">
        <NavBar />
      </header>
      <div className="littr-container">
        <header className="littr-title">
          <h1>LITTR</h1>
        </header>
        <div className="littr-description">
          <p>
            <span className="littr-highlight">LITTR</span> is a lightweight
            social media platform that allows users to organize and volunteer
            for litter cleanups in their local area.
            <br />
            The app is designed to be simple and easy to use, with a focus on
            usability and accessibility. It was built as a mobile-first app,
            with a responsive design that scales to fit any screen size.
            <br />
            In its current state, the app is in its MVP stage, with the core
            functionality implemented. The current features are:
          </p>
        </div>
        <div className="littr-list-container">
          <div className="littr-features">
            <div className="littr-features-item">
              <h2 className="littr-subtitle">Features</h2>
            </div>
            <div className="littr-features-item">
              <ul>
                <li>Sign up and login</li>
                <li>Authentication and authorization</li>
                <li>Animated UI elements</li>
                <li>A fully functional map using Google maps</li>
                <li>View and create litter clean-up events</li>
                <li>The ability to volunteer for said events</li>
                <li>A functional like button</li>
                <li>A search bar to filter events by location</li>
                <li>An integrated back-end using SupaBase</li>
                <li>Cool little hats on each post!</li>
              </ul>
            </div>
          </div>

          <div className="littr-tech">
            <div className="littr-tech-item">
              <h2 className="littr-subtitle">Tech</h2>
            </div>
            <div className="littr-tech-item">
              <ul>
                <li>React <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="React"/></li>
                <li>Node.js <img src="https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png" alt="Node.js"/></li>
                <li>Express<img src="https://img.icons8.com/?size=512&id=WNoJgbzDr3i2&format=png" alt="Express.js"/></li>
                <li>SupaBase <img src="https://supabase.com/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F54469796&w=1920&q=75" alt="Supabase"/></li>
                <li>PostgreSQL <img src="https://img.icons8.com/?size=512&id=38561&format=png" alt="PostgreSql"/></li>
                <li>HTML <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="HTML5"/></li>
                <li>CSS <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS3"/></li>
                <li>JavaScript <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt="Javascript"/></li>
                <li>Jest <img src="https://img.icons8.com/?size=512&id=bp24DwGXJDyT&format=png" alt="Jest"/></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="littr-video">
          <iframe
            className="littr-video-frame"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/lREoUPpGUWg"
            title="LITTR Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
          ></iframe>
        </div>
        <div className="littr-links">
          <div className="littr-links-item">
            <h2 className="littr-subtitle">Links</h2>
          </div>
          <div className="littr-links-item">
            <ul>
              <li>
                <a
                  href="https://github.com/SideQuestSOC/littr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="littr-link"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=lREoUPpGUWg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="littr-link"
                >
                  Demo Video (Edited by me)
                </a>
              </li>
              <li>
                <a
                  href="https://littr.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="littr-link"
                >
                  LITTR Web app
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LITTR;
