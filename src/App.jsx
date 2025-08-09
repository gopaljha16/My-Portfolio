import React, { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import { useSelector } from "react-redux";
import AnimatedBackground from "./components/AnimatedBackground.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import SectionDivider from "./components/SectionDivider.jsx";

const App = () => {
  const isDark = useSelector((state) => state.theme.isDark);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("light");
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
      root.classList.remove("light");
    }
  }, [isDark]);

  return (
    <div
      className={`min-h-screen font-[Inter] antialiased selection:bg-indigo-400/30 selection:text-indigo-200 ${
        isDark ? "bg-white text-neutral-900" : "bg-[#0b0b0f] text-neutral-100"
      }`}
    >
      <AnimatedBackground />
      <Navbar />
      <main className="relative">
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Experience />
        <Testimonials />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
