import React from "react";
import "./styles.css";
import { motion } from "framer-motion";
import { useState } from "react";

const Card = (props) => {

    const [isOpen, setIsOpen] = useState(false);



    return (
        <motion.nav
            transition={{ delay: 0.2, type: "spring", stiffness: 220 }}
            className="card"
            data-isOpen={isOpen}
        >
            <div className="card-header" >

                <h1>{props.header}</h1>
                <h2>{isOpen ? <button onClick={() => setIsOpen(!isOpen)}>Close Details</button> : <button onClick={() => setIsOpen(!isOpen)}>Details</button>}</h2>
            </div>
            {isOpen && <div className="card-body">{props.body}</div>}
        </motion.nav>
    );
};


export default Card;