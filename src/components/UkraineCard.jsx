import React from "react";

import { BsArrowRight } from "react-icons/bs";

const UkraineCard = ({ text, styles }) => {
  return (
    <div
      className={`lg:max-w-[615px] px-8 lg:px-12 py-6 flex flex-col gap-4 lg:gap-8 shadow-3xl`}
    >
      <p className={` text-2xl lg:text-3xl ${styles}`}>{text}</p>
      <p className="">Information and support</p>
      <BsArrowRight className="self-end" />
    </div>
  );
};

export default UkraineCard;
