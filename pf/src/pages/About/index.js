import React, { useState, useEffect } from "react";
import NavBar from "../../components/navBar";
import NavDropDown from "../../components/navDropDown";
import "./styles.css";

function About() {
    const [dropDownState, setDropDownState] = useState(false);
  
    const toggleDropDown = () => {
      setDropDownState(!dropDownState);
    };
  
    useEffect(() => {
      console.log("About loaded");
    }, []);
  
    return (
      <div className="about">
        <header className="about-header">
          <NavBar projectClick={toggleDropDown} zIndex="2" />
          <NavDropDown  dropDownOpen={dropDownState} zIndex="1" />
        </header>
      </div>
    );
  }
  
  export default About;
  