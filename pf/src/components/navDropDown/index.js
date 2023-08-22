import React from "react";
import { motion } from "framer-motion";
import "./styles.css";
import { Link } from "react-router-dom";

const NavDropDown = (props) => {
  return (
    <div className="nav-drop-down">
      {props.dropDownOpen && (
        <motion.div
          initial="hidden"
          animate="open"
          exit="close"
          zIndex="100"
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
        <motion.div className="drop-down-spacer"></motion.div>
          {/* <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="drop-down-item"
          >
            <p>HonK</p>
          </motion.div> */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="drop-down-item"
          >
            <Link
              to="/littr"
              style={{ textDecoration: "none", color: "inherit" }}
              className="drop-down-item"
            >
              <p>LITTR</p>
            </Link>
          </motion.div>
          <motion.div
            initial={{ blur: 1, opacity: 0, y: -10 }}
            animate={{ blur: 0, opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="drop-down-item"
          >
            <Link
              to="/crt"
              style={{ textDecoration: "none", color: "inherit" }}
              className="drop-down-item"
            >
              <p>CRT</p>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="drop-down-item"
          >
          <Link
              to="/interface"
              style={{ textDecoration: "none", color: "inherit" }}
              className="drop-down-item"
            >
            <p>Haptic Feedback</p>
            </Link>
          </motion.div>
          {/* <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="drop-down-item"
          >
            <p>Jeff</p>
          </motion.div> */}
        </motion.div>
      )}
    </div>
  );
};

export default NavDropDown;
