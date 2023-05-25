import React from "react";
import { motion } from "framer-motion";
import "./styles.css";

const Button = ({ children, ...props }) => {
  const handleClick = () => {
    console.log("button clicked");
  };

  return (
    <motion.button
      {...props}
      onClick={handleClick}
      whileHover={{ backgroundColor: "rgb(102, 102, 102)", color: "#000" }}
      whileTap={{
        scale: 1.0,
        boxShadow: "1px 1px 1px",
        translateY: 0.9,
        translateX: 0.9,
      }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
