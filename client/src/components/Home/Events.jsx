import { React, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import StaggeredText from '../Events_compo/StaggeredText';
import ParallaxImg from '../Events_compo/ParallaxImages';

const Events = () => {
  const images = [
    {
      src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734769347/imgP1_v0he1z.png",
      alt: "Image 1",
      className:
        "ml-[7vw] lg:ml-[10vw] w-[45%] lg:w-[20rem] h-[400px] lg:h-[450px] ",
        text : "BASKETBALL",
    },
    {
      src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734807975/imgK1_pujyuq.png",
      alt: "Image 2",
      className: "ml-[28%] sm:ml-[30%] md:ml-[45vw] top-[100px] lg:ml-[60vw] uxl:ml-[70vw] w-[68%] sm:w-[68%] md:w-[50%] xl:w-[28rem] lg:w-[25rem]",
    },
    {
      src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734769416/imgP2_iy2bg8.png",
      alt: "Image 3",
      className: "ml-[10vw] md:ml-[15vw] top-[200px] lg:ml-[20vw] w-[45%] lg:w-[20rem] h-[400px] lg:h-[450px]",
      text: "VOLLEYBALL",
    },
    {
      src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734807975/imgK2_wktv95.png",
      alt: "Image 4",
      className: "ml-[21vw] md:ml-[45vw] top-[300px] lg:ml-[60vw] uxl:ml-[70vw] w-[68%] md:w-[50%] xl:w-[28rem] lg:w-[28rem]",
      text: "KABADDI",
    },
    {
      src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734769416/imgP3_jvcaxe.png",
      alt: "Image 5",
      className: "ml-[10vw] md:ml-[15vw] top-[200px] lg:ml-[20vw] w-[45%] lg:w-[20rem] h-[400px] lg:h-[450px]",
      text: "LAWN TENNIS",
    },
    {
      src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734807975/imgK3_xokcch.png",
      alt: "Image 6",
      className: "ml-[22vw] md:ml-[42vw] lg:ml-[60vw] top-[400px] md:top-[500px] lg:ml-[10vw] w-[68%] md:w-[55%] xl:w-[28rem] lg:w-[28rem]",
      text: "SQUASH",
    },
    {
      src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734769416/imgP4_k2qzsv.png",
      alt: "Image 7",
      className: "ml-[5vw] md:ml-[5vw] top-[450px] lg:ml-[10vw] w-[45%] lg:w-[20rem] xl:w-[20rem] h-[400px] lg:h-[450px]",
      text: "CRICKET",
    },
    {
      src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734807975/imgK4_q9mubj.png",
      alt: "Image 8",
      className: "ml-[22vw] md:ml-[40vw] top-[480px] lg:ml-[60vw] uxl:ml-[70vw] w-[73%] md:w-[55%] xl:w-[28rem] lg:w-[28rem]",
      text: "CHESS",
    },
    {
      src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734769416/imgP5_cbfh5s.png",
      alt: "Image 9",
      className: "ml-[7vw] md:ml-[10vw] top-[500px] lg:top-[400px] lg:ml-[10vw] uxl:ml-[10vw] w-[45%] lg:w-[20rem] h-[400px] lg:h-[450px]",
      text: "CARROM",
    },
    {
      src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734807976/imgK5_yh0olk.png",
      alt: "Image 10",
      className: "ml-[21vw] md:ml-[45vw] top-[560px] md:top-[560px] lg:top-[500px] lg:ml-[60vw] uxl:ml-[70vw] w-[73%] md:w-[50%] lg:w-[28rem]",
    },
    {
      src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734769416/imgP6_okvib9.png",
      alt: "Image 11",
      className: "top-[600px]  lg:ml-[10vw] uxl:ml-[10vw] w-[45%] lg:w-[20rem] h-[400px] lg:h-[450px]",
    },
  ];

  const { scrollYProgress } = useScroll();

  return (
    <div className="relative w-full">
      <div
        className="fixed inset-0 w-full h-full"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dzlzhtbfn/image/upload/v1732952318/Background_qmcxay.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          zIndex: -1
        }}
      />

      <div className="relative w-full">
        <div className="sticky top-0 h-screen w-full">
          <div className="relative w-full h-full flex flex-col justify-center">
          <div className="relative w-full h-full flex flex-col justify-center">
  {/* Static Content */}
  <StaggeredText
    text="TOGETHER."
    className="absolute text-white z-10 text-[165px] sm:text-[210px] md:text-[230px] lg:text-[250px] xl:text-[230px] uxl:text-[270px] dharma-gothic-c tracking-wide left-5 -top-12"
  />
  <div className="text-sm text-white md:text-base lg:text-lg xl:text-1xl z-10 absolute top-2/5 right-[12rem] md:right-[13rem] lg:right-[18rem] xl:right-[20rem] text-right">
    <h1>NEW SEASON</h1>
    <h1>CAMPION TILL END</h1>
  </div>

  <div className="absolute z-10 right-0 top-2/5 md:top-2/5 lg:top-2/5 xl:top-2/5">
    <StaggeredText
      text="UNITED."
      className="text-9xl sm:text-[140px] md:text-[150px] lg:text-[200px] xl:text-[230px] dharma-gothic-c tracking-wide text-orange-500"
    />
    <h1 className="text-sm text-white md:text-xl xl:text-2xl mt-[-25px] md:ml-[-30px] lg:ml-[-50px] xl:ml-[-50px] xl:mt-[-50px] md:mt-[-30px]">
      DESPORTIVOS'25
    </h1>
  </div>

  <p className="text-md sm:text-base md:text-xl lg:text-2xl top-1/3 absolute z-10 md:ml-[30rem] lg:ml-[59rem] text-orange-500 lg:top-[100px] ">
    JOIN US.
  </p>

  <div className="absolute z-10 -bottom-5 md:-bottom-7 md:ml-[10rem] lg:ml-[48rem] lg:-bottom-10">
    <img
      src="https://res.cloudinary.com/dzlzhtbfn/image/upload/v1732952325/moto_khggbl.png"
      alt="Moto"
      className="mb-[-8px] md:mb-[-10px] lg:mb-[-10px] xl:mb-[-10px] ml-1"
    />
    <StaggeredText
      text="ONE MORE TIME"
      className="text-9xl text-white sm:text-[150px] md:text-[180px] lg:text-[190px] xl:text-[200px] dharma-gothic-c tracking-wide"
    />
  </div>

  <h1 className="text-sm text-white md:text-xl lg:text-2xl absolute z-10 bottom-[155px] sm:bottom-[175px] md:bottom-[15px] md:ml-[-600px] lg:ml-[-700px] xl:ml-[-800px] uxl:left-1/4 uxl:ml-[-30px]">
    ON THE GAME.
  </h1>
</div>

          </div>
        </div>

        <div className="relative">
          <div className="relative pt-[100vh]">
            {images.map((image, index) => (
              <ParallaxImg key={index} {...image} scrollYProgress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
