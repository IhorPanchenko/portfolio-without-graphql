import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Portfolio from "./components/sections/Portfolio";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <React.Fragment>
      <Navbar />

      <main>
        <Hero />
        <Skills />
        <Portfolio />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </React.Fragment>
  );
}
