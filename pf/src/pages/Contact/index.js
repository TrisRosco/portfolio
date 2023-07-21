import { React, useState, useEffect } from "react";
import "./styles.css";
import NavBar from "../../components/navBar";
import NavDropDown from "../../components/navDropDown";


const Contact = () => {

    const [dropDownState, setDropDownState] = useState(false);

    const toggleDropDown = () => {
        setDropDownState(!dropDownState);
    }

    useEffect(() => {
        console.log("Contact loaded");
    }, []);

    return (
        <div className="contact-container"> 
            <header className="contact-header">
                <NavBar  projectClick={toggleDropDown} />
                <NavDropDown  dropDownOpen={dropDownState} />
            </header>
            <div className="contact-content">
                <div className="contact-content-item">
                    <p>Phone: 1-800-555-5555</p>
                </div>
                <div className="contact-content-item">
                    <p>Email: 

                    </p>
                </div>
                <div className="contact-content-item">

                </div>
            </div>
        </div>
    );
}

export default Contact;