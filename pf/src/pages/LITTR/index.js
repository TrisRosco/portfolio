import React, { useEffect } from "react";
import "./styles.css";
import NavBar from "../../components/navBar";
import bad from "../../assets/images/littr/bad.jpg";
import good from "../../assets/images/littr/good.jpg";
import postexample from "../../assets/images/littr/postexample.jpg";

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
            for litter cleanups in their local area. It's designed to be a
            simple, easy to use app that allows users to quickly and easily
            create and volunteer for litter cleanups in their local area.
            <br />
            The app is designed to be simple and easy to use, with a focus on
            usability and accessibility. It was built as a mobile-first app,
            with a responsive design that scales to fit any screen size.
            <br />
            LITTR wasn't always a litter cleanup app. It was originally designed
            as a community noticeboard called SideQuest, an odd jobs app that
            allowed users to post and volunteer for odd jobs. It had a lite-fantasy
            theme akin to a videogame quest board. However, we decided to pivot to a 
            litter cleanup app, as we felt the scope and scale of the project was too
            large for the time we had available.
          </p>
          <p>
            This project was built in collaboration with 5 other developers as a
            final project for the{" "}
            <a
              href="https://www.schoolofcode.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="littr-link"
            >
              School of Code
            </a>{" "}
            Full Stack Web Development course.
          </p>
          <p>
            {" "}
            My contributions to this project were mostly on the front-end. The
            general aesthetic of the app was my design, and I'm resonsible for
            the majority of the CSS.
            <br />
            The cards on the{" "}
            <a
              href="https://littr.netlify.app/src/pages/carddisplay"
              target="_blank"
              rel="noopener noreferrer"
              className="littr-link"
            >
              main page
            </a>{" "}
            were built by me. Initially, they were entirely JS and CSS, but they
            were later rebuilt using MUI as a means of standardizing the design.
            <br />
          </p>
          <div className="example-images-container">
            <img id="card" src={postexample} alt="A post card" />
          </div>
          <p>
            The{" "}
            <a
              href="https://littr.netlify.app/src/pages/createpostform"
              target="_blank"
              rel="noopener noreferrer"
              className="littr-link"
            >
              post creation
            </a>{" "}
            page was also built by me. It's designed to be able to be used by a
            broad userbase, with a focus on accessibility.
            <br />
            There are a number of built-in checks to ensure anything that's
            posted is appropriate. For example the Postcode field is checked
            against a regex to ensure it's a valid UK postcode.
          </p>
          <div className="example-images-container">
            <img id="bad" src={bad} alt="An invalid title" />
            <img id="good" src={good} alt="A valid title" />
          </div>
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
                <li>
                  <img
                    src="https://img.icons8.com/color/48/000000/react-native.png"
                    alt="React"
                  />{" "}
                  React
                </li>
                <li>
                  <img
                    src="https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png"
                    alt="Node.js"
                  />{" "}
                  Node.js
                </li>
                <li>
                  <img
                    src="https://img.icons8.com/?size=512&id=WNoJgbzDr3i2&format=png"
                    alt="Express.js"
                  />{" "}
                  Express.js
                </li>
                <li>
                  <img
                    src="https://supabase.com/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F54469796&w=1920&q=75"
                    alt="Supabase"
                  />{" "}
                  Supabase
                </li>
                <li>
                  <img
                    src="https://img.icons8.com/?size=512&id=38561&format=png"
                    alt="PostgreSql"
                  />{" "}
                  PostgreSql
                </li>
                <li>
                  <img
                    src="https://img.icons8.com/color/48/000000/html-5--v1.png"
                    alt="HTML5"
                  />{" "}
                  HTML
                </li>
                <li>
                  <img
                    src="https://img.icons8.com/color/48/000000/css3.png"
                    alt="CSS3"
                  />{" "}
                  CSS
                </li>
                <li>
                  <img
                    src="https://img.icons8.com/color/48/000000/javascript--v1.png"
                    alt="Javascript"
                  />{" "}
                  Javascript
                </li>
                <li>
                  <img
                    src="https://img.icons8.com/?size=512&id=bp24DwGXJDyT&format=png"
                    alt="Jest"
                  />{" "}
                  Jest
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="littr-video">
          <h2 className="littr-subtitle">Demo Video</h2>
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
