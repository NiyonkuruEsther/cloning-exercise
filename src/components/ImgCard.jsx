import React from "react";
import { BsArrowRight } from "react-icons/bs";

const ImgCard = ({ styles, src, num, props }) => {
  return (
    <div className="grid grid-cols-2 lg:flex gap-4 lg:gap-6 ">
      <div className={`${props}`}>
        <img
          className={`max-w-[360px] max-h-[274px] h-[274px] ${styles}`}
          src={src}
          alt=""
        />
      </div>

      <div className="flex flex-col text-xl lg:text-2xl h-full justify-between">
        {" "}
        <div className="flex flex-col gap-4">
          {" "}
          <p className="text-darkBlue font-semibold self-start">
            {num} Feb 2023
          </p>
          <p>Earthquakes Turkey and Syria</p>
        </div>
        <BsArrowRight className="self-end" />
      </div>
    </div>
  );
};

export default ImgCard;
