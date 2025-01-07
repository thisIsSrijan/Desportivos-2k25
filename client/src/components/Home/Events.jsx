import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ParallaxImages from "../Events_compo/ParallaxImages";
import StaircaseText from "../Events_compo/StaggeredText";

function Events() {
  // const [scrollEnabled, setScrollEnabled] = useState(false); // Toggle scroll behavior
  const scrollContainerRef = useRef(null); // Ref for the scroll container
  // const [scrollPosition, setScrollPosition] = useState(0);

  // const handleScroll = (e) => {
  //   const { scrollTop, scrollHeight, clientHeight } = e.target;
  //   const position = Math.ceil(
  //     (scrollTop / (scrollHeight - clientHeight)) * 100
  //   );
  //   setScrollPosition(position);
  // };
  // console.log(scrollPosition);
  return (
    <div
      className="relative w-full h-full min-h-screen text-white flex justify-center items-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dzlzhtbfn/image/upload/v1732952318/Background_qmcxay.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Static Content */}
      <StaircaseText
        text="TOGETHER."
        className="absolute z-10 text-[165px] sm:text-[210px] md:text-[230px] lg:text-[250px] xl:text-[230px] uxl:text-[270px] dharma-gothic-c tracking-wide left-5 -top-12"
      />
      <div className="text-sm md:text-base lg:text-lg xl:text-1xl z-10 absolute top-2/5 right-[12rem] md:right-[13rem] lg:right-[18rem] xl:right-[20rem] text-right">
        <h1>NEW SEASON</h1>
        <h1>CAMPION TILL END</h1>
      </div>
      <div className="absolute z-10 right-0 top-2/5 md:top-2/5 lg:top-2/5 xl:top-2/5">
        <StaircaseText
          text="UNITED."
          className="text-9xl sm:text-[140px] md:text-[150px] lg:text-[200px] xl:text-[230px] dharma-gothic-c tracking-wide text-orange-500"
        />
        <h1 className="text-sm md:text-xl xl:text-2xl mt-[-25px] md:ml-[-30px] lg:ml-[-50px] xl:ml-[-50px] xl:mt-[-50px] md:mt-[-30px]">
          DESPORTIVOS'25
        </h1>
      </div>
      <p className="text-md sm:text-base md:text-xl lg:text-2xl top-1/3 absolute z-10 text-orange-500 lg:top-[100px] ">
        JOIN US.
      </p>
      <div className="absolute z-10 -bottom-5  md:-bottom-7 lg:-bottom-10  ">
        <img
          src="https://res.cloudinary.com/dzlzhtbfn/image/upload/v1732952325/moto_khggbl.png"
          alt=""
          className="mb-[-8px] md:mb-[-10px] lg:mb-[-10px] xl:mb-[-10px] ml-1 "
        />
        <StaircaseText
          text="ONE MORE TIME"
          className="text-9xl sm:text-[150px] md:text-[180px] lg:text-[190px]  xl:text-[200px] dharma-gothic-c tracking-wide"
        />
      </div>
      <h1 className="text-sm md:text-xl lg:text-2xl absolute z-10 bottom-[155px] sm:bottom-[175px] md:bottom-[15px] md:ml-[-600px] lg:ml-[-700px] xl:ml-[-800px]   uxl:left-1/4  uxl:ml-[-30px]">
        ON THE GAME.
      </h1>

      <motion.div
        ref={scrollContainerRef}
        className="absolute z-20 inset-0 overflow-y-scroll w-screen h-screen"
        style={{
          position: "absolute",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        // onScroll={handleScroll}
      >
        <ParallaxImages scrollContainer={scrollContainerRef} />
      </motion.div>
    </div>
  );
}

export default Events;