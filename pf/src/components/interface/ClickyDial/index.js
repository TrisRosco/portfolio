import React, { useEffect, useState } from "react";
import "./styles.css";
import { motion, useDragControls } from "framer-motion";

function ClickyDial() {
  const [rotVal, setRotVal] = useState(0);

  const controls = useDragControls();

  function vibrateDevice() {
    // Check if the Vibration API is supported by the browser
    if ("vibrate" in navigator) {
      navigator.vibrate(30); // Adjust the duration as needed
    }
  }

  useEffect(() => {
    console.log(rotVal);
  }, [rotVal]);


  function handleRotate(event, info) {
    const rotationIncrement = 15; // Adjust this value for a better rotation experience

    if (info.point.x > 0) {
      setRotVal(rotVal + rotationIncrement);
      vibrateDevice();
    } else if (info.point.x < 0) {
      setRotVal(rotVal - rotationIncrement);
      vibrateDevice();
    }
  }


  return (
    <div className="dial-outer">
      <div className="dial-inner">
        <motion.div
          className="dial-handle"
          layout
          // transition={{ type: "spring", stiffness: 500, damping: 30 }}
          drag="x"
          dragControls={controls}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.00001} // This is jank to stop the dial from moving left and right
          dragMomentum={false} 
          // style={{ rotate: rotVal }} 
          whileDrag={{ rotate: rotVal }}
          onDrag={handleRotate}
        >
          I
        </motion.div>
      </div>
    </div>
  );
}

export default ClickyDial;
