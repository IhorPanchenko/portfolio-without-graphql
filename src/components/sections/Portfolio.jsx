import { motion } from "framer-motion";
import { AiOutlineGithub } from "react-icons/ai";
import project1 from "../../assets/images/project1.png";
import project2 from "../../assets/images/project2.png";
import project4 from "../../assets/images/project4.png";
import project5 from "../../assets/images/project5.png";
import project6 from "../../assets/images/project6.png";
import Reveal from "../UI/Reveal";

const projects = [
  {
    img: project1,
    title: "Project #1",
    description: "UI for frontend development using React.",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: project2,
    title: "Project #2",
    description: "A fullstack application built with Node.js and MongoDB.",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: project4,
    title: "Project #3",
    description: "An e-commerce platform with various features.",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: project5,
    title: "Project #4",
    description: "A mobile-friendly application using React Native.",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: project6,
    title: "Project #5",
    description:
      "A data visualization project using D3.js and other libraries.",
    links: {
      site: "#",
      github: "#",
    },
  },
];

const Portfolio = () => {
  return (
    <section className="border-b border-gray-700 pb-20" id="portfolio">
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
          {projects.map((project) => {
            const { img, title, description, links } = project;

            return (
              <div
                key={title}
                className="relative w-[375px] h-[275px] bg-cover bg-no-repeat bg-center border border-purple-600 rounded-lg cursor-pointer group transform transition-all duration-300 ease-in-out hover:scale-100 hover:shadow-xl"
                style={{ backgroundImage: `url(${img})` }}
              >
                {/* Hover content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-80 text-gray-200 p-4 rounded-lg transform origin-top scale-y-0 group-hover:scale-y-100 transition-all duration-300 ease-in-out">
                  <h3 className="text-2xl font-semibold mb-4">{title}</h3>
                  <p className="mb-4 text-center">{description}</p>
                  <div className="flex space-x-4">
                    <a
                      href={links.site}
                      className="px-4 py-3 bg-slate-600 rounded-lg hover:bg-slate-700 transition duration-300"
                      aria-label={`View ${title} website`}
                    >
                      View Site
                    </a>
                    <a
                      href={links.github}
                      className="px-4 py-3 text-xl bg-slate-600 rounded-lg hover:bg-slate-700 transition duration-300"
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
