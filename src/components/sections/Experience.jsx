import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Reveal from "../UI/Reveal";

const Experience = ({ experience, language }) => {
  const { heading, content } = experience[language] || experience.en;

  return (
    <section
      id="experience"
      className="flex flex-col border-b border-gray-700 text-gray-800 dark:text-gray-300"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        {heading}
      </motion.h2>

      {/* Map through each experience item and render it */}
      {content.map((xp) => (
        <Reveal key={xp.period}>
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="mb-8 flex flex-wrap md:justify-center"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full md:w-1/4"
            >
              <p className="mb-2 text-base">{xp.period}</p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl md:w-3/4"
            >
              <h4 className="mb-2 text-lg font-semibold">
                {xp.role} - <span className="text-base">{xp.company}</span>
              </h4>
              <p className="text-base text-gray-600 dark:text-gray-400 text-justify">
                {xp.description}
              </p>

              {/* Technologies Used */}
              <ul className="flex flex-wrap">
                {xp.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="mt-2 mr-2 min-[470px]:mt-4 rounded bg-gray-300 dark:bg-gray-800 px-2 py-1 text-sm min-[470px]:text-base font-medium text-purple-700 dark:text-purple-600"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.article>
        </Reveal>
      ))}
    </section>
  );
};

Experience.propTypes = {
  experience: PropTypes.shape({
    en: PropTypes.shape({
      heading: PropTypes.string.isRequired,
      content: PropTypes.arrayOf(
        PropTypes.shape({
          company: PropTypes.string.isRequired,
          period: PropTypes.string.isRequired,
          role: PropTypes.string.isRequired,
          technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
          description: PropTypes.string.isRequired,
        })
      ).isRequired,
    }).isRequired,
    de: PropTypes.shape({
      heading: PropTypes.string.isRequired,
      content: PropTypes.arrayOf(
        PropTypes.shape({
          company: PropTypes.string.isRequired,
          period: PropTypes.string.isRequired,
          role: PropTypes.string.isRequired,
          technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
          description: PropTypes.string.isRequired,
        })
      ).isRequired,
    }).isRequired,
  }).isRequired,
  language: PropTypes.oneOf(["en", "de"]).isRequired,
};

export default Experience;
