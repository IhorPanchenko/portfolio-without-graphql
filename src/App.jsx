import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Portfolio from "./components/sections/Portfolio";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import ShinyEffect from "./components/UI/ShinyEffect";
import Education from "./components/sections/Education";

export default function App() {
  return (
    <div className="relative overflow-hidden selection:bg-purple-400 selection:text-gray-800">
      <Navbar />

      <main className="mx-auto max-w-[1300px] px-8">
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Experience />
        <Education />
      </main>

      <ShinyEffect size={1400} />
      <Footer />
    </div>
  );
}
