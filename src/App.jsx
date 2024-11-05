import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Portfolio from "./components/sections/Portfolio";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import Technologies from "./components/sections/Technologies";

export default function App() {
  return (
    <React.Fragment>
      <div className=" selection:bg-purple-400 selection:text-gray-800 relative overflow-hidden">
        <Navbar />

        <main className="max-w-[1300px] mx-auto px-8">
          <Hero />
          <Contact />
          <Technologies />
          <Skills />
          <Portfolio />
          <Experience />
        </main>

        <Footer />
      </div>
    </React.Fragment>
  );
}
