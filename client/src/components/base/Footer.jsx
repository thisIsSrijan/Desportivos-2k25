import React, { useState } from "react";
import "../../index.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Background from "../../assets/images/Background.webp"
import despotext from "../../assets/images/despoText.webp"
import Ellipse from "../../assets/images/MarqueEllipse.webp"
import circle from "../../assets/images/circle.webp"
import umbrella from "../../assets/images/umbrella.webp"
import star from "../../assets/images/star.webp"
import triangle from "../../assets/images/triangle.webp"
import gdg from "../../assets/images/gdg.webp"
import Marquee from "react-fast-marquee";

function Footer() {
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
            // src="https://res.cloudinary.com/dzlzhtbfn/image/upload/v1732952175/Ellipse_36_1_usfyas.png"
              src={Ellipse}
            alt="dot"
          />
        </div>
      ));
  };
  const color1 = ["hover:bg-[#9D1241]", "hover:bg-[#F6931C]"];
  const color2 = ["hover:bg-[#12A79C]", "hover:bg-[#E4D6A7]"];
  const SectionCard = ({ title, buttonLabel, colors }) => {
    const [index, setIndex] = useState(0);

    const handleMouseEnter = () => {
      // Increment the index on hover and reset if it exceeds the length of colors
      setIndex((prevIndex) => (prevIndex + 1) % colors.length);
    };

    return (
      <div
        className={`relative w-[80%] max-w-[510px]  md:max-w-[540px] h-[100px] xs2-xs1:h-[105px] xs1-sm:h-[110px] sm:h-[110px] md:h-[130px]  lg:h-[170px] uxl:h-[190px]  rounded-[45px] md:rounded-[50px] flex items-center justify-start mx-auto px-6  bg-gray-400 transition-colors duration-300 ${colors[index]} my-2 cursor-pointer mb-4 md:mb-0`}
        onMouseEnter={handleMouseEnter} // Trigger on hover
      >
        <h1 className="text-[4rem] xs2-xs1:text-[4.6rem] xs1-sm:text-[5.5rem]  sm:text-6xl md:text-7xl lg:text-[7rem] xl:text-9xl  dharma-gothic-c text-left m-1 xs2-sm:m-1 tracking-wider  sm:ml-0  ">
          {title}
        </h1>
        <button
          className="absolute w-21 h-21 right-[20px] bottom-[20px] border-2 border-black rounded-full flex items-center justify-center rotate-45 duration-300  hover:rotate-0 hover:scale-110"
          aria-label={buttonLabel}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6  xs2-xs1:w-7 xs2-xs1:h-7 xs1-sm:w-8 xs1-sm:h-8   sm:w-6 sm:h-6 md:w-9 md:h-9 lg:w-12 lg:h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 12h12m0 0l-4 4m4-4l-4-4"
            />
          </svg>
        </button>
      </div>
    );
  };
  return (
    <div
      className="relative w-full sm:h-[570px] md:h-[660px] lg:h-[890px]  bg-cover bg-center bg-no-repeat overflow-hidden py-2"
      style={{
        // backgroundImage:"url('https://res.cloudinary.com/dzlzhtbfn/image/upload/v1732952318/Background_qmcxay.png')",
        backgroundImage: `url(${Background})`,
            }}
    >
      <div className=" flex flex-col  gap-[8%] mt-4 sm:flex-row sm:px-[5%]">
        <SectionCard
          title="MEET THE TEAM"
          buttonLabel="View team details"
          colors={color1}
        />
        <SectionCard
          title="SPONSORS"
          buttonLabel="View sponsors details"
          colors={color2}
        />
      </div>
      <div className="lg:mt-4 left-0 bottom-10 lg:bottom-10 w-full">
        <Marquee
          speed={150}
          autoFill={true}
          className="overflow-hidden no-scrollbar"
        >
          <div className="flex ">{renderTextWithDot()}</div>
        </Marquee>
        <div className="w-full h-[1px] bg-white"></div>

        <div className="w-[97%] mx-auto rounded-xl md:rounded-3xl pt-2 mt-[1.8rem] sm:mt-[2rem] md:mt-[2.5rem] lg:mt-[3rem] h-[210px] sm:h-[220px] md:h-[300px] lg:h-[400px] bg-despobackground py-1 px-5 sm:px-6 sm:py-3 ">
          <div className="flex justify-between items-center ">
            <img
              // src="https://res.cloudinary.com/dturzqo8m/image/upload/v1734869208/k2evaihskut0tq3a5rfy.svg"
              src={circle}
              alt="circle"
              className="size-4 sm:size-7 md:size-10 "
            />
            <img
              // src="https://res.cloudinary.com/dturzqo8m/image/upload/v1734869209/pjwdq9xxxekcen8eyk81.svg"
              src={umbrella}
              alt=""
              className="size-4 sm:size-7 md:size-10 "
            />
          </div>

          {/* Mobile */}
          <div className="sm:hidden ">
            <div className="flex justify-between">
              <div className="text-black text-left text-xxs">
                <div>
                  <h1 className="font-bold">CONTACT US</h1>
                  <p>Chetan Sharma: +91 97611 94540</p>
                  <p>Sanchay Goel: +91 99974 79600</p>
                </div>
              </div>
              <div className="text-black text-xxs text-right">
                <div>
                  <h1 className="font-bold">ABOUT US</h1>
                </div>
                <div>
                  <h1 className="font-bold">SOCIAL HANDLES</h1>
                  <div className="flex float-end items-end ">
                    <a
                      href="https://www.youtube.com/@desportivoslnmiit2733"
                      className="text-black text-xs flex items-center space-x-1"
                    >
                      <i className="bi bi-youtube"></i>
                      <span className="hidden ">Desportivos</span>
                    </a>
                    <a
                      href="https://www.instagram.com/desportivos.lnmiit/"
                      className="text-black text-xs flex items-center space-x-1"
                    >
                      <i className="bi bi-instagram px-2 sm:px-0"></i>
                      <span className="hidden  ">desportivos.lnmiit</span>
                    </a>
                    <a
                      href="mailto:desportivos@lnmiit.ac.in"
                      className="text-black text-xs flex items-center space-x-1"
                    >
                      <i className="bi bi-envelope"></i>
                      <span className="hidden ">desportivos@lnmiit.ac.in</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                <img
                  className="h-[120px] w-[200px] relative right-2"
                  src="https://res.cloudinary.com/dturzqo8m/image/upload/v1734868921/aqzis54jpex2rqpy9ev5.svg"
                  alt="Desportivos Text"
                />
              </div>
            </div>
          </div>
          {/* Mobile */}
          <div className="hidden sm:flex sm:flex-row ">
            <div className="text-black text-left text-xxs md:text-sm lg:text-xl w-1/4 flex flex-col justify-evenly">
              <div>
                <h1 className="font-bold">CONTACT US</h1>
                <p>Chetan Sharma: +91 9761194540</p>
                <p>Sanchay Goel: +91 9997479600</p>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-bold">ADDRESS</h1>
                <p>
                  Rupa ki Nangal, Post-Sumel, Via Jamdoli, Jaipur, Rajasthan
                  302031
                </p>
              </div>
            </div>

            {/* DESPORTIVOS */}

            <div className="flex justify-center grow ">
              <img
                className=" sm:w-[260px] sm:h-[100px] md:h-[180px] md:w-[450px] lg:w-[600px] lg:h-[300px] relative lg:right-10 right-2 sm:right-5"
                 //src="https://res.cloudinary.com/dturzqo8m/image/upload/v1734868921/aqzis54jpex2rqpy9ev5.svg"
                 src={despotext}
                alt="Desportivos Text"
              />
            </div>
            {/* DESPORTIVOS */}

            <div className="text-black text-xs md:text-sm lg:text-xl w-1/4 flex flex-col justify-evenly text-right">
              <div>
                <h1 className="font-bold">ABOUT US</h1>
              </div>
              <div>
                <h1 className="font-bold">SOCIAL HANDLES</h1>
                <div className="flex float-end sm:flex-col items-end ">
                  <a
                    href="https://www.youtube.com/@Desportivoslnmiit"
                    className="text-black text-xs md:text-sm  lg:text-xl flex items-center space-x-1"
                  >
                    <i className="bi bi-youtube"></i>
                    <span className="hidden sm:block">Desportivos</span>
                  </a>
                  <a
                    href="https://www.instagram.com/desportivos.lnmiit/"
                    className="text-black text-xs md:text-sm lg:text-xl flex items-center space-x-1"
                  >
                    <i className="bi bi-instagram px-2"></i>
                    <span className="hidden sm:block ">desportivos.lnmiit</span>
                  </a>
                  <a
                    href="mailto:desportivos@lnmiit.ac.in"
                    className="text-black text-xs md:text-sm lg:text-xl flex items-center space-x-1"
                  >
                    <i className="bi bi-envelope"></i>
                    <span className="hidden sm:block">
                      desportivos@lnmiit.ac.in
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*  */}

          <div className="flex justify-between items-center">
            <img
              //src="https://res.cloudinary.com/dturzqo8m/image/upload/v1734869208/vdcblcmhh4b4dlchkavc.svg"
              src={star}
              alt=""
              className="size-4 sm:size-7 md:size-10 lg:size-10"
            />
            <div className="flex justify-center">
              <p className="text-black text-xxs sm:text-xs  md:text-lg font-bold">
                ALL RIGHTS RESERVED
              </p>
            </div>
            <img
              //src="https://res.cloudinary.com/dturzqo8m/image/upload/v1734869209/zuqyfl9bhzydpfol9bek.svg"
              src={triangle}
              alt=""
              className="size-4 sm:size-7 md:size-10 lg:size-10"
            />
          </div>
        </div>
      </div>
      <div
        className="z-10 text-white h-auto sm:mt-2 lg:mt-5  w-full flex justify-center items-center"
        style={{ backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <a
          href="https://gdg.community.dev/gdg-on-campus-the-lnm-institute-of-information-technology-jaipur-india/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="font-poppins text-[7px] sm:text-[8px] md:text-[10px] lg:text-[13px] xl:text-[17px] font-normal tracking-[0.16em] text-center">
            <img
              // src="https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734027212/transparentgdg_jymiok.png"
              src={gdg}
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
