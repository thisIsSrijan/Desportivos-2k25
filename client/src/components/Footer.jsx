import React from "react";
import "../index.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Marquee from "react-fast-marquee";

function Footer() {
  const dot = "/Ellipse 36 (1).png";
  const despo_text = "/despo_text.png";
  const bgImg = "/Background.png"; 
  const renderTextWithDot = () => {
    return Array(9)
      .fill()
      .map((_, index) => (
        <div
          key={index}
          className="flex justify-evenly mt-5 items-center space-x-8 whitespace-nowrap"
        >
          <span className="text-6xl sm:text-7xl md:text-9xl dharma-gothic-c text-white">
            REGISTER NOW
          </span>
          <img className="w-6 h-5" src={dot} alt="dot" />
        </div>
      ));
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute mt-10 left-0 w-full">
        <Marquee speed={150} autoFill={true} className="overflow-hidden no-scrollbar">
          <div className="flex space-x-8">{renderTextWithDot()}</div>
        </Marquee>
        <div className="w-full h-[1px] bg-white"></div>

        <div className="w-[97%] md:w-[80%] lg:w-[97%] mx-auto rounded-3xl mt-[5rem] h-[150px] md:h-[300px] lg:h-[370px] bg-orange-600 p-4 sm:p-6">
          <div className="flex justify-between items-center">
            <a
              href="mailto:desportivos@lnmiit.ac.in"
              className="text-white text-xs md:text-lg flex items-center space-x-1"
            >
              <i className="bi bi-envelope"></i>
              <span className="hidden sm:block">desportivos@lnmiit.ac.in</span>
            </a>
            <a
              href="https://www.youtube.com/@Desportivoslnmiit"
              className="text-white text-xs md:text-lg flex items-center space-x-1"
            >
              <i className="bi bi-youtube"></i>
              <span className="hidden sm:block">Desportivos</span>
            </a>
          </div>
        
          <div className="flex justify-center">
            <img
              className="h-[60px] sm:h-[100px] md:h-[150px] lg:w-[500px] lg:h-[250px]"
              src={despo_text}
              alt="Desportivos Text"
            />
          </div>

          <div className="flex justify-center">
            <p className="text-white text-xs md:text-lg">PRIVACY POLICY</p>
          </div>

          <div className="flex justify-between items-center">
            <a href="#" className="text-white text-xs md:text-lg flex items-center space-x-1">
              <i className="bi bi-person-lines-fill"></i>
              <span className="hidden sm:block">CONTACT US</span>
            </a>
            <a
              href="https://www.instagram.com/desportivos.lnmiit/"
              className="text-white text-xs md:text-lg flex items-center space-x-1"
            >
              <i className="bi bi-instagram"></i>
              <span className="hidden sm:block">desportivos.lnmiit</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

     

