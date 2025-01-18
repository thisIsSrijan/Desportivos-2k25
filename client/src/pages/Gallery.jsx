import { useState, useEffect } from "react";

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
import GalleryMobile from "../components/GallaryMobile";
import CustomCursor from "../components/CustomCursor";
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
      return "PRONITE";
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
          className="text-center align-middle absolute w-fit h-fit py-2 px-3 right-[16px] sm:right-16 sm:top-[75px] top-[30px] border-2 border-[#F85B02] shadow-[2px_1.5px_13px_#F85B02] rounded-xl  text-white text-l sm:text-xl lg:text-3xl bg-[#424242BF] font-squid hover:bg-[#515151bf] hover:scale-105 z-50"
        >
          HOME
        </Link>
        <div className="absolute inset-0 z-30 flex flex-col justify-center items-center">
          {/* <p className="text-lg md:text-2xl lg:text-3xl mb-[-10px] md:mb-[-15px]">
            MORE THAN
          </p> */}
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
          {/* <p className="text-lg md:text-2xl lg:text-3xl mt-[-20px] md:mt-[-40px]">
            A RIVALRY
          </p> */}
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
