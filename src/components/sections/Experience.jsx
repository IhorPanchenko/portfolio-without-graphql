import { motion } from "framer-motion";
import Reveal from "../UI/Reveal";

const experiences = [
  {
    company: "First Company",
    period: "2020 - Present",
    role: "Test test test",
    technologies: ["JavaScript", "React.js", "Tailwind", "HTML/CSS"],
    description:
      "Led the development of innovative solutions to enhance user experience and increase customer satisfaction. Led the development of innovative solutions to enhance user experience and increase customer satisfaction.",
  },
  {
    company: "Second Company",
    period: "2018 - 2020",
    role: "Test test test",
    technologies: ["JavaScript", "React.js", "Tailwind", "HTML/CSS"],
    description:
      "Collaborated with cross-functional teams to define and implement new features for the product line. Collaborated with cross-functional teams to define and implement new features for the product line.",
  },
  {
    company: "Third Company",
    period: "2017 - 2018",
    role: "Test test test",
    technologies: ["JavaScript", "React.js", "Tailwind", "HTML/CSS"],
    description:
      "Optimized the performance of web applications, leading to a 25% reduction in load times. Optimized the performance of web applications, leading to a 25% reduction in load times.",
  },
  {
    company: "Fourth Company",
    period: "2016 - 2017",
    role: "Test test test",
    technologies: ["JavaScript", "React.js", "Tailwind", "HTML/CSS"],
    description:
      "Assisted in the transition of legacy systems to modern technologies, enhancing system reliability. Assisted in the transition of legacy systems to modern technologies, enhancing system reliability.",
  },
];

const Experience = () => {
  return (
    <section className="border-b border-gray-700 text-gray-300">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>
      {experiences.map((experience) => (
        <Reveal key={experience.company}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="mb-8 flex flex-wrap lg:justify-center "
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="w-full md:w-1/4"
            >
              <p className="mb-2 text-base">{experience.period}</p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="w-full max-w-xl md:w-3/4"
            >
              <h4 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-base">{experience.company}</span>
              </h4>
              <p className="mb-4 text-base text-justify text-gray-400">
                {experience.description}
              </p>
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-gray-800 px-2 py-1 text-base font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </Reveal>
      ))}
    </section>
  );
};

export default Experience;
