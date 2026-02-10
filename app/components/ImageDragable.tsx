"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ImageDragable() {
  const parentRef = useRef();
  const imgRef = useRef();

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const rect = parentRef.current.getBoundingClientRect();

      const mouseX = e.clientX - rect.left;
      const xNorm = mouseX / rect.width - 0.5;

      gsap.to(imgRef.current, {
        rotateY: xNorm * 25,
        duration: 0.3,
        ease: "power3.out",
        transformPerspective: 1000,
      });
    });
  }, []);

  return (
    <div ref={parentRef} className="w-full md:w-[80%] mx-auto">
      <div className="flex justify-center items-center h-fit">
        <div
          ref={imgRef}
          className="relative w-[300px] h-[400px] rounded-xl overflow-hidden border border-[#a0a0a0]"
        >
          <Image src="/images/parsa.png" fill className="object-cover" alt="" />
        </div>
      </div>
    </div>
  );
}
