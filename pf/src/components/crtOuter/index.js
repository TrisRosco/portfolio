import React from "react";
import "./styles.css";
import CrtScreen from "../crtScreen";

const CrtOuter = () => {
    return (
        <div className="plastic-casing-outer">
            
            <div className="plastic-casing-inner">
        <CrtScreen />
        </div>
        </div>
    );
    }

export default CrtOuter;

