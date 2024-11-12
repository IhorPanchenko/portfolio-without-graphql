import { motion } from "framer-motion";
import { AiOutlineGithub } from "react-icons/ai";
import Reveal from "../UI/Reveal";

const Portfolio = ({ portfolio }) => {
  return (
    <section
      className="flex flex-col border-b border-gray-700 pb-20"
      id="portfolio"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        // viewport={{ once: true }}
      >
        Portfolio
      </motion.h2>

      <Reveal>
        {/* Container for the project cards */}
        <div className="flex flex-wrap justify-center min-[885px]:justify-between gap-y-16 w-full">
          {portfolio.map((project) => {
            const { img, title, description, projectLinks } = project;

            return (
              <div
                key={title}
                className="relative w-[375px] h-[275px] bg-cover bg-no-repeat bg-center border-2 border-purple-900 rounded-lg group transform transition-all duration-300 ease-in-out hover:scale-100 hover:shadow-xl"
                style={{ backgroundImage: `url(${img})` }}
              >
                {/* Hover content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-80 text-gray-200 p-4 rounded-lg transform origin-top scale-y-0 group-hover:scale-y-100 transition-all duration-300 ease-in-out">
                  <h3 className="text-2xl font-semibold mb-2">{title}</h3>

                  <div className="mb-2 text-center">
                    {project.technologies.map((tech, index) => (
                      <span key={tech}>
                        {tech}
                        {index < project.technologies.length - 1 && (
                          <span className="mx-1">|</span>
                        )}
                      </span>
                    ))}
                  </div>

                  <p className="mb-4 text-center text-lg">{description}</p>
                  <div className="flex space-x-4">
                    <a
                      href={projectLinks.site}
                      className="px-3 py-2 bg-purple-800 rounded-lg hover:bg-purple-600 transition duration-300"
                      aria-label={`View ${title} website`}
                    >
                      View Site
                    </a>
                    <a
                      href={projectLinks.github}
                      className="px-3 py-2 text-xl bg-purple-800 rounded-lg hover:bg-purple-600 transition duration-300"
                      aria-label={`View ${title} GitHub repository`}
                    >
                      <AiOutlineGithub />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
};

export default Portfolio;
