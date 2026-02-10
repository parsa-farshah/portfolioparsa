import Image from "next/image";
import React from "react";
import ImageDragable from "./ImageDragable";

const Header = () => {
  return (
    <div className="w-full h-fit">
      <div className="w-full md:w-[80%] mx-auto">
        <ImageDragable />
      </div>
    </div>
  );
};

export default Header;
