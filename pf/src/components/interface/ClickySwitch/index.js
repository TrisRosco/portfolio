import React, { useState, useEffect } from "react";
import "./styles.css";
import { motion, useDragControls } from "framer-motion";
import buttonDown from "../../../assets/sounds/buttonDown.mp3";
import buttonUp from "../../../assets/sounds/buttonUp.mp3";

function ClickySwitch() {
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
    if (info.offset.x > 0) {
      if (!isOn) {
        setIsOn(true);
        playButtonUp();
        vibrateDevice();
      }
    } else {
      if (isOn) {
        setIsOn(false);
        playButtonUp();
        vibrateDevice();
      }
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
          whileTap={{ scale: 0.95 }}
          drag="x"
          dragControls={controls}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.01}
          onDragEnd={toggleSwitch}
          onTapStart={playButtonDown}
        />
      </div>
    </div>
  );
}

export default ClickySwitch;
