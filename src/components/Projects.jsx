import { useState } from "react";
import { projects } from "../data/projects";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-heading font-bold text-center mb-16 text-violet-700">
        Proyectos
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <article
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="
    group cursor-pointer h-full flex flex-col
    rounded-2xl overflow-hidden bg-white
    shadow-md transition-all duration-300
    hover:-translate-y-1 hover:shadow-xl
  "
          >
            <div className="relative w-full aspect-video overflow-hidden bg-gray-100">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="flex flex-col flex-1 p-6">
              <h3 className="text-xl text-violet-500 font-semibold mb-3">{project.title}</h3>

              <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="text-sm bg-violet-100 text-violet-700 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
