import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { moreData } from "../data/MoreData";

function AboutSection() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section
      id="more"
      className="min-h-screen bg-[#0e0e0e] py-24 px-8 text-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* LEFT */}
        <div className="md:col-span-2 flex flex-col gap-10">
          <Card data={moreData.about} onClick={() => setActiveCard(moreData.about)} />
          <Card data={moreData.education} onClick={() => setActiveCard(moreData.education)} />
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-10">
          <Card data={moreData.skills} onClick={() => setActiveCard(moreData.skills)} />
          <Card data={moreData.experience} onClick={() => setActiveCard(moreData.experience)} tilted />
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

              {/* Universal Content Render */}
              {activeCard.full && (
                <p className="text-gray-300 whitespace-pre-line">
                  {activeCard.full}
                </p>
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