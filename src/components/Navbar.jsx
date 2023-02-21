import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";

const Navbar = () => {
  const [tabValue, setTabValue] = useState(0);
  const [slide, setSlide] = useState(1);
  useEffect(() => {
    document.body.style.overflow = tabValue ? "hidden" : "auto";
    return () => (document.body.style.overflow = "scroll");
  }, [tabValue]);
  return (
    <>
      <div
        className={`flex justify-between shadow-md fixed inset-x-0 z-50 w-full max-w-[1600px] mx-auto ${
          tabValue === 1 ? " invisible" : ""
        }`}
      >
        <div className="px-30 py-4 bg-white max-w-full w-full">
          <img
            src="https://vu.nl/assets/images/VU-logo-nobg.svg"
            alt=""
            className="max-w-[185px] w-[185px]"
          />
        </div>
        <div className="flex items-center gap-6 max-w-[234px] bg-gray px-30 text-2xl font-thin">
          <p>NL</p>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="User">
              <g>
                <path d="M17.438,21.937H6.562a2.5,2.5,0,0,1-2.5-2.5V18.61c0-3.969,3.561-7.2,7.938-7.2s7.938,3.229,7.938,7.2v.827A2.5,2.5,0,0,1,17.438,21.937ZM12,12.412c-3.826,0-6.938,2.78-6.938,6.2v.827a1.5,1.5,0,0,0,1.5,1.5H17.438a1.5,1.5,0,0,0,1.5-1.5V18.61C18.938,15.192,15.826,12.412,12,12.412Z"></path>
                <path d="M12,9.911a3.924,3.924,0,1,1,3.923-3.924A3.927,3.927,0,0,1,12,9.911Zm0-6.847a2.924,2.924,0,1,0,2.923,2.923A2.926,2.926,0,0,0,12,3.064Z"></path>
              </g>
            </g>
          </svg>
          <CiSearch />
          <AiOutlineMenu
            className="font-extrathin"
            onClick={() => setTabValue(1)}
          />
        </div>
      </div>
      <div
        className={
          tabValue
            ? " max-w-[1600px] w-[1600px] absolute mx-auto h-screen transition-all ease-in-out duration-300 opacity-100 z-[100000000] overflow-hidden bg-white"
            : "transition-all duration-0 absolute opacity-0 w-[1600px] h-0 top-0 overflow-hidden mx-auto"
        }
      >
        <div className="max-w-[1600px] mx-auto flex w-full justify-end">
          <div className="bg-gray p-5">
            <RxCross1
              className={`self-end text-black text-xl rotate-180 ${
                tabValue === 1 ? " rotate-[360deg] duration-1000" : ""
              }`}
              onClick={() => {
                setTabValue(0), setSlide(1);
              }}
            />
          </div>
        </div>
        <div className="h-6"></div>
        <div>
          <div className=" max-w-[1250px] w-full mx-auto pt-32 flex flex-col gap-4">
            {[
              "Study at VU Amsterdam",
              "Research",
              "About VU Amsterdam",
              "VU press office",
              "Alumni",
              "Student",
              "Employees",
            ].map((e, i) => {
              return (
                <Link
                  href={""}
                  // href={`/rout/${i}`}
                  key={i}
                  onClick={() => setSlide(0)}
                  className=""
                >
                  <div
                    key={i}
                    className="px-3 flex items-center py-3 font-semibold w-fit"
                  >
                    <p className="text-[25px] tracking-tight max-w-xs w-52 leading-tight">
                      {e}
                    </p>
                    <RxCross1 className=" text-black text-xl rotate-45" />
                    {/* <FaChevronRight className="mt-3" /> */}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

{
  /* <div className="col-span-6 place-self-end h-full">
        <div className="flex gap-3">
          <div className="group h-fit">
            <div
              className={`max-w-[45px] h-fit group border border-transparent rounded-full p-1  hover:border-[#333] ${
                tabValue === 1 ? " invisible" : ""
              }`}
            >
              <IoAccessibilityOutline size={30} className="opacity-60" />
            </div>
            <div className="hidden group-hover:block absolute">
              <div className=" mt-2 rounded-full bg-gray-200 p-2 text-gray-600">
                <BiBuildingHouse size={30} />
              </div>
              <div className=" mt-2 rounded-full bg-gray-200 p-2 text-gray-600">
                <FaHandsWash size={30} />
              </div>
            </div>
          </div>
          <div className="group h-fit">
            <div
              className={`max-w-[40px] h-fit border border-transparent rounded-full p-1  hover:border-[#333] ${
                tabValue === 1 ? " invisible" : ""
              }`}
            >
              <img src="/lang.png" alt="yes" />
            </div>
            <div className="hidden group-hover:block absolute">
              <div className=" mt-2 rounded-full bg-gray-200 p-2 text-gray-600">
                <IoLanguageOutline size={30} />
              </div>
            </div>
          </div>

          <div
            onClick={() => setTabValue(1)}
            className={`flex flex-col gap-2 mt-2 pl-2 ${
              tabValue === 1 ? " invisible" : ""
            }`}
          >
            <div className="border-b-2 border-gray-500 w-7 rounded-full"></div>
            <div className="border-b-2 border-gray-500 w-7 rounded-full"></div>
            <div className="border-b-2 border-gray-500 w-7 rounded-full"></div>
          </div>
        </div>
      </div> */
}
