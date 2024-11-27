import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "/carouselImages/1.png";
import image2 from "/carouselImages/2.png";
import image3 from "/carouselImages/3.png";
import image4 from "/carouselImages/4.png";
import moto from "/moto.png";
import "../index.css";

function Carousel() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const interval = 4500;
  const words_images = [
    { word: "DESPORTIVOS' 25", image: image1 },
    { word: "SPORTS", image: image2 },
    { word: "PRONITE", image: image3 },
    { word: "ESPORTS", image: image4 },
  ];

  useEffect(() => {
    const cycleWords = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words_images.length);
    }, interval);

    return () => clearInterval(cycleWords);
  }, []);

  return (
    <div className="relative flex h-full w-full justify-center items-center overflow-hidden">
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
                    transition: { duration: 0 },
                  }}
                  transition={{ duration: 0.3 }}
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
                    transition: { duration: 0 },
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className={`absolute text-8xl lg:text-[12rem] tracking-wider text-center select-none z-10 ${
                    index % 2 === 1 ? "text-[#F85B02]" : "text-white"
                  } dharma-gothic-c`}
                >
                  {item.word}
                </motion.div>
                <img
                  src={moto}
                  alt="moto"
                  className="absolute bottom-3 right-3 w-24 h-auto"
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
      </AnimatePresence>
    </div>
  );
}

export default Carousel;
