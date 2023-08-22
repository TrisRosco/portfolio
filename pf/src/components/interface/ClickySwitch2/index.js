import React, { useState, useEffect } from "react";
import "./styles.css";
import { motion, useDragControls } from "framer-motion";
import buttonDown from "../../../assets/sounds/buttonDown.mp3";
import buttonUp from "../../../assets/sounds/buttonUp.mp3";

function ClickySwitch2() {
  const [isOn, setIsOn] = useState(false);
  const controls = useDragControls();
  const audioButtonDown = new Audio(buttonDown);
  const audioButtonUp = new Audio(buttonUp);

  const playButtonDown = () => {
    audioButtonDown.play();
  };

  const playButtonUp = () => {
    audioButtonUp.play();
  };

  useEffect(() => {
    vibrateDevice();
    console.log("vibrate");
  }, [isOn]);

  function vibrateDevice() {
    // Check if the Vibration API is supported by the browser
    if ("vibrate" in navigator) {
      navigator.vibrate(50); // Adjust the duration as needed
    }
  }

  function toggleSwitch(event, info) {
    if (info.point.x > 0) {
      setIsOn(true);
      playButtonUp();
    } else {
      setIsOn(false);
      playButtonUp();
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
          dragElastic={0.002}
          onDragEnd={toggleSwitch}
          onTapStart={playButtonDown}
        />
      </div>
    </div>
  );
}

export default ClickySwitch2;
