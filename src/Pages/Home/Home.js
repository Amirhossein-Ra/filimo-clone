import Slider from "../../Components/Slider/Slider";
import AccordionR from "../../Components/Accordion/Accordion";
import Ending from "../../Components/Ending/Ending";
import Free from "../../Components/Free/Free";
import Intro from "../../Components/Intro/Intro";
import Platform from "../../Components/Platforms/Platform";
import ScrollBar from "../../Components/ScrollBar/ScrollBar";
import Series from "../../Components/Series/Series";
import Guide from "../../Components/guide/Guide";
import Animation from "../../Components/Animation/Animation";

const Home = () => {
  return (
    <div className="Home">
      <div className="relative">
        <Slider />
        <Intro />
      </div>
      <Series />
      <Platform />
      <Guide />
      <Free />
      <Animation />
      <ScrollBar />
      <AccordionR />
      <Ending />
    </div>
  );
};

export default Home;
