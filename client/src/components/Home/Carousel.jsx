import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import image1 from "/carouselImages/1.png";
// import image2 from "/carouselImages/2.png";
// import image3 from "/carouselImages/3.png";
// import image4 from "/carouselImages/4.png";
// import moto from "/moto.png";
import "../../App.css";
import logo from "../../assets/images/logo.webp";
import { Link } from "react-router-dom";
import CountdownTimer from "./CountdownTimer";
import heropage from "../../assets/images/heropage.webp";
import heroESports from "../../assets/images/heroESports.webp";
import heroSports from "../../assets/images/heroSports.webp";
import heroPronite from "../../assets/images/heroPronite.webp";
import img from "../../assets/images/EventsImg.webp";
import Menu from "./Menu";

function Carousel() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const interval = 4500;
  const words_images = [
    {
      word: "DESPORTIVOS' 25",
      //image:"https://res.cloudinary.com/dzlzhtbfn/image/upload/v1732952256/1_qjkggx.png",
      image:heropage,
    },
    {
      word: "SPORTS",
      //image:"https://res.cloudinary.com/dzlzhtbfn/image/upload/v1732952256/2_iun5fj.png",
      image:heroSports,
    },
    {
      word: "PRONITE",
      //image:"https://res.cloudinary.com/dzlzhtbfn/image/upload/v1732952257/3_p2ilnb.png",
      image:heroPronite,
    },
    {
      word: "ESPORTS",
      //image:"https://res.cloudinary.com/dzlzhtbfn/image/upload/v1732952258/4_a7xisu.png",
      image:heroESports,
    },
  ];

  useEffect(() => {
    const cycleWords = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words_images.length);
    }, interval);

    return () => clearInterval(cycleWords);
  }, []);

  return (
    <div className="relative bg-black flex h-full w-full justify-center items-center overflow-hidden ">
      <div>
        <img
          src={logo}
          alt="Logo"
          className="absolute lg:h-[150px] sm:h-[120px] h-[80px] w-30 sm:top-[24px] top-[3px] left-[-5px] sm:left-[16px] z-10"
          onClick={() => (window.location.href = "/")}
          style={{ cursor: "pointer" }} // Adds a pointer cursor for better UX
        />
      </div>

      <Link
        to="/register"
        className=" hidden md:block text-center align-middle absolute w-fit h-fit p-2 right-[16px] sm:right-16 sm:top-[75px] top-[30px] border-2 border-[#F85B02] shadow-[2px_1.5px_13px_#F85B02] rounded-xl z-10 text-white text-l sm:text-xl lg:text-3xl bg-[#424242BF] font-squid hover:bg-[#515151bf] hover:scale-105"
      >
        REGISTER
      </Link>

      {/* Countdown Timer Component */}
      <CountdownTimer />

      <AnimatePresence mode="popLayout">
        {words_images.map(
          (item, index) =>
            index === currentWordIndex && (
              <div
                key={item.word}
                className="h-screen w-screen relative flex justify-center items-center"
              >
                <motion.img
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{
                    x: -100,
                    opacity: 0,
                    transition: { duration: 0.5 },
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                  src={item.image}
                  alt={item.word}
                  className="w-screen h-screen object-cover select-none"
                />
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{
                    y: 50,
                    opacity: 0,
                    transition: { duration: 0.5 },
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                  className={`absolute text-8xl lg:text-[12rem] tracking-wider text-center select-none z-10 ${
                    index % 2 === 1 ? "text-[#F85B02]" : "text-white"
                  } dharma-gothic-c`}
                >
                  {item.word}
                </motion.div>
                <img
                  // src="https://res.cloudinary.com/dzlzhtbfn/image/upload/v1732952325/moto_khggbl.png"
                  src={img}
                  alt="moto"
                  className="absolute bottom-3 right-4 w-24 lg:bottom-8 lg:right-8 lg:w-36 h-auto"
                />
                {/* <motion.div
                  initial={{ width: 0, opacity: 1 }}
                  animate={{ width: "100%", opacity: 1 }}
                  exit={{
                    width: "0%",
                    opacity: 0,
                    transition: { duration: 0 },
                  }}
                  transition={{
                    duration: interval / 1000,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-0 left-0 h-2 bg-[#F85B02] z-10"
                ></motion.div> */}
              </div>
            )
        )}
        <div className="absolute h-screen w-screen flex justify-center items-end pb-8">
          <Menu />
        </div>
      </AnimatePresence>
    </div>
  );
}

export default Carousel;
