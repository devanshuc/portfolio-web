import { pb, ongc } from "../assets/images";
import {
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },

  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
];

export const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Pitney Bowes",
    icon: pb,
    iconBg: "#accbe1",
    date: "Jan 2022 - Jul 2022",
    points: [
      "Spearheaded pivotal advancements in PitneyShipPro, orchestrating a 40% reduction in manual data entry through seamless API integrations.",
      "Managed the ’Route Management’ module, optimizing delivery routes and achieving a 15% reduction in delivery time. Demonstrated design expertise, enhancing project efficiency by 20% in a global context.",
    ],
  },
  {
    title: "Summer Internship Training",
    company_name: "Oil and Natural Gas Corporation (ONGC)",
    icon: ongc,
    iconBg: "#fbc3bc",
    date: "Jul 2021 - Aug 2021",
    points: [
      "Immersed in ONGC’s enterprise network and security solutions, enhancing knowledge of complex network architectures.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-black",
    name: "EduVerse",
    description:
      "Engineered EduVerse, a cutting-edge learning platform, integrating JWT authentication for robust security and enabling 40% faster login times while ensuring user data privacy. Leveraged the power of React and Recoil to eliminate prop drilling, significantly enhancing frontend performance with up to 35% rendering efficiency improvements.",
    link: "https://github.com/devanshuc",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Summify",
    description:
      "A game-changing AI-driven Article Summarization SaaS Application, powered by OpenAI’s GPT model which enables a user to read 5x more articles daily. Achieved lightning-fast query fetching times, through the integration of React, Vite, and Tailwind CSS. Seamlessly managed global state with Redux Toolkit, leading to a 30% reduction in page loading times.",
    link: "https://github.com/devanshuc/Summify",
  },
  {
    iconUrl: threads,
    theme: "btn-back-blue",
    name: "GPT-Clone",
    description:
      "Designed a visually striking website on ChatGPT, while adhering to HCI principles. Transformed the Figma design into a fully functional website using React as the frontend framework. Achieved a 40% improvement in loading speed and up to 35% rendering efficiency enhancements through precise design implementation using JavaScript, HTML, CSS, and React. Designed with a user-centric approach on Figma and precisely cloned onto a React Vite project to optimize user engagement. Also deployed the website on Netlify for wider accessibility.",
    link: "https://github.com/devanshuc/GPT-clone-design",
  },
];
