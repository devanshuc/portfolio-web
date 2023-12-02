import React from "react";

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Devanshu.</span>
      <br />A Software Engineer from India
    </h1>
  ),
  2: <p>2</p>,
  3: <p>3</p>,
  4: <p>4</p>,
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
