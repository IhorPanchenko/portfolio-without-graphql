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
import ShinyEffect from "./ShinyEffect";
import profilepic from "../assets/profpic.png";

const Hero = () => {
  return (
    <div className="mt-24 max-w-[1200px] mx-auto relative">
      <div className="grid md:grid-cols-2 place-items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Frontend Developer",
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
            className="text-gray-300 text-lg md:text-2xl mb-6"
          >
            I am a passionate frontend developer wiht over * years of
            experience.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
