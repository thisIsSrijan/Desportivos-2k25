import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import person from "../assets/aboutperson.svg";
import aboutus from "../assets/aboutus.jpg";
import insta from "../assets/instagram.svg";
import youtube from "../assets/youtube.svg";

function AboutUs() {
  const [xValue, setXValue] = useState(0);

  useEffect(() => {
    const updateXValue = () => {
      if (window.innerWidth <= 1056 && window.innerWidth >= 990) {
        setXValue(-20);
      } else if (window.innerWidth <= 825 && window.innerWidth >= 768) {
        setXValue(-27);
      } else {
        setXValue(0);
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
      className="relative bg-black text-white min-h-screen flex flex-col items-center justify-center py-8 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dzlzhtbfn/image/upload/v1732952318/Background_qmcxay.png')",
      }}
    >
      {/* whileInViewd Heading */}
      <motion.h1
        className="text-7xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-gradient text-[#F85B02] dharma-gothic-c tracking-wide"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0, scale: 1.3 }}
        transition={{ duration: 1 }}
      >
        ABOUT US
      </motion.h1>

      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-screen-lg px-9 pb-20 ">
        <motion.div
          className="relative w-full lg:w-1/3 md:w-[70%] md:h-[70%] mt-5"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <img
            src={aboutus}
            alt="About Us"
            className="object-cover w-[95%] pl-[5%] mb-5 sm:w-full sm:px-4 h-full rounded-lg shadow-xl"
          />
          <div className="flex justify-center lg:justify-start space-x-6 mt-6">
            <motion.a
              href="#"
              className="transform transition duration-300 hover:scale-110"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, scale: 1.3 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <img src={insta} alt="Instagram" className="h-10 w-10" />
            </motion.a>
            <motion.a
              href="#"
              className="transform transition duration-300 hover:scale-110"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, scale: 1.5 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <img src={youtube} alt="YouTube" className="h-10 w-10" />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="max-w-md text-center lg:text-left lg:w-2/3 py-8 space-y-5 lg:space-y-5 lg:pr-14 text-[#DADADA] lg:mr-20"
          initial={{ opacity: 0, x: 50, scale: 0.7 }}
          whileInView={{ opacity: 1, x: xValue, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-sm leading-relaxed">
            Welcome to DESPORTIVOS, the largest sports meet of Rajasthan, an
            international arena for students from across the country and abroad
            to showcase their talents and facilitate cross-cultural learning
            experiences.
          </p>
          <p className="text-sm leading-relaxed">
            The fest aims to inspire students to appreciate the unity and
            culture we offer while developing a strong spirit for sports.
            Desportivos 25 will span three days, where academic and technical
            students remodel into sports fanatics.
          </p>
        </motion.div>
      </div>

      {/* whileInViewd Person Image */}
      <motion.div
        className="absolute right-0 bottom-0 hidden md:block"
        initial={{ opacity: 0, x: 150, y: 250 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <img
          src={person}
          alt="Person"
          className="object-cover w-full h-[80%] rounded-lg shadow-xl"
        />
      </motion.div>
    </div>
  );
}

export default AboutUs;
