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
      <div className="w-full relative h-[1000vh]">
        <div className="h-[100vh] w-full absolute top-[100px] left-0">
          <AbilitySlideSmooth
            src="/icons/pen.png"
            alt="web deign"
            text="Webdesign Website"
            paragraph="I design modern, minimal websites that balance beauty with usability. Each layout is built to tell a story, guide visitors naturally, and feel effortless to navigate. From structure to typography, every detail is tuned for clarity and emotion, creating an experience that both looks and performs beautifully."
            end={10000}
            z={0}
          />
        </div>

        <div className="h-[100vh] w-full absolute top-[300vh] left-0">
          <AbilitySlideSmooth
            src="/icons/flash.png"
            alt="UI/UX Design"
            text="UI/UX Design"
            paragraph="Great design starts with understanding. I map out user journeys, define key moments, and shape interfaces that feel intuitive from the first click. The goal is to create experiences that connect interfaces that don’t just function, but resonate with the people who use them every day."
            end={8280}
            z={10}
          />
        </div>

        <div className="h-[100vh] w-full absolute top-[600vh] left-0">
          <AbilitySlideSmooth
            src="/icons/diamond.png"
            alt="Visual Direction"
            text="Visual Direction"
            paragraph="A brand is more than a logo; it’s how everything feels together. I craft cohesive visual systems built around color, typography, and tone, giving brands a clear and consistent identity across digital touchpoints. Each direction expresses personality, emotion, and purpose through simplicity."
            end={6460}
            z={30}
          />
        </div>

        <div className="h-[100vh] w-full absolute top-[900vh] left-0">
          <AbilitySlideSmooth
            src="/icons/cube.png"
            alt="Motion & Interaction"
            text="Motion & Interaction"
            paragraph="Movement brings design to life. I use motion to guide attention, create flow, and add rhythm to static layouts. Subtle transitions, scroll-based animations, and micro-interactions help every interface feel dynamic and alive, transforming ordinary websites into immersive experiences that engage users on a deeper level."
            end={4640}
            z={40}
          />
        </div>
      </div>
    </div>
  );
};

export default Ability;
