import { useState } from "react";
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
import portfolioData from "./data/portfolioData";
import experienceData from "./data/experienceData";
import educationData from "./data/educationData";

const App = () => {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    refetch({ language: lang });
  };

  return (
    <div className="relative overflow-hidden selection:bg-purple-400 selection:text-gray-800">
      <Navbar
        navContent={navData}
        handleLanguageChange={handleLanguageChange}
        language={language}
      />

      <main className="mx-auto max-w-[1300px] px-8">
        <Hero heroContent={heroData} language={language} />
        <About aboutContent={aboutData} language={language} />
        <Skills />
        <Portfolio portfolio={portfolioData} language={language} />
        <Experience experience={experienceData} language={language} />
        <Education education={educationData} language={language} />
      </main>

      <ShinyEffect size={1400} />
      <Footer footerContent={heroData} />
    </div>
  );
};

export default App;
