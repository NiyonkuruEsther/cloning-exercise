import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Impact = () => {
  return (
    <div className="bg-gray pt-12 pb-40">
      <p className="text-red text-4xl px-5 lg:px-0 lg:text-5xl mb-12 max-w-[1250px] mx-auto">
        Impact
      </p>
      <div className="max-h-[700px] max-w-[1600px] bg-center h-[700px] flex flex-col w-[1600px] bg-cover justify-end bg-[url('https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/883cc0a7-cdf9-41aa-b410-2bce37f7a554/001_VU_com_Davide-Ianuzzi_PeGe_2022_PG006556_lowres%5B28%5D.jpg?w=1250&h=600&fit=clip&rect=336%2C153%2C1664%2C799&fm=jpg&auto=format&q=40&dpr=2')]">
        <div className="bg-white w-fit curve max-w-3xl mx-auto flex flex-col gap-4 px-16 self-center -mb-24 py-12">
          <h1 className="text-red text-3xl mt-12">Enterprenuership on VU</h1>
          <p className="text-xl">
            An interview with entrepreneurial scientist Davide Iannuzzi, Chief
            Impact Officer of Vrije Universiteit Amsterdam{" "}
          </p>
          <div className="flex gap-4 items-center">
            <p className="text-xl font-semibold">Read more</p>
            <AiOutlineArrowRight className="text-xl" />
          </div>
          <div className="self-end flex gap-6 items-center">
            <div className="flex gap-4 items-center">
              <div className="w-4 h-4 bg-red rounded-full"></div>
              <div className="w-2 h-2 bg-red rounded-full"></div>
              <div className="w-2 h-2 bg-red rounded-full"></div>
              <div className="w-2 h-2 bg-red rounded-full"></div>
            </div>

            <div className="flex text-2xl  bg-red p-4 bg-opacity-30 gap-10">
              <BsChevronLeft /> <BsChevronRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
