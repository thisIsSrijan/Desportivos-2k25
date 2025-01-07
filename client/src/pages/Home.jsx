import React from "react";
import Carousel from "../components/Home/Carousel";
import AboutUs from "../components/Home/AboutUs";
import Sports from "../components/Home/Sports";
import Events from "../components/Home/Events";
import Footer from "../components/base/Footer";

const Home = () => {
  return (
    <div className="snap snap-y snap-mandatory">
      <section id="carousel" className="snap-start">
        <Carousel />
      </section>

      <section id="about-us" className="snap-start">
        <AboutUs />
      </section>
      <section id="sports" className="snap-start">
        <Sports />
      </section>
      <section id="events" className="snap-start">
        <Events />
      </section>
      {/* Add more sections as needed */}
      <section id="footer" className="snap-start">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
