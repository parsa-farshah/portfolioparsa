"use client";
import React from "react";
import { Carattere } from "next/font/google";
import myData from "../store";
import LineRow from "./LineRow";

const carattere = Carattere({
  subsets: ["latin"],
  weight: ["400"],
});

function CallToAction() {
  const { theme } = myData();
  return (
    <div className="w-full h-fit">
      {/* card */}
      <section
        className={`w-[90%] md:w-[72%] mx-auto rounded-2xl border relative overflow-hidden ${theme ? "bg-card-light border-card-border-light" : "bg-card-dark border-card-border-dark"}`}
      >
        {/* glow top left */}
        <div
          className={`w-full h-full absolute left-0 top-0 bg-radial-[at_0%_0%] to-60% ${theme ? "from-brand-glow-light to-card-light" : "from-brand-glow-dark to-card-dark"}`}
        ></div>

        {/* content */}
        <div className="relative z-10 flex flex-col items-center text-center gap-6 px-6 py-16 md:py-20">
          <h3
            className={`text-3xl sm:text-4xl md:text-5xl ${theme ? "text-heading-light" : "text-heading-dark"}`}
          >
            Your story,{" "}
            <span className={carattere.className}>well designed.</span>
          </h3>
          <p
            className={`max-w-md text-sm sm:text-base ${theme ? "text-body-light" : "text-body-dark"}`}
          >
            Every brand has a story worth telling – let’s design yours with
            intention and style.
          </p>

          {/* buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <button
              type="button"
              className="px-5 py-3 border-2 border-brand-border bg-brand rounded-md text-white font-semibold shadow-lg shadow-blue-500/30 cursor-pointer hover:scale-95 duration-300"
            >
              Let’s Collaborate
            </button>
            <button
              type="button"
              className={`px-5 py-3 border-2 border-outline rounded-md font-semibold cursor-pointer hover:scale-95 duration-300 ${theme ? "text-heading-light" : "text-heading-dark"}`}
            >
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      <div className="py-10">
        <LineRow />
      </div>
    </div>
  );
}

export default CallToAction;
