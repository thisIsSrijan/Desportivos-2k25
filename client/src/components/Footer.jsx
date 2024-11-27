import React from "react";
import "../index.css";

function Footer() {
  const dot = "/Ellipse 36 (1).png";
  const despo_text = "/despo_text.png";

  const renderTextWithDot = () => {
    return Array(9)
      .fill()
      .map((_, index) => (
        <div
          key={index}
          className="flex justify-evenly mt-5 items-center space-x-8 whitespace-nowrap"
        >
          <span className="text-6xl sm:text-7xl md:text-9xl dharma-gothic-c ">
            Register Now
          </span>
          <img className="w-6 h-5" src={dot} alt="dot" />
        </div>
      ));
  };

  return (
    <div className="w-full h-[100vh] overflow-hidden bg-gray-100">
      <marquee
        scrollamount="20"
        behavior="scroll"
        direction="left"
        autoFill="true"
        loop="0"
        pauseOnHover="true"
      >
        <div className="flex space-x-12">
          {renderTextWithDot()}
          <span className="text-6xl sm:text-7xl md:text-9xl dharma-gothic-c mt-5 ">
            Register Now
          </span>
        </div>
      </marquee>
      <div className="w-full h-1 bg-black"></div>

      <div className="flex justify-center">
        <div className="w-[97%] border rounded-[50px] mt-10 mb-10 h-[150px] md:h-[300px] bg-orange-600 p-3">
          <div className="flex justify-center">
            <img
              className="h-[100px] md:h-[200px] lg:h-[280px]"
              src={despo_text}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
