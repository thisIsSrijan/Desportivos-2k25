import React, { useState, useEffect, useRef } from "react";
import { delay, motion } from "framer-motion";
import { Link } from "react-router-dom";

const scrollToAboutUs = (e) => {
  e.preventDefault();
  const section = document.getElementById("aboutus");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Menu = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [dynamicWidth, setDynamicWidth] = useState(130);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTriangle, setIsTriangle] = useState(false);
  const menuRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsTriangle(!isTriangle);
  };

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsMenuOpen(false);
      setIsTriangle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Full Menu for Larger Screens */}
      <div
        className="relative hidden md:flex justify-center h-16 mx-auto font-squid"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="flex items-center justify-center backdrop-blur-md border-2 border-[#F85B02] shadow-[2px_1.5px_13px_#F85B02] rounded-lg text-white font-bold text-xl h-full px-5"
          initial={{ y: 100 }}
          animate={{
            y: 0,
            opacity: 1,
            width: isHovered ? 650 : 130,
          }}
          transition={{
            y: { duration: 0.5, delay: 0.4 },
            opacity: { duration: 1, ease: "easeInOut" },
            width: { duration: 0.4, ease: "easeInOut" },
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
              <nav>
                <a href="#aboutus" onClick={scrollToAboutUs}>
                  ABOUT US
                </a>
              </nav>
              <Link to="/ourteam">OUR TEAM</Link>
              <Link to="/gallery">GALLERY</Link>
              <Link to="/sponsors">SPONSORS</Link>
            </div>
          )}
        </motion.div>
      </div>

      {/* Hamburger Menu for Small Screens */}
      <div
        className="md:hidden w-screen flex justify-end absolute right-0 top-7 sm:top-[4.8rem] px-2 text-xs sm:text-sm z-50"
        ref={menuRef}
      >
        {/* Hamburger Icon */}
        <button
          className="p-1 mr-3 px-1 absolute backdrop-blur-md border-2 border-[#F85B02] shadow-[2px_1.5px_13px_#F85B02] rounded-lg text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <div
            onClick={toggleMenu}
            className="relative flex h-[35px] w-[35px] cursor-pointer items-center justify-center"
          >
            <div
              className={`relative flex flex-col items-center justify-between h-[30px] w-[30px] transform transition-transform duration-500 ${
                isTriangle ? "-translate-y-1" : ""
              }`}
            >
              <span
                className={`h-[4px] w-[24px] bg-white rounded-sm transition-all duration-500 ${
                  isTriangle
                    ? "rotate-[60deg] translate-x-[5px] translate-y-[17px]"
                    : ""
                }`}
              ></span>
              <span
                className={`h-[4px] w-[24px] bg-white rounded-sm transition-all duration-500 ${
                  isTriangle
                    ? "rotate-[-60deg] -translate-x-[5.5px] translate-y-1"
                    : ""
                }`}
              ></span>
              <span
                className={`h-[4px] w-[24px] bg-white rounded-sm transition-all duration-500 ${
                  isTriangle ? "" : ""
                }`}
              ></span>
            </div>
          </div>
        </button>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="w-screen flex justify-center">
            <div
              className="absolute top-11 ml-5 backdrop-blur-md border-2 border-[#F85B02] shadow-[2px_1.5px_13px_#F85B02] rounded-lg text-white w-2/3 font-squid
        animate-slide-down"
            >
              <ul className="flex flex-col items-center ">
                <li className="py-2 sm:py-1 w-full text-center hover:bg-[#F85B02]">
                  <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                    REGISTER
                  </Link>
                </li>
                <li className="py-2 sm:py-1 w-full text-center hover:bg-[#F85B02]">
                  <nav>
                    <a
                      href="#aboutus"
                      onClick={(e) => {
                        setIsMenuOpen(false);
                        scrollToAboutUs(e);
                      }}
                    >
                      ABOUT US
                    </a>
                  </nav>
                </li>
                <li className="py-2 sm:py-1 w-full text-center hover:bg-[#F85B02]">
                  <Link to="/ourteam" onClick={() => setIsMenuOpen(false)}>
                    OUR TEAM
                  </Link>
                </li>
                <li className="py-2 sm:py-1 w-full text-center hover:bg-[#F85B02]">
                  <Link to="/gallery" onClick={() => setIsMenuOpen(false)}>
                    GALLERY
                  </Link>
                </li>
                <li className="py-2 sm:py-1 w-full text-center hover:bg-[#F85B02]">
                  <Link to="/sponsors" onClick={() => setIsMenuOpen(false)}>
                    SPONSORS
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
