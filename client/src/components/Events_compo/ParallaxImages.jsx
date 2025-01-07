import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ParallaxImages = ({ scrollContainer }) => {
  const images = [
    {
      src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734769347/imgP1_v0he1z.png",
      alt: "Image 1",
      className:
        "ml-[7vw]  mt-[1000px]  lg:ml-[10vw] w-[45%] lg:w-[20rem] h-[400px] lg:h-[450px] ",
        text : "BASKETBALL",
    },
    {
      src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734807975/imgK1_pujyuq.png",
      alt: "Image 2",
      className:
        "ml-[28%] sm:ml-[30%]  md:ml-[45vw]  top-[100px] lg:ml-[60vw] uxl:ml-[70vw] w-[68%] sm:w-[68%] md:w-[50%] xl:w-[28rem] lg:w-[25rem]",
    },
    {
      src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734769416/imgP2_iy2bg8.png",
      alt: "Image 3",
      className:
        "ml-[10vw] md:ml-[15vw] top-[200px] lg:ml-[20vw] w-[45%] lg:w-[20rem] h-[400px]  lg:h-[450px]",
        text : "VOLLEYBALL",
    },
    {
      src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734807975/imgK2_wktv95.png",
      alt: "Image 4",
      className:
        "ml-[21vw] md:ml-[45vw]   top-[300px] lg:ml-[60vw] uxl:ml-[70vw] w-[68%] md:w-[50%] xl:w-[28rem] lg:w-[28rem]",
         text : "KABADDI"
    },
    {
      src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734769416/imgP3_jvcaxe.png",
      alt: "Image 5",
      className:
        "ml-[10vw] md:ml-[15vw] top-[200px] lg:ml-[20vw] w-[45%] lg:w-[20rem] h-[400px]  lg:h-[450px]",
        text : "LAWN TENNIS"
    },
    {
      src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734807975/imgK3_xokcch.png",
      alt: "Image 6",
      className:
        "ml-[22vw] md:ml-[42vw] lg:ml-[60vw] top-[400px] md:top-[500px] lg:ml-[10vw] w-[68%]  md:w-[55%] xl:w-[28rem] lg:w-[28rem]",
        text : "SQUASH"
    },
    {
      src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734769416/imgP4_k2qzsv.png",
      alt: "Image 7",
      className:
        "ml-[5vw] md:ml-[5vw] top-[450px] lg:ml-[10vw] w-[45%] lg:w-[20rem] xl:w-[20rem] h-[400px] lg:h-[450px]",
        text : "CRICKET"
    },
    {
      src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734807975/imgK4_q9mubj.png",
      alt: "Image 8",
      className:
        "ml-[22vw] md:ml-[40vw] top-[480px] lg:ml-[60vw] uxl:ml-[70vw] w-[73%] md:w-[55%] xl:w-[28rem]  lg:w-[28rem]",
        text : "CHESS"
    },
    {
      src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734769416/imgP5_cbfh5s.png",
      alt: "Image 9",
      className:
        "ml-[7vw] md:ml-[10vw] top-[500px] lg:top-[400px] lg:ml-[10vw] uxl:ml-[10vw] w-[45%] lg:w-[20rem] h-[400px] lg:h-[450px]",
        text : "CARROM"
    },
    {
      src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734807976/imgK5_yh0olk.png",
      alt: "Image 10",
      className:
        "ml-[21vw] md:ml-[45vw] top-[560px] md:top-[560px] lg:top-[500px]  lg:ml-[60vw] uxl:ml-[70vw] w-[73%] md:w-[50%]   lg:w-[28rem]",
    },
    {
      src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734769416/imgP6_okvib9.png",
      alt: "Image 11",
      className:
        " top-[600px] lg:bottom-[400px] lg:ml-[10vw] uxl:ml-[10vw] w-[45%] lg:w-[20rem] h-[400px] lg:h-[450px]",
    },
  ];

  return (
    <div className="max-w-screen w-screen  scroll-smooth overflow-x-clip">
      {images.map((image, index) => (
        <ParallaxImg
          key={index}
          {...image}
          scrollContainer={scrollContainer}
          index={index}
        />
      ))}
    </div>
  );
};


const ParallaxImg = ({ className, alt, src, scrollContainer, index, text }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    container: scrollContainer,
    offset: ["start 100%", "end 0%"],
  });

  const revealY = useTransform(scrollYProgress, [0, 0.4], ["0%", "-120%"]);
  const scale = useTransform(scrollYProgress, [0.4, 0], [1, 1.7]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.7], ["100%", "-50%"]);

  return (
    <div
      ref={ref}
      className={`relative w-full aspect-[4/3] overflow-hidden ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          scale: scale,
        }}
      />
      <motion.div
        className="absolute inset-0 bg-orange-500 origin-bottom"
        style={{
          y: revealY,
          scale: scale,
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
      <motion.div
        className="absolute left-0 right-0 text-center text-white text-8xl tracking-wide font-bold"
        style={{
          top: "40px",
          y: textY,
          fontFamily: "Dharma Gothic C",
          opacity: textOpacity,
        }}
      >
        {text}
      </motion.div>
    </div>
  );
};

export default ParallaxImages;