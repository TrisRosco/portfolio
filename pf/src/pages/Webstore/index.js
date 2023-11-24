import React, { useEffect } from "react";
import "./styles.css";
import NavBar from "../../components/navBar";
import plan from "./plan.JPG"

const Webstore = () => {
    useEffect(() => {
        document.title = "Webstore"; 
    }, []);
    
    return (
        <React.Fragment className="webstore">
        <NavBar />
        <div className="webstore__container">
            <h1>Webstore</h1>
            <p>Coming soon!</p>
            <img src={plan} alt="plan" id="plan" />
        </div>
        </React.Fragment>
    );
    }

export default Webstore;
