import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Tour = () => {
  return (
    <div className="bg-gray py-8 md:py-24 px-5 md:px-0 ">
      <div className="2xl:max-w-[1250px] max-w-[988px] mx-auto flex flex-col gap-5 md:gap-16">
        <p className="text-green text-3xl md:text-5xl font-light">
          Take a look
        </p>
        <div className="bg-white  text-green text-2xl shadow-3xl flex flex-col gap-16 md:justify-between md:max-w-[403px] md:max-h-[240px] md:h-[240px] p-5 md:p-10">
          <p className="text-xl md:text-3xl font-light">VU Campus Tour</p>
          <BsArrowRight className=" text-black self-end" />
        </div>
      </div>
    </div>
  );
};

export default Tour;
