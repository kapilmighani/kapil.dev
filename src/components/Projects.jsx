import { motion } from "framer-motion";
import { useRef } from "react";
import projectImage from "../assets/IMG_20260210_103205~3.jpg";

function Projects() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 420;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const projects = [
    {
      title: "WealthWay - Stock Trading Platform",
      description:
        "A full-stack MERN stock trading platform with authentication, portfolio tracking, watchlist, and real-time market features.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      image: projectImage,
      link: "#",
    },
    {
      title: "Airbnb Clone",
      description:
        "A property listing platform with authentication, add/delete listings, reviews, and category filtering.",
      tech: ["React", "MongoDB", "Express", "Tailwind"],
      image: projectImage,
      link: "#",
    },
    {
      title: "Organic Store Web App",
      description:
        "E-commerce web app for selling organic fruits and vegetables with cart and authentication system.",
      tech: ["React", "Node.js", "MongoDB"],
      image: projectImage,
      link: "#",
    },
    {
      title: "Social Media Dashboard",
      description: "Admin dashboard with analytics and real-time charts.",
      tech: ["React", "Chart.js", "Node.js"],
      image: projectImage,
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "Modern animated developer portfolio with smooth UI.",
      tech: ["React", "Framer Motion", "Tailwind"],
      image: projectImage,
      link: "#",
    },
  ];

  return (
    <section className="min-h-screen px-10 py-20 bg-[#222222] relative overflow-hidden">
      {/* Cards Row */}
      <div
        ref={scrollRef}
        className="flex items-center pl-10 gap-10 overflow-x-auto overflow-y-hidden max-w-7xl mx-auto"
        style={{
          height: "611px",
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE 10+
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative min-w-[380px] h-[67vh] rounded-3xl overflow-hidden
                bg-[#1a1a1a]
                border border-white/10
                backdrop-blur-xl
                shadow-xl
                hover:shadow-[0_0_40px_rgba(0,124,237,0.35)]
                hover:border-[#007CED]/70
                transition-all duration-500 cursor-pointer"
          >
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

            <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
              <h2 className="text-2xl font-bold mb-4 text-[#007CED]">
                {project.title}
              </h2>

              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-white/10 px-3 py-1 rounded-full border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="w-fit px-5 py-2 bg-[#007CED] hover:bg-blue-600 rounded-lg text-sm font-medium transition"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Arrow Buttons */}
      <div className="absolute bottom-20 right-16 flex gap-4">
        <button
          onClick={() => scroll("left")}
          className="w-12 h-12 rounded-full bg-[#353535] hover:bg-blue-600 flex items-center justify-center text-white text-xl shadow-lg transition"
        >
          ←
        </button>

        <button
          onClick={() => scroll("right")}
          className="w-12 h-12 rounded-full bg-[#353535] hover:bg-blue-600 flex items-center justify-center text-white text-xl shadow-lg transition"
        >
          →
        </button>
      </div>

      {/* Hide Scrollbar for Webkit */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

export default Projects;
