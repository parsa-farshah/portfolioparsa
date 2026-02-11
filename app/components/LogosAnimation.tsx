import React from "react";
import LineRow from "./LineRow";
import LogoAnimationWithGsap from "./LogoAnimationWithGsap";

const LogosAnimation = () => {
  return (
    <div className="w-full mt-3">
      <LineRow />
      <LogoAnimationWithGsap />
      <LineRow />
    </div>
  );
};

export default LogosAnimation;
