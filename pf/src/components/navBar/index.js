import React, { useState } from "react";
import "./styles.css";
import { useAnimate, stagger, motion } from "framer-motion";

// add accordian menu
const NavBar = (props) => {
  return (
    <nav className="nav-bar">
      <ul className="nav-bar-list">
        <motion.li
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 600,
          }}
          className="nav-bar-list-button"
        >
          <p>About</p>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
          className="nav-bar-list-button"
          onClick={props.projectClick}
        >
          <p>Projects</p>
        </motion.li>
        <li className="nav-bar-list-button">
          <p>Contact</p>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
