import { useEffect, useRef, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import { SECTIONS } from "./data/sections";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");
  const observerRef = useRef(null);

  useEffect(() => {
    const ids = SECTIONS.map((s) => s.id);
    const observers = [];

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-gray-900 selection:text-white">
      <Nav activeSection={activeSection} onNavigate={scrollToSection} />
      <Hero />
      <Projects />
      <Education />
      <Skills />
      <Footer />
    </div>
  );
}
