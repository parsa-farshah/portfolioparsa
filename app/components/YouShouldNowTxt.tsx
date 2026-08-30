"use client";
import React from "react";
import { Carattere } from "next/font/google";
import myData from "../store";

const carattere = Carattere({
  subsets: ["latin"],
  weight: ["400"],
});

function YouShouldNowTxt() {
  const { theme } = myData();

  return (
    <div>
      <h4
        className={`text-4xl md:text-5xl flex justify-center pb-20 ${
          theme ? "text-[#282929]" : "text-[#d9d7d5]"
        }`}
      >
        You Should To
        <span className={`px-3 ${carattere.className}`}>Know</span>{" "}
      </h4>
    </div>
  );
}

export default YouShouldNowTxt;
