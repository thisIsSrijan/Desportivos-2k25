import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ParallaxImg = ({ className, alt, src, text, pdfLink }) => {
  const ref = useRef(null);

  const { scrollYProgress: innerScrollYProgress } = useScroll({
    target: ref,
    offset: ["start 100%", "end 0%"],
  });

  const revealY = useTransform(innerScrollYProgress, [0, 0.4], ["0%", "-120%"]);
  const scale = useTransform(innerScrollYProgress, [0.4, 0], [1, 1.7]);
  const textY = useTransform(innerScrollYProgress, [0, 0.7], ["70%", "50%"]);

  return (
    <div ref={ref} className={`relative aspect-[4/3] overflow-hidden ${className}`}>
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
        className="absolute left-0 right-0 text-center text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wide font-bold"
        style={{
          y: textY,
          fontFamily: "Dharma Gothic C",
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {text}
      </motion.div>
      <a href={pdfLink} target="_blank" rel="noopener noreferrer">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative translate-y-[50%] sm:translate-y-[40%] md:translate-y-[30%]">
            <div className="w-[5rem] h-[3rem] sm:w-[6rem] sm:h-[4rem] md:w-[8rem] md:h-[4rem] lg:w-[9rem] lg:h-[5rem] border-2 border-white flex items-center justify-center">
              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-dharma">RULE BOOK</h1>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ParallaxImg;

