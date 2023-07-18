import React, { useState } from "react";
import "./styles.css";
import { useAnimate, stagger, motion, transform } from "framer-motion";

// add accordian menu
const NavBar = (props) => {
  return (
    <nav className="nav-bar" style={{ zIndex: props.zIndex }}>
      <ul className="nav-bar-list">
        <motion.li
          whileHover={{ fontSize: "30px", transition: { duration: 0.1 } }}
          whileTap={{ fontSize: "22px", transition: { duration: 0.1 } }}
          transition={{
            type: "spring",
            stiffness: 600,
          }}
          className="nav-bar-list-button"
        >
          <p>About</p>
        </motion.li>
        <motion.li
          whileHover={{ fontSize: "30px", transition: { duration: 0.1 } }}
          whileTap={{ fontSize: "22px", transition: { duration: 0.1 } }}
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
