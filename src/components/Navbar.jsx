import { Download } from "lucide-react";

function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 w-full z-50
      flex items-center justify-end
      px-8 py-4
      bg-[#0f0f0f]/70 backdrop-blur-md
      border-b border-white/10"
    >
      <div className="flex gap-4 text-white items-center">
        
        {/* Scroll Links */}
        <a
          href="#home"
          className="px-4 py-2 rounded-lg hover:bg-[#333333] transition"
        >
          Home
        </a>

        <a
          href="#projects"
          className="px-4 py-2 rounded-lg hover:bg-[#333333] transition"
        >
          Projects ⭐
        </a>

        <a
          href="#more"
          className="px-4 py-2 rounded-lg hover:bg-[#333333] transition"
        >
          More
        </a>

        {/* Resume Download */}
        <a
          href="/resume.pdf"   // public folder me resume.pdf rakho
          download
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#007CED] hover:bg-[#0066C9] transition"
        >
          Resume
          <Download size={18} />
        </a>

        {/* Contact Scroll */}
        <a
          href="#contact"
          className="px-4 py-2 rounded-lg border border-[#333333] hover:border-[#007CED] transition"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;