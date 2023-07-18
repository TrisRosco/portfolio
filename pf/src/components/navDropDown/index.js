import React, { useState } from "react";
import "./styles.css";
import { useAnimate, stagger, motion } from "framer-motion";

const NavDropDown = (props) => {
  return (
    <div className="nav-drop-down">
      {props.dropDownOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, type: "spring", stiffness: 900 },
            },
          }}
          className="drop-down"
        >
          <motion.div className="drop-down-item">
            <p>HonK</p>
          </motion.div>
          <motion.div className="drop-down-item">
            <p>LITTR</p>
          </motion.div>
          <motion.div className="drop-down-item">
            <p>Something else</p>
          </motion.div>
          <motion.div className="drop-down-item">
            <p>Another thing</p>
          </motion.div>
          <motion.div className="drop-down-item">
            <p>Jeff</p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default NavDropDown;
