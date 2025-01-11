import { useState, useEffect } from "react";

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
import GalleryMobile from "../components/gallerymobile";
import CustomCursor from "../components/CustomCusror";
import { Link } from "react-router-dom";

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

  // useEffect(() => {
  //   let timeout;

  //   const handleScroll = (event) => {
  //     clearTimeout(timeout);

  //     timeout = setTimeout(() => {
  //       const deltaY = event.deltaY;
  //       if (deltaY > 0) {
  //         console.log("Scrolled up");
  //         setActiveLayer((prevLayer) => (prevLayer + 1) % 13);
  //       } else {
  //         console.log("Scrolled down");
  //         setActiveLayer((prevLayer) => (prevLayer - 1) % 13);
  //       }
  //     }, 90); // Adjust the delay as needed
  //   };

  //   window.addEventListener("wheel", handleScroll);

  //   return () => {
  //     window.removeEventListener("wheel", handleScroll);
  //     clearTimeout(timeout);
  //   };
  // }, []);

  const handleNextLayer = () => {
    setActiveLayer((prevLayer) => (prevLayer + 1) % 13); // Updated for new layers
  };

  const getHeadingStyle = (layerIndex) => {
    if (layerIndex < 4) {
      return { color: "#F85B02", textAlign: "center" };
    }
    if (layerIndex >= 4 && layerIndex <= 6) {
      return { color: "#479A76", textAlign: "center" };
    } else if (layerIndex >= 7 && layerIndex <= 9) {
      return { color: "#AC3A76", textAlign: "center" };
    } else if (layerIndex >= 10) {
      return { color: "#7E2894", textAlign: "center" };
    }
    return { textAlign: "center" };
  };

  const getHeadingText = (layerIndex) => {
    if (layerIndex >= 4 && layerIndex <= 6) {
      return "ESPORTS";
    } else if (layerIndex >= 7 && layerIndex <= 9) {
      return "FOOD FESTIVAL";
    } else if (layerIndex >= 10) {
      return "PRONIGHT";
    }
    return "SPORTS";
  };

  return (
    <>
      <div
        className="relative w-full h-screen text-white flex justify-center items-center overflow-hidden bg-black hidden sm:block "
        onClick={handleNextLayer}
        style={{ cursor: "none" }}
      >
        <CustomCursor />
        <Link
          to="/"
          className="text-center align-middle absolute w-fit h-fit py-2 px-3 right-[16px] sm:right-4 sm:top-[10px] top-[26px] border-2 border-[#F85B02] shadow-[2px_1.5px_13px_#F85B02] rounded-xl  text-white text-l sm:text-xl lg:text-3xl bg-[#424242BF] font-squid hover:bg-[#515151bf] hover:scale-105 z-50"
        >
          HOME
        </Link>
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
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((layerIndex) => (
            <div
              key={layerIndex}
              className={`absolute inset-0 h-screen w-screen flex justify-center items-center transition-all duration-[800ms] ${
                layerIndex === activeLayer
                  ? "z-20 blur-none opacity-100"
                  : layerIndex === (activeLayer - 1 + 9) % 9
                  ? "z-15 blur-sm opacity-75"
                  : "z-10 blur-md opacity-50"
              }`}
              style={{
                zIndex:
                  layerIndex === activeLayer
                    ? 20
                    : layerIndex === (activeLayer - 1 + 9) % 9
                    ? 18
                    : 10,

                filter:
                  layerIndex === activeLayer
                    ? "blur(0px)"
                    : layerIndex === (activeLayer - 1 + 9) % 9
                    ? "blur(7px)"
                    : "blur(8px)",
                opacity: layerIndex === activeLayer ? 1 : 0.5,
                transform:
                  layerIndex === activeLayer
                    ? "scale(1)"
                    : layerIndex === (activeLayer - 1 + 13) % 13
                    ? "scale(0.9)"
                    : "scale(0.8)",
                transition:
                  "z-index 1s, filter 0.8s, opacity 0.8s, transform 0.8s",
              }}
            >
              <div className="relative w-full h-full">
                {layerIndex === 1 &&
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
                {layerIndex === 2 &&
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
                {layerIndex === 3 &&
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
                {layerIndex === 5 &&
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
                {layerIndex === 6 &&
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
                {layerIndex === 8 &&
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
                {layerIndex === 9 &&
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
                {layerIndex === 11 &&
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
                {layerIndex === 12 &&
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
        <Link
          to="/"
          className="text-center align-middle absolute w-fit h-fit py-2 px-3 right-[16px] sm:right-4 sm:top-[10px] top-[26px] border-2 border-[#F85B02] shadow-[2px_1.5px_13px_#F85B02] rounded-xl  text-white text-l sm:text-xl lg:text-3xl bg-[#424242BF] font-squid hover:bg-[#515151bf] hover:scale-105 z-50"
        >
          HOME
        </Link>
      </div>
    </>
  );
};

export default SportsCollageScroll;
