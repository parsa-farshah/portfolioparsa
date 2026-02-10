import Header from "./components/Header";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className="bg-[#0b0c0e] w-full h-fit flex relative">
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
