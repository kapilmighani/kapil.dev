import TypingText from "./TypingText";
import profileImage from "../assets/IMG_20260210_103205~3.jpg";
import { motion } from "framer-motion";

import { FaReact, FaNodeJs, FaJs } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiExpress } from "react-icons/si";

function Home() {
  return (
    <section
      className="min-h-[90vh] max-w-6xl mx-auto px-2 py-16 
      grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >
      {/* Left Side - Image */}
      <div className="flex justify-center md:justify-start">
        <div className="relative">
          {/* Soft Glow */}
          <div className="absolute inset-0 rounded-full blur-2xl bg-[rgba(255,255,255,0.08)]"></div>

          {/* Image Container */}
          <div
            className="relative w-64 h-64 rounded-full overflow-hidden 
            border-[6px] border-[#444] shadow-xl shadow-[rgba(0,0,0,0.6)]"
          >
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="flex flex-col gap-6">
        {/* Intro */}
        <p className="text-[#A1A1AA] tracking-wide font-semibold">
          Hi, I'm <TypingText />
        </p>

        {/* Name */}
        <p className="text-[#007CED] text-4xl font-sans font-medium tracking-wide">
          Kapil Mighani
        </p>

        {/* Description */}
        <p className="text-[#A1A1AA] max-w-xl text-lg leading-relaxed">
          Welcome to my digital space.<br></br> I design and develop high-performance web
          applications that combine clean design, speed, and seamless
          cross-device experience.
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-4 mt-4">
          <Skill icon={<FaJs />} text="JavaScript" color="#F7DF1E" />
          <Skill icon={<FaReact />} text="React" color="#61DAFB" />
          <Skill icon={<SiNextdotjs />} text="Next.js" color="#ffffff" />
          <Skill icon={<FaNodeJs />} text="Node.js" color="#68A063" />
          <Skill icon={<SiExpress />} text="Express" color="#ffffff" />
          <Skill icon={<SiMongodb />} text="MongoDB" color="#47A248" />
        </div>
      </div>
    </section>
  );
}

/* Skill Button Component */
function Skill({ icon, text, color }) {
  return (
    <motion.div
      whileHover={{
        rotate: [0, -8, 8, -6, 6, -3, 3, 0],
        transition: { duration: 0.6 },
      }}
      className="flex items-center gap-2 px-4 py-2 
      bg-[#2A2A2A] border border-[#333] 
      rounded-xl cursor-pointer"
    >
      <motion.span
        className="text-xl"
        style={{ color: color }}
        whileHover={{
          scale: 1.2,
        }}
      >
        {icon}
      </motion.span>

      <span className="font-medium text-[#EDEDED]">{text}</span>
    </motion.div>
  );
}

export default Home;
