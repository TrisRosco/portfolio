import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "./styles.css";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn(!isOn);

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
