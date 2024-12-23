
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ParallaxImages = ({ scrollContainer }) => {
  const images = [
    {
      src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734769347/imgP1_v0he1z.png",
      alt: "Image 1",
      className: "ml-[7vw]  mt-[1000px] md:ml-[10vw] lg:ml-[10vw] w-[150px] lg:w-[20rem] h-[200px] lg:h-[450px]",
    },
    {
      src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734807975/imgK1_pujyuq.png",
      alt: "Image 2",
      className: "ml-[40vw] md:ml-[70vw] top-[100px] lg:ml-[70vw] w-[190px] lg:w-[28rem]",
    },
    {
      src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734769416/imgP2_iy2bg8.png",
      alt: "Image 3",
      className: "ml-[7vw] md:ml-[15vw] top-[400px] lg:ml-[40vw] w-[150px] lg:w-[20rem] h-[200px]  lg:h-[450px]",
    },
    {
      src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734807975/imgK2_wktv95.png",
      alt: "Image 4",
      className: "ml-[40vw] md:ml-[70vw] top-[600px] lg:ml-[70vw] w-[190px] lg:w-[28rem]",
    },
    {
      src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734769416/imgP3_jvcaxe.png",
      alt: "Image 5",
      className: "ml-[7vw] md:ml-[15vw] top-[800px] lg:ml-[40vw] w-[150px] lg:w-[20rem] h-[200px]  lg:h-[450px]",
    },
    {
      src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734807975/imgK3_xokcch.png",
      alt: "Image 6",
      className: "ml-[40vw] md:ml-[50vw] top-[900px] md:top-[1100px] lg:ml-[10vw] w-[190px] lg:w-[28rem]",
    },
    {
      src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734769416/imgP4_k2qzsv.png",
      alt: "Image 7",
      className: "ml-[40vw] md:ml-[70vw] top-[1700px] lg:ml-[10vw] w-[150px] lg:w-[20rem] h-[200px] lg:h-[450px]",
    },
    {
      src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734807975/imgK4_q9mubj.png",
      alt: "Image 8",
      className: "ml-[40vw] md:ml-[15vw] top-[800px] lg:ml-[70vw] w-[190px]  lg:w-[28rem]",
    },
    {
      src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734769416/imgP5_cbfh5s.png",
      alt: "Image 9",
      className: "ml-[7vw] md:ml-[10vw] top-[900px] lg:top-[1300px] lg:ml-[70vw] w-[150px] lg:w-[20rem] h-[200px] lg:h-[450px]",
    },
    {
      src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734807976/imgK5_yh0olk.png",
      alt: "Image 10",
      className: "ml-[40vw] md:ml-[10vw] top-[1840px] md:top-[1700px] lg:top-[1800px]  lg:ml-[70vw] w-[140px]  lg:w-[28rem]",
    },
    {
      src: "https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734769416/imgP6_okvib9.png",
      alt: "Image 11",
      className: "ml-[7vw] md:ml-[78vw] top-[1800px]  lg:top-[1130px] bottom-10 lg:bottom-[130px] lg:ml-[15vw] w-[100px] lg:w-[20rem] h-[160px]  lg:h-[450px]",
    },
  ];

  return (
    <div className="max-w-screen space-y-16">
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

const ParallaxImg = ({ className, alt, src, scrollContainer, index }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    container: scrollContainer,
    offset: ["start 100%", "end 0%"],
  });


  const revealY = useTransform(
    scrollYProgress,
    [0, 1],  
    ["0%", "-400%"]
  );

  return (
    <div
      ref={ref}
      className={`relative w-full aspect-[4/3] overflow-hidden ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <motion.div
        className="absolute inset-0 bg-orange-500 origin-bottom"
       
        style={{
          y: revealY,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
    
      />
    </div>
  );
};

export default ParallaxImages;



