"use client";

import { portfolioData } from "@/lib/portfolio-data";

export default function ProjectSection() {
  return (
    <div className="p-8 lg:p-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
        <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full"></div>
        Projects
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {portfolioData.projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md"
          >
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              {project.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  GitHub
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
