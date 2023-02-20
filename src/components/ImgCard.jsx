import React from "react";
import { BsArrowRight } from "react-icons/bs";

const ImgCard = ({ styles }) => {
  return (
    <div className=" flex  gap-6">
      <img
        className={`max-w-[360px] max-h-[274px] h-[274px] ${styles}`}
        src="https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/83279044-76f1-4736-8fe6-383f0530dae1/2N3337X.jpg?w=1250&h=600&fit=clip&rect=0,1254,6720,3226"
        alt=""
      />
      <div className="flex flex-col text-2xl h-full justify-between">
        {" "}
        <div className="flex flex-col gap-4">
          {" "}
          <p className="text-darkBlue font-semibold self-start">8th Feb</p>
          <p>Earthquakes Turkey and Syria</p>
        </div>
        <BsArrowRight className="self-end" />
      </div>
    </div>
  );
};

export default ImgCard;
