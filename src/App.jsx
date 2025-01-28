import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Portfolio from "./components/sections/Portfolio";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import ShinyEffect from "./components/UI/ShinyEffect";
import Education from "./components/sections/Education";
import navData from "./data/navData";
import heroData from "./data/heroData";
import aboutData from "./data/aboutData";
import skillsData from "./data/skillsData";
import portfolioData from "./data/portfolioData";
import experienceData from "./data/experienceData";
import educationData from "./data/educationData";

const App = () => {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="relative overflow-hidden selection:bg-purple-400 selection:text-gray-800">
      <motion.div
        key={language}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar
          navContent={navData}
          handleLanguageChange={handleLanguageChange}
          language={language}
        />

        <main className="mx-auto max-w-[1300px] px-8">
          <Hero heroContent={heroData} language={language} />
          <About aboutContent={aboutData} language={language} />
          <Skills skills={skillsData} language={language} />
          <Portfolio portfolio={portfolioData} language={language} />
          <Experience experience={experienceData} language={language} />
          <Education education={educationData} language={language} />
        </main>

        <ShinyEffect size={1400} />
        <Footer footerContent={heroData} language={language} />
      </motion.div>
    </div>
  );
};

export default App;
