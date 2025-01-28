import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import useDarkMode from "../../../hooks/useDarkMode";
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";

const menuVariants = {
  open: {
    x: 0,
    transition: {
      stiffness: 20,
      damping: 15,
    },
  },
  closed: {
    x: "-100%",
    transition: {
      stiffness: 20,
      damping: 15,
    },
  },
};

const Navbar = ({ navContent, handleLanguageChange, language }) => {
  const [nav, setNav] = useState(false);
  const [offset, setOffset] = useState(0);
  const [currentTab, setCurrentTab] = useState(null);
  const [theme, setTheme] = useDarkMode();
  const navRef = useRef(null);

  const { navLinks } = navContent[language] || navContent.en;

  useEffect(() => {
    if (navRef.current) {
      setOffset(navRef.current.offsetHeight);
    }
  }, []);

  const handleLinkClick = (index) => {
    setCurrentTab(index);
  };

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const toggleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 bg-opacity-70 backdrop-blur-md"
    >
      <div className="mx-auto flex items-center justify-between h-20 px-6 md:px-12 text-xl text-gray-600 dark:text-gray-200">
        <a
          href="#"
          target="_self"
          rel="noopener noreferrer"
          className="font-bold cursor-pointer hover:text-purple-400"
        >
          I.Panchenko
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden min-[1045px]:flex gap-6 lg:gap-6 xl:gap-12 cursor-pointer">
          {navLinks.map((link, index) => (
            <li key={link.name}>
              <Link
                to={link.to}
                smooth={true}
                offset={-offset}
                duration={500}
                className={`hover:text-purple-700 dark:hover:text-purple-400 ${
                  currentTab === index
                    ? "text-purple-700 dark:text-purple-400 font-bold"
                    : ""
                }`}
                onClick={() => handleLinkClick(index)}
              >
                {link.name}
              </Link>
            </li>
          ))}

          {/* Color Theme Switcher  */}
          <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />

          {/* Language Switcher  */}
          <LanguageSwitcher
            handleLanguageChange={handleLanguageChange}
            language={language}
          />
        </ul>

        {/* Hamburger Menu */}
        <button
          onClick={toggleNav}
          className="min-[1045px]:hidden z-50 text-gray-800 dark:text-gray-200 hover:text-purple-400"
          aria-label={nav ? "Close navigation menu" : "Open navigation menu"}
        >
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </button>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={nav ? "open" : "closed"}
          variants={menuVariants}
          className="fixed top-0 left-0 w-full min-h-screen p-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-center text-4xl"
        >
          <ul className="text-center text-4xl font-semibold mt-24 space-y-8 cursor-pointer">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  onClick={closeNav}
                  smooth={true}
                  offset={-offset}
                  duration={500}
                  className="hover:text-purple-400 transition duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Color Theme Switcher  */}
            <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />

            {/* Language Switcher  */}
            <LanguageSwitcher
              handleLanguageChange={handleLanguageChange}
              language={language}
            />
          </ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
