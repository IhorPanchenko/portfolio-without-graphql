import { motion } from "framer-motion";
import Reveal from "../UI/Reveal";

const experiences = [
  {
    company: "First Company",
    period: "2020 - Present",
    description:
      "Led the development of innovative solutions to enhance user experience and increase customer satisfaction.",
  },
  {
    company: "Second Company",
    period: "2018 - 2020",
    description:
      "Collaborated with cross-functional teams to define and implement new features for the product line.",
  },
  {
    company: "Third Company",
    period: "2017 - 2018",
    description:
      "Optimized the performance of web applications, leading to a 25% reduction in load times.",
  },
  {
    company: "Fourth Company",
    period: "2016 - 2017",
    description:
      "Assisted in the transition of legacy systems to modern technologies, enhancing system reliability.",
  },
];

const Experience = () => {
  return (
    <section
      className="p-8 max-w-[600px] mx-auto"
      aria-labelledby="experience-heading"
    >
      <h1
        id="experience-heading"
        className="text-4xl text-gray-200 font-bold text-center mb-12"
      >
        Experience
      </h1>

      <motion.div
        className="space-y-8 md:space-y-12 lg:space-y-16 mx-4 md:mx-0"
        initial="hidden"
        animate="visible"
      >
        {experiences.map((experience) => (
          <Reveal key={experience.company}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className="border border-purple-600 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-purple-700/10"
              role="article"
            >
              <h2 className="text-gray-100 text-2xl font-semibold">
                {experience.company}
              </h2>
              <p className="text-gray-300">{experience.period}</p>
              <p className="text-gray-400 mt-4">{experience.description}</p>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
