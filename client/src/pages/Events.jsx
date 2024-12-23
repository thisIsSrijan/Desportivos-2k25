import React, { useRef } from "react";
import ParallaxImages from "../components/ParallaxImages";
import StaircaseText from "../components/StaggeredText";

function Events() {
  const scrollContainerRef = useRef(null);

  return (
    <div
      className="relative w-full min-h-screen text-white flex justify-center items-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dzlzhtbfn/image/upload/v1732952318/Background_qmcxay.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Inner Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="absolute z-20 inset-0 overflow-y-scroll"
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <ParallaxImages scrollContainer={scrollContainerRef} />
      </div>

      {/* Static Content */}
      <StaircaseText 
        text="TOGETHER."
        className="absolute z-10 text-9xl md:text-[220px] xl:text-[300px] dharma-gothic-c tracking-wider left-5 top-10 md:top-7"
      />
      <div className="text-sm md:text-xl xl:text-3xl z-10 absolute top-[11rem] right-[13rem] md:right-[23rem] xl:right-[30rem] text-right">
        <h1>NEW SEASON</h1>
        <h1>CAMPION TILL END</h1>
      </div>
      <div className="absolute z-10 right-0 top-[150px]">
        <StaircaseText 
          text="UNITED."
          className="text-9xl md:text-[220px] xl:text-[300px] dharma-gothic-c tracking-wider text-orange-500"
        />
        <h1 className="text-sm md:text-xl xl:text-3xl md:ml-[0px] xl:ml-[0px] xl:mt-[-50px] md:mt-[-40px]">
          DESPORTIVOS'25
        </h1>
      </div>
      <p className="text-sm md:text-3xl absolute z-10 text-orange-500 md:top-[250px] lg:top-[100px] tracking-widest">
        JOIN US.
      </p>
      <div className="absolute z-10 bottom-[-60px] md:bottom-0">
        <img
          src="https://res.cloudinary.com/dzlzhtbfn/image/upload/v1732952325/moto_khggbl.png"
          alt=""
          className="mb-[-250px] md:mb-[10px] xl:mb-[0px] ml-3"
        />
        <StaircaseText 
          text="ONE MORE TIME"
          className="text-8xl md:text-[160px] xl:text-[14rem] dharma-gothic-c tracking-widest"
        />
      </div>
      <h1 className="text-sm md:text-xl lg:text-3xl absolute z-10 bottom-[150px] md:bottom-20 md:left-8 lg:left-[80px]">
        ON THE GAME.
      </h1>
    </div>
  );
}

export default Events;

