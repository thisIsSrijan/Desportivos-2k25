import React from "react";

const ErrorPage = () => {
  return (
    <div
      className="bg-black bg-cover relative h-screen w-full"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dturzqo8m/image/upload/v1734955828/ijjesgbpw5ky12jqtjqn.svg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>

      {/* Centered content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <img
          src="https://res.cloudinary.com/dturzqo8m/image/upload/v1736368604/wq9aixy5glrmnynvpm0z.png"
          alt="Coming Soon"
          className="mb-4"
        />
        <div className="text-[50px] sm:text-[80px] text-wrap text-gradient text-[#F85B02] dharma-gothic-c tracking-wide ">
          WE REGRET TO INFORM YOU THAT THE LINK YOU ENTERED DOES NOT EXIST !!!
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
