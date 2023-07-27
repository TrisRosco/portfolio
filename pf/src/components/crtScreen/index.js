import React, { useState, useEffect } from "react";
import "./styles.css";
import face from "../../assets/images/faceLQ.png";

const CrtScreen = (props) => {
  const [isSelected, setIsSelected] = useState(props.isSelected);

  // Define the placeholder text to be displayed when isSelected is true
  const altContent = (
    <div className="crtScreen-content-text">
      <h1>Placeholder Text</h1>
      <p>Replace this text</p>
    </div>
  );

  // Define the current content to be displayed when isSelected is false
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
    </div>
  );

  // Update isSelected state when the prop value changes
  useEffect(() => {
    setIsSelected(props.isSelected);
  }, [props.isSelected]);

  return (
    <div className="crtScreen">
      <div className="crtScreen-content">
        {isSelected ? altContent : defaultContent}
        <div className="crtScreen-image">
          <img id="my-face" src={face} alt="My stupid face" />
        </div>
        <div className="crtScreen-content-text">
          <p>Hire now! Call us at 1-800-TRISTAN</p>
          <p>Shareware version also available</p>
        </div>
      </div>
    </div>
  );
};

export default CrtScreen;
