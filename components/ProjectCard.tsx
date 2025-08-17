"use client";

import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  period?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
  github,
  period,
}: ProjectCardProps) {
  return (
    <div className="group relative p-6 bg-blue dark:bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 flex flex-col h-full">
      {/* Gradient border on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

      <div className="relative flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {title}
          </h3>
          {period && (
            <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
              {period}
            </span>
          )}
        </div>

        <p className="text-slate-600 dark:text-slate-300 mb-4 flex-1">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              <ExternalLink size={18} />
              <span className="text-sm font-medium">Live Demo</span>
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <Github size={18} />
              <span className="text-sm font-medium">Source Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
