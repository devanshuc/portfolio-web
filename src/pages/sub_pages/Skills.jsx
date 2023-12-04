import React from "react";
import { skills } from "../../constants/index";

const Skills = () => {
  return (
    <div className="py-10 flex flex-col">
      <h3>My Skills</h3>
      <div className="flex flex-wrap mt-16 gap-12">
        {skills.map((skill) => (
          <div className="block-container w-20 h-20">
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img
                src={skill.imageUrl}
                alt={skill.name}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
