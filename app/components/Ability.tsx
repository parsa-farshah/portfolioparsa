import { Carattere } from "next/font/google";
import AbilitySlideSmooth from "./AbilitySlideSmooth";
import myData from "../store";

const carattere = Carattere({
  subsets: ["latin"],
  weight: ["400"],
});

const Ability = () => {
  const { theme } = myData();
  return (
    <div className="py-20">
      <h4
        className={`text-4xl md:text-5xl flex justify-center ${theme ? "text-[#282929]" : "text-[#d9d7d5]"}`}
      >
        What I can <span className={`px-3 ${carattere.className}`}>help</span>{" "}
        with.
      </h4>
      <AbilitySlideSmooth
        src="/icons/pen.png"
        alt="web deign"
        text="Webdesign Website"
        paragraph="I design modern, minimal websites that balance beauty with usability. Each layout is built to tell a story, guide visitors naturally, and feel effortless to navigate. From structure to typography, every detail is tuned for clarity and emotion, creating an experience that both looks and performs beautifully."
      />
    </div>
  );
};

export default Ability;
