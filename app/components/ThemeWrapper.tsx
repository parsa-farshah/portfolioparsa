"use client";
import myData from "../store";

export default function ThemeWrapper({ children }) {
  const { theme } = myData();

  return (
    <div
      className={`w-full h-[9000vh] flex flex-col relative overflow-hidden ${
        theme ? "bg-[#f6f3f0]" : "bg-[#0b0c0e]"
      }`}
    >
      {children}
    </div>
  );
}
