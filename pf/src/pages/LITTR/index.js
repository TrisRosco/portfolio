import React, { useEffect } from "react";
import "./styles.css";
import NavBar from "../../components/navBar";
import bad from "../../assets/images/littr/bad.jpg";
import good from "../../assets/images/littr/good.jpg";
import postexample from "../../assets/images/littr/postexample.jpg";
import moodboard from "../../assets/images/littr/moodboard.jpg";
import littlefella from "../../assets/images/littr/littlefella.jpg";
import wholegang from "../../assets/images/littr/wholegang.jpg";

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
            <a
              href="https://littr.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="littr-link"
            >
              LITTR
            </a>{" "}
            is a lightweight social media platform that allows users to organize
            and volunteer for litter cleanups in their local area.
            <br />
            The app is designed to be simple and easy to use, with a focus on
            usability and accessibility. It's built as a mobile-first app, with
            a responsive design that scales to fit any screen size.
            <p>
              This project was built in collaboration with 5 other developers as
              a final project for the{" "}
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
            LITTR wasn't always a litter cleanup app. It was originally designed
            as a community noticeboard called SideQuest, an odd jobs app that
            allowed users to post and volunteer for odd jobs. It had a
            lite-fantasy theme akin to a videogame quest board. However, we
            decided to pivot to a litter cleanup app, as we felt the scope and
            scale of the project was too large for the time we had available.
          </p>
          <div className="example-images-container">
            <div className="example-image">
              <img id="moodboard" src={moodboard} alt="moodboard" />
              <p className="image-description">
                Our figma moodboard, where we conceptualised the app
              </p>
            </div>
          </div>
          <p>
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
          </p>
          <div className="example-images-container">
            <div className="example-image">
              <img id="card" src={postexample} alt="A post card" />
              <p className="image-description">An example of a LITTR post</p>
            </div>
          </div>
          <p>
            The buttons throughout the app are animated in such a way that they
            appear to click down when pressed. This is achieved by a very simple
            CSS animation that translates the button down and right by 2px, at 
            the same time as the box-shadow is translated up and left by 2px.
          </p>
          <div className="example-images-container">
            <div className="example-image">
            <button id="example-button">Example Button</button>
              <p className="image-description">An example of a LITTR button with a slower animation</p>
            </div>
          </div>
          <p>
            Another example of my work are the little characters featured on the
            {" "}
            <a
              href="https://littr.netlify.app/src/pages/landingpage"
              target="_blank"
              rel="noopener noreferrer"
              className="littr-link"
            >
              landing page
            </a>{" "}
            <br />
            Originally concieved as a parody of app mascots such as the discord blob or the duolingo owl, I made LittleFella.svg in figma 
            during the early stages of the project in the background while we were discussing the app's initial design, and you can trace its origin
            back to the very first moodboard we made.
          </p>
          <div className="example-image">
              <img id="good" src={wholegang} alt="fellas" />
              <p className="image-description">The whole gang</p>
            </div>
          <p>
            Later in development we noticed that a lot of the user feedback noted that the original landing page 
            didn't fit the aesthetic of the rest of the app. So we decided to go back to LittleFella.svg, and expand on the concept a mascot 
            that represented the app.
            <br />
          </p>
          <div className="example-image">
              <img id="good" src={littlefella} alt="theOG" />
              <p className="image-description">The original LittleFella.svg</p>
            </div>
          <p>
          <p>
            Their abstract design in theory should make them appealing to a broad audience, and their simplicity means they're easy to pose
            and modify by anyone on the team, regardless of artistic ability.
          </p>
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
            posted is appropriate. For example the postcode field is checked
            against a regex to ensure it's a valid UK postcode.
          </p>
          <div className="example-images-container">
            <div className="example-image">
              <img id="bad" src={bad} alt="An invalid title" />
              <p className="image-description">An invalid title</p>
            </div>
            <div className="example-image">
              <img id="good" src={good} alt="A valid title" />
              <p className="image-description">A valid title</p>
            </div>
          </div>

          <p>
            The future of LITTR is set out in our trello board. We have a number
            of features we'd like to implement, an example of which is a scoring
            system that rewards users points for volunteering for events, these
            points could then be used in-app to unlock new customisation options
            for their profile and posts. The idea is that gamifying the app will
            passively encourage users to use the app more often, and provide an
            incentive for younger users to help their community.
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
                <li>
                  <img
                    src="https://img.icons8.com/color/48/000000/react-native.png"
                    alt="React"
                  />
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
