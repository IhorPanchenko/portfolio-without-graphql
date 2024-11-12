import { motion } from "framer-motion";
import { AiOutlineGithub } from "react-icons/ai";
import Reveal from "../UI/Reveal";

const projects = [
  {
    title: "Portfolio Website",
    img: "src/assets/images/porfolio.jpg",
    description:
      "A personal portfolio website showcasing projects, education, and experience.",
    links: {
      site: "#",
      github: "https://github.com/IhorPanchenko/portfolio",
    },
    technologies: ["React.js", "Vite", "GraphQL", "Tailwind CSS"],
  },
  {
    title: "Movie Watchlist",
    img: "src/assets/images/watchlist.jpg",
    description:
      "Search and save movies to a personal watchlist with an intuitive and responsive interface.",
    links: {
      site: "#",
      github: "https://github.com/IhorPanchenko/movie-watchlist",
    },
    technologies: ["React.js", "Redux", "API", "Tailwind CSS"],
  },
  {
    title: "Weather-Forecast",
    img: "src/assets/images/forecast.jpg",
    description:
      "Utilizes an API key to fetch and display current weather details.",
    links: {
      site: "#",
      github: "https://github.com/IhorPanchenko/weather-forecast",
    },
    technologies: ["React.js", "Redux", "API", "HTML/CSS"],
  },
  {
    title: "Portfolio Website #2",
    img: "src/assets/images/porfolio.jpg",
    description:
      "A personal portfolio website showcasing projects, education, and experience.",
    links: {
      site: "#",
      github: "https://github.com/IhorPanchenko/portfolio",
    },
    technologies: ["React.js", "Vite", "GraphQL", "Tailwind CSS"],
  },
  {
    title: "Movie Watchlist #2",
    img: "src/assets/images/watchlist.jpg",
    description:
      "Search and save movies to a personal watchlist with an intuitive and responsive interface.",
    links: {
      site: "#",
      github: "https://github.com/IhorPanchenko/movie-watchlist",
    },
    technologies: ["React.js", "Redux", "API", "Tailwind CSS"],
  },
  {
    title: "Weather-Forecast #2",
    img: "src/assets/images/forecast.jpg",
    description:
      "Utilizes an API key to fetch and display current weather details.",
    links: {
      site: "#",
      github: "https://github.com/IhorPanchenko/weather-forecast",
    },
    technologies: ["React.js", "Redux", "API", "HTML/CSS"],
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
                      href={links.site}
                      className="px-3 py-2 bg-purple-800 rounded-lg hover:bg-purple-600 transition duration-300"
                      aria-label={`View ${title} website`}
                    >
                      View Site
                    </a>
                    <a
                      href={links.github}
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
