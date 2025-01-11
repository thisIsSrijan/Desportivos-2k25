import React from "react";
import { motion } from "framer-motion";

const StaircaseText = ({ text, className = "" }) => {
  const characters = Array.from(text);
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.02 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      clipPath: "inset(0 0 0 0)",
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      clipPath: "inset(100% 0 0 0)",
      transition: {
        type: "tween",
        ease: "easeIn",
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      className={className}
      whileInView="visible"
      variants={container}
      initial="hidden"
      viewport={{ once: true }} 
    >
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={child}
          style={{ display: "inline-block", position: "relative" }}
        >
          <span style={{ visibility: "hidden" }}>{char}</span>
          <motion.span
            style={{
              position: "absolute",
              left: 0,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </motion.span>
      ))}
    </motion.div>
  );
};

export default StaircaseText;
