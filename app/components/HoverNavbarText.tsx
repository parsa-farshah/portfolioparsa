"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

export default function HoverNavbarText({ text }: { text: string }) {
  const topRef = useRef<HTMLDivElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!topRef.current || !bottomRef.current) return;

    // split top and bottom text into chars
    const topSplit = new SplitType(topRef.current, { types: "chars" });
    const bottomSplit = new SplitType(bottomRef.current, { types: "chars" });

    // hide bottom text initially
    gsap.set(bottomSplit.chars, { y: 20, opacity: 0 });

    // create timeline
    const tl = gsap.timeline({ paused: true });

    // animate top text up and fade out
    tl.to(topSplit.chars, {
      y: -20,
      opacity: 0,
      stagger: 0.05,
      duration: 0.3,
      ease: "power2.out",
    })
      // animate bottom text up into view at the same time
      .to(
        bottomSplit.chars,
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.3,
          ease: "power2.out",
        },
        "<", // start at the same time
      );

    const btn = topRef.current.parentElement;

    btn.addEventListener("mouseenter", () => tl.play());
    btn.addEventListener("mouseleave", () => tl.reverse());
  }, []);

  return (
    <div className="relative px-3 py-4 rounded-md w-[60px] h-[36px] text-sm flex items-center justify-center cursor-pointer overflow-hidden">
      {/* Top text */}
      <span
        ref={topRef}
        className="absolute inset-0 flex items-center justify-center"
      >
        {text}
      </span>

      {/* Bottom text */}
      <span
        ref={bottomRef}
        className="absolute inset-0 flex items-center justify-center"
      >
        {text}
      </span>
    </div>
  );
}
