import React from "react";
import logoPix from "../../assets/react.svg";
import redefinPix from "../../assets/redefine5.avif"
import redefinePix from "../../assets/redefine6.avif"
const Redefines = () => {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center flex-col">
      <div className="h-[40%] w-[90%]  flex justify-center items-center ">
        <div className="w-[600px] h-full  flex justify-center items-center  flex-col ">
          <img src={logoPix} />
          <div className="mt-6 text-[20px] w-[300px] flex text-center uppercase mb-7 leading-6">
            redefines the luxury hospitality experience
          </div>
          <div className="text-[12px] text-center leading-5">
            Designed by architetural mastermind Joh Doe, {" "}
            <span className="font-bold ">Moon Safari</span> is where
            style, space and architectural designs create the perfect hotel
            lifestyle.{" "}
          </div>
        </div>
      </div>
      <div className="h-[55%] w-[80%] flex justify-between items-center  flex-wrap">
    
    
      <img src={redefinePix} className="rounded-md"/>
      <img src={redefinPix} className="rounded-md meduim:hidden "/>
      
      </div> 
    </div>
  );
};

export default Redefines;