import React from "react";
import { BiChevronDown } from "react-icons/bi";
import {
  BsArrowRight,
  BsChevronDown,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";

const Calendar = () => {
  return (
    <div>
      {" "}
      <div className="px-5 text-xl">
        <div className="2xl:max-w-[1250px] max-w-[988px] flex flex-col gap-12 bg-white mx-auto border-b border-b-blue">
          <div className="grid grid-cols-2 items-center pt-24">
            <div className="">
              <h1 className="text-blue text-5xl">Calendar</h1>
            </div>
            <div className="flex gap-6 font-semibold text-lg">
              <div className="px-3 shadow-cust w-72 flex  justify-between items-center">
                All categories <BsChevronDown className="text-2xl" />
              </div>
              <div className="px-3 py-2 shadow-3xl w-72 flex justify-between">
                Date <BsChevronDown className="text-2xl" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 items-center gap-6 pb-20">
            {["PHD Defences", "Social events", "Other events", "Lectures"].map(
              (item, index) => {
                return (
                  <div key={index}>
                    <h1 className="text-thin underline">{item}</h1>
                    <div className="mt-4">
                      {[1].map((item, i) => {
                        return (
                          <div key={i}>
                            <h1 className="text-blue">21 February 2023</h1>
                            {[1].map((item, i) => {
                              return (
                                <div key={i}>
                                  <h1 className="">
                                    Pilates - Life is Better in 3D
                                  </h1>
                                </div>
                              );
                            })}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-between 2xl:max-w-[1250px] max-w-[988px]  mx-auto pb-32">
        <p className="flex gap-6 items-center text-xl py-4">
          {" "}
          News Overview
          <BsArrowRight />
        </p>
        <div className="flex text-2xl self-end bg-blue p-5 bg-opacity-[0.15] gap-10">
          <BsChevronLeft /> <BsChevronRight />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
