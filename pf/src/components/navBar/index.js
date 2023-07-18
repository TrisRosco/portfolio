import React from "react";
import "./styles.css";
// add accordian menu
const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-bar-list">
        <li className="nav-bar-list-item">
          <a href="#">About me</a>
        </li>
        <li className="nav-bar-list-item">
          <a href="#">Projects</a>
        </li>
        <li className="nav-bar-list-item">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
