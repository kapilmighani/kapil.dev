import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function AboutSection() {
  const [activeCard, setActiveCard] = useState(null);

  const about = {
    title: "About Me",
    short:
      "MERN Stack Developer building scalable production-ready applications.",
    full:
      "I am a Full Stack Developer specializing in React, Node.js and MongoDB.\n\nI focus on writing clean, scalable and maintainable code while building high-performance web applications.\n\nI enjoy solving complex problems and turning ideas into impactful digital products.",
  };

  const education = {
    title: "Education",
    short: "B.Tech in Computer Science | Strong foundation in core subjects.",
  };

  const skills = {
    title: "Skills",
    short: "Frontend, Backend, Database & System Architecture expertise.",
  };

  const experience = {
    title: "Experience",
    short: "Built real-world scalable full-stack applications.",
    full:
      "• Developed a stock trading platform handling 1000+ simulated transactions.\n\n\
• Built an Airbnb clone with authentication and CRUD functionality.\n\n\
• Designed 50+ REST API endpoints with JWT security.\n\n\
• Optimized MongoDB queries reducing response time by 30%.\n\n\
• Participated in hackathons delivering projects within 24-48 hours.",
  };

  return (
    <section className="min-h-screen bg-[#0e0e0e] py-24 px-8 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* LEFT */}
        <div className="md:col-span-2 flex flex-col gap-10">
          <Card data={about} onClick={() => setActiveCard(about)} />
          <Card data={education} onClick={() => setActiveCard(education)} />
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-10">
          <Card data={skills} onClick={() => setActiveCard(skills)} />
          <Card
            data={experience}
            onClick={() => setActiveCard(experience)}
            tilted
          />
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
              key={activeCard.title}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="bg-[#1a1a1a] max-w-2xl w-full p-10 rounded-2xl shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold text-[#007CED] mb-6">
                {activeCard.title}
              </h2>

              {/* ABOUT */}
              {activeCard.title === "About Me" && (
                <p className="text-gray-300 whitespace-pre-line">
                  {activeCard.full}
                </p>
              )}

              {/* EDUCATION TIMELINE */}
              {activeCard.title === "Education" && (
                <div className="relative border-l border-[#007CED] pl-6 space-y-6">
                  <div>
                    <h4 className="text-white font-semibold">
                      B.Tech in Computer Science
                    </h4>
                    <p className="text-gray-400 text-sm">
                      2021 – 2025
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold">
                      Core Subjects
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Data Structures, OS, DBMS, Networks, System Design
                    </p>
                  </div>
                </div>
              )}

              {/* SKILLS */}
              {activeCard.title === "Skills" && (
                <div className="space-y-6">
                  
                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-3">
                    {[
                      "React",
                      "Next.js",
                      "Node.js",
                      "Express",
                      "MongoDB",
                      "Tailwind",
                      "JWT",
                      "REST APIs",
                      "Git",
                      "System Design",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-[#007CED]/20 text-[#007CED] rounded-full text-sm border border-[#007CED]/40"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Animated Progress */}
                  {[
                    { name: "React", level: 90 },
                    { name: "Node.js", level: 85 },
                    { name: "MongoDB", level: 80 },
                    { name: "System Design", level: 75 },
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>

                      <div className="w-full bg-gray-700 h-2 rounded">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1 }}
                          className="bg-[#007CED] h-2 rounded"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* EXPERIENCE */}
              {activeCard.title === "Experience" && (
                <>
                  <p className="text-gray-300 whitespace-pre-line">
                    {activeCard.full}
                  </p>

                  <div className="mt-6 flex gap-4">
                    <button className="px-5 py-2 bg-[#007CED] rounded-lg text-sm">
                      View Project
                    </button>

                    <button className="px-5 py-2 border border-[#007CED] rounded-lg text-sm">
                      GitHub Repo
                    </button>
                  </div>
                </>
              )}

              <button
                className="mt-8 px-6 py-2 bg-[#007CED] rounded-lg hover:opacity-90 transition"
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

function Card({ data, onClick, tilted }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
        rotate: tilted ? 30 : 0,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: tilted ? 30 : 0,
      }}
      whileHover={
        tilted
          ? { rotate: 0 }
          : { scale: 1.05, rotateZ: 2, y: -5 }
      }
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 120, damping: 12 }}
      onClick={onClick}
      className="bg-[#151515] border border-white/10 rounded-2xl p-8 cursor-pointer shadow-md hover:shadow-[0_0_25px_rgba(0,124,237,0.25)] transition-shadow duration-500 min-h-[200px]"
    >
      <h3 className="text-xl font-semibold mb-4 text-white">
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

export default AboutSection;
