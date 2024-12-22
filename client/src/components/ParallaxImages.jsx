import {motion, useMotionTemplate, useScroll, useTransform,} from "framer-motion";
import { useRef } from "react";
  
  const ParallaxImages = () => {
    return (
      <div className="mx-auto max-w-screen absolute z-10 top-0 overflow-hidden px-4">
        <ParallaxImg
          src="https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734769347/imgP1_v0he1z.png"
          alt=""
          start={{ sm: 1100, md: 1120, lg: 1300 }}
          end={{ sm: -50, md: -300, lg: -150 }}
          className="sm:ml-[5vw] md:ml-[10vw] lg:ml-[10vw] w-[8rem] lg:w-[16rem]"
        />
        <ParallaxImg
          src="https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734807975/imgK1_pujyuq.png"
          alt=""
          start={{ sm: 900, md: 1000, lg: 1000 }}
          end={{ sm: -50, md: -300, lg: -150 }}
          className="sm:ml-[20vw] md:ml-[50vw] lg:ml-[70vw] w-[12rem] lg:w-[25rem]"
        />
        <ParallaxImg
          src="https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734769416/imgP2_iy2bg8.png"
          alt=""
          start={{ sm: 800, md: 850, lg: 900 }}
          end={{ sm: -50, md: -300, lg: -150 }}
          className="sm:ml-[10vw] md:ml-[15vw] lg:ml-[40vw] w-[8rem] lg:w-[16rem]"
        />
        <ParallaxImg
          src="https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734807975/imgK2_wktv95.png"
          alt=""
          start={{ sm: 950, md: 1000, lg: 1050 }}
          end={{ sm: -50, md: -100, lg: -150 }}
          className="sm:ml-[20vw] md:ml-[60vw] lg:ml-[70vw] w-[12rem] lg:w-[25rem]"
        />
        <ParallaxImg
          src="https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734769416/imgP3_jvcaxe.png"
          alt=""
          start={{ sm: 700, md: 750, lg: 800 }}
          end={{ sm: -50, md: -100, lg: -150 }}
          className="sm:ml-[5vw] md:ml-[30vw] lg:ml-[10vw] w-[8rem] lg:w-[16rem]"
        />
        <ParallaxImg
          src="https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734807975/imgK3_xokcch.png"
          alt=""
          start={{ sm: 850, md: 900, lg: 950 }}
          end={{ sm: -50, md: -100, lg: -150 }}
          className="sm:ml-[20vw] md:ml-[50vw] lg:ml-[70vw] w-[12rem] lg:w-[25rem]"
        />
        <ParallaxImg
          src="https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734769416/imgP4_k2qzsv.png"
          alt=""
          start={{ sm: 300, md: 350, lg: 400 }}
          end={{ sm: -50, md: -100, lg: -150 }}
          className="sm:ml-[5vw] md:ml-[15vw] lg:ml-[40vw] w-[8rem] lg:w-[16rem]"
        />
        <ParallaxImg
          src="https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734807975/imgK4_q9mubj.png"
          alt=""
          start={{ sm: 750, md: 850, lg: 900 }}
          end={{ sm: -50, md: -100, lg: -150 }}
          className="sm:ml-[15vw] md:ml-[25vw] lg:ml-[50vw] w-[12rem] lg:w-[25rem]"
        />
        <ParallaxImg
          src="https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734769416/imgP5_cbfh5s.png"
          alt=""
          start={{ sm: 380, md: 450, lg: 500 }}
          end={{ sm: -50, md: -100, lg: -150 }}
          className="sm:ml-[10vw] md:ml-[20vw] lg:ml-[35vw] w-[8rem] lg:w-[16rem]"
        />
        <ParallaxImg
          src="https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734807976/imgK5_yh0olk.png"
          alt=""
          start={{ sm: 400, md: 450, lg: 500 }}
          end={{ sm: -50, md: -100, lg: -150 }}
          className="sm:ml-[10vw] md:ml-[20vw] lg:ml-[68vw] w-[12rem] lg:w-[25rem]"
        />
        <ParallaxImg
          src="https://res.cloudinary.com/dzlzhtbfn/image/upload/v1734769416/imgP6_okvib9.png"
          alt=""
          start={{ sm: -130, md: -50, lg: 10 }}
          end={{ sm: -50, md: -100, lg: -150 }}
          className="sm:ml-[5vw] md:ml-[10vw] lg:ml-[12vw] w-[8rem] lg:w-[16rem]"
        />
      </div>
    );
  };
  
  const ParallaxImg = ({ className, alt, src, start, end }) => {
    const ref = useRef(null);
  
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: [
        `${start.sm}px ${start.md}px ${start.lg}px`,
        `end ${end.sm * -1}px ${end.md * -1}px ${end.lg * -1}px`,
      ],
    });
  
    const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  
    const y = useTransform(scrollYProgress, [0, 1], [start.sm, end.sm]);
    const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;
  
    return (
      <motion.img
        src={src}
        alt={alt}
        className={`${className} w-[8rem] lg:w-[16rem] `}
        ref={ref}
        style={{ transform, opacity }}
      />
    );
  };
  
  export default ParallaxImages;