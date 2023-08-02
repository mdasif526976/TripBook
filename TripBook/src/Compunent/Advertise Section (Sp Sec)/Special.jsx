import React from "react";
import Card from "../Card/Card";

const Special = () => {
  return (
    <div className="mt-[100px] ">
      <h1 className="text-[40px] text-center mb-[60px]">Special Offer</h1>
      <div className="flex flex-col md:flex-row gap-[30px] justify-between">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Special;
