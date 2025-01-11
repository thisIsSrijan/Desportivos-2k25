const aws = import.meta.env.VITE_AWS;

const img1 = `${aws}/1.webp`;
const img2 = `${aws}/2.webp`;
const img3 = `${aws}/3.webp`;
const img4 = `${aws}/4.webp`;
const img5 = `${aws}/5.webp`;
const img6 = `${aws}/6.webp`;
const img7 = `${aws}/7.webp`;
const img8 = `${aws}/8.webp`;
const img9 = `${aws}/9.webp`;
const img10 = `${aws}/10.webp`;
const img11 = `${aws}/11.webp`;
const img12 = `${aws}/12.webp`;
const img13 = `${aws}/13.webp`;
const img14 = `${aws}/14.webp`;
const img15 = `${aws}/15.webp`;
const img16 = `${aws}/16.webp`;
const img17 = `${aws}/17.webp`;
const img18 = `${aws}/18.webp`;
const img19 = `${aws}/19.webp`;
const img20 = `${aws}/20.webp`;
const img21 = `${aws}/21.webp`;
const img22 = `${aws}/22.webp`;
const img23 = `${aws}/23.webp`;
const img24 = `${aws}/24.webp`;
const img25 = `${aws}/25.webp`;
const img26 = `${aws}/26.webp`;
const img27 = `${aws}/27.webp`;
const img28 = `${aws}/28.webp`;
const img29 = `${aws}/29.webp`;
const img30 = `${aws}/30.webp`;
const img31 = `${aws}/31.webp`;
const img32 = `${aws}/32.webp`;
const img33 = `${aws}/33.webp`;
const img34 = `${aws}/34.webp`;
const img35 = `${aws}/35.webp`;
const img36 = `${aws}/36.webp`;
const img37 = `${aws}/37.webp`;
const img38 = `${aws}/38.webp`;
const img39 = `${aws}/39.webp`;
const img40 = `${aws}/40.webp`;
const img41 = `${aws}/41.webp`;

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
