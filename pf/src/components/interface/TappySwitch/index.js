import React, { useState } from "react";
import "./styles.css";


const TappySwitch = () => {
    const [isOn, setIsOn] = useState(false);

    //if (isOn) is true set div to on else set div to off

    //ternary operator example 

    // const isOn = true;
    // const isOn = false;

    // const isOn = true ? "on" : "off";
    

  return <div className="tappy-switch-outer">
    <div className="tappy-switch-inner" data-isOn={isOn}>
        <div className="tappy-switch-handle" data-isOn={isOn} onClick={() => setIsOn(!isOn)}> { isOn ? "ON" : "OFF" } </div>
        <span className="text">OFF ON</span>
    </div>

  </div>;
};

export default TappySwitch;
