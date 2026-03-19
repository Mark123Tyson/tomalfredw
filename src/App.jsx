import { useState, useEffect } from "react";

import "./styles/index.css";
import { useViewport } from "./hooks/useViewport";

import Navbar       from "./components/Navbar";
import Hero         from "./components/Hero";
import About        from "./components/About";
import Expertise    from "./components/Expertise";
import Career       from "./components/Career";
import Education    from "./components/Education";
import Publications from "./components/Publications";
import GlobalReach  from "./components/GlobalReach";
import Community    from "./components/Community";
import Contact      from "./components/Contact";
import Footer       from "./components/Footer";

const SECTIONS = ["about", "expertise", "career", "education", "publications", "contact"];

export default function App() {
  const [activeSection, setActiveSection] = useState("about");
  useViewport(); // forces full re-render on orientation change & resize

  // Highlight the nav link for whichever section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <Hero />
      <About />
      <Expertise />
      <Career />
      <Education />
      <Publications />
      <GlobalReach />
      <Community />
      <Contact />
      <Footer />
    </>
  );
}