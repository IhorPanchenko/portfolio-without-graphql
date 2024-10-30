import { RiTailwindCssFill } from "react-icons/ri";
import {
  DiCss3,
  DiHtml5,
  DiSass,
  DiGithubBadge,
  DiMongodb,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";
import Reveal from "../UI/Reveal";

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML", icon: <DiHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <DiCss3 className="text-blue-500" /> },
      { name: "Sass", icon: <DiSass className="text-pink-600" /> },
      {
        name: "Tailwind",
        icon: <RiTailwindCssFill className="text-blue-600" />,
      },
      {
        name: "JavaScript",
        icon: <DiJavascript1 className="text-yellow-500" />,
      },
      { name: "React", icon: <DiReact className="text-blue-500" /> },
    ],
  },
  {
    category: "Fullstack",
    technologies: [
      { name: "Node Js", icon: <DiNodejsSmall className="text-green-500" /> },
      { name: "MongoDB", icon: <DiMongodb className="text-green-600" /> },
      { name: "GitHub", icon: <DiGithubBadge className="text-gray-600" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section
      className="max-w-[650px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12"
      id="skills"
      aria-labelledby="skills-heading"
    >
      <Reveal>
        <h2 id="skills-heading" className="text-3xl font-bold mb-4 text-center">
          Skills
        </h2>
        <p className="text-center mb-8">
          I have worked on various frontend and fullstack projects. Check them{" "}
          <a href="#" className="underline" aria-label="View my projects">
            out here
          </a>
          .
        </p>

        <div
          className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 
          md:space-x-8"
        >
          {skills.map((skill, index) => (
            <article
              key={index}
              className="border border-purple-900 p-6 rounded-lg 
              bg-purple-900/20 shadow-lg w-full md:w-1/2 transition-transform 
              duration-300 transform hover:scale-105"
              aria-labelledby={`skill-${index}`}
            >
              <h3
                id={`skill-${index}`}
                className="text-xl font-bold mb-4 text-center"
              >
                {skill.category}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {skill.technologies.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-2xl" aria-hidden="true">
                      {tech.icon}
                    </span>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default Skills;
