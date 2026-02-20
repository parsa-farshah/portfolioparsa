import React from "react";
import Ability from "./Ability";
import myData from "../store";
import LineRow from "./LineRow";
import { Carattere } from "next/font/google";


const carattere = Carattere({
  subsets: ["latin"],
  weight: ["400"],
});

function AbilityComponent() {
  const { theme } = myData();
  return (
    <div className="py-20">
      <h4
        className={`text-4xl md:text-5xl flex justify-center ${
          theme ? "text-[#282929]" : "text-[#d9d7d5]"
        }`}
      >
        What I can <span className={`px-3 ${carattere.className}`}>help</span>{" "}
        with.
      </h4>
      <Ability />
      <div className="mt-[500px]">
        <LineRow />
      </div>
    </div>
  );
}

export default AbilityComponent;
