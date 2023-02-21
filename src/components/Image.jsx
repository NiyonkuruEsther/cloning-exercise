import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

const Image = () => {
  return (
    <>
      <div className="relative  lg:hidden max-w-[1920px] max-h-[400px] h-[350px] lg:max-h-[720px] lg:h-[720px] bg-contain bg-no-repeat bg-bottom lg:bg-center lg:bg-cover  font-thin mx-auto overflow-hidden bg-[url('https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/883a3f00-09ba-48b4-ba79-5de8eee6b868/CH_C119530b_BA_home_hero_2200x720.jpg?w=2200&h=720&fit=clip&rect=0,1,2200,720')]">
        <div className="lg:flex flex-col mx-auto max-w-full lg:max-w-fit ">
          {" "}
          <div className="py-5 lg:py-30 bg-blue text-xl lg:text-3xl h-fit max-w-full w-full lg:max-w-[729px] lg:w-[729px] px-5 lg:px-[40px] lg:-mt-12 shadow-3xl">
            <div className=" text-white  flex justify-between border-b-[1px] ">
              <input
                type="text"
                name=""
                id=""
                placeholder="Search..."
                className="bg-blue placeholder:text-white outline-none"
              />
              <CiSearch />
            </div>
          </div>
          <div className=" py-6 lg:py-30 px-5 lg:px-[40px] bg-white h-fit text-blue flex justify-between max-w-full lg:max-w-[512px] text-xl lg:text-3xl lg:w-[512px] w-full lg:-mt-12 shadow-3xl">
            <p>About VU Amsterdam </p>
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
      <div className="hidden lg:block  max-w-[1920px]  max-h-[720px] h-[720px] bg-center font-thin mx-auto bg-[url('https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/883a3f00-09ba-48b4-ba79-5de8eee6b868/CH_C119530b_BA_home_hero_2200x720.jpg?w=2200&h=720&fit=clip&rect=0,1,2200,720')]">
        <div className="flex mx-auto max-w-fit ">
          {" "}
          <div className="py-[26px] bg-blue text-3xl h-fit max-w-[729px] w-[729px] px-[40px] -mt-12 shadow-3xl">
            <div className=" text-white flex justify-between border-b-[1px] pb-2 ">
              <input
                type="text"
                name=""
                id=""
                placeholder="Search..."
                className="bg-blue placeholder:text-white outline-none"
              />
              <CiSearch className="text-white font-bold" size={35} />
            </div>
          </div>
          <div className="py-30 px-[20px] bg-white h-fit text-blue flex justify-between max-w-[512px] text-3xl w-[512px] -mt-12 shadow-3xl">
            <p>About VU Amsterdam </p>
            <AiOutlineArrowRight className="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Image;
