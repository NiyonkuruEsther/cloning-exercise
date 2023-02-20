import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Card = ({ styles, title }) => {
  return (
    <div
      className={` max-w-[615px]  px-8 ${styles} shadow-2xl py-8 flex flex-col gap-8`}
    >
      <div className="flex text-5xl text-blue justify-between ">
        <h1 className="">{title}</h1>
        {title === undefined ? "" : <AiOutlineArrowRight />}
      </div>
      <div className="flex flex-col font-normal px-2">
        {[
          "Bachelor's programmes",
          "Master's programmes",
          "Honours programme",
          "Education for professionals",
          "Study guide",
        ].map((item, i) => {
          return (
            <div className="text-lg flex justify-between">
              <p>{item}</p>
              <AiOutlineArrowRight className="text-xl" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
