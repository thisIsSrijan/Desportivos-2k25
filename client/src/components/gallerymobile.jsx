import img1 from "../assets/images/1.webp";
import img2 from "../assets/images/2.webp";
import img3 from "../assets/images/3.webp";
import img4 from "../assets/images/4.webp";
import img5 from "../assets/images/5.webp";
import img6 from "../assets/images/6.webp";
import img7 from "../assets/images/7.webp";
import img8 from "../assets/images/8.webp";
import img9 from "../assets/images/9.webp";
import img10 from "../assets/images/10.webp";
import img11 from "../assets/images/11.webp";
import img12 from "../assets/images/12.webp";
import img13 from "../assets/images/13.webp";
import img14 from "../assets/images/14.webp";
import img15 from "../assets/images/15.webp";
import img16 from "../assets/images/16.webp";
import img17 from "../assets/images/17.webp";
import img18 from "../assets/images/18.webp";
import img19 from "../assets/images/19.webp";
import img20 from "../assets/images/20.webp";
import img21 from "../assets/images/21.webp";
import img22 from "../assets/images/22.webp";
import img23 from "../assets/images/23.webp";
import img24 from "../assets/images/24.webp";
import img25 from "../assets/images/25.webp";
import img26 from "../assets/images/26.webp";
import img27 from "../assets/images/27.webp";
import img28 from "../assets/images/28.webp";
import img29 from "../assets/images/29.webp";
import img30 from "../assets/images/30.webp";
import img31 from "../assets/images/31.webp";
import img32 from "../assets/images/32.webp";
import img33 from "../assets/images/33.webp";
import img34 from "../assets/images/34.webp";
import img35 from "../assets/images/35.webp";
import img36 from "../assets/images/36.webp";
import img37 from "../assets/images/37.webp";
import img38 from "../assets/images/38.webp";
import img39 from "../assets/images/39.webp";
import img40 from "../assets/images/40.webp";
import img41 from "../assets/images/41.webp";

import React, { useState } from "react";
import { motion } from "framer-motion";

const GalleryMobile = () => {
  const [expandedImage, setExpandedImage] = useState(null);

  // Function to handle opening an image
  const openImage = (img) => {
    setExpandedImage(img);
  };

  // Function to handle closing the expanded image
  const closeImage = () => {
    setExpandedImage(null);
  };

  return (
    <div>
      <div className="h-fit bg-black md:hidden grid grid-cols-3 gap-1 absolute inset-0">
        {/* Sports Section (Images 1-13) */}
        <div className="col-span-2 text-center text-white font-semibold mt-4">
          <motion.h1
            className="text-8xl font-bold text-gradient text-[#F85B02] dharma-gothic-c tracking-wide"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Sports
          </motion.h1>
        </div>
        {[
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
          img1,
        ].map((img, index) => (
          <div
            key={index}
            className="bg-cover bg-no-repeat bg-center rounded-lg shadow-lg"
            style={{
              backgroundImage: `url(${img})`,
              height: "120px",
            }}
            onClick={() => openImage(img)} // Open image when clicked
          ></div>
        ))}

        {/* Esports Section (Images 14-21) */}
        <div className="col-span-2 text-center text-white font-semibold mt-4">
          <motion.h1
            className="text-8xl font-bold text-gradient text-[#479A76] dharma-gothic-c tracking-wide"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Esports
          </motion.h1>
        </div>
        {[img14, img15, img16, img17, img18, img19, img20, img21].map(
          (img, index) => (
            <div
              key={index}
              className="bg-cover bg-no-repeat bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage: `url(${img})`,
                height: "120px",
              }}
              onClick={() => openImage(img)} // Open image when clicked
            ></div>
          )
        )}

        {/* Food Festival Section (Images 22-29) */}
        <div className="col-span-2 text-center text-white font-semibold mt-4">
          <motion.h1
            className="text-8xl font-bold text-gradient text-[#AC3A76] dharma-gothic-c tracking-wide"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Food Festival
          </motion.h1>
        </div>
        {[img22, img23, img24, img25, img26, img27, img28, img29].map(
          (img, index) => (
            <div
              key={index}
              className="bg-cover bg-no-repeat bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage: `url(${img})`,
                height: "120px",
              }}
              onClick={() => openImage(img)} // Open image when clicked
            ></div>
          )
        )}

        {/* Prom Night Section (Images 30-41) */}
        <div className="col-span-2 text-center text-white font-semibold mt-4">
          <motion.h1
            className="text-8xl font-bold text-gradient text-[#7E2894] dharma-gothic-c tracking-wide"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Pro Night
          </motion.h1>
        </div>
        {[
          img30,
          img31,
          img32,
          img33,
          img34,
          img35,
          img36,
          img37,
          img38,
          img39,
          img40,
          img41,
        ].map((img, index) => (
          <div
            key={index}
            className="bg-cover bg-center rounded-lg shadow-lg"
            style={{
              backgroundImage: `url(${img})`,
              height: "120px",
            }}
            onClick={() => openImage(img)} // Open image when clicked
          ></div>
        ))}

        {/* If an image is expanded, show it full screen */}
        {expandedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
            onClick={closeImage} // Close on clicking outside the image
          >
            <div className="relative">
              <img
                src={expandedImage}
                alt="Expanded"
                className="max-w-full max-h-screen object-contain"
              />
              <button
                className="absolute top-0 right-0 text-white text-4xl font-bold p-2"
                onClick={closeImage} // Close on clicking the cross button
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryMobile;
