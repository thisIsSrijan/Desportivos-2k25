import React, { useState } from "react";
import xImage from "../../assets/images/x.png"
import zImage from "../../assets/images/0.png";
import tImage from "../../assets/images/tri.png";
import sqImage from "../../assets/images/squ.png";
import sp1 from "../../assets/images/sp1.png";
import sp2 from "../../assets/images/sp2.png";
import sp3 from "../../assets/images/sp3.png";
import sp4 from "../../assets/images/sp4.png";
import contentData from "../../assets/data/aboutData";

const Sports = () => {
  const images = ["sp1", "sp2", "sp3", "sp4"];
  const [activeImage, setActiveImage] = useState("sp1");


  const handleNext = () => {
    const currentIndex = images.indexOf(activeImage);
    const nextIndex = (currentIndex + 1) % images.length; 
    setActiveImage(images[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = images.indexOf(activeImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length; 
    setActiveImage(images[prevIndex]);
  };

  const handleImageClick = (image) => {
    setActiveImage(image);
  };

  const selectedContent = contentData.find((item) => item.id === activeImage);

  return (
    <div
      className="h-screen md:h-[60vw] w-full bg-cover bg-center overflow-hidden relative"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dzlzhtbfn/image/upload/v1732952318/Background_qmcxay.png')",
        minHeight: "100vh",
      }}
    >
      {/* Left section */}
      <div className="w-full md:w-1/2 h-full flex flex-row bg-cover bg-no-repeat absolute left-0">

       {/* image1 */}
        <div
          className={`flex-1 order-1 cursor-pointer opacity-50 relative ${
            activeImage === "sp1" ? "z-10 md:opacity-100" : "opacity-50"
          }`}
          style={{
            backgroundImage: `url(${xImage})`,
            backgroundSize: "400% 100%",
            backgroundPosition: "0% 0%",
            backgroundRepeat: "no-repeat",
          }}
          onClick={() => handleImageClick("sp1")}
        >
          <div
            className={`cursor-pointer absolute w-[47.3vw] md:w-[28.2vw] aspect-[0.73] -left-[2vw] bottom-0 bg-no-repeat ${
              activeImage === "sp1" ? "z-50 opacity-100" : " z-20 opacity-50"
            }`}
            style={{
              backgroundImage: `url(${sp1})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
            onClick={() => handleImageClick("sp1")}
          ></div>
        </div>


        {/* image2 */}     
        <div
          className={`flex-1 order-4 md:order-2 cursor-pointer opacity-50 relative ${
            activeImage === "sp2" ? "z-10 md:opacity-100" : "opacity-50"
          }`}
          style={{
            backgroundImage: `url(${zImage})`,
            backgroundSize: "400% 100%",
            backgroundPosition: "32% 0%",
            backgroundRepeat: "no-repeat",
          }}
          onClick={() => handleImageClick("sp2")}
        >
          <div
            className={` cursor-pointer absolute aspect-[0.73] w-[42vw] md:w-[21.5vw] -left-[16vw] md:-left-[2vw] -bottom-[12vw] md:-bottom-[6vw] bg-no-repeat ${
              activeImage === "sp2" ? "z-50 opacity-100" : "z-20 opacity-50"
            }`}
            style={{
              backgroundImage: `url(${sp2})`,
              backgroundSize: "contain",
            }}
            onClick={() => handleImageClick("sp2")}
          ></div>
        </div>

        {/* image3 */}
        <div
          className={`flex-1 order-3 cursor-pointer opacity-50 relative ${
            activeImage === "sp3" ? "md:z-10 md:opacity-100" : "opacity-50"
          }`}
          style={{
            backgroundImage: `url(${tImage})`,
            backgroundSize: "400% 100%",
            backgroundPosition: "67% 0%",
            backgroundRepeat: "no-repeat",
          }}
          onClick={() => handleImageClick("sp3")}
        >
          <div
            className={` cursor-pointer absolute bg-no-repeat aspect-[0.67] w-[41vw] md:w-[22.5vw] -left-[6vw] md:-left-[3vw] -bottom-[0.4vw] ${
              activeImage === "sp3" ? "z-50 opacity-100 " : "z-10 opacity-50"
            }`}
            style={{
              backgroundImage: `url(${sp3})`,
              backgroundSize: "contain",
            }}
            onClick={() => handleImageClick("sp3")}
          ></div>
        </div>


        {/* image4 */}
        <div
          className={`flex-1 order-2 md:order-4 cursor-pointer relative opacity-50 ${
            activeImage === "sp4" ? "md:z-10 md:opacity-100" : "opacity-50"
          }`}
          style={{
            backgroundImage: `url(${sqImage})`,
            backgroundSize: "400% 100%",
            backgroundPosition: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
          onClick={() => handleImageClick("sp4")}
        >
          <div
            className={`cursor-pointer absolute aspect-[0.8] md:w-[24vw]  w-[42vw] -bottom-[3vw] md:-bottom-[2vw] -left-[5vw]   bg-no-repeat  ${
              activeImage === "sp4" ? "z-50 opacity-100" : "z-20 opacity-50"
            }`}
            style={{
              backgroundImage: `url(${sp4})`,
              backgroundSize: "contain",
            }}
            onClick={() => handleImageClick("sp4")}
          ></div>
        </div>
            
      </div>
            {/* Right section */}
            <div className=" h-full w-full md:w-1/2  flex flex-col items-center justify-center " >
                
                {selectedContent && (
                    <div className=' flex flex-col '>
                        <h2 className=' text-center flex justify-center items-center font-dharma font-extrabold text-[4.93vw] absolute  top-[8.67vw] left-[28.2vw] md:left-[53.5vw] leading-[9.51vw] tracking-wide' 
                        style={{ color: selectedContent.color }}>{selectedContent.title}</h2>

                        <div className='w-[94.99vw] sm:w-[85.45vw] md:w-[34.99vw] absolute top-[30vw] md:top-[19.15vw] left-[2vw] sm:left-[7vw]  md:left-[57.3vw] text-center text-[15px] md:text-[18px] lg:text-[20px] '>
                            <p className='text-white   '>{selectedContent.description}</p><br/>
                            <p className='text-white   '>{selectedContent.description2}</p>
                        </div>
                       
                    </div>
                )}


                <div className="flex space-x-7 absolute top-[63.86vh] left-[31.02vw] md:top-[90.58vh] md:left-[66.89vw] ">
                      <button className="w-12 h-12 flex items-center justify-center bg-transparent text-white rounded-full border border-white shadow-md transform transition-transform duration-300 hover:scale-110" onClick={handlePrev}>
                        <i className="fa fa-chevron-left text-lg"></i>
                      </button>
                      <button className="w-12 h-12 flex items-center justify-center bg-transparent text-white rounded-full border border-white shadow-md transform transition-transform duration-300 hover:scale-110" onClick={handleNext}>
                        <i className="fa fa-chevron-right text-lg"></i>
                      </button>
                </div>
              </div>
      
      </div>

  );
};

export default Sports;
