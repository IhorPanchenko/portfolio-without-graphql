import { Link } from "react-scroll";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const navLinks = [
  { name: "About", to: "skills" },
  { name: "Portfolio", to: "portfolio" },
  { name: "Contact", to: "contact" },
];

const Footer = () => {
  return (
    <footer className="mx-auto mt-14 flex flex-col-reverse lg:flex-row max-w-[1300px] justify-between items-center p-6 text-sm md:p-5 md:text-lg">
      <div className="flex justify-center items-center gap-10 text-center mt-3 md:mt-0 md:text-left">
        <p className="text-gray-400 text-center">© 2024 J.Doe</p>
        <div className="flex justify-center flex-row gap-6 text-4xl text-gray-400">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <FaGithubSquare className="text-3xl" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="text-3xl" />
          </a>
        </div>
      </div>

      <ul className="flex gap-6 lg:gap-12 cursor-pointer">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              to={link.to}
              smooth={true}
              offset={50}
              duration={500}
              className="text-lg text-gray-400 hover:text-purple-400"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
