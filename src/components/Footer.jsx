import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaDiscord,
  FaWhatsapp
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-[#0e0e0e] border-t border-white/10 text-white py-16 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

        {/* LEFT */}
        <div>
          <h2 className="text-2xl font-bold text-[#007CED] mb-4">
            Kapil Mighani
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Software Engineer (MERN Stack)
          </p>

          <p className="text-gray-400 text-sm leading-relaxed">
            I design and develop high-performance web applications using
            React, Node.js, Express & MongoDB. Passionate about building
            scalable products with clean architecture and smooth user experience.
          </p>
        </div>

        {/* CENTER */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Tech Stack
          </h3>

          <ul className="space-y-2 text-gray-400 text-sm">
            <li>React.js • JavaScript</li>
            <li>Tailwind CSS • Framer Motion</li>
            <li>Node.js • Express</li>
            <li>MongoDB • JWT</li>
            <li>REST APIs • Git/GitHub</li>
          </ul>

          <div className="mt-6 text-gray-400 text-sm">
            📍 Alwar, Rajasthan <br />
            📩 kapilmighani907@gmail.com
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Connect With Me
          </h3>

          <div className="flex flex-wrap gap-4 text-xl">

            <SocialLink
              href="https://github.com/kapilmighani"
              icon={<FaGithub />}
            />

            <SocialLink
              href="https://www.linkedin.com/in/kapilmighani"
              icon={<FaLinkedin />}
            />

            <SocialLink
              href="https://instagram.com/kapilmighani"
              icon={<FaInstagram />}
            />

            <SocialLink
              href="https://facebook.com/kapilmighani"
              icon={<FaFacebook />}
            />

            <SocialLink
              href="https://twitter.com/kapilmighani"
              icon={<FaTwitter />}
            />

            <SocialLink
              href="https://leetcode.com/kapilmighani"
              icon={<SiLeetcode />}
            />

            <SocialLink
              href="https://discord.com/users/kapilmighani"
              icon={<FaDiscord />}
            />

            <SocialLink
              href="https://wa.me/919079086110"
              icon={<FaWhatsapp />}
            />

          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Kapil Mighani | Built with React & Tailwind CSS
      </div>
    </footer>
  );
}

/* ---------- SOCIAL LINK COMPONENT ---------- */

function SocialLink({ href, icon }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2, y: -4 }}
      whileTap={{ scale: 0.9 }}
      className="p-3 border border-white/20 rounded-xl hover:bg-[#007CED] hover:border-[#007CED] transition duration-300"
    >
      {icon}
    </motion.a>
  );
}

export default Footer;