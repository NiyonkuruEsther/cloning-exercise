import React from "react";
import Card from "./Card";

const Features = () => {
  return (
    <div className="grid grid-cols-3 2xl:max-w-[1250px] max-w-[988px]  mx-auto gap-6 py-12 text-5xl">
      <div className="flex flex-col gap-8">
        <p className="text-red ">VU main menu</p>
        <Card />
      </div>
      <div className="flex flex-col gap-8">
        <p className="text-darkBlue ">VU main menu</p>
        <Card />
      </div>
      <div className="flex flex-col gap-8">
        <p className="text-green ">VU main menu</p>
        <Card />
      </div>
    </div>
  );
};

export default Features;
