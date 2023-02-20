import React from "react";
import { SlGraduation } from "react-icons/sl";
import { BiWorld } from "react-icons/bi";
import { BsAwardFill, BsPuzzleFill } from "react-icons/bs";
import Card from "./Card";

const Info = () => {
  return (
    <div className="max-w-full relative z-[999999px] bg-white">
      {" "}
      <div className="max-w-5xl mx-auto w-full flex text-lg font-semibold gap-28  pt-14 pb-24 ">
        <div className="flex gap-2 items-center ">
          {" "}
          <SlGraduation className="text-blue  text-4xl" />
          <p>Students</p>
        </div>
        <div className="flex gap-2 items-center">
          <BiWorld className="text-blue  text-4xl" />
          <p>International Students</p>
        </div>
        <div className="flex gap-2 items-center">
          <BsAwardFill className="text-blue  text-4xl" />
          <p>PHD Defences</p>
        </div>
        <div className="flex gap-2 items-center">
          <BsPuzzleFill className="text-blue  text-4xl" />
          <p>Lorem Ipsum</p>
        </div>
      </div>
      <div className=" flex justify-between max-w-fit gap-12 mx-auto">
        <Card styles={"w-[615px] "} title="Education" />
        <Card styles={"w-[615px] "} title="Education" />
      </div>
    </div>
  );
};

export default Info;
