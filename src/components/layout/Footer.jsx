import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = ({ footerContent, language }) => {
  const { name, socialLinks } = footerContent[language] || footerContent.en;
  const { github, linkedin, email } = socialLinks;

  return (
    <footer className="mx-auto px-8 py-4 md:py-8 flex flex-row items-center justify-between max-w-[1300px] text-sm text-gray-800 dark:text-gray-400">
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
      >
        <p>© {name}</p>
        <span className="text-gray-800 dark:text-gray-400">{email}</span>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="flex justify-center gap-x-3 sm:gap-x-6 text-4xl text-purple-600 dark:text-purple-400"
      >
        <motion.a
          whileHover={{
            scale: 1.15,
            boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
          }}
          href={github}
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <FaGithubSquare />
        </motion.a>
        <motion.a
          whileHover={{
            scale: 1.15,
            boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
          }}
          href={linkedin}
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin />
        </motion.a>
      </motion.div>
    </footer>
  );
};

Footer.propTypes = {
  heroContent: PropTypes.shape({
    name: PropTypes.string.isRequired,
    socialLinks: PropTypes.shape({
      github: PropTypes.string.isRequired,
      linkedin: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Footer;
