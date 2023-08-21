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

  const toggleSwitch = () => setIsOn(!isOn);

  const spring = {
    type: "spring",
    stiffness: 5000,
    damping: 80,
  };

  return (
    <div className="switch-outer">
      <div className="switch-inner" data-isOn={isOn} onClick={toggleSwitch}>
        <motion.div
          className="switch-handle"
          layout
          transition={spring}
          whileHover={{ scale: 0.99 }}
          whileTap={{ scale: 0.95 }}
          drag="x"
          dragControls={controls}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onMouseDown={playButtonDown}
          onMouseUp={playButtonUp}
        />
      </div>
    </div>
  );
}

export default ClickySwitch;
