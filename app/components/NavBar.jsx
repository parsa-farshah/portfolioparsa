import Image from "next/image";
import HoverNavbarText from "./HoverNavbarText";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import MenuIcon from '@mui/icons-material/Menu';
export default function NavBar() {
  return (
    <div className="w-[80%] md:w-[572px] h-[66px] bg-[#1e1e20] mx-auto border border-[#e9e9e93a] rounded-2xl mt-8 p-2 flex justify-between items-center">
      {/* left */}
      <div>
        <div className="relative w-[61px] h-[47px] rounded-xl overflow-hidden cursor-pointer">
          <Image
            src="/images/parsa.png"
            alt="parsa dehghan"
            fill
            objectFit="cover"
          />
        </div>
      </div>

      {/* center */}
      <div className="md:flex gap-2 w-[50%] h-fit hidden">
        <HoverNavbarText text="Home" />
        <HoverNavbarText text="About" />
        <HoverNavbarText text="Services" />
        <HoverNavbarText text="Contact" />
      </div>

      {/* right */}
      <div className="flex items-center gap-2">
        {/* dark light icon */}
        <div className="w-8 h-8 rounded-full border border-[#ffffff60] flex justify-center items-center">
          <NightsStayIcon
            sx={{ width: "20px", height: "20px", cursor: "pointer" }}
          />
        </div>
        {/* contact */}
        <div className="w-[91px] h-[32px] border-2 border-[#3578ff] bg-[#0055fe] rounded-md flex justify-center items-center overflow-hidden shadow-lg shadow-blue-500/30 cursor-pointer hover:scale-95 duration-300">
          <HoverNavbarText text="Contact" />
        </div>
        {/* menu humburger in menu  */}
        {/* dark light icon */}
        <div className="w-8 h-8 rounded-md border border-[#ffffff5e] flex justify-center items-center md:hidden">
          <MenuIcon
            sx={{ width: "20px", height: "20px", cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
}
