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
import { animate, motion } from "framer-motion";
import Reveal from "../UI/Reveal";

const skills = [
  {
    category: "Hard Skills",
    technologies: [
      {
        name: "HTML",
        duration: 2.5,
        icon: <DiHtml5 className="text-orange-500" />,
      },
      { name: "CSS", duration: 3, icon: <DiCss3 className="text-blue-500" /> },
      { name: "Sass", duration: 5, icon: <DiSass className="text-pink-600" /> },
      {
        name: "Tailwind",
        duration: 6,
        icon: <RiTailwindCssFill className="text-blue-600" />,
      },
      {
        name: "JavaScript",
        duration: 2,
        icon: <DiJavascript1 className="text-yellow-500" />,
      },
      {
        name: "React",
        duration: 4,
        icon: <DiReact className="text-blue-500" />,
      },
    ],
  },
  {
    category: "Soft Skills",
    technologies: [
      {
        name: "Node Js",
        duration: 3,
        icon: <DiNodejsSmall className="text-green-500" />,
      },
      {
        name: "MongoDB",
        duration: 3,
        icon: <DiMongodb className="text-green-600" />,
      },
      {
        name: "GitHub",
        duration: 3,
        icon: <DiGithubBadge className="text-gray-600" />,
      },
    ],
  },
];

const iconVariants = (duration) => ({
  initial: { y: -5 },
  animate: {
    y: [5, -5],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Skills = () => {
  return (
    <section
      className="mx-auto flex flex-col justify-center border-b border-gray-700"
      id="skills"
      aria-labelledby="skills-heading"
    >
      <Reveal>
        <h2 id="skills-heading">
          <span>My </span>Skills
        </h2>

        <div
          className="flex flex-col  text-gray-200 md:flex-row justify-center space-y-8 md:space-y-0 
          md:space-x-8"
        >
          {skills.map((skill, index) => (
            <article
              key={index}
              className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 
              shadow-lg w-full md:w-1/2"
              aria-labelledby={`skill-${index}`}
            >
              <h3
                id={`skill-${index}`}
                className="text-2xl font-bold mb-4 text-center"
              >
                {skill.category}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {skill.technologies.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-8">
                    <motion.div
                      variants={iconVariants(tech.duration)}
                      initial="initial"
                      animate="animate"
                      className="rounded-xl border border-gray-800 p-2"
                    >
                      <span className="text-5xl" aria-hidden="true">
                        {tech.icon}
                      </span>
                    </motion.div>
                    <span className="text-lg">{tech.name}</span>
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
