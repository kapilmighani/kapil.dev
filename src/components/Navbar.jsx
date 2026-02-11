import { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [cut, setCut] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50
      flex items-center justify-between
      px-8 py-4
      bg-[#0f0f0f]/70 backdrop-blur-md
      border-b border-white/10"
    >
      {/* CENTER HANGING BOARD */}
      <div className="relative flex flex-col items-center -mt-6">

        {/* Rope */}
        {!cut && (
          <div
            onMouseEnter={() => setCut(true)}
            className="w-[3px] h-10 bg-gray-400 cursor-crosshair"
          />
        )}

        {/* Board */}
        <motion.div
          animate={
            cut
              ? {
                  y: 120,
                  rotate: 360,
                }
              : {
                  rotate: [-4, 4, -4],
                }
          }
transition={
  cut
    ? {
        duration: 2,
        ease: "easeIn",   // gravity feel
      }
    : {
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut",
      }
}

          className="px-6 py-2 bg-[#007CED] text-white 
          font-bold text-lg rounded-lg shadow-xl"
          style={{ transformOrigin: "top center" }}
        >
          kapil.dev
        </motion.div>
      </div>

      {/* RIGHT LINKS */}
      <div className="flex gap-4 text-white">
        <a href="#Home" className="px-4 py-2 rounded-lg hover:bg-[#333333] transition">
          Home
        </a>
        <a href="#About" className="px-4 py-2 rounded-lg hover:bg-[#333333] transition">
          About
        </a>
        <a href="#Skills" className="px-4 py-2 rounded-lg hover:bg-[#333333] transition">
          Skills
        </a>
        <a href="#Projects" className="px-4 py-2 rounded-lg hover:bg-[#333333] transition">
          Projects⭐
        </a>
        <a href="#Experience" className="px-4 py-2 rounded-lg hover:bg-[#333333] transition">
          Experience
        </a>
        <a className="px-4 py-2 rounded-lg bg-[#007CED] hover:bg-[#0066C9] transition">
          Resume
        </a>
        <a className="px-4 py-2 rounded-lg border border-[#333333] hover:border-[#007CED] transition">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
