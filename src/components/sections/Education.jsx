import { useQuery } from "@apollo/client";
import { motion } from "framer-motion";
import Reveal from "../UI/Reveal";
import { GET_EDUCATION } from "../../graphql/queries";

const Education = () => {
  const { data, loading, error } = useQuery(GET_EDUCATION);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="border-b border-gray-700 text-gray-300">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        // viewport={{ once: true }}
      >
        Education
      </motion.h2>

      {data.education.map((education) => (
        <Reveal key={education.period}>
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
              <p className="mb-2 text-base">{education.period}</p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              // viewport={{ once: true }}
              className="w-full max-w-xl md:w-3/4"
            >
              <h4 className="mb-2 text-lg font-semibold">
                {education.faculty} -{" "}
                <span className="text-base">{education.degree}</span>
              </h4>
              <p className="text-base text-gray-400 text-justify">
                {education.institution}, {education.location}
              </p>
            </motion.div>
          </motion.article>
        </Reveal>
      ))}
    </section>
  );
};

export default Education;
