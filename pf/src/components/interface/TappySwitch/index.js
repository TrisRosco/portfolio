import React, { useState } from "react";
import "./styles.css";
import tapOn from "../../../assets/sounds/tapOn.mp3";
import tapOff from "../../../assets/sounds/tapOff.mp3";


const TappySwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const audioTapOn = new Audio(tapOn);
  const audioTapOff = new Audio(tapOff);

  const playTapOn = () => {
    audioTapOn.play();
  };

  const playTapOff = () => {
    audioTapOff.play();
  };

  function vibrateDevice() {
    if ("vibrate" in navigator) {
      navigator.vibrate(70); 
    }
  }

  function toggleSwitch() {
    if (isOn) {
      setIsOn(false);
      playTapOn();
      vibrateDevice();
    } else {
      setIsOn(true);
      playTapOff();
      vibrateDevice();
    }
  }


  return (
    <div className="tappy-switch-outer">
      <div className="tappy-switch-inner" data-isOn={isOn}>
        <span className="unselected" data-isOn={isOn}>{isOn ? "OFF" : ""} </span>
        <div
          className="tappy-switch-handle"
          data-isOn={isOn}
          onClick={toggleSwitch}
        >
          {isOn ? "ON" : "OFF"}
        </div>
        <span className="unselected" data-isOn={isOn}>{isOn ? "" : "ON"}</span>
      </div>
    </div>
  );
};

export default TappySwitch;
