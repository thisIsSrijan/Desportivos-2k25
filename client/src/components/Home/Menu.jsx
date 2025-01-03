import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Menu = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex justify-center h-16 mx-auto font-squid"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* MENU button */}
      {isHovered ? (
        <div />
      ) : (
        <motion.div className="flex backdrop-blur-md items-center justify-center border-2  border-[#F85B02] shadow-[2px_1.5px_13px_#F85B02] rounded-lg text-white font-bold text-2xl h-full w-full px-5">
          MENU
        </motion.div>
      )}

      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="flex items-center justify-between backdrop-blur-md border-2  border-[#F85B02] shadow-[2px_1.5px_13px_#F85B02] rounded-lg text-white font-semibold text-lg h-full absolute top-0 px-5"
            initial={{
              opacity: 0,
              width: "400px",
            }}
            animate={{
              opacity: 1,
              width: "650px",
            }}
            exit={{
              opacity: 0,
              width: "400px",
            }}
            transition={{
              opacity: { duration: 0.6, ease: "easeInOut" },
              width: { duration: 0.6, ease: "easeInOut" },
            }}
            style={{ left: "50%", transform: "translateX(-50%)" }}
          >
            <Link to="/aboutus">ABOUT US</Link>
            <Link to="/ourteam">OUR TEAM</Link>
            <Link to="/gallery">GALLERY</Link>
            <Link to="/sponsors">SPONSORS</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
