"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AbilitySlideSmooth from "./AbilitySlideSmooth";
import myData from "../store";
import { Carattere } from "next/font/google";


gsap.registerPlugin(ScrollTrigger);
const carattere = Carattere({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Ability() {
  const { theme } = myData();
  const container = useRef<HTMLDivElement>(null);
  const slides = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    slides.current = slides.current.slice(0, 4);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "+=4000",
        scrub: 1,
        pin: true,
      },
    });

    slides.current.forEach((slide, i) => {
      tl.fromTo(slide, { y: 800, scale: 0.8 }, { y: 0, scale: 1, duration: 1 });
    });
  }, []);

  return (
    <div ref={container} className="relative py-20">
 
      {[
        {
          text: "Web Design",
          src: "/icons/pen.png",
          paragraph:
            "I design modern, minimal websites that balance beauty with usability. Each layout is built to tell a story, guide visitors naturally, and feel effortless to navigate. From structure to typography, every detail is tuned for clarity and emotion, creating an experience that both looks and performs beautifully.",
        },
        {
          text: "UI/UX Design",
          src: "/icons/flash.png",
          paragraph:
            "I design modern, minimal websites that balance beauty with usability. Each layout is built to tell a story, guide visitors naturally, and feel effortless to navigate. From structure to typography, every detail is tuned for clarity and emotion, creating an experience that both looks and performs beautifully.",
        },
        {
          text: "Visual Direction",
          src: "/icons/diamond.png",
          paragraph:
            "I design modern, minimal websites that balance beauty with usability. Each layout is built to tell a story, guide visitors naturally, and feel effortless to navigate. From structure to typography, every detail is tuned for clarity and emotion, creating an experience that both looks and performs beautifully.",
        },
        {
          text: "Motion & Interaction",
          src: "/icons/cube.png",
          paragraph:
            "I design modern, minimal websites that balance beauty with usability. Each layout is built to tell a story, guide visitors naturally, and feel effortless to navigate. From structure to typography, every detail is tuned for clarity and emotion, creating an experience that both looks and performs beautifully.",
        },
      ].map((item, i) => (
        <AbilitySlideSmooth
          key={i}
          ref={(el: any) => (slides.current[i] = el)}
          src={item.src}
          text={item.text}
          paragraph={item.paragraph}
          z={i}
        />
      ))}
    </div>
  );
}
