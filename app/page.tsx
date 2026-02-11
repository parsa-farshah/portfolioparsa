"use client";
import Header from "./components/Header";
import LineAndShadowHEader from "./components/LineAndShadowHEader";
import LineRow from "./components/LineRow";
import NavBar from "./components/NavBar";
import useData from "./store";

export default function Home() {
  const { theme } = useData();
  return (
    <div
      className={` w-full h-[200vh] flex flex-col relative overflow-hidden ${theme ? "bg-[#f6f3f0]" : "bg-[#0b0c0e]"} `}
    >
      {/* navbar */}
      <NavBar />
      <LineAndShadowHEader />
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
