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
            </div>
            <div className="crtScreen-image">
            <img id="my-face" src={face} alt="My stupid face" />
            </div>
        </div>
        </div>
    );
    }

export default CrtScreen;