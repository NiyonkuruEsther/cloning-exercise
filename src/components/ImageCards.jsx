import React from "react";
import ImgCard from "./ImgCard";

const ImageCards = () => {
  return (
    <div
      className="flex 2xl:max-w-[1250px] max-w-[988px]  mx-auto
    "
    >
      <div>
        <ImgCard />
        <ImgCard />
      </div>
      <div>
        {" "}
        <ImgCard styles={"w-[150px]"} />
        <ImgCard styles={"w-[150px]"} />
        <ImgCard styles={"w-[150px]"} />
      </div>
    </div>
  );
};

export default ImageCards;
