import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Navbar from "./components/layout/Navbar";
import Portfolio from "./components/sections/Portfolio";
import Skills from "./components/sections/Skills";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
