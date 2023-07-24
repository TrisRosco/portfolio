import React from "react";
import "./styles.css";
import face from "../../assets/images/faceLQ.png";

const CrtScreen = () => {
  return (
    <div className="crtScreen">
      <div className="crtScreen-content">
        <div className="crtScreen__content--text">
          <h1>This is Tristan</h1>
          <p>Tristan is a cool guy, you should hire him!</p>
          <p>
            He's a full stack web developer with a passion for learning and
            creating.
          </p>
          <p>
            He's paints little miniatures and plays video games in his free
            time.
          </p>
          <p>
            It seems like he also enjoys making silly fake 80s tablet PCs with
            CSS.
          </p>
        </div>
        <div className="crtScreen-image">
          <img id="my-face" src={face} alt="My stupid face" />
        </div>
        <div className="crtScreen__content--text">
          <p>Hire now! Call us at 1-800-TRISTAN</p>
          <p>Shareware version also avaliable</p>
        </div>
      </div>
    </div>
  );
};

export default CrtScreen;
