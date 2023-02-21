import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Card from "./Card";

const Features = () => {
  return (
    <div className="grid lg:grid-cols-3 lg:max-w-[1250px] max-w-[988px]  mx-auto gap-12 lg:gap-6 py-12 lg:py-24 text-3xl lg:text-5xl">
      <div className="flex flex-col lg:gap-16">
        <p className="text-blue px-5 lg:px-0">VU main menu</p>
        {/* Card */}
        <div className="flex flex-col lg:hidden gap-3 lg:gap-0 lg:pt-0 pt-10 font-normal px-5">
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
        <Card styles={"hidden lg:block"} />
      </div>
      <div className="flex flex-col lg:gap-16">
        <p className="text-red  px-5 lg:px-0">Most searched</p>
        {/* Card */}
        <div className="flex flex-col lg:hidden gap-3 lg:gap-0 lg:pt-0 pt-10 font-normal px-5">
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
        <Card styles={"hidden lg:block"} />
      </div>
      <div className="flex flex-col lg:gap-16">
        <p className="text-green  px-5 lg:px-0">Featured</p>
        {/* Card */}
        <div className="flex flex-col lg:hidden gap-3 lg:gap-0 lg:pt-0 pt-10 font-normal px-5">
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
        <Card styles={"hidden lg:block"} />
      </div>
    </div>
  );
};

export default Features;
