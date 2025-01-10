import React from "react";
import { Link } from "react-router-dom";

const scrollToAboutUs = (e) => {
  e.preventDefault();
  const section = document.getElementById("aboutus");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const DespoFooter = () => {
  return (
    <div>
      <div className="w-[97%] mx-auto rounded-xl md:rounded-3xl pt-2 mt-[1.8rem] sm:mt-[2rem] lg:mt-[2rem] h-[210px] sm:h-[220px] md:h-[300px] lg:h-[400px] bg-despobackground py-1 px-5 sm:px-6 sm:py-3 ">
        <div className="flex justify-between items-center ">
          <img
            src="https://res.cloudinary.com/dturzqo8m/image/upload/v1734869208/k2evaihskut0tq3a5rfy.svg"
            alt="circle"
            className="size-4 sm:size-7 md:size-10 "
          />
          <img
            src="https://res.cloudinary.com/dturzqo8m/image/upload/v1734869209/pjwdq9xxxekcen8eyk81.svg"
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
                {location.pathname == "/" ? (
                  <nav>
                    <a
                      className="font-bold"
                      href="#aboutus"
                      onClick={(e) => {
                        scrollToAboutUs(e);
                      }}
                    >
                      ABOUT US
                    </a>
                  </nav>
                ) : (
                  <Link to="/" className="font-bold">
                    ABOUT US
                  </Link>
                )}
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
              src="https://res.cloudinary.com/dturzqo8m/image/upload/v1734868921/aqzis54jpex2rqpy9ev5.svg"
              alt="Desportivos Text"
            />
          </div>
          {/* DESPORTIVOS */}

          <div className="text-black text-xs md:text-sm lg:text-xl w-1/4 flex flex-col justify-evenly text-right">
            <div>
              {location.pathname == "/" ? (
                <nav>
                  <a
                    className="font-bold"
                    href="#aboutus"
                    onClick={(e) => {
                      scrollToAboutUs(e);
                    }}
                  >
                    ABOUT US
                  </a>
                </nav>
              ) : (
                <Link to="/" className="font-bold">
                  ABOUT US
                </Link>
              )}
            </div>
            <div>
              <h1 className="font-bold">SOCIAL HANDLES</h1>
              <div className="flex float-end sm:flex-col items-end ">
                <a
                  href="https://www.youtube.com/@desportivoslnmiit2733"
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
            src="https://res.cloudinary.com/dturzqo8m/image/upload/v1734869208/vdcblcmhh4b4dlchkavc.svg"
            alt=""
            className="size-4 sm:size-7 md:size-10 lg:size-10"
          />
          <div className="flex justify-center">
            <p className="text-black text-xxs sm:text-xs  md:text-lg font-bold">
              ALL RIGHTS RESERVED
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/dturzqo8m/image/upload/v1734869209/zuqyfl9bhzydpfol9bek.svg"
            alt=""
            className="size-4 sm:size-7 md:size-10 lg:size-10"
          />
        </div>
      </div>
      <div
        className="z-10 text-white h-auto mt-1 sm:mt-2 md:mt-0 lg:mt-3 w-full flex justify-center items-center"
        style={{ backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <a
          href="https://gdg.community.dev/gdg-on-campus-the-lnm-institute-of-information-technology-jaipur-india/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="font-poppins text-[8px] md:text-[10px] lg:text-[17px] font-normal tracking-[0.16em] text-center">
            <img
              src="https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734027212/transparentgdg_jymiok.png"
              alt="GDG logo"
              className="inline-block w-7 h-7 md:w-9 md:h-9 mr-2"
            />
            Developed by GDG on Campus, LNMIIT
          </p>
        </a>
      </div>
    </div>
  );
};

export default DespoFooter;
