import React from "react";
import { motion } from "framer-motion";
import "./styles.css";

const NavDropDown = (props) => {
  return (
    <div className="nav-drop-down" style={{ zIndex: props.zIndex }}>
      {props.dropDownOpen && (
        <motion.div
          initial="hidden"
          animate="open"
          exit="close"
          variants={{
            hidden: { y: -300 },
            open: {
              y: -32,
              transition: {
                type: "spring",
                stiffness: 700,
                damping: 30,
              },
            },
            close: {
              y: -300,
              transition: {
                type: "spring",
                stiffness: 700,
                damping: 30,
              },
            },
          }}
          className="drop-down"
        >
          <motion.div className="drop-down-spacer">
            <p></p>
          </motion.div>
          <motion.div className="drop-down-spacer">
            <p></p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="drop-down-item"
          >
            <p>HonK</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="drop-down-item"
          >
            <p>LITTR</p>
          </motion.div>
          <motion.div
            initial={{ blur: 1, opacity: 0, y: -10 }}
            animate={{ blur: 0, opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="drop-down-item"
          >
            <p>Something else</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="drop-down-item"
          >
            <p>Another thing</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="drop-down-item"
          >
            <p>Jeff</p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default NavDropDown;
