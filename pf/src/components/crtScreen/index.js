import React, { useState, useEffect } from "react";
import "./styles.css";
import face from "../../assets/images/faceLQ.png";
import Pong from "./Pong";

const CrtScreen = (props) => {
  const [isSelected, setIsSelected] = useState(props.isSelected);
  const [isOff, setIsOff] = useState(props.isOff);

  const pongContent = (
    <div className="crtScreen-content-text">
      <Pong />
    </div>
  );


  const altContent = (
    <div className="crtScreen-content-text">
      <h2>How I made this silly thing:</h2>
      <p>
        Originally made as my actual portfolio site, I decided to make it a
        separate project.
      </p>
      <p>
        The theme is inspired by those old CRT monitors that used to be
        everywhere. I wanted to make something that looked like a modern idea,
        but made in the early 90s (like me).
      </p>
      <p>
        Everything you see is CSS. The "3D" effect is achieved by using a
        combination of stacked box-shadows.
      </p>
      <p>
        The pixelated CRT aesthetic is achieved by using a repeating linear
        gradient, and the flicker is an animation that rapidly changes the
        opacity of the entire div.
      </p>
      <p>
        The chromatic aberration is similar to the flicker, but instead of
        changing opacity, it rapidly changes the pixel width of two coloured
        text shadows.
      </p>
      <p>
        It was important for the flicker and chromatic aberration to be in sync,
        so each of them consists of 20 keyframes, and the animation is set to
        0.5s.
      </p>
    </div>
  );

  const defaultContent = (
    <div className="crtScreen-content-text">
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
      <div className="crtScreen-image">
        <img id="my-face" src={face} alt="My stupid face" />
      </div>
      <div id="hire-now">
        <p>Hire now! Call us at 1-800-TRISTAN</p>
        <p>Shareware version also available</p>
      </div>
    </div>
  );

  useEffect(() => {
    setIsSelected(props.isSelected);
  }, [props.isSelected]);

  useEffect(() => {
    setIsOff(props.isOff);
  }, [props.isOff]);
  

  return (
    <div className={isOff ? "crtScreen-off" : "crtScreen"}>
      <div className="crtScreen-content">
        {isSelected ? altContent : pongContent}
      </div>
    </div>
  );
};

export default CrtScreen;
