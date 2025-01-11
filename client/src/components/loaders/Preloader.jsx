import React from 'react';

const Preloader = ({ onFinish }) => {
  return (
    <div className="preloader flex justify-center items-center h-screen w-screen bg-black relative">
      <video
        src="https://res.cloudinary.com/dzlzhtbfn/video/upload/v1734684604/LoaderBg_x8vnda.mp4"
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <video
        src="https://res.cloudinary.com/dzlzhtbfn/video/upload/v1734684825/Loader_nqggvt.mov"
        autoPlay
        muted
        onEnded={onFinish}
        className="mix-blend-lighten absolute h-5/6 bottom-0 left-1/2 -translate-x-1/2 object-cover"
      />
    </div>
  );
};

export default Preloader;
