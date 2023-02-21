import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Card = ({ styles, title }) => {
  return (
    <div
      className={`bg-white w-full lg:max-w-[615px] px-6 lg:px-8 ${styles} shadow-3xl py-8 flex justify-start flex-col gap-4 lg:gap-8`}
    >
      <div
        className={`flex text-3xl lg:text-5xl text-blue justify-between  ${
          title === undefined ? " hidden" : "block "
        }`}
      >
        <h1 className="">{title}</h1>
        <AiOutlineArrowRight />
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
            <div key={i} className="text-lg flex  justify-between">
              <p className="self-start"> {item}</p>
              <AiOutlineArrowRight className="text-xl" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
