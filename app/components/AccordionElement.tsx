"use client";
import { useState } from "react";
import myData from "../store";

const AccordionElement = () => {
  const { theme } = myData();

  const [accordWrapp, setAccordWrapp] = useState<string, boolean>({
    number1: false,
    number2: false,
    number3: false,
  });

  return (
    <div className="w-fit h-full flex flex-col justify-center items-center relative mx-auto">
      {/* 1 */}
      <div
        onClick={() => {
          setAccordWrapp(() => {
            return {
              ...accordWrapp,
              number1: !accordWrapp.number1,
              number2: false,
              number3: false,
            };
          });
        }}
        className={`w-[90%] md:w-[46%] h-fit text-lg p-5 rounded-xl cursor-pointer duration-500 border border-[#a1a1a14f] ${theme ? "bg-[#d3d3d33a] text-black" : "bg-[#020202a8] text-white"}`}
      >
        <p>
          {" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia,
          dignissimos
        </p>
      </div>
      <p
        className={`w-[90%] md:w-[46%] m-2 text-justify duration-700 px-5 ${theme ? " text-black" : " text-white"}  ${accordWrapp.number1 ? "h-[100px] overflow-auto overflow-y-hidden" : "h-[0px] overflow-hidden"}`}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus dolor
        illum facilis recusandae autem sapiente atque sit, voluptate
        reprehenderit quae, dolores perspiciatis tenetur! Tempora, dolorum?
        Minus laborum qui velit possimus.
      </p>
      {/* 2 */}
      <div
        onClick={() => {
          setAccordWrapp(() => {
            return {
              ...accordWrapp,
              number2: !accordWrapp.number2,
              number1: false,
              number3: false,
            };
          });
        }}
        className={`w-[90%] md:w-[46%] h-fit text-lg p-5 rounded-xl cursor-pointer duration-500 border border-[#a1a1a14f] ${theme ? "bg-[#d3d3d33a] text-black" : "bg-[#020202a8] text-white"}`}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia,
        dignissimos
      </div>
      <p
        className={`w-[90%] md:w-[46%] m-2 text-justify duration-700 px-5 ${theme ? " text-black" : " text-white"} ${accordWrapp.number2 ? "h-[100px] overflow-auto overflow-y-hidden" : "h-[0px] overflow-hidden"}`}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus dolor
        illum facilis recusandae autem sapiente atque sit, voluptate
        reprehenderit quae, dolores perspiciatis tenetur! Tempora, dolorum?
        Minus laborum qui velit possimus.
      </p>

      {/* 3 */}
      <div
        onClick={() => {
          setAccordWrapp(() => {
            return {
              ...accordWrapp,
              number3: !accordWrapp.number3,
              number1: false,
              number2: false,
            };
          });
        }}
        className={`w-[90%] md:w-[46%] h-fit text-lg p-5 rounded-xl cursor-pointer duration-500 border border-[#a1a1a14f] ${theme ? "bg-[#d3d3d33a] text-black" : "bg-[#020202a8] text-white"}`}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia,
        dignissimos
      </div>
      <p
        className={`w-[90%] md:w-[46%] m-2 text-justify duration-700 px-5 ${theme ? " text-black" : " text-white"}  ${accordWrapp.number3 ? "h-[100px] overflow-auto overflow-y-hidden" : "h-[0px] overflow-hidden"}`}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus dolor
        illum facilis recusandae autem sapiente atque sit, voluptate
        reprehenderit quae, dolores perspiciatis tenetur! Tempora, dolorum?
        Minus laborum qui velit possimus.
      </p>
    </div>
  );
};

export default AccordionElement;
