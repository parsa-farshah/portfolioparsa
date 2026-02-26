"use client";
import React from "react";
import { Carattere } from "next/font/google";
import myData from "../store";
import LineRow from "./LineRow";

const carattere = Carattere({
  subsets: ["latin"],
  weight: ["400"],
});

const TwoWaysToBegin = () => {
  const { theme } = myData();
  return (
    <div className="py-20">
      <LineRow />
      <h4
        className={`text-4xl md:text-5xl flex justify-center py-20 ${
          theme ? "text-[#282929]" : "text-[#d9d7d5]"
        }`}
      >
        Two Ways To{" "}
        <span className={`px-3 ${carattere.className}`}>Begin</span>{" "}
      </h4>
    </div>
  );
};

export default TwoWaysToBegin;
