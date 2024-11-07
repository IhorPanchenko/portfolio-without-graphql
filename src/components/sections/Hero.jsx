import { TypeAnimation } from "react-type-animation";
import { GET_HERO_CONTENT } from "../../graphql/queries";
import { gql, useQuery } from "@apollo/client";
import { animate, motion } from "framer-motion";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import ShinyEffect from "../UI/ShinyEffect";
import profilepic from "../../assets/images/profpic.png";

const Hero = () => {
  const { data, loading, error } = useQuery(GET_HERO_CONTENT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { name, bio, titles, socialLinks } = data.heroContent;

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
              className="font-bold text-gray-100 text-xl md:text-3xl lg:text-5xl italic mb-4"
            />
            {/* Main greeting message */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-gray-200 text-3xl text-center lg:text-left md:text-5xl lg:text-6xl tracking-tight mb-4 uppercase"
            >
              Hey, I am <br />
              <span className="text-purple-500">{name}</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
              className="text-gray-300 max-w-[300px] md:max-w-[600px] text-center lg:text-left text-lg md:text-2xl mb-6"
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
                  href={socialLinks.github}
                  aria-label="GitHub Profile"
                >
                  <AiOutlineGithub />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href={socialLinks.linkedin}
                  aria-label="LinkedIn Profile"
                >
                  <AiOutlineLinkedin />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href={`mailto:${socialLinks.email}`}
                  aria-label="Email"
                >
                  <AiOutlineMail />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="w-full mt-8 lg:mt-0 lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
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
        </div>
      </div>

      {/* Shiny effect overlay */}
      {/* <ShinyEffect size={1400} /> */}
    </section>
  );
};

export default Hero;
