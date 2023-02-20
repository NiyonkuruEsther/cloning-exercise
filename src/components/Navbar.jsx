import React from "react";
import { CiUser, CiSearch } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex justify-between shadow-md fixed inset-x-0 z-50 w-full max-w-[1600px] mx-auto">
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
        <AiOutlineMenu className="font-extrathin" />
      </div>
    </div>
  );
};

export default Navbar;
