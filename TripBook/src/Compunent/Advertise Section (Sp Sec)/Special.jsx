import React from "react";
import Card from "../Card/Card";

const Special = () => {
  return (
    <div className="mt-[100px] ">
      <h1 className="text-[40px] text-center mb-[60px]">Special Offer</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Special;
