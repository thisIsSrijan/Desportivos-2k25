import React from "react";
import Carousel from "../components/Home/Carousel";
import AboutUs from "../components/Home/AboutUs";
import Sports from "../components/Home/Sports";
import Events from "../components/Home/Events";

const Home = () => {
  return (
    <div>
      <Carousel />
      <AboutUs />
      <Sports />
      <Events />
    </div>
  );
};

export default Home;
