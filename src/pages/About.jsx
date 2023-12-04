import CTA from "./sub_pages/CTA";
import Experiences from "./sub_pages/Experiences";
import Skills from "./sub_pages/Skills";

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

      <Skills />
      <Experiences />
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default About;
