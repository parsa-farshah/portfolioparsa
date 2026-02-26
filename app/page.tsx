import Ability from "./components/Ability";
import AbilityComponent from "./components/AbilityComponent";
import Designed from "./components/Designed";
import Header from "./components/Header";
import LineAndShadowHEader from "./components/LineAndShadowHEader";
import LineRow from "./components/LineRow";
import LogosAnimation from "./components/LogosAnimation";
import NavBar from "./components/NavBar";
import SliderProjects from "./components/SliderProjects";
import ThemeWrapper from "./components/ThemeWrapper";
import TwoWaysToBegin from "./components/TwoWaysToBegin";
import myData from "./store";

export default function Home() {
  return (
    <ThemeWrapper>
      {/* navbar */}
      <NavBar />
      <LineAndShadowHEader />
      {/* header */}
      <div className="w-full h-fit">
        <Header />
      </div>
      {/* logo row*/}
      <LogosAnimation />
      <AbilityComponent />
      <Designed />
      <div className="relative">
        <SliderProjects />
      </div>
      <TwoWaysToBegin />
    </ThemeWrapper>
  );
}
