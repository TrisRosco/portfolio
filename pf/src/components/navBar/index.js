import React, { useState } from "react";
import "./styles.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import NavDropDown from "../navDropDown";

const NavBar = (props) => {
  const [dropDownState, setDropDownState] = useState(false);

  const toggleDropDown = () => {
    setDropDownState(!dropDownState);
  };

  return (
    <nav className="nav-bar">
      <ul className="nav-bar-list">
        <motion.li className="nav-bar-list-button">
          <Link
            className="nav-bar-list-button"
            to="/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            About
          </Link>
        </motion.li>
        <motion.li className="nav-bar-list-button" onClick={toggleDropDown}>
          <p>Projects</p>
        </motion.li>
        <motion.li className="nav-bar-list-button">
          <Link
            className="nav-bar-list-button"
            to="/contact"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Contact
          </Link>
        </motion.li>
      </ul>
      <NavDropDown dropDownOpen={dropDownState} />
    </nav>
  );
};

export default NavBar;
