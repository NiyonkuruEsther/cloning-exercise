import React from "react";
import { SlGraduation } from "react-icons/sl";
import { BiWorld } from "react-icons/bi";
import { BsAwardFill, BsPuzzleFill } from "react-icons/bs";
import Card from "./Card";

const Info = () => {
  return (
    <div className="max-w-full lg:-mt-16 bg-white">
      {" "}
      <div className="lg:hidden max-w-5xl mx-auto w-full flex text-base lg:text-lg font-semibold gap-14 lg:gap-28 px-5 py-6 lg:pt-14 lg:pb-24 ">
        <div className="flex flex-col lg:flex-row gap-2 items-center ">
          {" "}
          <SlGraduation className="text-blue text-2xl lg:text-4xl" />
          <p>Students</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 items-center">
          <BiWorld className="text-blue text-2xl lg:text-4xl" />
          <p>International Students</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 items-center">
          <BsAwardFill className="text-blue text-2xl lg:text-4xl" />
          <p>PHD Defences</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 items-center">
          <BsPuzzleFill className="text-blue text-2xl lg:text-4xl" />
          <p>Lorem Ipsum</p>
        </div>
      </div>
      <div className="hidden max-w-5xl mx-auto w-full lg:flex text-lg font-semibold gap-28  pt-8 pb-24">
        <div className="flex gap-2 items-center">
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
      <div className=" flex justify-between max-w-[1250px] gap-5 px-1 lg:gap-16 mx-auto flex-col lg:flex-row">
        <Card styles={"w-[615px] "} title="Education" />
        <Card styles={"w-[615px] "} title="Research" />
      </div>
    </div>
  );
};

export default Info;
