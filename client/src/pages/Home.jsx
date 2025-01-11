import React from "react";
import Carousel from "../components/Home/Carousel";
import AboutUs from "../components/Home/AboutUs";
import Events from "../components/Home/Events";
import SportsFix from "../components/Home/SportsFix";

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
        {/* <Sports /> */}
        <SportsFix/>
      </section>
      <section id="events">
        <Events />
      </section>
    </div>
  );
};

export default Home;
