import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaWhatsapp
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-[#0e0e0e] border-t border-white/10 text-white py-14 px-6">
      <div className="max-w-5xl mx-auto text-center">

        {/* NAME */}
        <h2 className="text-3xl font-bold text-[#007CED] mb-3 tracking-wide">
          Kapil Mighani
        </h2>

        {/* TAGLINE */}
        <p className="text-gray-400 text-sm mb-6">
          Building Modern & High-Performance Web Experiences
        </p>

        {/* SOCIALS */}
        <div className="flex justify-center gap-5 text-lg mb-8">

          <SocialLink href="https://github.com/kapilmighani">
            <FaGithub />
          </SocialLink>

          <SocialLink href="https://www.linkedin.com/in/kapilmighani">
            <FaLinkedin />
          </SocialLink>

          <SocialLink href="https://instagram.com/kapilmighani">
            <FaInstagram />
          </SocialLink>

          <SocialLink href="https://twitter.com/kapilmighani">
            <FaTwitter />
          </SocialLink>

          <SocialLink href="https://leetcode.com/kapilmighani">
            <SiLeetcode />
          </SocialLink>

          <SocialLink href="https://wa.me/919079086110">
            <FaWhatsapp />
          </SocialLink>

        </div>

        {/* BOTTOM LINE */}
        <div className="border-t border-white/10 pt-5 text-gray-500 text-sm">
          © {new Date().getFullYear()} Kapil Mighani • Designed & Developed by Me
        </div>

      </div>
    </footer>
  );
}

/* ---------- SOCIAL LINK ---------- */

function SocialLink({ href, children }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.15, y: -4 }}
      whileTap={{ scale: 0.9 }}
      className="p-3 border border-white/20 rounded-xl 
                 hover:bg-[#007CED] hover:border-[#007CED] 
                 hover:shadow-[0_0_15px_#007CED] 
                 transition duration-300"
    >
      {children}
    </motion.a>
  );
}

export default Footer;