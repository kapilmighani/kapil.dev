import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function AboutSection() {
  const [activeCard, setActiveCard] = useState(null);

  const about = {
    title: "About Me",
    short:
      "Full Stack Developer focused on building scalable, high-performance web applications with clean UI and strong backend architecture.",
    full:
      "I specialize in React, Next.js, Node.js and MongoDB. My focus is performance, maintainable architecture and smooth user experiences. I enjoy building modern, animated, and scalable applications with clean design systems.",
  };

  const education = {
    title: "Education",
    short:
      "Bachelor’s in Computer Science | Strong foundation in DSA, System Design and Web Technologies.",
    full:
      "Bachelor’s Degree in Computer Science.\n\nKey Focus Areas:\n• Data Structures & Algorithms\n• Database Management Systems\n• Operating Systems\n• Web Development\n• System Design",
  };

  const skills = {
    title: "Skills",
    short:
      "Frontend, Backend, Database, Tools & Deployment technologies.",
    full:
      "Frontend:\n• React.js\n• Next.js\n• Tailwind CSS\n• Framer Motion\n\nBackend:\n• Node.js\n• Express.js\n\nDatabase:\n• MongoDB\n\nOther:\n• REST APIs\n• Authentication\n• Git & GitHub\n• Deployment (Vercel / Render)",
  };

  return (
    <section className="min-h-screen bg-[#0e0e0e] py-24 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-10">

          <InfoCard data={about} onClick={() => setActiveCard(about)} />

          <InfoCard data={education} onClick={() => setActiveCard(education)} />

        </div>

        {/* RIGHT SIDE (Equal Height Column) */}
        <div className="flex">
          <motion.div className="flex-1">
            <InfoCard
              data={skills}
              onClick={() => setActiveCard(skills)}
              tall
            />
          </motion.div>
        </div>

      </div>

      {/* POPUP */}
      <AnimatePresence>
        {activeCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
            onClick={() => setActiveCard(null)}
          >
            <motion.div
              initial={{ scale: 0.85, borderRadius: 40 }}
              animate={{ scale: 1, borderRadius: 24 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="bg-[#1a1a1a] max-w-2xl w-full p-10 text-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold text-[#007CED] mb-6">
                {activeCard.title}
              </h2>

              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {activeCard.full}
              </p>

              <button
                className="mt-8 px-6 py-2 bg-[#007CED] rounded-lg"
                onClick={() => setActiveCard(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ---------- CARD COMPONENT ---------- */

function InfoCard({ data, onClick, tall }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      className={`
        bg-[#151515] border border-white/10 rounded-2xl
        p-8 cursor-pointer transition-all duration-500
        shadow-md hover:shadow-[0_0_25px_rgba(0,124,237,0.25)]
        ${tall ? "h-full min-h-[100%]" : ""}
      `}
    >
      <h3 className="text-xl font-semibold text-white mb-4">
        {data.title}
      </h3>

      <p className="text-gray-400 leading-relaxed text-sm">
        {data.short}
      </p>

      <div className="mt-6 text-[#007CED] text-sm font-medium">
        Click to View Details →
      </div>
    </motion.div>
  );
}

export default AboutSection;
