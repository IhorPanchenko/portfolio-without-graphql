import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Reveal from "../UI/Reveal";

const Education = ({ education }) => {
  return (
    <section
      id="education"
      className="flex flex-col border-b border-gray-700 text-gray-300"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        // viewport={{ once: true }}
      >
        Education
      </motion.h2>

      {education.map((eduRecord) => (
        <Reveal key={eduRecord.period}>
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
              <p className="mb-2 text-base">{eduRecord.period}</p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              // viewport={{ once: true }}
              className="w-full max-w-xl md:w-3/4"
            >
              <h4 className="mb-2 text-lg font-semibold">
                {eduRecord.faculty} -{" "}
                <span className="text-base">{eduRecord.degree}</span>
              </h4>
              <p className="text-base text-gray-400 text-justify">
                {eduRecord.institution}, {eduRecord.location}
              </p>
            </motion.div>
          </motion.article>
        </Reveal>
      ))}
    </section>
  );
};

Education.propTypes = {
  education: PropTypes.arrayOf(
    PropTypes.shape({
      period: PropTypes.string.isRequired,
      faculty: PropTypes.string.isRequired,
      degree: PropTypes.string.isRequired,
      institution: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Education;
