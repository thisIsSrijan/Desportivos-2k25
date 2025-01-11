import React, { useState } from "react";
import Background from "../../assets/images/Background.webp";
import xImage from "../../assets/images/x.webp";
import zImage from "../../assets/images/0.webp";
import tImage from "../../assets/images/tri.webp";
import sqImage from "../../assets/images/squ.webp";
import sp1 from "../../assets/images/sp1.webp";
import sp2 from "../../assets/images/sp2.webp";
import sp3 from "../../assets/images/sp3.webp";
import sp4 from "../../assets/images/sp4.webp";
import contentData from "../../assets/data/aboutData";
import { motion, AnimatePresence } from "framer-motion";

const Sports = () => {
  const images = ["sp1", "sp2", "sp3", "sp4"];
  const [activeImage, setActiveImage] = useState("sp1");
  const [isLoading, setIsLoading] = useState(false);
  const [direction, setDirection] = useState("right");
  const [titleDirection, setTitleDirection] = useState("front-to-top");

  const handleNext = () => {
    if (isLoading) return;
    setIsLoading(true);
    setDirection("left");
    setTitleDirection("front-to-top");

    const currentIndex = images.indexOf(activeImage);
    const nextIndex = (currentIndex + 1) % images.length;

    setTimeout(() => {
      setActiveImage(images[nextIndex]);
      setIsLoading(false);
    }, 300);
  };

  const handlePrev = () => {
    if (isLoading) return;
    setIsLoading(true);
    setDirection("right");
    setTitleDirection("top-to-front");

    const currentIndex = images.indexOf(activeImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;

    setTimeout(() => {
      setActiveImage(images[prevIndex]);
      setIsLoading(false);
    }, 300);
  };

  const handleImageClick = (image) => {
    if (!isLoading) {
      setActiveImage(image);
    }
  };

  const selectedContent = contentData.find((item) => item.id === activeImage);

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full relative">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Left section - becomes background on mobile */}
      <div className="w-full md:w-1/2 h-screen absolute md:relative z-0 md:z-10">
        <div className="w-full h-full flex">
          {/* image1 */}
          <motion.div
          className={`flex-1 order-1 opacity-50 relative  ${
            activeImage === "sp1" ? "md:z-10 md:opacity-100" : "md:opacity-50"
          }`}
          style={{
            backgroundImage: `url(${xImage})`,
            backgroundSize: "400% 100%",
            backgroundPosition: "0% 0%",
            backgroundRepeat: "no-repeat",
          }}
          initial={{ x: -100, height: 0 }} // Start slightly off-screen to the left
          // animate={{ opacity: 1, x: 0 }} // Slide in and become visible
          whileInView={{ x: 0, height: "100%" }} // S
          transition={{ duration: 0.5, delay: 0.2 }} // Smooth animation
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0 }} // Start slightly off-screen to the left
            // animate={{ opacity: 1, x: 0 }} // Slide in and become visible
            whileInView={{ scale: 1 }} // S
            transition={{ duration: 0.5, delay: 1.8 }} // Smooth animation
            viewport={{ once: true }}
            className={` absolute w-[47.3vw] md:w-[28.2vw] aspect-[0.73] -left-[2vw] bottom-0 bg-no-repeat  ${
              activeImage === "sp1"
                ? "z-50 opacity-100"
                : " z-20 md:opacity-50 opacity-100"
            } `}
            style={{
              backgroundImage: `url(${sp1})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          ></motion.div>
        </motion.div>
        {/* image2 */}
        <motion.div
          className={`flex-1 order-4 md:order-2 opacity-50 relative ${
            activeImage === "sp2" ? "z-10 md:opacity-100" : "opacity-50"
          }`}
          style={{
            backgroundImage: `url(${zImage})`,
            backgroundSize: "400% 100%",
            backgroundPosition: "32% 0%",
            backgroundRepeat: "no-repeat",
          }}
          initial={{ x: -100, height: 0 }} // Start slightly off-screen to the left
          // animate={{ opacity: 1, x: 0 }} // Slide in and become visible
          whileInView={{ x: 0, height: "100%" }} // S
          transition={{ duration: 0.5, delay: 0.4 }} // Smooth animation
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0 }} // Start slightly off-screen to the left
            // animate={{ opacity: 1, x: 0 }} // Slide in and become visible
            whileInView={{ scale: 1 }} // S
            transition={{ duration: 0.5, delay: 1.3 }} // Smooth animation
            viewport={{ once: true }}
            className={` absolute aspect-[0.73] w-[42vw] md:w-[21.5vw] -left-[16vw] md:-left-[2vw] -bottom-[12vw] md:-bottom-[6vw] bg-no-repeat  ${
              activeImage === "sp2" ? "z-50 opacity-100" : "z-20 md:opacity-50"
            }`}
            style={{
              backgroundImage: `url(${sp2})`,
              backgroundSize: "contain",
            }}
          ></motion.div>
        </motion.div>

        {/* image3 */}
        <motion.div
          className={`flex-1 order-3 opacity-50  relative ${
            activeImage === "sp3" ? "z-10 opacity-100" : "opacity-50"
          }`}
          style={{
            backgroundImage: `url(${tImage})`,
            backgroundSize: "400% 100%",
            backgroundPosition: "67% 0%",
            backgroundRepeat: "no-repeat",
          }}
          initial={{ x: -100, height: 0.4 }} // Start slightly off-screen to the left
          // animate={{ opacity: 1, x: 0 }} // Slide in and become visible
          whileInView={{ x: 0, height: "100%" }} // S
          transition={{ duration: 0.5, delay: 0.6 }} // Smooth animation
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0 }} // Start slightly off-screen to the left
            // animate={{ opacity: 1, x: 0 }} // Slide in and become visible
            whileInView={{ scale: 1 }} // S
            transition={{ duration: 0.5, delay: 0.8 }} // Smooth animation
            viewport={{ once: true }}
            className={` absolute bg-no-repeat  aspect-[0.67] w-[41vw] md:w-[22.5vw] -left-[6vw] md:-left-[3vw] -bottom-[0.4vw] ${
              activeImage === "sp3"
                ? "z-50 opacity-100 "
                : "z-10 opacity-100 md:opacity-50"
            }`}
            style={{
              backgroundImage: ` url(${sp3})`,
              backgroundSize: "contain",
            }}
          ></motion.div>
        </motion.div>

        {/* image4 */}
        <motion.div
          className={`flex-1 order-2 md:order-4  relative opacity-50  ${
            activeImage === "sp4" ? "md:z-10 md:opacity-100" : "opacity-50"
          }`}
          style={{
            backgroundImage: ` url(${sqImage})`,
            backgroundSize: "400% 100%",
            backgroundPosition: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
          initial={{ x: -100, height: 0.6 }} // Start slightly off-screen to the left
          // animate={{ opacity: 1, x: 0 }} // Slide in and become visible
          whileInView={{ x: 0, height: "100%" }} // S
          transition={{ duration: 0.5, delay: 0.8 }} // Smooth animation
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0 }} // Start slightly off-screen to the left
            // animate={{ opacity: 1, x: 0 }} // Slide in and become visible
            whileInView={{ scale: 1 }} // S
            transition={{ duration: 0.5, delay: 0.3 }} // Smooth animation
            viewport={{ once: true }}
            className={` absolute aspect-[0.8] md:w-[24vw]  w-[42vw] -bottom-[3vw] md:-bottom-[2vw] -left-[5vw]   bg-no-repeat  ${
              activeImage === "sp4" ? "z-50 opacity-100" : "z-20 md:opacity-50"
            }`}
            style={{
              backgroundImage: `url(${sp4})`,
              backgroundSize: "contain",
            }}
          ></motion.div>
        </motion.div>
      </div>
      </div>

      {/* Right section - overlays on mobile */}
      <div className="w-full md:w-1/2 min-h-screen flex items-center justify-center relative z-10 bg-black bg-opacity-50 md:bg-transparent">
        {selectedContent && (
          <div className="flex flex-col items-center px-4 md:px-8 py-12 md:py-0">
            <AnimatePresence mode="wait">
              <motion.h1
                key={selectedContent.title}
                initial={{
                  rotateX: titleDirection === "front-to-top" ? -90 : 90,
                  opacity: 0,
                }}
                animate={{
                  rotateX: 0,
                  opacity: 1,
                }}
                exit={{
                  rotateX: titleDirection === "front-to-top" ? 90 : -90,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="font-dharma font-extrabold text-6xl md:text-7xl lg:text-9xl mb-8"
                style={{ color: selectedContent.color }}
              >
                {selectedContent.title}
              </motion.h1>
            </AnimatePresence>
   
            <motion.div
              key={activeImage}
              initial={{ x: direction === "right" ? 100 : -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction === "right" ? -100 : 100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-6 max-w-xl"
            >
              <p className="text-white text-center text-base md:text-lg">
                {selectedContent.description}
              </p>
              
              <p className="text-white text-center text-base md:text-lg">
                {selectedContent.description2}
              </p>
            </motion.div>

            <div className="flex gap-6 mt-12">
              <button
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white bg-opacity-10 text-white rounded-full border border-white backdrop-blur-sm transition-transform hover:scale-110"
                onClick={handlePrev}
              >
                <i className="fa fa-chevron-left"></i>
              </button>
              <button
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white bg-opacity-10 text-white rounded-full border border-white backdrop-blur-sm transition-transform hover:scale-110"
                onClick={handleNext}
              >
                <i className="fa fa-chevron-right"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sports;