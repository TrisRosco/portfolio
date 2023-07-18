import React, { useState } from "react";
import "./styles.css";
import { useAnimate, stagger, motion } from "framer-motion";

const NavDropDown = (props) => {

    return (
        <div className="nav-drop-down">
        {props.dropDownOpen && (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
      }}
      className="drop-down"
    >
      <motion.div className="drop-down-item">
        <p>Project 1</p>
      </motion.div>
      <motion.div className="drop-down-item">
        <p>Project 2</p>
      </motion.div>
      <motion.div className="drop-down-item">
        <p>Project 3</p>
      </motion.div>
      <motion.div className="drop-down-item">
        <p>Project 4</p>
      </motion.div>
      <motion.div className="drop-down-item">
        <p>Project 5</p>
      </motion.div>
    </motion.div>
  )}
        </div>
    );
};

export default NavDropDown;
