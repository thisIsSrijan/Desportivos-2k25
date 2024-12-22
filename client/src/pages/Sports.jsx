import React, { useState } from 'react';
import xImage from '../assets/x.png'; 
import zImage from '../assets/0.png'; 
import tImage from '../assets/tri.png'; 
import sqImage from '../assets/squ.png'; 
import sp1 from "../assets/sp1.png";
import sp2 from "../assets/sp2.png";
import sp3 from "../assets/sp3.png";
import sp4 from "../assets/sp4.png";
import contentData from "../components/data";



const Sports = () => {
    const [activeImage, setActiveImage] = useState('sp1');

    const handleImageClick = (image) => {
        setActiveImage(image);
    };

    const selectedContent = contentData.find((item) => item.id === activeImage);

    return (
        <div
            className="min-h-screen h-[932px] md:h-[982px] w-full relative bg-cover bg-center overflow-hidden"
            style={{
                backgroundImage:
                    "url('https://res.cloudinary.com/dzlzhtbfn/image/upload/v1732952318/Background_qmcxay.png')",
                    minHeight:'100vh',
            }}>
            {/* Left section */}
            <div className="w-full md2:w-1/2 h-[787.54px] flex flex-row min-h-screen bg-cover bg-no-repeat">
                <div
                    className={`flex-1 cursor-pointer opacity-50   lg:${activeImage === 'sp1' ? 'z-10 opacity-100' : 'opacity-50'}`}
                    style={{
                        backgroundImage: `url(${xImage})`,
                        backgroundSize: '400% 100%',
                        backgroundPosition: '0% 0%',
                        backgroundRepeat:'no-repeat'
                        
                    }}
                    onClick={() => handleImageClick('sp1')}
                ></div>
                <div
                    className={`flex-1 cursor-pointer opacity-50 lg:${activeImage === 'sp2' ? 'z-10 opacity-100' : 'opacity-50'}`}
                    style={{
                        backgroundImage: `url(${zImage})`,
                        backgroundSize: '400% 100%',
                        backgroundPosition:'32% 0%',
                        backgroundRepeat:'no-repeat'
                    }}
                    onClick={() => handleImageClick('sp2')}

                ></div>
                <div
                    className={`flex-1 cursor-pointer opacity-50  lg:${activeImage === 'sp3' ? 'z-10 opacity-100' : 'opacity-50'}`}
                    style={{
                        backgroundImage: `url(${tImage})`,
                        backgroundSize: '400% 100%',
                        backgroundPosition:'67% 0%',
                        backgroundRepeat:'no-repeat'
                    }}
                    onClick={() => handleImageClick('sp3')}
                ></div>
                <div
                    className={`flex-1 cursor-pointer opacity-50 lg:${activeImage === 'sp4' ? 'z-10 opacity-100' : 'opacity-50'}`}
                    style={{
                        backgroundImage: `url(${sqImage})`,
                        backgroundSize: '400% 100%',
                        backgroundPosition:'100% 100%',
                        backgroundRepeat:'no-repeat'
                    }}
                    onClick={() => handleImageClick('sp4')}
                ></div>
            </div>
            
            
            <div
                className={`cursor-pointer   w-[225px] h-[307px] md:w-[330px]  lg:w-[552px] md:h-[592px]  md2:h-[582px] lg:h-[582px] absolute top-[626px]  md:top-[465px]  lg:top-[400px] left-[-33px]  md:left-[2px] lg:left-[-160px] xl:left-[-110px] 2xl:left-[-100px] uxl:left-[-98px] bg-no-repeat ${activeImage === 'sp1' ? 'z-50 opacity-100' : ' z-20 opacity-50'}` }
                style={{
                    backgroundImage: `url(${sp1})`,
                    backgroundPosition:'center',
                    backgroundSize:'contain',
                }}
                onClick={() => handleImageClick('sp1')}
                ></div>
            <div
                className={` cursor-pointer  w-[203px] md:w-[356px] lg:w-[386px] h-[275px] md:h-[393px] lg:h-[593px] absolute top-[714px] sm:top-[686px] md:top-[636px] lg:top-[606px] left-[183px]   md:left-[429px] lg:left-[45px] 2xl:left-[110px] uxl:left-[120px] bg-no-repeat ${activeImage === 'sp2' ? 'z-50 opacity-100' : 'z-20 opacity-50'}` }
                style={{
                    backgroundImage: `url(${sp2})`,
                    backgroundSize:'contain',
                    }}
                    onClick={() => handleImageClick('sp2')}
                    ></div>
            <div
                className={` cursor-pointer  w-[202px] md:w-[318px]  lg:w-[348px] h-[300px]  md:h-[500px] lg:h-[650px] absolute top-[633px]  md:top-[528px] lg:top-[467px] left-[122px]   md:left-[311px] lg:left-[190px] xl:left-[240px] 2xl:left-[300px] uxl:left-[330px] bg-no-repeat  ${activeImage === 'sp3' ? 'z-50 opacity-100 ' : 'z-10 opacity-50'}` }
                style={{
                    backgroundImage: `url(${sp3})`,  
                    backgroundSize:'contain',
                }}
                onClick={() => handleImageClick('sp3')}
                ></div>
            <div
                className={`cursor-pointer  w-[206px] md:w-[418px]  lg:w-[358px] h-[258px] md:h-[396px] lg:h-[530px] absolute top-[691px] sm:top-[656px] md:top-[596px] lg:top-[610px] left-[33px]  md:left-[126px] lg:left-[278px] xl:left-[338px] 2xl:left-[450px] uxl:left-[480px]  bg-no-repeat  ${activeImage === 'sp4' ? 'z-50 opacity-100' : 'z-20 opacity-50'}` }
                style={{
                    backgroundImage: `url(${sp4})`,   
                    backgroundSize:'contain',     
                }}
                onClick={() => handleImageClick('sp4')}
            ></div>
                
            
            

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
