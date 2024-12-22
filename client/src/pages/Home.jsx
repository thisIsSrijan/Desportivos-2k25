import React from "react";
import Carousel from "../components/Carousel";
import AboutUs from "./AboutUs";
import Sports from "./Sports";

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
