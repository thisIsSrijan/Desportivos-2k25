import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import Background from "../../assets/images/Background.webp"
import person from "../../assets/images/aboutperson.svg";
import aboutus from "../../assets/images/aboutus.webp";
import insta from "../../assets/images/instagram.svg";
import youtube from "../../assets/images/youtube.svg";

function AboutUs() {
  const [xValue, setXValue] = useState(0);
  const [scaleValue, setScaleValue] = useState(1.4);
  useEffect(() => {
    const updateXValue = () => {
      if (window.innerWidth <= 1260 && window.innerWidth >= 990) {
        setXValue(-17);
      } else if (window.innerWidth <= 825 && window.innerWidth >= 768) {
        setXValue(-27);
      } else {
        setXValue(0);
      }

      if (window.innerWidth >= 1760) {
        setScaleValue(1.4);
      } else if (window.innerWidth < 1580 && window.innerWidth >= 1500) {
        setScaleValue(1.1);
      } else if (window.innerWidth < 1760 && window.innerWidth >= 1390) {
        setScaleValue(1.2);
      } else if (window.innerWidth < 992 && window.innerWidth >= 900) {
        setScaleValue(1.1);
      } else if (window.innerWidth >= 2000) {
        setScaleValue(1.4);
      } else {
        setScaleValue(1);
      }
    };

    // Initialize on load
    updateXValue();

    // Update on resize
    window.addEventListener("resize", updateXValue);
    return () => window.removeEventListener("resize", updateXValue);
  }, []);

  return (
    <div
      className="relative bg-black text-white flex flex-col items-center justify-center py-8  bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        // backgroundImage:"url('https://res.cloudinary.com/dzlzhtbfn/image/upload/v1732952318/Background_qmcxay.png')",
        backgroundImage: `url(${Background})`,
      }}
    >
      {/* whileInViewd Heading */}
      <motion.h1
        className="text-[120px] xs1-sm:text-[145px] sm:text-[150px] font-bold text-gradient text-[#F85B02] dharma-gothic-c tracking-wide "
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0, scale: 1.2 }}
        transition={{ duration: 1 }}
      >
        ABOUT US
      </motion.h1>

      <div className="flex flex-col lg:flex-row items-center justify-evenly w-full  px-9 md:pb-20 mt-2  ">
        <motion.div
          className="relative w-full lg:w-3/5 xl:w-2/5 md:w-[75%] md:h-[70%] mt-5 sm:pl-16 lg:pl-5"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <img
            src={aboutus}
            alt="About Us"
            className="object-cover w-[95%] pl-[5%] mb-5 sm:w-[90%] sm:px-4 sm:pl-0 h-full rounded-lg shadow-xl "
          />
          <div className="flex  justify-start space-x-6 mt-6 ml-8 mb-10 ">
            <motion.a
              href="https://www.instagram.com/desportivos.lnmiit/"
              className="transform transition duration-300 hover:scale-110"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, scale: 1.2 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <img src={insta} alt="Instagram" className="h-8 w-8" />
            </motion.a>
            <motion.a
              href="https://www.youtube.com/@desportivoslnmiit2733"
              className="transform transition duration-300 hover:scale-110"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, scale: 1.4 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <img src={youtube} alt="YouTube" className="h-8 w-8" />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="sm:max-w-md lg:max-w-xl text-center lg:text-left lg:w-3/5 py-8 space-y-5 lg:space-y-5 lg:pr-28 text-[#DADADA] lg:mr-25 md:mr-5 "
          initial={{ opacity: 0, x: 50, scale: 0.7 }}
          whileInView={{ opacity: 1, x: xValue, scale: scaleValue }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-left text-sm  sm:text-lg md:text-md lg:text-base xl:text-lg leading-relaxed">
            Welcome to DESPORTIVOS, the largest sports meet of Rajasthan, an
            international arena for students from across the country and abroad
            to showcase their talents and facilitate cross-cultural learning
            experiences.
          </p>
          <p className="text-left text-sm  sm:text-lg md:text-md lg:text-base xl:text-lg leading-relaxed">
            The fest aims to inspire students to appreciate the unity and
            culture we offer while developing a strong spirit for sports.
            Desportivos 25 will span three days, where academic and technical
            students remodel into sports fanatics.
          </p>
        </motion.div>
      </div>

      {/* whileInViewd Person Image */}
      <motion.div
        className="absolute right-0 bottom-0 hidden md:block "
        initial={{ opacity: 0, x: 150, y: 250 }}
        whileInView={{ opacity: 1, x: 0, y: 0, scale: scaleValue }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <img
          src={person}
          alt="Person"
          className="object-cover w-full h-[80%] uxl:h-full rounded-lg shadow-xl lg:h-[474px] "
        />
      </motion.div>
    </div>
  );
}

export default AboutUs;
