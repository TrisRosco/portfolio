import React, { useState } from "react";
import "./styles.css";
import { useAnimate, stagger, motion, transform } from "framer-motion";
import { Routes } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav className="nav-bar" style={{ zIndex: props.zIndex }}>
      <ul className="nav-bar-list">
        <motion.li
          className="nav-bar-list-button"
        >
          <p>About</p>
        </motion.li>
        <motion.li
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
