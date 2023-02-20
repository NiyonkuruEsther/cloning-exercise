import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="py-8 bg-blue">
      <div className=" text-white flex justify-between text-lg 2xl:max-w-[1250px] max-w-[988px]  mx-auto">
        <div className="flex text-white gap-3">
          {[1, 2, 3, 4, 5, 6].map(() => {
            return (
              <div className="flex gap-1 items-center">
                <p>lorem ipsum </p> <BsArrowRight />
              </div>
            );
          })}
        </div>{" "}
        <p>Copyright © 2023 - Vrije Universiteit Amsterdam</p>
      </div>
    </div>
  );
};

export default Footer;
