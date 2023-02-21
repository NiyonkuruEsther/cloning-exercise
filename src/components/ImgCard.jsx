import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const ImgCard = ({ styles, src, num, props }) => {
  return (
    <div className="grid grid-cols-2 lg:flex gap-4 lg:gap-6 ">
      <Link
        href={
          "https://vu.nl/en/news/2023/erc-consolidator-grant-for-wouter-botzen"
        }
        className={`${props}`}
      >
        <img className={` overflow-hidden ${styles}`} src={src} alt="" />
      </Link>

      <div className="flex flex-col text-xl lg:text-2xl h-full justify-between">
        {" "}
        <div className="flex flex-col gap-4">
          {" "}
          <p className="text-darkBlue font-semibold self-start">
            {num} Feb 2023
          </p>
          <p>Earthquakes Turkey and Syria</p>
        </div>
        <Link
          className="self-end"
          href="https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/fb087129-4b7b-4a5b-a24c-2c6c841c5b3b/s_ondernemerschap%20en%20impact.jpg?fm=jpg&auto=format&dpr=1"
        >
          <BsArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default ImgCard;
