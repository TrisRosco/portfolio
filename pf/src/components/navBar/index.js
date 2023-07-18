import React, { useState } from "react";
import "./styles.css";


// add accordian menu
const NavBar = () => {
const [dropDownOpen, setDropDownOpen] = useState(false);

const toggleDropDown = () => {
    setDropDownOpen(!dropDownOpen);
};


  return (
    <nav className="nav-bar">
      <ul className="nav-bar-list">
        <li className="nav-bar-list-button">
            <p>About</p>
        </li>
        <li className="nav-bar-list-button">
            <p onClick={toggleDropDown}>Projects</p>
        </li>
        <li className="nav-bar-list-button">
          <p>Contact</p>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

