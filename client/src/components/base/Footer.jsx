import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../index.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import DespoFooter from "./DespoFooter";
import Marquee from "react-fast-marquee";
const aws = import.meta.env.VITE_AWS;
const Background = `${aws}/Background.webp`;
const Ellipse = `${aws}/MarqueEllipse.webp`;


function Footer() {
  const renderTextWithDot = () => {
    return Array(9)
      .fill()
      .map((_, index) => (
        <div
          key={index}
          className="flex justify-evenly mt-5 items-center space-x-8 whitespace-nowrap"
        >
          <span className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl dharma-gothic-c text-white ml-6">
            REGISTER NOW
          </span>
          <img
            className="w-3 h-3 md:w-5 md:h-5"
            src={Ellipse}
            alt="dot"
          />
        </div>
      ));
  };

  const color1 = ["hover:bg-[#9D1241]", "hover:bg-[#F6931C]"];
  const color2 = ["hover:bg-[#12A79C]", "hover:bg-[#E4D6A7]"];
  
  const SectionCard = ({ title, buttonLabel, colors, navigateTo }) => {
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();

    const handleMouseEnter = () => {
      setIndex((prevIndex) => (prevIndex + 1) % colors.length);
    };

    const handleClick = () => {
      navigate(navigateTo);
    };

    return (
      <div
        className={`relative w-[80%] max-w-[510px] md:max-w-[540px] h-[100px] xs2-xs1:h-[105px] xs1-sm:h-[110px] sm:h-[110px] md:h-[130px] lg:h-[170px] uxl:h-[190px] rounded-[45px] md:rounded-[50px] flex items-center justify-start mx-auto px-6 bg-gray-400 transition-colors duration-300 ${colors[index]} my-2 cursor-pointer mb-4 md:mb-0`}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
      >
        <h1 className="text-[4rem] xs2-xs1:text-[4.6rem] xs1-sm:text-[5.5rem] sm:text-6xl md:text-7xl lg:text-[7rem] xl:text-9xl dharma-gothic-c text-left m-1 xs2-sm:m-1 tracking-wider sm:ml-0">
          {title}
        </h1>
        <button
          className="absolute w-21 h-21 right-[20px] bottom-[20px] border-2 border-black rounded-full flex items-center justify-center rotate-45 duration-300 hover:rotate-0 hover:scale-110"
          aria-label={buttonLabel}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 xs2-xs1:w-7 xs2-xs1:h-7 xs1-sm:w-8 xs1-sm:h-8 sm:w-6 sm:h-6 md:w-9 md:h-9 lg:w-12 lg:h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 12h12m0 0l-4 4m4-4l-4-4"
            />
          </svg>
        </button>
      </div>
    );
  };

  return (
    <div
      className="relative w-full sm:h-[570px] md:h-[660px] lg:h-[890px] bg-cover bg-center bg-no-repeat overflow-hidden py-2"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <div className="flex flex-col gap-[8%] mt-10 sm:flex-row sm:px-[5%]">
        <SectionCard
          title="MEET THE TEAM"
          buttonLabel="View team details"
          colors={color1}
          navigateTo="/ourteam"
        />
        <SectionCard
          title="SPONSORS"
          buttonLabel="View sponsors details"
          colors={color2}
          navigateTo="/sponsors"
        />
      </div>
      <div className="lg:mt-4 left-0 bottom-10 lg:bottom-10 w-full">
        <Marquee
          speed={150}
          autoFill={true}
          className="overflow-hidden no-scrollbar"
        >
          <div className="flex">{renderTextWithDot()}</div>
        </Marquee>
        <div className="w-full h-[1px] bg-white"></div>
        <DespoFooter />
      </div>
    </div>
  );
}

export default Footer;
