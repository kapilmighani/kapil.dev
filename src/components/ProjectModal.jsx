import React, { useEffect } from "react";
import { X } from "lucide-react";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiSocketdotio,
  SiJsonwebtokens,
} from "react-icons/si";

function ProjectModal({ selectedProject, setSelectedProject }) {
  if (!selectedProject) return null;

  // Disable body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Tech icon mapping
  const techIcons = {
    "React": <SiReact className="text-cyan-400" />,
    "React.js": <SiReact className="text-cyan-400" />,
    "Node.js": <SiNodedotjs className="text-green-500" />,
    "Express.js": <SiExpress className="text-gray-300" />,
    "MongoDB": <SiMongodb className="text-green-400" />,
    "Tailwind CSS": <SiTailwindcss className="text-sky-400" />,
    "JavaScript": <SiJavascript className="text-yellow-400" />,
    "Socket.io": <SiSocketdotio className="text-white" />,
    "JWT": <SiJsonwebtokens className="text-pink-400" />,
  };

  return (
    <div
      onClick={() => setSelectedProject(null)}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-[800px] max-w-[95%] h-[80vh]
        bg-[#1a1a1a] border border-white/10
        rounded-3xl p-8 text-white
        shadow-[0_0_40px_rgba(0,124,237,0.25)]
        flex flex-col"
      >
        {/* Close Button */}
        <button
          onClick={() => setSelectedProject(null)}
          className="absolute top-5 right-5 text-gray-400 hover:text-white transition"
        >
          <X size={22} />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto pr-2 flex-1">

          {/* Title */}
          <h2 className="text-3xl font-bold mb-4 tracking-wide">
            {selectedProject.title}
          </h2>

          {/* Description */}
          <p className="text-gray-300 mb-6 leading-relaxed">
            {selectedProject.description}
          </p>

          {/* Divider */}
          <div className="h-px bg-white/10 mb-6"></div>

          {/* Tech Stack */}
          {selectedProject.techStack && (
            <>
              <h3 className="text-xl font-semibold mb-4 text-[#007CED]">
                Tech Stack
              </h3>

              <div className="flex flex-wrap gap-3 mb-6">
                {selectedProject.techStack.map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-4 py-2 text-sm rounded-full
                    bg-white/10 border border-white/10
                    hover:bg-[#007CED]/20 transition"
                  >
                    {techIcons[tech]}
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Divider */}
          <div className="h-px bg-white/10 my-6"></div>

          {/* Features + Role Horizontal */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Left - Key Features */}
            {selectedProject.features && (
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#007CED]">
                  Key Features
                </h3>
                <ul className="space-y-2 text-gray-300">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#007CED]">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Right - My Role */}
            {selectedProject.role && (
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#007CED]">
                  My Role
                </h3>
                <ul className="space-y-2 text-gray-300">
                  {selectedProject.role.map((r, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#007CED]">•</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}

export default ProjectModal;