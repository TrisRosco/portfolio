import React from "react";
import "./styles.css";
import CrtScreen from "../crtScreen";
import welcome from "../../assets/sounds/welcome.mp3";

const CrtOuter = () => {

    const playGreeting = () => {
        const audio = new Audio(welcome);
        audio.play();
    }


    return (
        <div className="plastic-casing-outer">
            <div className="plastic-casing-inner">
        <CrtScreen />
        </div>
        <div className="button-container">
        <button className="control-button" onClick={playGreeting}>Power</button>
        <button className="control-button">Reset</button>
        <button className="control-button">Info</button>
        <button className="control-button">Vol</button>
        </div>
        </div>
    );
    }

export default CrtOuter;

