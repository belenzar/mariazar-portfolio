import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-violet-50 border-t mt-32"
    >
      <div className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h3 className="text-xl font-semibold text-violet-700 mb-4">
          ¿Hablamos?
        </h3>

        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://www.linkedin.com/in/belenzar"
            target="_blank"
            className="text-violet-600 hover:text-violet-800 transition"
          >
            <Linkedin size={22} />
          </a>

          <a
            href="https://github.com/belenzar"
            target="_blank"
            className="text-violet-600 hover:text-violet-800 transition"
          >
            <Github size={22} />
          </a>

          <a
            href="mailto:belenzar90l@gmail.com"
            className="text-violet-600 hover:text-violet-800 transition"
          >
            <Mail size={22} />
          </a>
        </div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} María Zárate · Front-end Developer
        </p>
      </div>
    </footer>
  );
}
