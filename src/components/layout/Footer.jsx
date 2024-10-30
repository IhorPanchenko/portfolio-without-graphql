import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mx-auto mt-12 flex max-w-[1300px] justify-between p-6 text-sm md:p-20 md:text-lg">
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-200">J.Doe</h3>
        <div className="flex flex-row gap-6 text-4xl text-gray-400">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <FaGithubSquare />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <p className="text-gray-400">@2024 J.Doe</p>
    </footer>
  );
};

export default Footer;
