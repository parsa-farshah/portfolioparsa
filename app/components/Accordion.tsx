import React from "react";
import AccordionElement from "./AccordionElement";
import LineRow from "./LineRow";
import YouShouldNowTxt from "./YouShouldNowTxt";

function Accordion() {
  return (
    <div className="w-full h-fit mx-auto ">
      <YouShouldNowTxt />
      <AccordionElement />
      <div className="py-20">
        <LineRow />
      </div>
    </div>
  );
}

export default Accordion;
