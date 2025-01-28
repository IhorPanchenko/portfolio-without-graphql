import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Reveal from "../UI/Reveal";
import aboutpic from "../../assets/images/aboutpic.jpg";

const About = ({ aboutContent, language }) => {
  const { heading, description, languages } =
    aboutContent[language] || aboutContent.en;
  const words = heading.split(" ");

  return (
    <section
      className="flex flex-col mx-auto text-gray-800 dark:text-gray-300 border-b border-gray-700"
      id="about"
      aria-labelledby="about-heading"
    >
      <motion.h2
        id="about-heading"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        {words[0]} {words[1] && <span>{words[1]}</span>}
      </motion.h2>

      <Reveal>
        <div className="flex flex-wrap">
          {/* Left Section with Image */}
          <motion.div
            className="w-full pb-8 lg:w-1/2"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center">
              <img
                className="max-h-[520px] border-2 border-purple-500 dark:border-purple-900 rounded-lg"
                src={aboutpic}
                alt="Hero profile picture"
              />
            </div>
          </motion.div>

          {/* Right Section with Text and Statistics */}
          <motion.div
            className="w-full lg:w-1/2 lg:mt-0"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center justify-center lg:items-start">
              <p className="text-lg text-center lg:text-left max-w-xl md:text-xl">
                {description}
              </p>

              <div className="flex gap-10 mt-4 md:justify-start md:mb-0">
                {languages.map((item) => (
                  <div
                    key={`${item.level}-${item.label}`}
                    className="flex flex-col items-center justify-center bg-gray-300/40 dark:bg-gray-800/40 rounded-lg w-24 h-24 md:w-32 md:h-32"
                  >
                    <h3 className="text-3xl font-semibold text-gray-900 dark:text-white md:text-4xl">
                      {item.level}
                    </h3>
                    <p className="text-sm md:text-base text-center">
                      <span>{item.label}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
};

About.propTypes = {
  aboutContent: PropTypes.shape({
    en: PropTypes.shape({
      heading: PropTypes.string.isRequired,
      languages: PropTypes.arrayOf(
        PropTypes.shape({
          level: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
        })
      ).isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
    de: PropTypes.shape({
      heading: PropTypes.string.isRequired,
      languages: PropTypes.arrayOf(
        PropTypes.shape({
          level: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
        })
      ).isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  language: PropTypes.oneOf(["en", "de"]).isRequired,
};

export default About;
