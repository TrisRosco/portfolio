import "./styles.css";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "./use-follow-pointer";

export default function PhysicTest() {
  const [shape, setShape] = useState("box"); 
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);



  return (
    <motion.div
      ref={ref}
      className={{ box: "box", circle: "circle" }[shape]}
      animate={{ x, y }}
      onClick={() => setShape(shape === "box" ? "circle" : "box")}
      transition={{
        type: "spring",
        damping: 10,
        stiffness: 300,
        restDelta: 0.001
      }}
      
    >{shape === "box" ? "I'm a Box" : "I'm a Circle"}</motion.div>
  );
}
