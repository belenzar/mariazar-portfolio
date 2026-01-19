import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-white/70 border-b"
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-bold text-violet-700 text-lg">Mariazar</span>

        <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          <li>
            <a href="#stack" className="hover:text-violet-600 transition">
              Stack
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-violet-600 transition">
              Proyectos
            </a>
          </li>
        </ul>

        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/belenzar"
            target="_blank"
            className="text-violet-600 hover:text-violet-800 transition"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="mailto:belenzar90@gmail.com"
            className="text-violet-600 hover:text-violet-800 transition"
          >
            <Mail size={20} />
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
