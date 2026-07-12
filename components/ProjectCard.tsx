"use client";

import Image from "next/image";
import { Calendar, Github, ExternalLink } from "lucide-react";

interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ProjectCardProps {
  title: string;
  tagline?: string;
  description: string | string[];
  technologies: string[];
  link?: string | null;
  github?: string | null;
  period?: string;
  featured?: boolean;
  images?: ProjectImage[];
}

export default function ProjectCard({
  title,
  tagline,
  description,
  technologies,
  link,
  github,
  period,
  images,
}: ProjectCardProps) {
  const thumbnail = images && images.length > 0 ? images[0] : null;
  const bullets = Array.isArray(description) ? description : [description];

  return (
    <div className="group relative p-6 bg-card rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-border">
      {/* Gradient tint on hover — matches ExperienceCard */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

      <div className="relative">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
          <div>
            <h3 className="text-xl font-bold text-card-foreground">{title}</h3>
            {tagline && (
              <p className="text-sm text-muted-foreground font-medium mt-0.5">{tagline}</p>
            )}
          </div>
          {period && (
            <div className="flex items-center gap-2 text-muted-foreground sm:mt-0 flex-shrink-0">
              <Calendar size={16} />
              <span className="text-sm">{period}</span>
            </div>
          )}
        </div>

        {/* Thumbnail — only shown when an image is provided */}
        {thumbnail && (
          <div className="relative w-full aspect-video rounded-md overflow-hidden bg-muted mb-4">
            <Image
              src={thumbnail.src}
              alt={thumbnail.alt}
              fill
              loading="lazy"
              className="object-cover"
            />
          </div>
        )}

        <ul className="text-muted-foreground mb-4 leading-relaxed list-disc list-outside pl-5 space-y-1.5">
          {bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>

        {/* Tech tags */}
        {technologies.length > 0 && (
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
        )}

        {/* Links */}
        {(github || link) && (
          <div className="flex gap-4">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                <Github size={16} />
                Source Code
              </a>
            )}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors text-sm font-medium focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
