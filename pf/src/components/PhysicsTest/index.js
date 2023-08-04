import "./styles.css";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "./use-follow-pointer";

export default function PhysicTest() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
      ref={ref}
      className="box"
      animate={{ x, y }}
      transition={{
        type: "spring",
        damping: 10,
        stiffness: 400,
        restDelta: 0.001
      }}
    />
  );
}
