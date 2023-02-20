import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Card = ({ styles, title }) => {
  return (
    <div
      className={` max-w-[615px]  px-8 ${styles} shadow-2xl py-8 flex flex-col gap-6`}
    >
      <div className="flex text-5xl text-blue justify-between ">
        <h1 className="">{title}</h1>
        {title === undefined ? "" : <AiOutlineArrowRight />}
      </div>
      <div className="flex flex-col gap-2 px-2">
        {[1, 2, 3, 4, 5].map((item, i) => {
          return (
            <div className="text-lg flex justify-between">
              <p> Lorem ipsum</p>
              <AiOutlineArrowRight className="text-xl" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
