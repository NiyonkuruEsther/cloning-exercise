import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Tour = () => {
  return (
    <div className="bg-gray py-24 ">
      <div className="2xl:max-w-[1250px] max-w-[988px]  mx-auto flex flex-col gap-16">
        <p className="text-green text-5xl font-light">Take a look</p>
        <div className="bg-white text-green text-2xl shadow-xl flex flex-col justify-between max-w-[403px] max-h-[240px] h-[240px] p-10">
          <p className="text-3xl font-light">Take a look</p>
          <BsArrowRight className=" text-black self-end" />
        </div>
      </div>
    </div>
  );
};

export default Tour;
