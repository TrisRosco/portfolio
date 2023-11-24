import React, { useState, useRef, useEffect } from "react";
import "./styles.css";

const ClickyDial2 = ({ increment = 45, onRotate }) => {
  const [angle, setAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [initialAngle, setInitialAngle] = useState(0);
  const [initialMouseAngle, setInitialMouseAngle] = useState(0);
  const [snapPoint, setSnapPoint] = useState(0);
  const dialRef = useRef(null);

  function vibrateDevice() {
    if ("vibrate" in navigator) {
      navigator.vibrate(30); 
    }
  }

  const getAngle = (clientX, clientY) => {
    if (!dialRef.current) return 0;
    const { left, top, width, height } = dialRef.current.getBoundingClientRect();
    const center = { x: left + width / 2, y: top + height / 2 };
    const radians = Math.atan2(clientY - center.y, clientX - center.x);
    return (radians * 180) / Math.PI;
  };

  const handleMouseDown = (e) => {
    const mouseAngle = getAngle(e.clientX, e.clientY);
    setIsDragging(true);
    setInitialAngle(angle);
    setInitialMouseAngle(mouseAngle);
    setSnapPoint(Math.round(angle / increment) * increment);
  };

  const applyResistance = (currentAngle) => {
    const distanceFromSnapPoint = Math.abs(currentAngle - snapPoint);
    const resistanceFactor = Math.max(1 - distanceFromSnapPoint / increment, 0.5);
    return resistanceFactor;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentMouseAngle = getAngle(e.clientX, e.clientY);
    const angleDifference = currentMouseAngle - initialMouseAngle;
    const newAngle = initialAngle + angleDifference * applyResistance(initialAngle + angleDifference);
    setAngle(newAngle);

    // Update the snap point if necessary
    const halfWay = increment / 2;
    if (Math.abs(newAngle - snapPoint) > halfWay) {
      setSnapPoint(Math.round(newAngle / increment) * increment);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    const finalAngle = Math.round(angle / increment) * increment;
    setAngle(finalAngle);
    setSnapPoint(finalAngle);
    if (onRotate) onRotate(finalAngle);
  };

  useEffect(() => {
    const dialElement = dialRef.current;
    if (dialElement) {
      dialElement.addEventListener("mousedown", handleMouseDown);
    }

    return () => {
      if (dialElement) {
        dialElement.removeEventListener("mousedown", handleMouseDown);
      }
    };
  }, [angle]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    vibrateDevice();
    console.log("vibrate");
    }
    , [snapPoint]);

  const style = {
    transform: `rotate(${angle}deg)`,

  };

  return (
    <div
      ref={dialRef}
      className="clicky-dial"
      style={style}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      I
    </div>
  );
};

export default ClickyDial2;
