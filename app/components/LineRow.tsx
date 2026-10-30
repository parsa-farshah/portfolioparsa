"use client";
import React from "react";
import myData from "../store";

const LineRow = () => {
  const { theme } = myData();
  return (
    <div
      className={`w-full h-[1px] relative ${theme ? "bg-line-light" : "bg-line-dark"} `}
    >
      {/* dot left */}
      <div className="w-1.5 h-1.5 bg-dot left-[2%] md:left-[12%] -translate-x-1/2 -top-0.5 absolute z-30"></div>
      {/* dot right */}
      <div className="w-1.5 h-1.5 bg-dot right-[2%] md:right-[12%] translate-x-1/2 -top-0.5 absolute z-30"></div>
    </div>
  );
};

export default LineRow;
