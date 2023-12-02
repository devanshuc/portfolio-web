import { skills } from "../constants/index";
const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Devanshu
        </span>
      </h1>
      <div>
        <p className="mt-5 flex flex-col gap-3 text-slate-500">
          A Software Engineer based in India, specializing in Full Stack
          Devlopment through hands on learning and building applications.
        </p>
      </div>
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
      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div>
          <p className="mt-5 flex flex-col gap-3 text-slate-500">
            A Software Engineer based in India, specializing in Full Stack
            Devlopment through hands on learning and building applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
