import React, { useState, useEffect } from "react";
import "./styles.css";
import { motion, useDragControls } from "framer-motion";
import flickOn from "../../../assets/sounds/flickOn.mp3";
import flickOff from "../../../assets/sounds/flickOff.mp3";

function ClickySwitch2() {
  const [isOn, setIsOn] = useState(false);
  const controls = useDragControls();

  const audioFlickOn = new Audio(flickOn);
  const audioFlickOff = new Audio(flickOff);

  const playFlickOn = () => {
    audioFlickOn.play();
  };

  const playFlickOff = () => {
    audioFlickOff.play();
  };

  function vibrateDevice() {
    if ("vibrate" in navigator) {
      navigator.vibrate(70);
    }
  }

  function toggleSwitch(event, info) {
    if (isOn === false && info.point.x > 0) {
      setIsOn(true);
      playFlickOn();
      vibrateDevice();
    } else if (isOn === true && info.point.x < 0) {
      setIsOn(false);
      playFlickOff();
      vibrateDevice();
    }
  }

  const spring = {
    type: "spring",
    stiffness: 5000,
    damping: 80,
  };

  return (
    <div className="switch2-outer">
      <div className="switch2-inner" data-isOn={isOn}>
        <motion.div
          className="switch2-handle"
          data-isOn={isOn}
          layout
          transition={spring}
          whileTap={{ scale: 0.98 }}
          drag="x"
          dragControls={controls}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.01}
          dragDirectionLock={true}
          onDrag={toggleSwitch}
        />
      </div>
    </div>
  );
}

export default ClickySwitch2;
