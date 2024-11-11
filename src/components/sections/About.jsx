import { useQuery } from "@apollo/client";
import { motion } from "framer-motion";
import Reveal from "../UI/Reveal";
import { GET_ABOUT_CONTENT } from "../../graphql/queries";
import heropic from "../../assets/images/heropic.jpg";

const About = () => {
  const { data, loading, error } = useQuery(GET_ABOUT_CONTENT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { description, languages } = data.aboutContent;

  return (
    <section
      className="mx-auto text-gray-300 border-b border-gray-700 md:mt-12"
      id="about"
      aria-labelledby="about-heading"
    >
      <motion.h2
        id="about-heading"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        // viewport={{ once: true }}
      >
        About <span>Me</span>
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
            <div>
              <img
                className="w-[400px] md:w-[500px] rounded-2xl"
                src={heropic}
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
              <p className="text-lg text-center lg:text-left max-w-xl md:text-2xl">
                {description}
              </p>

              <div className="flex gap-10 mt-4 md:justify-start md:mb-0">
                {languages.map((item) => (
                  <div
                    key={`${item.level}-${item.label}`}
                    className="flex flex-col items-center justify-center bg-gray-800/40 rounded-lg w-24 h-24 md:w-32 md:h-32"
                  >
                    <h3 className="text-3xl font-semibold text-white md:text-4xl">
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

export default About;
