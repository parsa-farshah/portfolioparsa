"use client";
import React from "react";
import LineRow from "./LineRow";
import { Carattere } from "next/font/google";
import myData from "../store";

const carattere = Carattere({
  subsets: ["latin"],
  weight: ["400"],
});

function Designed() {
  const { theme } = myData();
  return (
    <div className="py-20">
      <h4
        className={`text-2xl sm:text-4xl md:text-5xl flex justify-center ${
          theme ? "text-heading-light" : "text-heading-dark"
        }`}
      >
        What I can <span className={`px-3 ${carattere.className}`}>help</span>{" "}
        with.
      </h4>
    </div>
  );
}

export default Designed;
