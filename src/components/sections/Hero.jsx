import PropTypes from "prop-types";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import heropic from "../../assets/images/heropic.jpg";

const SocialMediaLink = ({ href, ariaLabel, icon }) => (
  <motion.a
    whileHover={{ scale: 1.2 }}
    href={href}
    aria-label={ariaLabel}
    className="text-purple-600 dark:text-purple-400"
  >
    {icon}
  </motion.a>
);

const Hero = ({ heroContent, language }) => {
  const { titles, greetings, name, bio, socialLinks } =
    heroContent[language] || heroContent.en;

  return (
    <section className="mt-36 border-b border-gray-700">
      <div className="flex flex-wrap">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex flex-col items-center lg:items-start">
            {/* Type animation for role titles */}
            <TypeAnimation
              sequence={titles.flatMap((title) => [title, 1000])}
              speed={50}
              repeat={Infinity}
              className="font-bold text-gray-600 dark:text-gray-100 text-xl md:text-3xl lg:text-5xl italic mb-4"
            />

            {/* Main greeting message */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-gray-800 dark:text-gray-200 text-3xl text-center lg:text-left md:text-5xl lg:text-6xl tracking-tight mb-4 uppercase"
            >
              {greetings} <br />
              <span className="text-purple-600 dark:text-purple-500">
                {name}
              </span>
            </motion.p>

            {/* Bio paragraph */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
              className="text-gray-800 dark:text-gray-300 max-w-[500px] md:max-w-[600px] text-center lg:text-left text-lg md:text-2xl mb-6"
            >
              {bio}
            </motion.p>

            {/* Action buttons and social media links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.5 }}
              className="flex flex-row items-center gap-6 my-4 md:mb-0"
            >
              <motion.a
                href="/cv.pdf"
                download="IhorPanchenko_CV.pdf"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
                }}
                aria-label="Download CV"
                className="z-10 cursor-pointer text-sm sm:text-lg font-bold text-gray-900 dark:text-gray-200 md:w-auto p-4 border border-purple-600 dark:border-purple-400 rounded-xl"
              >
                Download CV
              </motion.a>

              {/* Social media icons */}
              <div className="flex flex-row gap-6 text-4xl md:text-6xlz-20">
                <SocialMediaLink
                  href={socialLinks.github}
                  ariaLabel="GitHub Profile"
                  icon={<AiOutlineGithub />}
                />
                <SocialMediaLink
                  href={socialLinks.linkedin}
                  ariaLabel="LinkedIn Profile"
                  icon={<AiOutlineLinkedin />}
                />
                <SocialMediaLink
                  href={`mailto:${socialLinks.email}`}
                  ariaLabel="Email"
                  icon={<AiOutlineMail />}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Profile image with fade-in effect */}
        <div className="w-full flex justify-center items-center lg:w-1/2 mt-8 lg:mt-0">
          <motion.img
            src={heropic}
            alt={name}
            className="hidden lg:block max-h-[550px] border-2 border-purple-500 dark:border-purple-900 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  heroData: PropTypes.shape({
    en: PropTypes.shape({
      greetings: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
      titles: PropTypes.arrayOf(PropTypes.string).isRequired,
      socialLinks: PropTypes.shape({
        github: PropTypes.string.isRequired,
        linkedin: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    de: PropTypes.shape({
      greetings: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
      titles: PropTypes.arrayOf(PropTypes.string).isRequired,
      socialLinks: PropTypes.shape({
        github: PropTypes.string.isRequired,
        linkedin: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  language: PropTypes.oneOf(["en", "de"]).isRequired,
};

export default Hero;
