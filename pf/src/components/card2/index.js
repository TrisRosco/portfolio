import React from "react";
import "./styles.css";
import { motion } from "framer-motion";
import { useState } from "react";

const Card2 = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const cardTitle = {
    open: {
      opacity: 1,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const cardContent = {
    open: {
      opacity: 1,
      y: 0,
      width: 480,
      height: 100,
      borderRadius: 10,
      margin: 0,
      boxShadow: "2px 2px 5px 0px rgba(0,0,0,0.75)",
      background: "rgb(202, 202, 202)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        type: "spring",
        stiffness: 700,
        damping: 30,
      },
    },
    closed: {
      opacity: 0,
      y: -50,
      width: 480,
      height: 0,
      background: "rgb(202, 202, 202)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        type: "spring",
        stiffness: 700,
        damping: 30,
      },
    },
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div className="card2">
      <motion.div className="cardHeader" animate={isOpen ? "open" : "closed"}>
        <motion.h4>{props.header}</motion.h4>
        <motion.button onClick={handleClick}>
          {isOpen ? "Close Details" : "Details"}
        </motion.button>
      </motion.div>
      <motion.div variants={cardTitle} animate={isOpen ? "open" : "closed"}>
        <motion.p
          className="card2-Body"
        //   style={{ background: "rgb(202, 202, 202)"}}
          animate={isOpen ? "open" : "closed"}
          variants={cardContent}
        >
          {props.body}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Card2;
