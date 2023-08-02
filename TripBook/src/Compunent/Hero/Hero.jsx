import React from "react";
import "./hero.css";
import HomeSearch from "../Search inputs/HomeSearch";
const Hero = () => {
  return (
    <div className="flex bg relative object-cover mb-[100px]">
      <div className="left  text-4xl md:text-[48px] font-bold ">
        <p className="">Find an apartment</p>
        <p className="pt-4"> for your vacation</p>
        <p className="md:text-[20px] text-xl  font-normal mt-[20px]">
          We have several thousand apartments for every <br /> taste in every
          corner of the globel.
        </p>
        <div className="md:absolute bottom-[-40px] left-[16%]">
          <HomeSearch />
        </div>
      </div>
      <div className="right "></div>
    </div>
  );
};

export default Hero;
