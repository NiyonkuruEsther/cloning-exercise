import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Card from "./Card";
import { GrFacebook, GrLinkedin } from "react-icons/gr";
import {
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

const Features = () => {
  return (
    <div className="grid lg:grid-cols-3 lg:max-w-[1250px] max-w-[988px]  mx-auto gap-12 lg:gap-6 py-12 lg:py-24 text-3xl lg:text-5xl">
      <div className="flex flex-col lg:gap-16">
        <p className="text-blue px-5 font-thin lg:px-0">VU main menu</p>
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
        <Card styles={"hidden lg:block h-full"} />
      </div>
      <div className="flex flex-col lg:gap-16">
        <p className="text-red font-light px-5 lg:px-0">Most searched</p>
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
        <Card styles={"hidden lg:block h-full"} />
      </div>
      <div className="flex flex-col lg:gap-16">
        <p className="text-green font-thin px-5 lg:px-0">Featured</p>
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
        <div
          className={`bg-white w-full lg:max-w-[615px] px-6 lg:px-8  shadow-3xl py-8 flex justify-start flex-col gap-4 lg:gap-8`}
        >
          <div className="flex flex-col font-normal px-2">
            {[
              "Bachelor's programmes",
              "Master's programmes",
              "Honours programme",
            ].map((item, i) => {
              return (
                <Link
                  key={i}
                  href="https://vu.nl/en/education/bachelor"
                  className="text-lg flex  justify-between"
                >
                  <div className="self-start"> {item}</div>
                  <AiOutlineArrowRight className="text-xl" />
                </Link>
              );
            })}
          </div>
          <div className="flex gap-2 text-blue text-4xl items-center justify-start px-2">
            <GrFacebook size={30} />
            <GrLinkedin size={30} />
            <FaInstagramSquare />
            <FaYoutubeSquare />
            <FaTwitterSquare />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
