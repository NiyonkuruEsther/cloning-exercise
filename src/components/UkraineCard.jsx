import React from "react";

import { BsArrowRight } from "react-icons/bs";

const UkraineCard = () => {
  return (
    <div className="max-w-[615px] p-12 flex flex-col shadow-lg">
      <p className="text-green text-3xl">Ukraine</p>
      <p className="">Information and support</p>
      <BsArrowRight className="self-end" />
    </div>
  );
};

export default UkraineCard;
