import React from "react";
import Carousel from "../components/Home/Carousel"
import AboutUs from "../components/Home/AboutUs";
import Sports from "../components/Home/Sports";

const Home = () => {
  return (
    <div>
      <Carousel />
      <AboutUs />
      <Sports/>
    </div>
  );
};

export default Home;
