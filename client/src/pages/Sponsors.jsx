import React from "react";
import { Link } from "react-router-dom";
import bg from "../assets/images/sponbg.webp";

import vivo from "../assets/images/vivo.png";
import krafton from "../assets/images/krafton.png";
import ktm from "../assets/images/ktm.png";
import gym from "../assets/images/gym.png";
import cloth from "../assets/images/cloth.png";
import bakery from "../assets/images/bakery.png";

import SponsorCard from "../components/sponsorcard";

const Sponsors = () => {
  return (
    <div
      className="bg-black bg-cover relative h-full w-full"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <h1 className="text-[120px] xs1-sm:text-[145px] sm:text-[150px] font-bold text-gradient text-[#FFFFFF] dharma-gothic-c tracking-wide text-center  p-0">
        OUR SPONSORS
      </h1>

      <Link
        to="/"
        className="text-center align-middle absolute w-fit h-fit py-2 px-5 right-[16px] sm:right-16 sm:top-[75px] top-[26px] border-2 border-[#F85B02] shadow-[2px_1.5px_13px_#F85B02] rounded-xl z-10 text-white text-l sm:text-xl lg:text-3xl bg-[#424242BF] font-squid hover:bg-[#515151bf] hover:scale-105"
      >
        HOME
      </Link>

      <div className="sponsor-cards  ">
        <SponsorCard image={bakery} heading="BAKERY PARTNER" />
        <div className="flex justify-evenly">
          <SponsorCard image={gym} heading="FITNESS PARTNER" />
          <SponsorCard image={ktm} heading="RIDING PARTNER" />
        </div>
        <SponsorCard image={krafton} heading="MOBILE GAMING PARTNER" />
        <div className="flex justify-evenly">
          <SponsorCard image={cloth} heading="MERCHANDISE PARTNER" />
          <SponsorCard image={vivo} heading="SPECIAL PARTNER" />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
