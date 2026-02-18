import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function AboutSection() {
  const [activeCard, setActiveCard] = useState(null);

  const about = {
    title: "About Me",
    short:
      "Full Stack Developer focused on scalable, high-performance web apps.",
    full:
      "I specialize in React, Next.js, Node.js and MongoDB. My focus is performance, maintainable architecture and smooth user experiences.",
  };

  const education = {
    title: "Education",
    short:
      "Bachelor’s in Computer Science | Strong foundation in DSA & System Design.",
    full:
      "Bachelor’s Degree in Computer Science.\n\n• Data Structures & Algorithms\n• DBMS\n• Operating Systems\n• Web Development",
  };

  const skills = {
    title: "Skills",
    short: "Frontend, Backend, Database & Deployment technologies.",
    full:
      "Frontend:\n• React.js\n• Next.js\n• Tailwind CSS\n• Framer Motion\n\nBackend:\n• Node.js\n• Express.js\n\nDatabase:\n• MongoDB\n\nOther:\n• Git & GitHub\n• REST APIs\n• Deployment",
  };

  return (
    <section className="min-h-screen bg-[#0e0e0e] py-24 px-8 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* LEFT SIDE */}
        <div className="md:col-span-2 flex flex-col gap-10">
          <InfoCard data={about} onClick={() => setActiveCard(about)} />
          <InfoCard data={education} onClick={() => setActiveCard(education)} />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-10">

          {/* SKILL CARD (HALF HEIGHT) */}
          <InfoCard
            data={skills}
            onClick={() => setActiveCard(skills)}
            half
          />

          {/* NEW FOLD CARD */}
          <FoldCard />

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
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="bg-[#1a1a1a] max-w-2xl w-full p-10 rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold text-[#007CED] mb-6">
                {activeCard.title}
              </h2>

              <p className="text-gray-300 whitespace-pre-line">
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

function InfoCard({ data, onClick, tall, half }) {
  return (
    <motion.div
      drag
      dragElastic={0.2}
      whileHover={{
        scale: 1.05,
        rotateZ: 2,
        y: -5,
      }}
      whileTap={{
        scale: 0.97,
        rotateZ: -2,
      }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
      onClick={onClick}
      className={`
        bg-[#151515] border border-white/10 rounded-2xl
        p-8 cursor-grab active:cursor-grabbing
        shadow-md hover:shadow-[0_0_25px_rgba(0,124,237,0.25)]
        transition-shadow duration-500
        ${tall ? "min-h-[420px]" : ""}
        ${half ? "min-h-[200px]" : ""}
      `}
    >
      <h3 className="text-xl font-semibold mb-4">
        {data.title}
      </h3>

      <p className="text-gray-400 text-sm">
        {data.short}
      </p>

      <div className="mt-6 text-[#007CED] text-sm font-medium">
        Click to View Details →
      </div>
    </motion.div>
  );
}

/* ---------- FOLD CARD ---------- */

function FoldCard() {
  return (
    <motion.div
      initial={{ rotate: 35 }}
      whileHover={{ rotate: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 12 }}
      className="relative bg-[#151515] border border-white/10 rounded-2xl p-8 overflow-hidden cursor-pointer min-h-[200px]"
    >
      <h3 className="text-xl font-semibold mb-4 text-white">
        Experience
      </h3>

      <p className="text-gray-400 text-sm">
        Internship experience, real-world projects and collaborative development exposure.
      </p>

      <div className="mt-6 text-[#007CED] text-sm font-medium">
        Hover to Straighten →
      </div>
    </motion.div>
  );
}


export default AboutSection;
