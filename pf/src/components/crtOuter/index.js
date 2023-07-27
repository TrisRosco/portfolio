import React, { useState, useRef } from "react";
import "./styles.css";
import CrtScreen from "../crtScreen";
import welcome from "../../assets/sounds/welcome.mp3";
import chiptune from "../../assets/sounds/chiptune.mp3";
import buttonDown from "../../assets/sounds/buttonDown.mp3";
import buttonUp from "../../assets/sounds/buttonUp.mp3";

const CrtOuter = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const audioRef = useRef(null);

  const playGreeting = () => {
    const audio = new Audio(welcome);
    audio.play();
  };

  const playButtonDown = () => {
    const audio = new Audio(buttonDown);
    audio.play();
  };

  const playButtonUp = () => {
    const audio = new Audio(buttonUp);
    audio.play();
  };

  const toggleChiptune = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      audio.loop = true;
      setIsPlaying(true);
    }
  };

  const toggleInfo = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div className="plastic-casing-outer">
      <div className="plastic-casing-inner">
        <CrtScreen isSelected={isSelected} />
      </div>
      <div className="button-container">
        <button
          className="control-button"
          onMouseDown={playButtonDown}
          onMouseUp={playButtonUp}
        >
          Power
        </button>
        <button
          className="control-button"
          onClick={playGreeting}
          onMouseDown={playButtonDown}
          onMouseUp={playButtonUp}
        >
          Intro
        </button>
        <button
          className="control-button"
          onMouseDown={playButtonDown}
          onMouseUp={playButtonUp}
          onClick={toggleInfo}
        >
          Info
        </button>
        <button
          className="control-button"
          onClick={toggleChiptune}
          onMouseDown={playButtonDown}
          onMouseUp={playButtonUp}
        >
          Music
        </button>
      </div>
      <audio ref={audioRef} src={chiptune} />{" "}
      {/* This is an invisible audio element that will play the chiptune */}
    </div>
  );
};

export default CrtOuter;
