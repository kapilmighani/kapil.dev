import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import HangingLogo from "./components/HangingLogo";
import More from "./components/More";
import Footer from "./components/Footer";

const App = () => {

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            window.history.replaceState(null, "", `#${id}`);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#222] text-[#EDEDED] relative overflow-hidden">
      <HangingLogo />
      <Navbar />
      <Home />
      <Projects />
      <More />
      <Footer />
    </div>
  );
};

export default App;