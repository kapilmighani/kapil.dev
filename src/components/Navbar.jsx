import { Download, Menu, X, Phone, Mail, Copy } from "lucide-react";
import { useState } from "react";
import resume from "../assets/KAPIL_MIGHANI.pdf";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const phoneNumber = "9352775013";
  const email = "Kapilmighani@gmail.com";

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied!");
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50
      flex items-center justify-end
      px-8 py-4
      bg-[#0f0f0f]/70 backdrop-blur-md
      border-b border-white/10"
    >
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-4 text-white items-center relative">
        
        <a href="#home" className="px-4 py-2 rounded-lg hover:bg-[#333333] transition">
          Home
        </a>

        <a href="#projects" className="px-4 py-2 rounded-lg hover:bg-[#333333] transition">
          Projects ⭐
        </a>

        <a href="#more" className="px-4 py-2 rounded-lg hover:bg-[#333333] transition">
          More
        </a>

        <a
          href={resume}
          download
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#007CED] hover:bg-[#0066C9] transition"
        >
          Resume
          <Download size={18} />
        </a>

        {/* Contact Button */}
        <button
          onClick={() => setContactOpen(!contactOpen)}
          className="px-4 py-2 rounded-lg border border-[#333333] hover:border-[#007CED] transition"
        >
          Contact
        </button>

        {/* Contact Dropdown */}
        {contactOpen && (
          <div className="absolute right-0 top-14 w-64 bg-[#0f0f0f] border border-white/10 rounded-xl p-4 flex flex-col gap-4">

            {/* Phone */}
            <div className="flex items-center justify-between">
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-2 hover:text-[#007CED]"
              >
                <Phone size={18} />
                {phoneNumber}
              </a>

              <button onClick={() => copyToClipboard(phoneNumber)}>
                <Copy size={18} className="hover:text-[#007CED]" />
              </button>
            </div>

            {/* Email */}
            <div className="flex items-center justify-between">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 hover:text-[#007CED]"
              >
                <Mail size={18} />
                {email}
              </a>

              <button onClick={() => copyToClipboard(email)}>
                <Copy size={18} className="hover:text-[#007CED]" />
              </button>
            </div>

          </div>
        )}
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden text-white">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
