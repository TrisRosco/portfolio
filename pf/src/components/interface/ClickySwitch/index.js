import React, { useState } from "react";
import "./styles.css";
import { motion, useDragControls } from "framer-motion";
import buttonDown from "../../../assets/sounds/buttonDown.mp3";
import buttonUp from "../../../assets/sounds/buttonUp.mp3";

function ClickySwitch() {
  const [isOn, setIsOn] = useState(false);

  const controls = useDragControls();

  const playButtonDown = () => {
    const audio = new Audio(buttonDown);
    audio.play();
  };

  const playButtonUp = () => {
    const audio = new Audio(buttonUp);
    audio.play();
  };

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
      vibrateDevice();
    } else {
      setIsOn(false);
      playButtonUp();
      vibrateDevice();
    }
  }

  const spring = {
    type: "spring",
    stiffness: 5000,
    damping: 80,
  };

  return (
    <div className="switch-outer">
      <div className="switch-inner" data-isOn={isOn}>
        <motion.div
          className="switch-handle"
          layout
          transition={spring}
          whileHover={{ scale: 0.99 }}
          whileTap={{ scale: 0.95 }}
          drag="x"
          dragControls={controls}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.01}
          onDragEnd={toggleSwitch}
          onMouseDown={playButtonDown}
        />
      </div>
    </div>
  );
}

export default ClickySwitch;
