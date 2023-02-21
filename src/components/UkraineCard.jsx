import React from "react";

import { BsArrowRight } from "react-icons/bs";

const UkraineCard = ({ text, styles }) => {
  return (
    <div className={`max-w-[615px] px-12 py-8 flex flex-col gap-8 shadow-3xl`}>
      <p className={` text-3xl ${styles}`}>{text}</p>
      <p className="">Information and support</p>
      <BsArrowRight className="self-end" />
    </div>
  );
};

export default UkraineCard;
