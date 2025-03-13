import React from 'react';

const Preloader = ({ onFinish }) => {
  return (
    <div className="preloader flex justify-center items-center h-screen w-screen bg-black relative">
      <video
        src="https://res.cloudinary.com/djtezst4g/video/upload/v1741885717/bg_axt0qt.mp4"
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <video
        src="https://res.cloudinary.com/djtezst4g/video/upload/v1741886011/dalgona_loader_jppcqh.mp4"
        autoPlay
        muted
        onEnded={onFinish}
        className="mix-blend-lighten absolute h-5/6 bottom-0 left-1/2 -translate-x-1/2 object-cover"
      />
    </div>
  );
};

export default Preloader;
