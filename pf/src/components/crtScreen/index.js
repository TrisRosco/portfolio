import React from "react";
import "./styles.css";
import jeff from "../../assets/images/jeff.jpg";

const CrtScreen = () => {
    return (
        <div className="crtScreen">
        <div className="crtScreen__content">
            <div className="crtScreen__content--text">
            <h1>Jeff</h1>
            <p>Jeff is a cool guy</p>
            </div>
            <div className="crtScreen__content--image">
            <img src={jeff} alt="jeff" />
            </div>
        </div>
        </div>
    );
    }

export default CrtScreen;