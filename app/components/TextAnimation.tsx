"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const TextAnimation = () => {
  const txt = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.fromTo(
      txt.current,
      { x: "100%" }, 
      {
        x: "-100%",
        duration: 17,
        ease: "linear",
        repeat: -1,
      },
    );
  }, []);
  return (
    <div className="w-[96%] md:w-[76%] mx-auto overflow-hidden relative top-[250px]">
      <h3 className="text-9xl whitespace-nowrap text-[#7c7b7a]" ref={txt}>
        PARSA® DEHGHAN® POUR® FARASHAH®
      </h3>
    </div>
  );
};

export default TextAnimation;
