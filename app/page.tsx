"use client";
import Header from "./components/Header";
import LineRow from "./components/LineRow";
import NavBar from "./components/NavBar";
import useData from "./store";

export default function Home() {
  const { theme } = useData();
  return (
    <div
      className={` w-full h-[200vh] flex flex-col relative ${theme ? "bg-[#f6f3f0]" : "bg-[#0b0c0e]"} `}
    >
      {/* navbar */}
      <NavBar />
      {/* line left */}
      <div
        className={`w-[1px] h-[100%]  left-[2%] md:left-[12%] -translate-x-1/2 top-0 absolute z-40 ${theme ? "bg-[#80808062]" : "bg-[#ffffff2d]"} `}
      ></div>
      {/* shadow left */}
      <div
        className={`w-[150px] h-[70vh]  left-[2%] md:left-[12%] -translate-x-1/2 top-0 absolute z-30 ${theme ? "bg-gradient-to-r from-[#f6f3f0] from-60% to-[#fff0] to-100%" : "bg-gradient-to-r from-[#0b0c0e] from-60% to-[#fff0] to-100%"} `}
      ></div>
      {/* line right */}
      <div
        className={`w-[1px] h-[100%]  right-[2%] md:right-[12%] translate-x-1/2 z-40 top-0 absolute ${theme ? "bg-[#80808062]" : "bg-[#ffffff2d]"} `}
      ></div>
      {/* shadow right */}
      <div
        className={`w-[150px] h-[70vh] scale-x-[-1] right-[-10%] md:right-[8%]   top-0 absolute z-30 ${theme ? "bg-gradient-to-r from-[#f6f3f0] from-60% to-[#fff0] to-100%" : "bg-gradient-to-r from-[#0b0c0e] from-60% to-[#fff0] to-100%"} `}
      ></div>
      {/* header */}
      <div className="w-full h-fit">
        <Header />
      </div>
      {/* line row */}
      <div className="mt-2">
        <LineRow />
      </div>
    </div>
  );
}
