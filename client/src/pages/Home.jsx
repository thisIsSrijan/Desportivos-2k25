import React from "react";
import Carousel from "../components/Carousel";
import AboutUs from "./AboutUs";
import Events from "./Events";

const Home = () => {
  return (
    <div>
      <Carousel />
      <AboutUs />
      <Events/>
    </div>
  );
};

export default Home;
