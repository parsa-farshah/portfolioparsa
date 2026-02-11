import React from "react";
import myData from "../store";

const LineRow = () => {
  const { theme } = myData();
  return (
    <div
      className={`w-full h-[1px] ${theme ? "bg-[#80808062]" : "bg-[#ffffff2d]"} `}
    >

    </div>
  );
};

export default LineRow;
