import React from 'react';

const RandomLoader = () => {
  const loaders = ["/pageTransition/square.gif", "/pageTransition/circle.gif", "/pageTransition/triangle.gif"];
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
