import React from "react";
import Right from "./Right";

const Hero = () => {
  return (
    <div className="pt-24 flex justify-between px-[5%] bg-[#f4f468] gap-5 h-[800px] relative">
      <div className="left">
        <h1 className="text-[64px] font-bold italic">
          Get started your exciting{" "}
          <span className="text-[hsl(59,99%,61%)]">journey</span> with us.
        </h1>
        <p className="text-[20px] text-xl  mb-[32px] font-normal mt-[32px]">
          A Team of experienced tourism professionals will provide you with the
          best advice and tips for your desire place.{" "}
        </p>
        <button className="btn px-8 py-4">Discover Now</button>
      </div>
      <div className="right w-full">
        <Right />
      </div>
      <div
        className="absolute rounded-xl bottom-16 left-[18%] w-[841px]  h-[124px] p-8 bg-white
      flex justify-between shadow-2xl"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="">Location</label>
          <input
            style={{ color: "var(--paragraph, #666)", width: "200px" }}
            className="border-none shadow-sm rounded"
            type="text"
            placeholder="Where you going"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Date</label>
          <input
            style={{ color: "var(--paragraph, #666)", width: "200px" }}
            className="border-none shadow-sm rounded"
            type="text"
            placeholder="When you will go"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Guest</label>
          <input
            style={{ color: "var(--paragraph, #666)", width: "200px" }}
            className="border-none shadow-sm rounded"
            type="text"
            placeholder="Numbar of Guest"
          />
        </div>

        <button className="py-4 px-7 text-white bg-[#faf336] rounded">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
