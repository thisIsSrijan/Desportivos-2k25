import React from "react";
import { Link } from "react-router-dom";

const Sponsors = () => {
  return (
    <div
      className="bg-black bg-cover relative h-screen w-full"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dturzqo8m/image/upload/v1734955828/ijjesgbpw5ky12jqtjqn.svg')",
      }}
    >
      <Link
        to="/"
        className="text-center align-middle absolute w-fit h-fit py-2 px-5 right-[16px] sm:right-16 sm:top-[75px] top-[26px] border-2 border-[#F85B02] shadow-[2px_1.5px_13px_#F85B02] rounded-xl z-10 text-white text-l sm:text-xl lg:text-3xl bg-[#424242BF] font-squid hover:bg-[#515151bf] hover:scale-105"
      >
        HOME
      </Link>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>

      {/* Centered content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <img
          src="https://res.cloudinary.com/dturzqo8m/image/upload/v1736368604/wq9aixy5glrmnynvpm0z.png"
          alt="Coming Soon"
          className="mb-4"
        />
        <div className="text-[50px] sm:text-[150px] font-light sm:font-bold text-gradient text-[#F85B02] dharma-gothic-c tracking-wide ">
          COMING SOON...
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
