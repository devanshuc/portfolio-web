import React from "react";
import InfoBox from "./InfoBox";

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Devanshu.</span>
      <br />A Software Engineer from India
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked as Full Stack Developer and picked up lot of skills along the way."
      link={"/about"}
      btnText={"Learn More"}
    />
  ),
  3: (
    <InfoBox
      text="Built multiple projects over the years. Curious about the impact?"
      link={"/projects"}
      btnText={"Visit my portfolio"}
    />
  ),
  4: (
    <InfoBox
      text="Looking for a Dev? or need a project done? I am just a few keystrokes away."
      link={"/contact"}
      btnText={"Lets Talk!"}
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
