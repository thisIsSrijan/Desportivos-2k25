import React, { useState } from "react";
import xImage from "../assets/images/x.png";
import zImage from "../assets/images/0.png";
import tImage from "../assets/images/tri.png";
import sqImage from "../assets/images/squ.png";
import sp1 from "../assets/images/sp1.png";
import sp2 from "../assets/images/sp2.png";
import sp3 from "../assets/images/sp3.png";
import sp4 from "../assets/images/sp4.png";
import contentData from "../../assets/data/aboutData";

const Sports = () => {
  const [activeImage, setActiveImage] = useState("sp1");

  const handleImageClick = (image) => {
    setActiveImage(image);
  };

  const selectedContent = contentData.find((item) => item.id === activeImage);

  return (
    <div
      className="h-screen md:h-[60vw] w-full bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dzlzhtbfn/image/upload/v1732952318/Background_qmcxay.png')",
        minHeight: "100vh",
      }}
    >
      {/* Left section */}
      <div className="w-full md:w-1/2 h-full flex flex-row bg-cover bg-no-repeat">

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
      {/* <div className="h-full absolute top-0 right-0 lg:w-1/2  ">
                
                {selectedContent && (
                    <div className=' flex flex-col absolute top-[30px] left-[-420px] lg:items-center lg:justify-center h-full'>
                        <h2 className=' text-center font-dharma font-extrabold text-[120px] lg:text-[150px] leading-[144px] lg:leading-[180px] tracking-wide ' 
                        style={{ color: selectedContent.color }}>{selectedContent.title}</h2>

                        <div className='w-[517px] h-[275px] text-center  -mt-12 lg:mt-0 text-[15px] lg:text-[20px] p-28  lg:p-0'>
                            <p className='text-white text-center lg:text-left  '>{selectedContent.description}</p><br/>
                            <p className='text-white text-center lg:text-left   '>{selectedContent.description2}</p>
                        </div>
                       
                    </div>
                )}
            </div> */}
    </div>
  );
};

export default Sports;
