import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { BsArrowRight, BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Calendar = () => {
  return (
    <div>
      {" "}
      <div className="px-5 text-xl ">
        <div className="2xl:max-w-[1250px] max-w-[988px]  bg-white mx-auto border-b border-b-blue">
          <div className="grid grid-cols-2 items-center py-16">
            <div>
              <h1 className="text-blue text-4xl">Calendar</h1>
            </div>
            <div className="flex gap-6">
              <div className="p-4 shadow-2xl w-72 flex  justify-between">
                All categories <BiChevronDown />
              </div>
              <div className="p-4 shadow-2xl w-72 flex justify-between">
                Date <BiChevronDown />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 items-center gap-6 py-16">
            {[1, 2, 3, 4].map((item, i) => {
              return (
                <div key={i}>
                  <h1 className="text-thin underline underline-offset-1">
                    PHD Defences
                  </h1>
                  <div className="mt-4">
                    {[1].map((item, i) => {
                      return (
                        <div>
                          <h1 className="text-blue">21 February 2023</h1>
                          {[1].map((item, i) => {
                            return (
                              <div>
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
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-between 2xl:max-w-[1250px] max-w-[988px]  mx-auto pb-32">
        <p className="flex gap-6 items-center text-xl py-4">
          {" "}
          News Overview
          <BsArrowRight />
        </p>
        <div className="flex text-2xl self-end bg-blue p-5 bg-opacity-30 gap-10">
          <BsChevronLeft /> <BsChevronRight />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
