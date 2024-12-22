import React, { useState } from "react";
import "../index.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Marquee from "react-fast-marquee";

function Footer() {
  // const dot = "/Ellipse 36 (1).png";
  // const despo_text = "/despo_text.png";
  // const bgImg = "/Background.png";
  const renderTextWithDot = () => {
    return Array(9)
      .fill()
      .map((_, index) => (
        <div
          key={index}
          className="flex justify-evenly mt-5 items-center space-x-8 whitespace-nowrap"
        >
          <span className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl dharma-gothic-c text-white ml-6">
            REGISTER NOW
          </span>
          <img
            className="w-3 h-3 md:w-5 md:h-5"
            src="https://res.cloudinary.com/dzlzhtbfn/image/upload/v1732952175/Ellipse_36_1_usfyas.png"
            alt="dot"
          />
        </div>
      ));
  };
  // const color1 = ["hover:bg-[#9D1241]", "hover:bg-[#F6931C]"];
  // const color2 = ["hover:bg-[#12A79C]", "hover:bg-[#E4D6A7]"];
  // const SectionCard = ({ title, buttonLabel, colors }) => {
  //   const [index, setIndex] = useState(0);

  //   const handleMouseEnter = () => {
  //     // Increment the index on hover and reset if it exceeds the length of colors
  //     setIndex((prevIndex) => (prevIndex + 1) % colors.length);
  //   };

  //   return (
  //     <div
  //       className={`relative w-[80%] max-w-[550px] h-36 rounded-[50px] flex items-center justify-start mx-auto px-6 bg-gray-400 transition-colors duration-300 ${colors[index]} my-2`}
  //       onMouseEnter={handleMouseEnter} // Trigger on hover
  //     >
  //       <h1 className="text-7xl sm:text-7xl md:text-8xl lg:text-9xl  dharma-gothic-c text-left ml-2">
  //         {title}
  //       </h1>
  //       <button
  //         className="absolute w-19 h-19 right-[20px] bottom-[20px] border-2 border-black rounded-full flex items-center justify-center rotate-45 duration-300  hover:rotate-0 hover:scale-110"
  //         aria-label={buttonLabel}
  //       >
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           fill="none"
  //           viewBox="0 0 24 24"
  //           strokeWidth={2}
  //           stroke="currentColor"
  //           className="w-8 h-8"
  //         >
  //           <path
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //             d="M4 12h12m0 0l-4 4m4-4l-4-4"
  //           />
  //         </svg>
  //       </button>
  //     </div>
  //   );
  // };
  return (
    // <div
    //   className="relative w-full  h-[650px] sm:h-[570px] md:h-[660px] lg:h-[860px]  bg-cover bg-center bg-no-repeat overflow-hidden"
    //   style={{
    //     backgroundImage:
    //       "url('https://res.cloudinary.com/dzlzhtbfn/image/upload/v1732952318/Background_qmcxay.png')",
    //   }}
    // >
    <div
      className="relative w-full  h-[300px] sm:h-[380px] md:h-[500px] lg:h-[720px]  bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{backgroundImage: "url('https://res.cloudinary.com/dzlzhtbfn/image/upload/v1732952318/Background_qmcxay.png')" }}
    >
      {/* <div className=" flex flex-col  gap-[8%] mt-4 sm:flex-row sm:px-[5%]"> */}
        {/* <SectionCard
          title="MEET THE TEAM"
          buttonLabel="View team details"
          colors={color1}
        /> */}
        {/* <SectionCard
          title="SPONSORS"
          buttonLabel="View sponsors details"
          colors={color2}
        /> */}
      {/* </div> */}
      <div className="lg:mt-4 left-0 bottom-10 lg:bottom-10 w-full">
        <Marquee
          speed={150}
          autoFill={true}
          className="overflow-hidden no-scrollbar"
        >
          <div className="flex ">{renderTextWithDot()}</div>
        </Marquee>
        <div className="w-full h-[1px] bg-white"></div>

        <div className="w-[97%] mx-auto rounded-xl md:rounded-3xl mt-[1.8rem] sm:mt-[2rem] md:mt-[2.5rem] lg:mt-[3rem] h-[150px] sm:h-[200px] md:h-[270px] lg:h-[400px] bg-orange-600 p-4 sm:p-6">
          <div className="flex justify-between items-center">
            <a
              href="mailto:desportivos@lnmiit.ac.in"
              className="text-white text-xs md:text-sm lg:text-2xl flex items-center space-x-1"
            >
              <i className="bi bi-envelope"></i>
              <span className="hidden sm:block">desportivos@lnmiit.ac.in</span>
            </a>
            <a
              href="https://www.youtube.com/@Desportivoslnmiit"
              className="text-white text-xs md:text-sm  lg:text-2xl flex items-center space-x-1"
            >
              <i className="bi bi-youtube"></i>
              <span className="hidden sm:block">Desportivos</span>
            </a>
          </div>

          <div className="flex justify-center">
            <img
              className="h-[70px] w-[200px] sm:w-[250px] sm:h-[100px] md:h-[150px] lg:w-[550px] lg:h-[250px] relative lg:right-10 right-2 sm:right-5"
              src="https://res.cloudinary.com/dzlzhtbfn/image/upload/v1732952202/despo_text_mzyynm.png"
              alt="Desportivos Text"
            />
          </div>

          <div className="flex justify-center">
            <p className="text-white text-xxs sm:text-xs  md:text-lg ">
              PRIVACY POLICY
            </p>
          </div>

          <div className="flex justify-between items-center">
            <a
              href="#"
              className="text-white text-xs md:text-sm  lg:text-2xl flex items-center space-x-1"
            >
              <i className="bi bi-person-lines-fill"></i>
              <span className="hidden sm:block">Contact Us</span>
            </a>
            <a
              href="https://www.instagram.com/desportivos.lnmiit/"
              className="text-white text-xs md:text-sm lg:text-2xl flex items-center space-x-1"
            >
              <i className="bi bi-instagram"></i>
              <span className="hidden sm:block ">desportivos.lnmiit</span>
            </a>
          </div>
        </div>
      </div>
      <div
        className="z-10 text-white mt-5  w-full flex justify-center items-center "
        style={{ backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <a
          href="https://gdg.community.dev/gdg-on-campus-the-lnm-institute-of-information-technology-jaipur-india/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="font-poppins text-[7px] sm:text-[8px] md:text-[10px] lg:text-[13px] xl:text-[17px] font-normal tracking-[0.16em] text-center">
            <img
              src="https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734027212/transparentgdg_jymiok.png"
              alt="GDG logo"
              className="inline-block w-8 h-8 mr-3"
            />
            Developed by GDG on Campus, LNMIIT
          </p>
        </a>
      </div>
    </div>
  );
}

export default Footer;
