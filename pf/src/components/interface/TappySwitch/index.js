import React, { useState } from "react";
import "./styles.css";


const TappySwitch = () => {
    const [isOn, setIsOn] = useState(false);

  return <div className="tappy-switch-outer">
    <div className="tappy-switch-inner" data-isOn={isOn}>
        <div className="tappy-switch-handle" data-isOn={isOn} onClick={() => setIsOn(!isOn)}></div>
    </div>

  </div>;
};

export default TappySwitch;
