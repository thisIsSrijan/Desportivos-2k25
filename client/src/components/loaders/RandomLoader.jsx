import React from 'react';
import square from "../../assets/gif/square.gif";
import circle from "../../assets/gif/circle.gif";
import triangle from "../../assets/gif/triangle.gif";

const RandomLoader = () => {
  const loaders = [square, circle, triangle];
  const randomLoader = loaders[Math.floor(Math.random() * loaders.length)];

  return (
    <div className="preloader flex justify-center items-center h-screen w-screen bg-black">
      <img
        src={randomLoader}
        className="max-h-full"
      />
    </div>
  );
};

export default RandomLoader;
