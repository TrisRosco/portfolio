import { React, useEffect } from "react";
import "./styles.css";
import NavBar from "../../components/navBar";
import PhysicsTest from "../../components/PhysicsTest";

const Contact = () => {

    useEffect(() => {
        console.log("Contact loaded");
    }, []);

    return (
        <div className="contact-container"> 
            <header className="contact-header">
                <NavBar  />
            </header>
            <div className="contact-content">
                <div className="contact-content-item">
                    <p>Phone: 1-800-555-5555</p>
                </div>
                <div className="contact-content-item">
                    <p>Email: 

                    </p>
                    <PhysicsTest />
                </div>
                <div className="contact-content-item">

                </div>
            </div>
        </div>
    );
}

export default Contact;