import React from 'react';
const aws=import.meta.env.VITE_AWS;
const square = `${aws}/square.gif`;
const circle = `${aws}/circle.gif`;
const triangle = `${aws}/triangle.gif`;

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
