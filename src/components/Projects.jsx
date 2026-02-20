import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { projects } from "../data/ProjectData";
import { ExternalLink, Github, MoreHorizontal, X } from "lucide-react";

function Projects() {
  const scrollRef = useRef(null);
  const videoRefs = useRef([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 420;

    if (!container) return;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handleHoverStart = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.currentTime = 0;
      video.play();
    }
  };

  const handleHoverEnd = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <section
      id="projects"
      className="min-h-screen px-10 py-20 bg-[#0e0e0e] relative overflow-hidden"
    >
      {/* Cards Row */}
      <div
        ref={scrollRef}
        className="flex items-center pl-10 gap-10 overflow-x-auto overflow-y-hidden max-w-7xl mx-auto"
        style={{
          height: "611px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => handleHoverStart(index)}
            onHoverEnd={() => handleHoverEnd(index)}
            className="relative min-w-[380px] h-[67vh] rounded-3xl overflow-hidden
              bg-[#1a1a1a]
              border border-white/10
              backdrop-blur-xl
              shadow-xl
              hover:shadow-[0_0_40px_rgba(0,124,237,0.35)]
              hover:border-[#007CED]/70
              transition-all duration-500 cursor-pointer"
          >
            {/* Video */}
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={project.video}
              muted
              playsInline
              className="h-full w-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

            {/* Top Project Name */}
            <div className="absolute top-5 left-5 z-10">
              <h2 className="text-white text-xl font-semibold tracking-wide">
                {project.title}
              </h2>
            </div>

            {/* Bottom Icons */}
            <div className="absolute bottom-5 left-5 right-5 flex justify-between items-center z-10">
              <div className="flex gap-4">
                {/* Live */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-blue-600 p-2 rounded-full transition"
                >
                  <ExternalLink size={18} color="white" />
                </a>

                {/* GitHub */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-blue-600 p-2 rounded-full transition"
                >
                  <Github size={18} color="white" />
                </a>
              </div>

              {/* More */}
              <button
                onClick={() => setSelectedProject(project)}
                className="bg-white/10 hover:bg-blue-600 p-2 rounded-full transition"
              >
                <MoreHorizontal size={18} color="white" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-[#1a1a1a] text-white p-8 rounded-2xl w-[500px] max-w-[90%] relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X size={22} />
              </button>

              <h2 className="text-2xl font-bold mb-4">
                {selectedProject.title}
              </h2>

              <p className="text-gray-300 mb-4">
                {selectedProject.description}
              </p>

              <div className="flex gap-4 mt-4">
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                >
                  Live Project
                </a>

                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-800 transition"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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

      {/* Hide Scrollbar */}
      <style>
        {`
          div::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </section>
  );
}

export default Projects;