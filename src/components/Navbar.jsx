import { useState } from "react";

function Navbar() {
  const [cut, setCut] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50
      flex items-center justify-end
      px-8 py-4
      bg-[#0f0f0f]/70 backdrop-blur-md
      border-b border-white/10"
    >

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
