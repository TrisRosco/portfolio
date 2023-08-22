import React, { useState } from "react";
import "./styles.css";
import { motion, useDragControls } from "framer-motion";

function ClickyDial() {
  const [rotVal, setRotVal] = useState(0);

  const controls = useDragControls();

  //while dragging, rotate the dial

  return (
    <div className="dial-outer">
      <div className="dial-inner">
        <motion.div
          className="dial-handle"
          layout
          drag="x"
          dragControls={controls}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          style={{ rotate: rotVal }}
          whileDrag={{ rotate: rotVal }}
          onDrag={(event, info) => {
            setRotVal(info.point.x);
          }}
        >
          I
        </motion.div>
      </div>
    </div>
  );
}

export default ClickyDial;
