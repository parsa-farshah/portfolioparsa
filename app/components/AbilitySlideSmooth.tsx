"use client";
import { forwardRef } from "react";
import Image from "next/image";
import myData from "../store";

const AbilitySlideSmooth = forwardRef<HTMLDivElement, any>(
  ({ src, alt, text, paragraph, z }, ref) => {
    const { theme } = myData();

    return (
      <div
        ref={ref}
        className={`ability-slide w-full h-[100vh] absolute top-0 left-0 flex justify-center items-center`}
        style={{ zIndex: z }}
      >
        <div
          className={`w-[80%] md:w-[70%] lg:w-[667px] rounded-xl p-8 border shadow-lg relative overflow-hidden ${theme ? "bg-card-light border-card-border-light" : "bg-card-dark border-card-border-dark"}`}
        >
          {/* bg top right */}
          <div
            className={`w-[70%] h-[50%] absolute right-0 top-0 bg-radial-[at_120%_25%] to-65% ${theme ? "from-brand-glow-light to-card-light" : "from-brand-glow-dark to-card-dark"}`}
          ></div>
          {/* bg bottom left */}{" "}
          <div
            className={`w-[70%] h-[50%] scale-[-1] absolute left-0 bottom-0 bg-radial-[at_100%_25%] to-75% ${theme ? "from-brand-glow-light to-card-light" : "from-brand-glow-dark to-card-dark"}`}
          ></div>
          <div className="w-10 h-10 rounded-md border border-icon-box-border shadow-lg shadow-blue-500/60 flex justify-center items-center">
            <Image src={src} alt={alt} width={24} height={24} />
          </div>
          <h4
            className={`mt-5 relative z-30 ${theme ? "text-body-light" : "text-body-dark"}`}
          >
            {text}
          </h4>
          <p className="mt-24 text-description relative z-10 text-justify text-sm">
            {paragraph}
          </p>
        </div>
      </div>
    );
  },
);

export default AbilitySlideSmooth;
