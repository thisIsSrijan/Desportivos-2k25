import {useScroll } from 'framer-motion';
import StaggeredText from '../Events_compo/StaggeredText';
import ParallaxImg from '../Events_compo/ParallaxImages';
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ParallaxImages from "../Events_compo/ParallaxImages";
import StaircaseText from "../Events_compo/StaggeredText";

const aws=import.meta.env.VITE_AWS;
// Images
const Background = `${aws}/Background.webp`;
const img = `${aws}/EventsImg.webp`;
const img1 = `${aws}/Eventsimg1.webp`;
const img2 = `${aws}/Eventsimg2.webp`;
const img3 = `${aws}/Eventsimg3.webp`;
const img4 = `${aws}/Eventsimg4.webp`;
const img5 = `${aws}/Eventsimg5.webp`;
const img6 = `${aws}/Eventsimg6.webp`;
const img7 = `${aws}/Eventsimg7.webp`;
const img8 = `${aws}/Eventsimg8.webp`;
const img9 = `${aws}/Eventsimg9.webp`;
const img10 = `${aws}/Eventsimg10.webp`;
const img11 = `${aws}/Eventsimg11.webp`;
const img12 = `${aws}/Eventsimg12.webp`;

// PDFs
const pdf1 = `${aws}/Basketball (1).pdf`;
const pdf2 = `${aws}/Futsal (1).pdf`;
const pdf3 = `${aws}/Volleyball.pdf`;
const pdf4 = `${aws}/Kabaddi (1).pdf`;
const pdf5 = `${aws}/Lawn Tennis (1).pdf`;
const pdf6 = `${aws}/Squash (1).pdf`;
const pdf7 = `${aws}/Cricket.pdf`;
const pdf8 = `${aws}/Chess (1).pdf`;
const pdf9 = `${aws}/Carrom.pdf`;
const pdf10 = `${aws}/Badminton (1).pdf`;
const pdf11 = `${aws}/Football (1).pdf`;
const pdf12 = `${aws}/Table Tennis.pdf`;

const Events = () => {
  const images = [
    {
      // src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734769347/imgP1_v0he1z.png",
      src:img6,
      alt: "Image 1",
      className:
        "ml-[7vw] sm:ml-[10vw] w-[38%] lg:w-[20rem] h-[220px] xs1-sm:h-[260px] sm:h-[280px] md:h-[350px] lg:h-[450px] ",
        text : "BASKETBALL",
       pdfLink: pdf1
    },
    {
      // src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734807975/imgK1_pujyuq.png",
      src:img1,
      alt: "Image 2",
      className: "ml-[40%] md:ml-[45vw] top-[150px] lg:ml-[60vw] uxl:ml-[70vw] w-[55%] sm:w-[48%] md:w-[50%] xl:w-[28rem] lg:w-[25rem]",
      text: "FUTSAL",
      pdfLink: pdf2
    },
    {
      // src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734769416/imgP2_iy2bg8.png",
      src:img7,
      alt: "Image 3",
      className: "ml-[10vw] md:ml-[15vw] top-[250px] lg:ml-[20vw] w-[38%] lg:w-[20rem] h-[220px] xs1-sm:h-[260px] sm:h-[280px] md:h-[350px] lg:h-[450px]",
      text: "VOLLEYBALL",
      pdfLink: pdf3
    },
    {
      // src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734807975/imgK2_wktv95.png",
      src:img2,
      alt: "Image 4",
      className: "ml-[40%] md:ml-[45vw] top-[400px] lg:ml-[60vw] uxl:ml-[70vw] w-[55%] sm:w-[48%] md:w-[50%]  xl:w-[28rem] lg:w-[25rem]",
      text: "KABADDI",
      pdfLink: pdf4
    },
    {
      // src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734769416/imgP3_jvcaxe.png",
      src:img8,
      alt: "Image 5",
      className: "ml-[10vw] md:ml-[15vw] top-[500px] lg:ml-[20vw] w-[38%] lg:w-[20rem] h-[220px] xs1-sm:h-[260px] sm:h-[280px] md:h-[350px] lg:h-[450px]",
      text: "LAWN TENNIS",
      pdfLink: pdf5
    },
    {
      // src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734807975/imgK3_xokcch.png",
      src:img3,
      alt: "Image 6",
      className: "ml-[40%] md:ml-[42vw] lg:ml-[60vw] top-[700px] lg:ml-[10vw] w-[55%] sm:w-[48%] md:w-[55%] xl:w-[28rem] lg:w-[25rem]",
      text: "SQUASH",
      pdfLink: pdf6
    },
    {
      // src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734769416/imgP4_k2qzsv.png",
      src:img9,
      alt: "Image 7",
      className: "ml-[5vw] md:ml-[5vw] top-[800px] lg:ml-[10vw] w-[38%] lg:w-[20rem] xl:w-[20rem] h-[220px] xs1-sm:h-[260px] sm:h-[280px] md:h-[350px] lg:h-[450px]",
      text: "CRICKET",
      pdfLink: pdf7
    },
    {
      // src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734807975/imgK4_q9mubj.png",
      src:img4,
      alt: "Image 8",
      className: "ml-[40%] md:ml-[40vw] top-[900px] lg:ml-[60vw] uxl:ml-[70vw] w-[55%] sm:w-[48%] md:w-[55%] xl:w-[28rem] lg:w-[25rem]",
      text: "CHESS",
      pdfLink: pdf8
    },
    {
      // src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734769416/imgP5_cbfh5s.png",
      src:img10,
      alt: "Image 9",
      className: "ml-[7vw] md:ml-[10vw] top-[1000px] lg:ml-[10vw] uxl:ml-[10vw] w-[38%] lg:w-[20rem] h-[220px] xs1-sm:h-[260px] sm:h-[280px] md:h-[350px] lg:h-[450px]",
      text: "CARROM",
      pdfLink: pdf9
    },
    {
      // src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734807976/imgK5_yh0olk.png",
      src:img5,
      alt: "Image 10",
      className: "ml-[40%] md:ml-[45vw] top-[1100px] lg:top-[1200px] lg:ml-[60vw] uxl:ml-[70vw] w-[55%] sm:w-[48%] md:w-[50%] lg:w-[25rem]",
      text: "BADMINTON",
      pdfLink: pdf10
    },
    {
      // src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734769416/imgP6_okvib9.png",
      src:img11,
      alt: "Image 11",
      className: "top-[1200px] ml-[10vw]  lg:ml-[10vw] uxl:ml-[10vw] w-[38%] lg:w-[20rem] h-[220px] xs1-sm:h-[260px] sm:h-[280px] md:h-[350px] lg:h-[450px]",
      text: "Football",
      pdfLink: pdf11
    },
    {
      // src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734769416/imgP6_okvib9.png",
      src:img12,
      alt: "Image 12",
      className: "ml-[40%] md:ml-[45vw] top-[1300px] lg:top-[1200px] lg:ml-[60vw] uxl:ml-[70vw] w-[55%] sm:w-[48%] md:w-[50%] lg:w-[25rem]",
      text: "Table Tennis",
      pdfLink: pdf12
    },
  ];

  const { scrollYProgress } = useScroll();

  return (
    <div className="relative w-full">
      <div
        className="fixed inset-0 w-full h-full"
        style={{
          // backgroundImage: "url('https://res.cloudinary.com/dzlzhtbfn/image/upload/v1732952318/Background_qmcxay.png')",
          backgroundImage: `url(${Background})`,
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

  <div className="absolute z-10 -bottom-5  md:ml-[10rem] lg:ml-[48rem]">
    <img
      // src="https://res.cloudinary.com/dzlzhtbfn/image/upload/v1732952325/moto_khggbl.png"
      src={img}
      alt="Moto"
      className="mb-[-8px] md:mb-[-10px] lg:mb-[-10px] xl:mb-[-10px] ml-1"
    />
    <StaggeredText
      text="ONE MORE TIME"
      className="text-9xl text-white sm:text-[100px]  xl:text-[190px] dharma-gothic-c tracking-wide"
    />
  </div>

  <h1 className="text-sm text-white md:text-xl lg:text-2xl absolute z-10 bottom-[155px] sm:bottom-[175px] md:bottom-[15px] md:ml-[-600px] lg:ml-[-700px] xl:ml-[-800px] uxl:left-1/4 uxl:ml-[-30px]">
    ON THE GAME.
  </h1>
</div>

          </div>
        </div>

        <div className="relative">
          <div className="relative pt-[5vh] pb-[100vh]">
            {images.map((image, index) => (
              <ParallaxImg key={index} {...image} scrollYProgress={scrollYProgress}  pdfLink={image.pdfLink}/>
            ))}
             <div className="h-[200vh] lg:h-[150vh]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
