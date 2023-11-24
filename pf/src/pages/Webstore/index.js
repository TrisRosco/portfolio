import React, { useEffect } from "react";
import "./styles.css";
import NavBar from "../../components/navBar";

const Webstore = () => {
    useEffect(() => {
        document.title = "Webstore"; 
    }, []);
    
    return (
        <React.Fragment className="webstore">
        <NavBar />
        <div className="webstore__container">
            <h1>Webstore</h1>
        </div>
        </React.Fragment>
    );
    }

export default Webstore;
