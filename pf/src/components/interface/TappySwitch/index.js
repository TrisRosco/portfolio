import React, { useState } from "react";
import "./styles.css";

const TappySwitch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="tappy-switch-outer">
      <div className="tappy-switch-inner" data-isOn={isOn}>
        <span className="unselected" data-isOn={isOn}>{isOn ? "OFF" : ""} </span>
        <div
          className="tappy-switch-handle"
          data-isOn={isOn}
          onClick={() => setIsOn(!isOn)}
        >
          {isOn ? "ON" : "OFF"}
        </div>
        <span className="unselected" data-isOn={isOn}>{isOn ? "" : "ON"}</span>
      </div>
    </div>
  );
};

export default TappySwitch;
