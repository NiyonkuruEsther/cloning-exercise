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
        {[
          "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/af80e288-3224-4918-a78c-14c99e741d32/Gustaaf-Peek_Foto_Maya-Hermes_2134x1600.jpg?fm=jpg&auto=format&q=40&dpr=2",
          ,
          "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/c4f807f9-18b8-4d8a-ab3d-006f345289fb/DreamTeams_webbanner_1600x750_tcm289-955609.jpg?fm=jpg&auto=format&dpr=1",
          ,
          "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/9e00b0fc-d631-4c75-ae17-df91cdf62d93/Peter%20Valckx_IMG_7957_Frank_van_Harmelen_MA_AI_Verander.jpg?w=397&h=595&fit=clip&rect=2558%2C0%2C2562%2C3840&fm=jpg&auto=format&dpr=1",
          ,
          "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/ee314579-ae99-4e24-a166-e4275b7b26d7/MH_G3A6804_Spinozaprijs_Hero_2200x720_3.png?w=397&h=595&fit=clip&rect=673%2C125%2C397%2C595&fm=jpg&auto=format&dpr=1",
          ,
        ].map((item, i) => {
          return (
            <div key={i} className="max-w-[377px] flex flex-col gap-6">
              <img
                className={`max-w-[377px] max-h-[476px] object-cover object-center h-[476px] `}
                src={item}
              />
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
