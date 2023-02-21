import { useRouter } from "next/router";
import React from "react";
import Home from ".";

const Details = () => {
  const {
    query: { id },
  } = useRouter();
  return (
    <>
      <p className="bg-purple-600 sticky text-white inset-x-0 z-50">
        This is a new page
      </p>

      <Home />
    </>
  );
};

export default Details;
