import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";
import ShinyEffect from "../UI/ShinyEffect";
import profilepic from "../../assets/images/profpic.png";

const Hero = () => {
  return (
    <section className="mt-24 max-w-[1200px] mx-auto relative">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Type animation for role titles */}
          <TypeAnimation
            sequence={[
              "Frontend Dev",
              1000,
              "Webdesigner",
              1000,
              "Consultant",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-100 text-xl md:text-5xl italic mb-4"
          />

          {/* Main greeting message */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 text-5xl md:text-7xl tracking-tight mb-4"
          >
            HEY, I AM <br />
            <span className="text-purple-500">JOHN DOE</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] text-lg md:text-2xl mb-6"
          >
            I am a passionate frontend developer with over * years of
            experience.
          </motion.p>

          {/* Action buttons and social media links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
              }}
              aria-label="Download CV"
              className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl"
            >
              Download CV
            </motion.button>

            {/* Social media icons */}
            <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                aria-label="GitHub Profile"
              >
                <AiOutlineGithub />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                aria-label="LinkedIn Profile"
              >
                <AiOutlineLinkedin />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                aria-label="Instagram Profile"
              >
                <AiOutlineInstagram />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Profile image with fade-in effect */}
        <motion.img
          src={profilepic}
          alt="John Doe's Profile"
          className="w-[300px] md:w-[450px]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Tech stack section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-row text-7xl px-4 md:px-0 w-full justify-center items-center py-24"
      >
        <p className="text-gray-200 mr-6">My Tech Stack</p>
        <DiHtml5 className="text-orange-600 mx-2" />
        <DiCss3 className="text-blue-600 mx-2" />
        <DiJavascript1 className="text-yellow-500 mx-2" />
        <DiReact className="text-blue-500 mx-2" />
        <DiNodejsSmall className="text-green-500 mx-2" />
      </motion.div>

      {/* Shiny effect overlay */}
      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </section>
  );
};

export default Hero;
