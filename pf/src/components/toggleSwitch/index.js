import React, { useState } from "react";
import { motion } from "framer-motion";
import "./styles.css";

const ToggleSwitch = ({ onClick }) => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(!isOn);
    if (onClick) {
      onClick();
    }
  };

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div className="switch" data-isOn={isOn} onClick={toggle}>
      <motion.div className="handle" layout transition={spring} />
    </div>
  );
};

export default ToggleSwitch;
