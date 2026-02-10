"use client"
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import useData from "./store";

export default function Home() {
  const { theme } = useData();
  return (
    <div
      className={` w-full h-fit flex relative ${theme ? "bg-[#f6f3f0]" : "bg-[#0b0c0e]"} `}
    >
      {/* navbar */}
      <NavBar />
      {/* line left */}
      <div className="w-[1px] h-[100%] bg-[#ffffff2d] left-[2%] md:left-[12%] -translate-x-1/2 top-0 absolute"></div>
      {/* line right */}
      <div className="w-[1px] h-[100%] bg-[#ffffff2d] right-[2%] md:right-[12%] translate-x-1/2 top-0 absolute"></div>

      {/* header */}
      <div className="w-full h-fit mt-36">
        <Header />
      </div>
    </div>
  );
}
