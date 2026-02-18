import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-[#0e0e0e] border-t border-white/10 text-white py-16 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

        {/* LEFT */}
        <div>
          <h2 className="text-2xl font-bold text-[#007CED] mb-4">
            Kapil.dev
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed">
            Building modern, interactive and high-performance web
            applications using React, Tailwind and Framer Motion.
          </p>
        </div>

        {/* CENTER */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="hover:text-white transition">Home</li>
            <li className="hover:text-white transition">About</li>
            <li className="hover:text-white transition">Projects</li>
            <li className="hover:text-white transition">Contact</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Connect
          </h3>

          <div className="flex gap-4">
            <SocialLink name="GitHub" />
            <SocialLink name="LinkedIn" />
            <SocialLink name="Twitter" />
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Kapil. All rights reserved.
      </div>
    </footer>
  );
}

/* ---------- SOCIAL LINK ---------- */

function SocialLink({ name }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -3 }}
      whileTap={{ scale: 0.95 }}
      className="px-4 py-2 border border-white/20 rounded-lg text-sm cursor-pointer hover:bg-[#007CED] hover:border-[#007CED] transition"
    >
      {name}
    </motion.div>
  );
}

export default Footer;
