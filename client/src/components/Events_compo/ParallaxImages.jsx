import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';

const ParallaxImg = ({ className, alt, src, scrollYProgress, text }) => {
  const ref = useRef(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  const { scrollYProgress: innerScrollYProgress } = useScroll({
    target: ref,
    offset: ["start 100%", "end 0%"],
  });

  const revealY = useTransform(innerScrollYProgress, [0, 0.4], ["0%", "-120%"]);
  const scale = useTransform(innerScrollYProgress, [0.4, 0], [1, 1.7]);
  const textOpacity = useTransform(innerScrollYProgress, [0, 0.2, 0.4], [1, 1, 0]);
  const textY = useTransform(innerScrollYProgress, [0, 0.7], ["100%", "-50%"]);

  innerScrollYProgress.onChange((progress) => {
    if (progress > 0.4 && !hasScrolled) {
      setHasScrolled(true);
    }
  });

  return (
    <div ref={ref} className={`relative w-full aspect-[4/3] overflow-hidden ${className}`}>
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
      {!hasScrolled && (
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
      )}
    </div>
  );
};

export default ParallaxImg;