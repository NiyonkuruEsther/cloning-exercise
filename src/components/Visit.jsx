import React from "react";

const Visit = () => {
  return (
    <div className="py-8 lg:py-24 max-w-[1250px] mx-auto">
      {" "}
      <div className="bg-blue px-5 text-2xl w-full lg:text-3xl py-8 justify-between flex flex-col lg:flex-row gap-12 lg:gap-0 mx-auto items-center lg:py-12 lg:p-12 lg:max-h-[150px] ">
        <p className="text-white text-center leading-tight lg:leading-none  font-semibold lg:font-normal">
          Do you also want to change your world?
        </p>
        <button className="bg-white px-12 lg:px-30 py-3 w-full lg:w-fit leading-tight lg:leading-none text-center font-semibold lg:font-normal">
          Visit The VU Master&apos;s Event
        </button>
      </div>
    </div>
  );
};

export default Visit;
