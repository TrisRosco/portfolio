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
