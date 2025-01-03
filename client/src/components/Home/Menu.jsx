import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Menu = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [dynamicWidth, setDynamicWidth] = useState(130);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative flex justify-center h-16 mx-auto font-squid"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="flex items-center justify-center backdrop-blur-md border-2 border-[#F85B02] shadow-[2px_1.5px_13px_#F85B02] rounded-lg text-white font-bold text-xl h-full px-5"
        initial={false}
        animate={{
          opacity: 1,
          width: isHovered ? 650 : 130,
        }}
        transition={{
          opacity: { duration: 1, ease: "easeInOut" },
          width: { duration: 0.8, ease: "easeInOut" },
        }}
        onUpdate={(latest) => {
          if (latest.width) {
            setDynamicWidth(parseFloat(latest.width));
          }
        }}
      >
        {dynamicWidth < 550 && "MENU"}

        {dynamicWidth >= 596 && (
          <div className="flex justify-between w-full max-w-[600px] px-4">
            <Link to="/aboutus">ABOUT US</Link>
            <Link to="/ourteam">OUR TEAM</Link>
            <Link to="/gallery">GALLERY</Link>
            <Link to="/sponsors">SPONSORS</Link>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Menu;
