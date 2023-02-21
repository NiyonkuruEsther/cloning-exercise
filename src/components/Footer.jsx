import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="lg:py-6 bg-blue px-5 lg:px-0  py-8">
      <div className=" text-white flex flex-wrap gap-5 2xl:gap-0 justify-between text-lg 2xl:max-w-[1250px] max-w-[988px]  mx-auto">
        <div className="flex  flex-wrap leading-4 text-white gap-3">
          {[
            "Privacy Statement",
            "Disclaimer",
            "Safety at VU Amsterdam",
            "Colofon",
            "Cookie Settings",
            "Web archive",
          ].map((item, i) => {
            return (
              <div key={i} className="flex gap-1 justify-center items-center">
                <p className="whitespace-nowrap tracking-tight">{item} </p>{" "}
                <BsArrowRight className="text-sm" />
              </div>
            );
          })}
        </div>{" "}
        <p className="tracking-tight text-base">
          Copyright © 2023 - Vrije Universiteit Amsterdam
        </p>
      </div>
    </div>
  );
};

export default Footer;
