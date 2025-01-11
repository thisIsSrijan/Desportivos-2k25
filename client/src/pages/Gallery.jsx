import { useState } from "react";

import img1 from "../assets/images/1.png";
import img2 from "../assets/images/2.png";
import img3 from "../assets/images/3.png";
import img4 from "../assets/images/4.png";
import img5 from "../assets/images/5.png";
import img6 from "../assets/images/6.png";
import img7 from "../assets/images/7.png";
import img8 from "../assets/images/8.png";
import img9 from "../assets/images/9.png";
import img10 from "../assets/images/10.png";
import img11 from "../assets/images/11.png";
import img12 from "../assets/images/12.png";
import img13 from "../assets/images/13.png";
import img14 from "../assets/images/14.png";
import img15 from "../assets/images/15.png";
import img16 from "../assets/images/16.png";
import img17 from "../assets/images/17.png";
import img18 from "../assets/images/18.png";
import img19 from "../assets/images/19.png";
import img20 from "../assets/images/20.png";
import img21 from "../assets/images/21.png";
import img22 from "../assets/images/22.png";
import img23 from "../assets/images/23.png";
import img24 from "../assets/images/24.png";
import img25 from "../assets/images/25.png";
import img26 from "../assets/images/26.png";
import img27 from "../assets/images/27.png";
import img28 from "../assets/images/28.png";
import img29 from "../assets/images/29.png";
import img30 from "../assets/images/30.png";
import img31 from "../assets/images/31.png";
import img32 from "../assets/images/32.png";
import img33 from "../assets/images/33.png";
import img34 from "../assets/images/34.png";
import img35 from "../assets/images/35.png";
import img36 from "../assets/images/36.png";
import img37 from "../assets/images/37.png";
import img38 from "../assets/images/38.png";
import img39 from "../assets/images/39.png";
import img40 from "../assets/images/40.png";
import img41 from "../assets/images/41.png";
import GalleryMobile from "../components/gallerymobile";

const images = [
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
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
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
];

const SportsCollageScroll = () => {
  // Define unique positions for each layer
  const layerPositions = [
    [
      { top: "5%", left: "5%" },
      { top: "5%", left: "70%" },
      { top: "50%", left: "10%" },
      { bottom: "5%", left: "73%" },
      { bottom: "2%", left: "45%" },
    ],
    [
      { top: "20%", left: "2%" },
      { top: "5%", left: "75%" },
      { top: "0%", left: "35%" },
      { bottom: "5%", left: "70%" },
      { bottom: "5%", left: "31%" },
    ],
    [
      { top: "7%", left: "22%" },
      { top: "30%", left: "65%" },
      { top: "55%", left: "15%" },
    ],
    [
      { top: "50%", left: "2%" },
      { top: "5%", left: "75%" },
      { top: "2%", left: "5%" },
      { bottom: "5%", left: "70%" },
      { bottom: "5%", left: "31%" },
      { top: "2%", left: "40%" },
    ],
  ];

  const [activeLayer, setActiveLayer] = useState(0);

  const handleNextLayer = () => {
    setActiveLayer((prevLayer) => (prevLayer + 1) % 9); // Updated for new layers
  };

  const getHeadingStyle = (layerIndex) => {
    if (layerIndex < 3) {
      return { color: "#F85B02", textAlign: "center" };
    }
    if (layerIndex >= 3 && layerIndex <= 4) {
      return { color: "#479A76", textAlign: "center" };
    } else if (layerIndex >= 5 && layerIndex <= 6) {
      return { color: "#AC3A76", textAlign: "center" };
    } else if (layerIndex >= 7) {
      return { color: "#7E2894", textAlign: "center" };
    }
    return { textAlign: "center" };
  };

  const getHeadingText = (layerIndex) => {
    if (layerIndex >= 3 && layerIndex <= 4) {
      return "ESPORTS";
    } else if (layerIndex >= 5 && layerIndex <= 6) {
      return "FOOD FESTIVAL";
    } else if (layerIndex >= 7) {
      return "PRONIGHT";
    }
    return "SPORTS";
  };

  return (
    <>
      <div
        className="relative w-full h-screen text-white flex justify-center items-center overflow-hidden bg-black hidden sm:block "
        onClick={handleNextLayer}
      >
        <div className="absolute inset-0 z-30 flex flex-col justify-center items-center">
          <p className="text-lg md:text-2xl lg:text-3xl mb-[-10px] md:mb-[-15px]">
            MORE THAN
          </p>
          <h1
            className="text-center"
            style={{
              fontFamily: "Dharma Gothic C",
              fontSize: "15vw",
              fontWeight: 800,
              lineHeight: "15vw",
              letterSpacing: "0.03em",
              textAlign: "center",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
              ...getHeadingStyle(activeLayer),
            }}
          >
            {getHeadingText(activeLayer)}
          </h1>
          <p className="text-lg md:text-2xl lg:text-3xl mt-[-20px] md:mt-[-40px]">
            A RIVALRY
          </p>
        </div>
        <div className="h-full w-full absolute top-0 left-0">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((layerIndex) => (
            <div
              key={layerIndex}
              className={`absolute inset-0 h-screen w-screen flex justify-center items-center transition-all duration-[1000ms] ${
                layerIndex === activeLayer
                  ? "z-20 blur-none opacity-100"
                  : "z-10 blur-3xl opacity-50"
              }`}
              style={{
                zIndex: layerIndex === activeLayer ? 20 : 10,
                filter: layerIndex === activeLayer ? "blur(0px)" : "blur(10px)",
                opacity: layerIndex === activeLayer ? 1 : 0.5,
              }}
            >
              <div className="relative w-full h-full">
                {layerIndex === 0 &&
                  images.slice(0, 5).map((img, index) => (
                    <div
                      key={index}
                      className="absolute bg-cover bg-center rounded-lg shadow-lg"
                      style={{
                        ...layerPositions[0][index],
                        width: "20vw",
                        height: "20vw",
                        backgroundImage: `url(${img})`,
                      }}
                    ></div>
                  ))}
                {layerIndex === 1 &&
                  images.slice(5, 10).map((img, index) => (
                    <div
                      key={index}
                      className="absolute bg-cover bg-center rounded-lg shadow-lg"
                      style={{
                        ...layerPositions[1][index],
                        width: "22vw",
                        height: "20vw",
                        backgroundImage: `url(${img})`,
                      }}
                    ></div>
                  ))}
                {layerIndex === 2 &&
                  images.slice(10, 13).map((img, index) => (
                    <div
                      key={index}
                      className="absolute bg-cover bg-center rounded-lg shadow-lg"
                      style={{
                        ...layerPositions[2][index],
                        width: "20vw",
                        height: "20vw",
                        backgroundImage: `url(${img})`,
                      }}
                    ></div>
                  ))}
                {layerIndex === 3 &&
                  images.slice(13, 18).map((img, index) => (
                    <div
                      key={index}
                      className="absolute bg-cover bg-center rounded-lg shadow-lg"
                      style={{
                        ...layerPositions[0][index],
                        width: "20vw",
                        height: "20vw",
                        backgroundImage: `url(${img})`,
                      }}
                    ></div>
                  ))}
                {layerIndex === 4 &&
                  images.slice(18, 21).map((img, index) => (
                    <div
                      key={index}
                      className="absolute bg-cover bg-center rounded-lg shadow-lg"
                      style={{
                        ...layerPositions[2][index],
                        width: "30vw",
                        height: "20vw",
                        backgroundImage: `url(${img})`,
                      }}
                    ></div>
                  ))}
                {layerIndex === 5 &&
                  images.slice(21, 26).map((img, index) => (
                    <div
                      key={index}
                      className="absolute bg-cover bg-center rounded-lg shadow-lg"
                      style={{
                        ...layerPositions[0][index],
                        width: "25vw",
                        height: "20vw",
                        backgroundImage: `url(${img})`,
                      }}
                    ></div>
                  ))}
                {layerIndex === 6 &&
                  images.slice(26, 30).map((img, index) => (
                    <div
                      key={index}
                      className="absolute bg-cover bg-center rounded-lg shadow-lg"
                      style={{
                        ...layerPositions[3][index],
                        width: "25vw",
                        height: "20vw",
                        backgroundImage: `url(${img})`,
                      }}
                    ></div>
                  ))}{" "}
                {layerIndex === 7 &&
                  images.slice(30, 35).map((img, index) => (
                    <div
                      key={index}
                      className="absolute bg-cover bg-center rounded-lg shadow-lg"
                      style={{
                        ...layerPositions[0][index],
                        width: "25vw",
                        height: "20vw",
                        backgroundImage: `url(${img})`,
                      }}
                    ></div>
                  ))}{" "}
                {layerIndex === 8 &&
                  images.slice(35, 41).map((img, index) => (
                    <div
                      key={index}
                      className="absolute bg-cover bg-center rounded-lg shadow-lg"
                      style={{
                        ...layerPositions[3][index],
                        width: "20vw",
                        height: "20vw",
                        backgroundImage: `url(${img})`,
                      }}
                    ></div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="block sm:hidden">
        <GalleryMobile />
      </div>
    </>
  );
};

export default SportsCollageScroll;
// import React from "react";
// import { Link } from "react-router-dom";

// const Gallery = () => {
//   return (
//     <div
//       className="bg-black bg-cover relative h-screen w-full"
//       style={{
//         backgroundImage:
//           "url('https://res.cloudinary.com/dturzqo8m/image/upload/v1734955828/ijjesgbpw5ky12jqtjqn.svg')",
//       }}
//     >
//       <Link
//         to="/"
//         className="text-center align-middle absolute w-fit h-fit py-2 px-5 right-[16px] sm:right-16 sm:top-[75px] top-[26px] border-2 border-[#F85B02] shadow-[2px_1.5px_13px_#F85B02] rounded-xl z-10 text-white text-l sm:text-xl lg:text-3xl bg-[#424242BF] font-squid hover:bg-[#515151bf] hover:scale-105"
//       >
//         HOME
//       </Link>
//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-75"></div>

//       {/* Centered content */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
//         <img
//           src="https://res.cloudinary.com/dturzqo8m/image/upload/v1736368604/wq9aixy5glrmnynvpm0z.png"
//           alt="Coming Soon"
//           className="mb-4"
//         />
//         <div className="text-[50px] sm:text-[150px] font-light sm:font-bold text-gradient text-[#F85B02] dharma-gothic-c tracking-wide ">
//           COMING SOON...
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Gallery;
