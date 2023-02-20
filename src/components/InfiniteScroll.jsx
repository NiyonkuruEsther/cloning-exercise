import React from "react";
import { BsArrowRight, BsChevronLeft, BsChevronRight } from "react-icons/bs";

const InfiniteScroll = () => {
  return (
    <div className="flex flex-col gap-8 py-16">
      <div>
        <p className="text-4xl text-red 2xl:max-w-[1250px] max-w-[988px]  mx-auto py-12">
          We are VU Amsterdam
        </p>
      </div>
      <div className="flex gap-12 mr-12">
        {[1, 2, 3, 4].map((item, i) => {
          return (
            <div className="max-w-[377px] flex flex-col gap-6">
              <div className="max-w-[377px] max-h-[476px] bg-cover h-[476px] bg-[url('https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/af80e288-3224-4918-a78c-14c99e741d32/Gustaaf-Peek_Foto_Maya-Hermes_2134x1600.jpg?fm=jpg&auto=format&q=40&dpr=2')]"></div>
              <p className="text-red text-3xl max-w-sm">
                Vrije Schrijver (Writer in Residence)
              </p>
              <div>
                <p className="flex gap-6 items-center justify-between text-xl">
                  {" "}
                  News Overview
                  <BsArrowRight />
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex text-2xl self-end bg-red p-5 bg-opacity-30 gap-10 mt-4">
        <BsChevronLeft /> <BsChevronRight />
      </div>
    </div>
  );
};

export default InfiniteScroll;
