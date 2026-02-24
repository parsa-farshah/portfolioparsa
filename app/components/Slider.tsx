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
      id: "shop",
      title: " Oliver Cabell Shop",
      shortDesc: "A modern and fully functional e-commerce website",
      description:
        "A modern and fully functional e-commerce website inspired by Oliver Cabell built with Next.js, TypeScript, and TailwindCSS, featuring persistent global state, authentication, dynamic pages, and a smooth shopping experience.",
      liveDemo: "https://nike-shop-next.vercel.app/",
      repository: "https://github.com/parsa-farshah/nikeShopNext",
      imageSrc:
        "https://raw.githubusercontent.com/parsa-farshah/portfolioparsa/refs/heads/main/public/images/shopImage.png",
    },
    {
      id: "adminPanel",
      title: "Modern Admin Panel",
      shortDesc:
        "A modern and professional Admin Panel built with Next.js and Material UI (MUI)",
      description: `A modern and professional Admin Panel built with Next.js and Material UI (MUI)
Featuring Dark / Light Mode, Persian & English languages, Login system with MockAPI, and a fully functional Analytics Dashboard with Skeleton Loading.`,
      liveDemo: "https://admin-panel-bkq.pages.dev/",
      repository: "https://github.com/parsa-farshah/admin-panel",
      imageSrc:
        "https://raw.githubusercontent.com/parsa-farshah/portfolioparsa/refs/heads/main/public/images/adminPanel.png",
    },
    {
      id: "parallax",
      title: "OIL STAIN Parallax Concept",
      shortDesc:
        "A fully immersive parallax website concept inspired by the award-winning design of Oil Stain Lab.",
      description: `A fully immersive parallax website concept inspired by the award-winning design of Oil Stain Lab.
      This project delivers a stunning scroll-based visual experience built with HTML, Tailwind CSS, and Vanilla JavaScript, featuring smooth fade and scale animations that bring every section to life.`,
      liveDemo: "https://parsa-farshah.github.io/parallaxWebsite2/",
      repository: "https://github.com/parsa-farshah/parallaxWebsite2",
      imageSrc:
        "https://raw.githubusercontent.com/parsa-farshah/portfolioparsa/refs/heads/main/public/images/parallax.png",
    },
    {
      id: "second parallax",
      title: "Parallax Scrolling Website",
      shortDesc:
        "A visually stunning parallax scrolling website built with HTML5, Tailwind CSS, and Vanilla JavaScript.",
      description: `A visually stunning parallax scrolling website built with HTML5, Tailwind CSS, and Vanilla JavaScript.
      Inspired by award-winning websites on Awwwards (reference: Caeli Énergie), this project demonstrates smooth animations and immersive storytelling triggered by scroll events.`,
      liveDemo: "https://parsa-farshah.github.io/parallaxWebsite/",
      repository: "https://github.com/parsa-farshah/parallaxWebsite",
      imageSrc:
        "https://github.com/parsa-farshah/portfolioparsa/blob/main/public/images/caeliParallax.png",
    },
    {
      id: "game",
      title: "Modern Retro Snake Game",
      shortDesc:
        "A modern, fast, customizable version of the classic Snake game ",
      description: `A modern, fast, customizable version of the classic Snake game — built with JavaScript and TailwindCSS, fully responsive and powered with smart game logic, animations, and persistent data storage.`,
      liveDemo: "https://parsa-farshah.github.io/snakeGame/",
      repository: "https://github.com/parsa-farshah/snakeGame",
      imageSrc:
        "https://raw.githubusercontent.com/parsa-farshah/portfolioparsa/refs/heads/main/public/images/snakeGame.png",
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
          <h1 className="text-xl font-bold">Oliver Cabell Shop</h1>
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
