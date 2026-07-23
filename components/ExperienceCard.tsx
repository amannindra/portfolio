"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Building2,
  Github,
  ExternalLink,
} from "lucide-react";

interface ExperienceImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ExperienceCardProps {
  company: string;
  position: string;
  duration: string;
  description: string | string[];
  skills?: string[];
  images?: ExperienceImage[];
  github?: string | null;
  link?: string | null;
  detailHref?: string | null;
}

export default function ExperienceCard({
  company,
  position,
  duration,
  description,
  skills,
  images,
  github,
  link,
  detailHref,
}: ExperienceCardProps) {
  const bullets = Array.isArray(description) ? description : [description];
  const thumbnail = images && images.length > 0 ? images[0] : null;

  return (
    <div className="group relative p-6 bg-card rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-border">
      {/* Gradient border on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      <div className="relative">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-card-foreground">
              {position}
            </h3>
            <div className="flex items-center gap-2 text-muted-foreground mt-1">
              <Building2 size={16} />
              <span className="font-medium">{company}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground mt-2 sm:mt-0">
            <Calendar size={16} />
            <span className="text-sm">{duration}</span>
          </div>
        </div>

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

        {skills && skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {(github || link || detailHref) && (
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {detailHref && (
              <Link
                href={detailHref}
                className="group/link inline-flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors text-sm font-semibold focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                View research case study
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover/link:translate-x-0.5"
                />
              </Link>
            )}
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
