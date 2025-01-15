import { motion } from "framer-motion";
import { skills } from "../../data/skillsData";
import Reveal from "../UI/Reveal";

const iconVariants = (duration) => ({
  initial: { y: -6 },
  animate: {
    y: [6, -6],
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
      className="flex flex-col justify-center mx-auto border-b border-gray-700"
      id="skills"
      aria-labelledby="skills-heading"
    >
      <motion.h2
        id="skills-heading"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        <span>My </span>Skills
      </motion.h2>

      <Reveal>
        {/* Skills container */}
        <div className="flex flex-col text-gray-700 dark:text-gray-200 space-y-8 lg:space-y-0">
          {skills.map((skill) => (
            <article
              key={skill.category}
              className="w-full pb-8"
              aria-labelledby={`skill-${skill.category}`}
            >
              <h3
                id={`skill-${skill.category}`}
                className="text-2xl md:text-3xl font-bold text-left mb-6"
              >
                {skill.category}
              </h3>

              {/* Technologies grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-y-6 lg:gap-x-32">
                {skill.technologies.map((tech) => (
                  <motion.div
                    key={tech.name}
                    variants={iconVariants(tech.duration)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center text-center min-[470px]:text-left space-y-2 min-[470px]:flex-row min-[470px]:space-y-0 space-x-2 lg:space-x-8"
                  >
                    {/* Technology icon with animation */}
                    <div className="rounded-xl border md:border-2 border-gray-400 dark:border-gray-800 p-2 lg:p-3">
                      <span className="text-5xl md:text-7xl" aria-hidden="true">
                        {tech.icon}
                      </span>
                    </div>
                    <span className="text-lg lg:text-3xl text-gray-800 dark:text-gray-300">
                      {tech.name}
                    </span>
                  </motion.div>
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
