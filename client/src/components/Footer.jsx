import React from "react";
import "../index.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Marquee from "react-fast-marquee";

function Footer() {
  // const dot = "/Ellipse 36 (1).png";
  // const despo_text = "/despo_text.png";
  // const bgImg = "/Background.png"; 
  const renderTextWithDot = () => {
    return Array(9)
      .fill()
      .map((_, index) => (
        <div
          key={index}
          className="flex justify-evenly mt-5 items-center space-x-8 whitespace-nowrap"
        >
          <span className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl dharma-gothic-c text-white">
            REGISTER NOW
          </span>
          <img className="w-3 h-3 md:w-5 md:h-5" src="https://res.cloudinary.com/dzlzhtbfn/image/upload/v1732952175/Ellipse_36_1_usfyas.png" alt="dot" />
        </div>
      ));
  };

  return (
    <div
      className="relative w-full h-[280px] sm:h-[360px] md:h-[485px] lg:h-[670px] bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{backgroundImage: "url('https://res.cloudinary.com/dzlzhtbfn/image/upload/v1732952318/Background_qmcxay.png')" }}
    >
      <div className="absolute top-0 sm:top-2 lg:mt-4 left-0 bottom-10 lg:bottom-20 w-full">
        <Marquee speed={150} autoFill={true} className="overflow-hidden no-scrollbar">
          <div className="flex space-x-8">{renderTextWithDot()}</div>
        </Marquee>
        <div className="w-full h-[1px] bg-white"></div>

        <div className="w-[97%] mx-auto rounded-xl md:rounded-3xl mt-[1.8rem] sm:mt-[2rem] md:mt-[2.5rem] lg:mt-[3rem] h-[150px] sm:h-[200px] md:h-[270px] lg:h-[400px] bg-orange-600 p-4 sm:p-6">
          <div className="flex justify-between items-center">
            <a
              href="mailto:desportivos@lnmiit.ac.in"
              className="text-white text-xs md:text-sm lg:text-2xl flex items-center space-x-1"
            >
              <i className="bi bi-envelope"></i>
              <span className="hidden sm:block">desportivos@lnmiit.ac.in</span>
            </a>
            <a
              href="https://www.youtube.com/@Desportivoslnmiit"
              className="text-white text-xs md:text-sm  lg:text-2xl flex items-center space-x-1"
            >
              <i className="bi bi-youtube"></i>
              <span className="hidden sm:block">Desportivos</span>
            </a>
          </div>
        
          <div className="flex justify-center">
            <img
              className="h-[70px] sm:h-[100px] md:h-[150px] lg:w-[500px] lg:h-[250px] relative lg:right-10 right-2 sm:right-5"
              src="https://res.cloudinary.com/dzlzhtbfn/image/upload/v1732952202/despo_text_mzyynm.png"
              alt="Desportivos Text"
            />
          </div>

          <div className="flex justify-center">
            <p className="text-white text-xxs sm:text-xs  md:text-lg ">PRIVACY POLICY</p>
          </div>

          <div className="flex justify-between items-center">
            <a href="#" className="text-white text-xs md:text-sm  lg:text-2xl flex items-center space-x-1">
              <i className="bi bi-person-lines-fill"></i>
              <span className="hidden sm:block">Contact Us</span>
            </a>
            <a
              href="https://www.instagram.com/desportivos.lnmiit/"
              className="text-white text-xs md:text-sm lg:text-2xl flex items-center space-x-1"
            >
              <i className="bi bi-instagram"></i>
              <span className="hidden sm:block ">desportivos.lnmiit</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
