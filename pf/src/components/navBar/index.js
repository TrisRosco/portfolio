import React from "react";
import "./styles.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav className="nav-bar" >
      <ul className="nav-bar-list">
        <motion.li className="nav-bar-list-button">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            About
          </Link>
        </motion.li>
        <motion.li className="nav-bar-list-button" onClick={props.projectClick}>
          <p>Projects</p>
        </motion.li>
        <motion.li className="nav-bar-list-button">
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Contact
          </Link>
        </motion.li>
      </ul>
    </nav>
  );
};

export default NavBar;
