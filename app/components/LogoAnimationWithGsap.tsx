"use client";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

const LogoAnimationWithGsap = () => {
  const txt = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.fromTo(
      txt.current,
      { x: "55%" },
      {
        x: "-60%",
        duration: 20,
        ease: "linear",
        repeat: -1,
      },
    );
  }, []);
  return (
    <div className="w-[95.5%] md:w-[75.5%] mx-auto overflow-hidden ">
      <div
        className="inline-flex whitespace-nowrap gap-26 py-20"
        ref={txt}
      >
        <div className="w-16 h-16 relative">
          <Image src="/icons/html.png" alt="html logo" fill />
        </div>
        <div className="w-16 h-16 relative">
          <Image src="/icons/css3.png" alt="css logo" fill />
        </div>
        <div className="w-16 h-16 relative">
          <Image src="/icons/js.png" alt="js logo" fill />
        </div>
        <div className="w-16 h-16 relative">
          <Image src="/icons/react.png" alt="react logo" fill />
        </div>
        <div className="w-16 h-16 relative">
          <Image src="/icons/next.png" alt="next logo" fill />
        </div>
        <div className="w-16 h-16 relative">
          <Image src="/icons/ts.png" alt="typescript logo" fill />
        </div>
        <div className="w-16 h-16 relative">
          <Image src="/icons/bootstrap.png" alt="bootstrap logo" fill />
        </div>
        <div className="w-16 h-16 relative">
          <Image src="/icons/tailwind.png" alt="tailwind logo" fill />
        </div>
        <div className="w-16 h-16 relative">
          <Image src="/icons/json.png" alt="json logo" fill />
        </div>
        <div className="w-16 h-16 relative">
          <Image src="/icons/shadcn.webp" alt="shadcn logo" fill />
        </div>
        <div className="w-16 h-16 relative">
          <Image src="/icons/mui.png" alt="mui logo" fill />
        </div>
        <div className="w-16 h-16 relative">
          <Image src="/icons/zustand.svg" alt="zustand logo" fill />
        </div>
      </div>
    </div>
  );
};

export default LogoAnimationWithGsap;
