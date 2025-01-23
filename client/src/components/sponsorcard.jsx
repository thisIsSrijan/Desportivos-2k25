import React from "react";

const SponsorCard = ({ image, heading }) => {
  return (
    <div className="sponsor-card p-4 m-4 bg-transparent shadow-lg text-[#FFFFFF] justify-center items-center flex flex-col">
      <img
        src={image}
        alt={heading}
        className="w-47 lg:w-full h-44 object-contain "
      />
      <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gradient text-[#FFFFFF] dharma-gothic-c tracking-wide text-center mt-1">
        {heading}
      </h2>
    </div>
  );
};

export default SponsorCard;
