import React from "react";
import Carousel from "../components/Home/Carousel";
import AboutUs from "../components/Home/AboutUs";
import Sports from "../components/Home/Sports";
import Events from "../components/Home/Events";

const Home = () => {
  return (
    <div>
      <section id="carousel">
        <Carousel />
      </section>
      <section id="aboutus">
        <AboutUs />
      </section>
      <section id="sports">
        <Sports />
      </section>
      <section id="events">
        <Events />
      </section>
    </div>
  );
};

export default Home;
