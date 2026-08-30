"use client";
import myData from "@/app/store";
import HoverNavbarText from "../HoverNavbarText";

interface BadgeProps {
  text: string;
  className?: string;
}

function Badge({ text, className }: BadgeProps) {
  const { theme } = myData();
  return (
    <div
      className={`w-fit h-fit rounded-md shadow-md shadow-blue-800/50 cursor-pointer hover:scale-95 duration-300 ${className ?? ""}`}
    >
      <div
        className={`border border-gray-500/30 rounded-md flex justify-center items-center  overflow-hidden px-3 ${theme ? "bg-white text-black" : "bg-[#0B0C0E] text-gray-400"}`}
      >
        <HoverNavbarText text={text} />
      </div>
    </div>
  );
}

export default Badge;
