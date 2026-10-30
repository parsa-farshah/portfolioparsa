"use client";
import React from "react";
import myData from "../store";

function LineAndShadowHEader() {
  const { theme } = myData();
  return (
    <div className="w-full h-full flex flex-col absolute ">
      {/* line left */}
      <div
        className={`w-[1px] h-[100%]  left-[2%] md:left-[12%] -translate-x-1/2 top-0 absolute z-40 ${theme ? "bg-line-light" : "bg-line-dark"} `}
      ></div>
      {/* shadow left */}
      <div
        className={`w-[150px] h-[70vh]  left-[2%] md:left-[12%] -translate-x-1/2 top-0 absolute z-30 hidden md:flex ${theme ? "bg-gradient-to-r from-page-light from-60% to-[#fff0] to-100%" : "bg-gradient-to-r from-page-dark from-60% to-[#fff0] to-100%"} `}
      ></div>
      {/* line right */}
      <div
        className={`w-[1px] h-[100%]  right-[2%] md:right-[12%] translate-x-1/2 z-40 top-0 absolute ${theme ? "bg-line-light" : "bg-line-dark"} `}
      ></div>
      {/* shadow right */}
      <div
        className={`w-[150px] h-[70vh] scale-x-[-1] right-[-10%] md:right-[8%]   top-0 absolute z-30 hidden md:flex ${theme ? "bg-gradient-to-r from-page-light from-60% to-[#fff0] to-100%" : "bg-gradient-to-r from-page-dark from-60% to-[#fff0] to-100%"} `}
      ></div>
    </div>
  );
}

export default LineAndShadowHEader;
