import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";

const App = () => {
  const [cut, setCut] = useState(false);

  return (
    <div className="min-h-screen bg-[#222222] text-[#EDEDED] flex flex-col relative overflow-hidden">

      {/* FALLING BOARD */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center">

        {!cut && (
          <div
            onMouseEnter={() => setCut(true)}
            className="w-[3px] h-20 bg-gray-400 cursor-crosshair"
          />
        )}

        <motion.div
          animate={
            cut
              ? {
                  y: "100vh",
                  rotate: 720,
                }
              : {
                  rotate: [-4, 4, -4],
                }
          }
          transition={
            cut
              ? {
                  duration: 2,
                  ease: "easeIn",
                }
              : {
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }
          }
          className="px-6 py-2 bg-[#007CED] text-white font-bold text-lg rounded-lg shadow-xl"
          style={{ transformOrigin: "top center" }}
        >
          kapil.dev
        </motion.div>
      </div>

      <Navbar />
      <Home />
      <Projects />

      <footer className="border-t border-[#333333] py-6 text-center text-sm text-[#A1A1AA]">
        © 2026 Kapil. Built with ❤️ using React & Tailwind.
      </footer>
    </div>
  );
};

export default App;
