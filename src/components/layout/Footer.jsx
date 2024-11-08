import { useQuery } from "@apollo/client";
import { motion } from "framer-motion";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { GET_HERO_CONTENT } from "../../graphql/queries";

const Footer = () => {
  const { data, loading, error } = useQuery(GET_HERO_CONTENT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { name, socialLinks } = data.heroContent;
  const { github, linkedin, email } = socialLinks;

  return (
    <footer className="mx-auto px-8 py-4 md:py-8 flex flex-row items-center justify-between max-w-[1300px] text-sm text-gray-400">
      <div>
        <p>© {name}</p>
        <span className="text-gray-400">{email}</span>
      </div>
      <div className="flex justify-center gap-x-3 sm:gap-x-6 text-4xl text-purple-400">
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
      </div>
    </footer>
  );
};

export default Footer;
