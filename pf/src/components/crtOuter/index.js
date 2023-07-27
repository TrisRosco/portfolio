import React, { useState, useRef } from "react";
import "./styles.css";
import CrtScreen from "../crtScreen";
import welcome from "../../assets/sounds/welcome.mp3";
import chiptune from "../../assets/sounds/chiptune.mp3";

const CrtOuter = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null); 
  const playGreeting = () => {
    const audio = new Audio(welcome);
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

  return (
    <div className="plastic-casing-outer">
      <div className="plastic-casing-inner">
        <CrtScreen />
      </div>
      <div className="button-container">
        <button className="control-button" onClick={playGreeting}>
          Power
        </button>
        <button className="control-button">Reset</button>
        <button className="control-button">Info</button>
        <button className="control-button" onClick={toggleChiptune}>
          Vol
        </button>
      </div>
      <audio ref={audioRef} src={chiptune} /> {/* This is an invisible audio element that will play the chiptune */}
    </div>
  );
};

export default CrtOuter;
