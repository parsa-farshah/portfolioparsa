"use client";
import myData from "../store";

export default function ThemeWrapper({ children } : any) {
  const { theme } = myData();

  return (
    <div
      className={`w-full h-fit flex flex-col relative overflow-hidden ${
        theme ? "bg-page-light" : "bg-page-dark"
      }`}
    >
      {children}
    </div>
  );
}
