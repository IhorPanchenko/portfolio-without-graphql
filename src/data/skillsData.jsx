import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandVite } from "react-icons/tb";
import { BiLogoGraphql, BiLogoRedux } from "react-icons/bi";
import {
  DiCss3,
  DiHtml5,
  DiSass,
  DiJavascript1,
  DiReact,
  DiGit,
} from "react-icons/di";
import {
  FaUsers,
  FaPuzzlePiece,
  FaRegClock,
  FaSyncAlt,
  FaSearchPlus,
  FaArrowsAltH,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

export const skills = [
  {
    category: "Tech Skills",
    technologies: [
      {
        name: "HTML",
        icon: <DiHtml5 className="text-orange-600" />,
        duration: 2.5,
      },
      { name: "CSS", icon: <DiCss3 className="text-blue-600" />, duration: 3 },
      {
        name: "JavaScript",
        icon: <DiJavascript1 className="text-yellow-500" />,
        duration: 2,
      },
      { name: "Sass", icon: <DiSass className="text-pink-500" />, duration: 5 },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-600" />,
        duration: 2.5,
      },
      {
        name: "React",
        icon: <DiReact className="text-blue-400" />,
        duration: 4,
      },
      {
        name: "Tailwind",
        icon: <RiTailwindCssFill className="text-teal-500" />,
        duration: 6,
      },
      {
        name: "Redux",
        icon: <BiLogoRedux className="text-teal-500" />,
        duration: 2,
      },
      { name: "Git", icon: <DiGit className="text-red-600" />, duration: 3 },
      {
        name: "GraphQL",
        icon: <BiLogoGraphql className="text-purple-900" />,
        duration: 6,
      },
      {
        name: "Vite",
        icon: <TbBrandVite className="text-orange-500" />,
        duration: 4.5,
      },
    ],
  },
  {
    category: "Soft Skills",
    technologies: [
      {
        name: "Teamwork",
        icon: <FaUsers className="text-pink-500" />,
        duration: 2.5,
      },
      {
        name: "Problem-Solving",
        icon: <FaPuzzlePiece className="text-teal-500" />,
        duration: 6,
      },
      {
        name: "Time Management",
        icon: <FaRegClock className="text-yellow-500" />,
        duration: 2,
      },
      {
        name: "Adaptability",
        icon: <FaSyncAlt className="text-green-500" />,
        duration: 4,
      },
      {
        name: "Attention to Detail",
        icon: <FaSearchPlus className="text-red-500" />,
        duration: 3,
      },
      {
        name: "Flexibility",
        icon: <FaArrowsAltH className="text-blue-500" />,
        duration: 5,
      },
    ],
  },
];
