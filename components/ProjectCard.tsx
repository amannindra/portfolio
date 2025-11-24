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
    <div className="group relative p-6 bg-card rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-border flex flex-col h-full">
      {/* Gradient border on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

      <div className="relative flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-card-foreground">
            {title}
          </h3>
          {period && (
            <span className="text-sm text-muted-foreground font-medium">
              {period}
            </span>
          )}
        </div>

        <p className="text-muted-foreground mb-4 flex-1">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
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
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
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
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
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
