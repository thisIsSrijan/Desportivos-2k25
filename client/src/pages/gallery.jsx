import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img0 from "../assets/images/img0.jpg";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";
import img7 from "../assets/images/img7.jpg";
import img8 from "../assets/images/img8.jpg";
import img9 from "../assets/images/img9.jpg";
import img10 from "../assets/images/img10.jpg";
import img11 from "../assets/images/img11.jpg";
import img12 from "../assets/images/img12.jpg";
import img13 from "../assets/images/img13.jpg";
import img14 from "../assets/images/img14.jpg";
import img15 from "../assets/images/img15.jpg";
import bgimg from "../assets/images/bgg.jpg";
import { Link } from "react-router-dom";

const images = [
  img0,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
];

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [startY, setStartY] = useState(null);

  // Navigation helpers
  const nextImage = () =>
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);

  const prevImage = () =>
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );

  // Handle keyboard navigation
  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextImage();
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      prevImage();
    }
  };

  // Handle swipe gestures
  const handleTouchStart = (event) => setStartY(event.touches[0].clientY);

  const handleTouchMove = (event) => {
    if (startY === null) return;
    const currentY = event.touches[0].clientY;
    const deltaY = startY - currentY;

    if (Math.abs(deltaY) > 50) {
      deltaY > 0 ? nextImage() : prevImage();
      setStartY(null); // Reset swipe tracking
    }
  };

  const handleTouchEnd = () => setStartY(null);

  // Handle screen taps for navigation
  const handleScreenTap = (event) => {
    const tapX = event.clientX || event.touches?.[0]?.clientX;
    const screenWidth = window.innerWidth;

    if (tapX < screenWidth / 2) {
      prevImage();
    } else {
      nextImage();
    }
  };

  // Event listeners for keyboard, swipe, and screen tap
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div
      className="h-screen w-screen relative overflow-hidden"
      onClick={handleScreenTap}
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <Link
        to="/"
        className="text-center align-middle absolute w-fit h-fit py-2 px-5 right-[16px] sm:right-16 sm:top-[30px] top-[26px] border-2 border-[#F85B02] shadow-[2px_1.5px_13px_#F85B02] rounded-xl z-10 text-white text-l sm:text-xl lg:text-3xl bg-[#424242BF] font-squid hover:bg-[#515151bf] hover:scale-105"
      >
        HOME
      </Link>
      {/* Fullscreen image display */}
      <AnimatePresence>
        <motion.div
          key={currentImage}
          className="h-full  bg-contain lg:bg-cover bg-no-repeat w-full bg-center absolute"
          style={{ backgroundImage: `url(${images[currentImage]})` }}
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9 }}
          aria-live="polite"
        />
      </AnimatePresence>

      {/* Thumbnails */}
      <div className="absolute bottom-5 w-full flex justify-center gap-2">
        {images.map((image, index) => (
          <div
            key={index}
            className={`h-10 w-10 rounded-md overflow-hidden cursor-pointer ${
              index === currentImage ? "ring-4 ring-blue-500" : ""
            }`}
            onClick={() => setCurrentImage(index)}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
