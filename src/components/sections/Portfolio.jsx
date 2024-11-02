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
    <section className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
      <h2 className="text-3xl font-bold text-gray-200 mb-8">Portfolio</h2>

      {projects.map((project, index) => {
        const { img, title, description, links } = project;

        return (
          <Reveal key={index}>
            <div
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } mb-12`}
            >
              {/* Project image */}
              <div className="w-full md:w-1/2 p-4">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Project details */}
              <div className="w-full md:w-1/2 flex flex-col justify-center p-4">
                <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                  {title}
                </h3>
                <p className="text-gray-300 mb-4">{description}</p>

                {/* Action buttons for project links */}
                <div className="flex space-x-4">
                  <a
                    href={links.site}
                    className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg 
                  hover:bg-slate-700 transition duration-300"
                    aria-label={`View ${title} site`}
                  >
                    View Site
                  </a>
                  <a
                    href={links.github}
                    className="px-4 py-3 bg-slate-600 text-gray-200 rounded-lg 
                  hover:bg-slate-700 transition duration-300"
                    aria-label={`View ${title} site`}
                  >
                    <AiOutlineGithub />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </section>
  );
};

export default Portfolio;
