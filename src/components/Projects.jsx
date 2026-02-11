import { motion } from "framer-motion";
import projectImage from "../assets/IMG_20260210_103205~3.jpg";

function Projects() {
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
  ];

  return (
    <section className="min-h-screen  px-10 py-20">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="relative h-[70vh] rounded-3xl overflow-hidden 
            border border-white/10
            hover:border-[#007CED]/60
            hover:shadow-[0_0_25px_rgba(0,124,237,0.25)]
            transition-all duration-500 cursor-pointer"
          >
            {/* Background Image */}
            <motion.img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6 }}
            />

            {/* Soft Dark Overlay */}
            <div className="absolute inset-0 bg-black/65"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
              <h2 className="text-2xl font-bold mb-4 text-[#007CED]">
                {project.title}
              </h2>

              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-white/10 backdrop-blur-md 
                    px-3 py-1 rounded-full border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Button */}
              <a
                href={project.link}
                className="w-fit px-5 py-2 bg-[#007CED] 
                hover:bg-blue-600 rounded-lg text-sm font-medium transition"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
