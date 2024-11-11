import { useQuery } from "@apollo/client";
import { motion } from "framer-motion";
import Reveal from "../UI/Reveal";
import { GET_EXPERIENCE } from "../../graphql/queries";

const Experience = () => {
  const { data, loading, error } = useQuery(GET_EXPERIENCE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section id="experience" className="border-b border-gray-700 text-gray-300">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        // viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      {/* Map through each experience item and render it */}
      {data.experience.map((experience) => (
        <Reveal key={experience.period}>
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
              // viewport={{ once: true }}
              className="w-full md:w-1/4"
            >
              <p className="mb-2 text-base">{experience.period}</p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              // viewport={{ once: true }}
              className="w-full max-w-xl md:w-3/4"
            >
              <h4 className="mb-2 text-lg font-semibold">
                {experience.role} -{" "}
                <span className="text-base">{experience.company}</span>
              </h4>
              <p className="text-base text-gray-400 text-justify">
                {experience.description}
              </p>

              {/* Technologies Used */}
              <div className="flex flex-wrap">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="mt-2 mr-2 min-[470px]:mt-4 rounded bg-gray-800 px-2 py-1 text-sm min-[470px]:text-base font-medium text-purple-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.article>
        </Reveal>
      ))}
    </section>
  );
};

export default Experience;
