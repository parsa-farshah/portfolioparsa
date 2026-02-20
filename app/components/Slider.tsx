"use client";

import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

export default function Slider() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    slides: { origin: "center", perView: 1.4, spacing: 50 },
  });

  const myProjects = [
    {
      id: 1,
    },
  ];

  return (
    <div ref={sliderRef} className="keen-slider w-full py-10 h-fit">
      <div className="keen-slider__slide bg-amber-500 text-white  flex items-center justify-center rounded-xl h-[450px] relative overflow-hidden group">
        <div className="w-full h-full relative group-hover:scale-110 duration-500">
          <Image
            fill
            objectFit="cover"
            src="/images/shopImage.png"
            alt="shop"
          />
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black/65 to-transparent"></div>

        <button className="px-3 py-2 bg-[#00000025] backdrop-blur-2xl rounded-xl absolute top-[5%] right-[5%] cursor-pointer hover:bg-[#00000033] duration-500 text-xs">
          More Detail
        </button>
        <div className="absolute left-[5%] bottom-[5%] flex flex-col gap-2">
          <h1 className="text-xl font-bold">
            Oliver Cabell Shop
          </h1>
          <p className="text-sm font-medium">
            A modern and fully functional e-commerce website 
          </p>
        </div>
      </div>
      <div className="keen-slider__slide bg-amber-400 text-white text-3xl flex items-center justify-center rounded-xl h-[450px]">
        2
      </div>
      <div className="keen-slider__slide bg-amber-200 text-white text-3xl flex items-center justify-center rounded-xl h-[450px]">
        3
      </div>
      <div className="keen-slider__slide bg-blue-500 text-white text-3xl flex items-center justify-center rounded-xl h-[450px]">
        4
      </div>
      <div className="keen-slider__slide bg-green-500 text-white text-3xl flex items-center justify-center rounded-xl h-[450px]">
        5
      </div>
      <div className="keen-slider__slide bg-purple-500 text-white text-3xl flex items-center justify-center rounded-xl h-[450px]">
        6
      </div>
    </div>
  );
}
