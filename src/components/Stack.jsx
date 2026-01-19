import { motion } from "framer-motion";
import { frontendStack, toolsStack } from "../data/stack";

function StackGroup({ title, items }) {
  return (
    <div className="mb-16">
      <h3 className="text-xl font-semibold  text-violet-800 mb-6 text-center">
        {title}
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {items.map((tech) => {
          const Icon = tech.icon;
          return (
            <motion.div
              key={tech.name}
              whileHover={{ y: -6 }}
              className="bg-white border border-violet-100 rounded-xl p-6 shadow-sm hover:shadow-md transition flex flex-col items-center"
            >
              <Icon size={40} className="text-violet-600" />
              <p className="mt-3 font-medium text-gray-800">
                {tech.name}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default function Stack() {
  return (
    <section id="stack" className="py-20 px-6 bg-violet-50/40">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold  text-violet-500 mb-4 text-center"
        >
          Stack tecnológico
        </motion.h2>

        <p className="text-gray-600 text-center mb-16">
          Tecnologías y herramientas que utilizo en mis proyectos
        </p>

        <StackGroup title="Frontend" items={frontendStack} />
        <StackGroup title="Tools" items={toolsStack} />
      </div>
    </section>
  );
}
