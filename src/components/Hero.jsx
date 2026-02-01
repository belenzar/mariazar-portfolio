import { motion } from "framer-motion";
import profile  from "../assets/profile.png"

export default function Hero() {
  return (
    <section
      className="
        relative min-h-screen flex items-center overflow-hidden text-white
        bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600
      "
    >
      <div className="absolute inset-0 bg-black/10" />

      <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-400/30 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-indigo-400/30 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            backdrop-blur-md bg-white/10 border border-white/20
            rounded-3xl p-8
          "
        >
          <h1 className="font-heading text-5xl md:text-6xl font-bold tracking-tight">
            Hola, soy <span className="text-violet-200">María</span>
          </h1>

          <h2 className="font-heading text-2xl md:text-3xl font-semibold mt-4">
            Front-End Developer
          </h2>

          <p className="font-body mt-6 text-lg text-white/90 leading-relaxed max-w-xl">
Desarrollo soluciones Front-End con React, Tailwind, y sitios WordPress personalizados, con foco en UX, usabilidad, diseño responsive y buenas prácticas.
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="https://online.pubhtml5.com/rmlxq/wipz/"
              download
              className="
                font-heading bg-white text-violet-700
                px-6 py-3 rounded-xl font-medium shadow-lg
              "
            >
              Descargar CV
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="https://linkedin.com/in/belenzar"
              target="_blank"
              className="
                font-heading border border-white
                px-6 py-3 rounded-xl font-medium
                hover:bg-white hover:text-violet-700 transition
              "
            >
              LinkedIn
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-violet-300/30 blur-3xl rounded-full" />
            <img
              src={profile}
              alt="María"
              className="relative w-72 md:w-80 rounded-2xl shadow-2xl"
            />
          </div>
        </motion.div>

      </div>
      
    </section>
  );
}




