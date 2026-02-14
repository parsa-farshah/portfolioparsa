import React from "react";
import { Carattere } from "next/font/google";

const carattere = Carattere({
  subsets: ["latin"],
  weight: ["400"],
});

const Projects = () => {
  return (
    <div className="py-20">
      <h4
        className={`text-4xl md:text-5xl flex justify-center ${theme ? "text-[#282929]" : "text-[#d9d7d5]"}`}
      >
        What I can <span className={`px-3 ${carattere.className}`}>help</span>{" "}
        with.
      </h4>
    </div>
  );
};

export default Projects;
