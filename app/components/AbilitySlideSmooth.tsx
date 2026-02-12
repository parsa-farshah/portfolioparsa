"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import myData from "../store";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const AbilitySlideSmooth = ({
  src = "/icons/pen.png",
  alt,
  text,
  paragraph,
}: {
  alt: string;
  src: string;
  text: string;
  paragraph: string;
}) => {
  const { theme } = myData();
  const boxRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!boxRef.current || !wrapperRef.current) return;

    gsap.fromTo(
      boxRef.current,
      { y: 300, opacity: 0, scale: 0.7 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "center center",
          end: "+=3000",
          pin: true,
          scrub: 1.5,
          pinSpacing: true,
          markers: true,
        },
      },
    );
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="h-[200vh] flex items-center justify-center"
    >
      <div
        ref={boxRef}
        className={`w-[382px] md:w-[667px] h-fit rounded-xl shadow-xl mx-auto border relative overflow-hidden p-8 md:p-6 ${
          theme
            ? "bg-[#f5f2f0] border-[#d4d2cf]"
            : "bg-[#0b0c0f] border-[#27282a]"
        }`}
      >
        {/* bg top right */}
        <div
          className={`w-[70%] h-[50%] absolute right-0 top-0 bg-radial-[at_120%_25%]  to-65% ${
            theme
              ? "from-[#a7c1f4] to-[#f5f2f0]"
              : "from-[#07245e] to-[#0b0c0f]"
          }`}
        ></div>

        {/* bg bottom left */}
        <div
          className={`w-[70%] h-[50%] scale-[-1] absolute left-0 bottom-0 bg-radial-[at_100%_25%]  to-75%  ${
            theme
              ? "from-[#a7c1f4] to-[#f5f2f0]"
              : "from-[#07245e] to-[#0b0c0f]"
          }`}
        ></div>

        {/* content inside */}

        {/* icons */}
        <div className="w-10 h-10  rounded-md border border-[#bebbbb63] shadow-lg shadow-blue-500/60  flex justify-center items-center">
          <div className="relative w-6 h-6">
            <Image fill src={src} alt={alt} />
          </div>
        </div>
        <h4 className={`mt-5  ${theme ? "text-[#343536]" : "text-[#c1c0c1]"}`}>
          {text}
        </h4>
        <p className="mt-24 text-[#6d788c] relative z-10">{paragraph}</p>
      </div>
    </div>
  );
};

export default AbilitySlideSmooth;
