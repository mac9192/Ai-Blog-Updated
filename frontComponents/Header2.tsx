'use client'
import React, { useRef, useEffect } from "react";
 

interface myComponentProps {
  dictionary: any
}
 
const Header2: React.FC<myComponentProps> = ({dictionary}:{dictionary:any}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="relative lg:mt-[-117px] md:mt-[-138px]">

      {/*
      
    
      */}
     

      <video   className=" " autoPlay loop muted ref={videoRef}>
        <source src={'/assets/bgvideo-2.mov'}  />
      </video>
      <div className="absolute top-1/2 left-[300px] transform -translate-x-1/2 -translate-y-1/2 text-white   bg-logoBlue min-w-[500px] max-w-[600px] text-left text-5xl p-7 opacity-80 mt-4 font-extrabold sm:hidden md:block">
      <h1 className=" ">{dictionary.frontHeader.topLine} </h1>
      <p className="text-2xl mt-6">Atlanta Immigration Law and Personal Injury</p>
      
      {/*   
      
     <div className="grid-btn pt-7 space-x-5">
        <button className="btn" onClick={handlePlay}>
       Play
        </button>
        <button className="btn-pause" onClick={handlePause}>
          Pause
        </button>
      </div>
      */}
     

      </div>
    </div>
  );
};

export default Header2;