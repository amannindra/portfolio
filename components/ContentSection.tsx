"use client";

import Link from "next/link";
import { Linkedin, Github, Mail, FileDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ExperienceCard from "./ExperienceCard";
import ProjectCard from "./ProjectCard";

interface FocusItem {
  label: string;
  detail: string;
}

interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ProjectItem {
  title: string;
  tagline?: string;
  description: string;
  technologies: string[];
  link?: string | null;
  github?: string | null;
  period?: string;
  images?: ProjectImage[];
}

interface FeaturedProjectItem extends ProjectItem {
  caseStudy?: {
    problem: string;
    architecture: string;
    pipeline: string;
    metrics: string;
    improvements: string;
  } | null;
}

interface SkillsMap {
  mlSystems?: string[];
  roboticsVision?: string[];
  backendInfra?: string[];
  frontend?: string[];
  languages?: string[];
}

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  description: string;
  skills?: string[];
}

interface ContentSectionProps {
  about: string;
  currentFocus?: FocusItem[];
  contactDescription?: string;
  experience: ExperienceItem[];
  skills?: SkillsMap;
  featuredProjects?: FeaturedProjectItem[];
  projects?: ProjectItem[];
  resumePdfPath?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  email?: string;
}

const SKILL_GROUPS: { key: keyof SkillsMap; label: string }[] = [
  { key: "mlSystems", label: "ML Systems" },
  { key: "roboticsVision", label: "Robotics & Vision" },
  { key: "backendInfra", label: "Backend & Infrastructure" },
  { key: "frontend", label: "Frontend" },
  { key: "languages", label: "Languages" },
];

export default function ContentSection({
  about,
  currentFocus,
  contactDescription,
  experience,
  skills,
  featuredProjects,
  projects,
  resumePdfPath,
  linkedinUrl,
  githubUrl,
  email,
}: ContentSectionProps) {
  return (
    <div className="p-8 lg:p-16 max-w-4xl mx-auto">

      {/* About */}
      <section id="about" className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-6">About</h2>
        <div className="space-y-4">
          {about.split("\n\n").map((paragraph, i) => (
            <p key={i} className="text-base text-foreground/80 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {currentFocus && currentFocus.length > 0 && (
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {currentFocus.map((item) => (
              <div key={item.label} className="p-4 bg-card rounded-lg border border-border">
                <h3 className="font-semibold text-card-foreground mb-2 text-sm uppercase tracking-wide">
                  {item.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Featured Projects */}
      {featuredProjects && featuredProjects.length > 0 && (
        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-2">Featured Projects</h2>
          <p className="text-sm text-muted-foreground mb-8">
            Strongest work — click GitHub links for source code.
          </p>
          <div className="space-y-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} featured {...project} />
            ))}
          </div>
        </section>
      )}

      {/* Other Projects — link to /projects */}
      {projects && projects.length > 0 && (
        <div className="mb-16">
          <Link
            href="/projects"
            className="group flex items-center justify-between p-5 bg-card border border-border rounded-lg hover:shadow-md transition-all focus-visible:ring-2 focus-visible:ring-primary"
          >
            <div>
              <p className="font-semibold text-card-foreground">Other Projects</p>
              <p className="text-sm text-muted-foreground mt-0.5">
                {projects.length} more project{projects.length !== 1 ? "s" : ""} — SafeCall, ASL Voice Assistant, AI-Resume Analyzer
              </p>
            </div>
            <ArrowRight size={18} className="text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0 ml-4" />
          </Link>
        </div>
      )}

      {/* Experience */}
      <section id="experience" className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-8">Experience</h2>
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </section>

      {/* Skills */}
      {skills && (
        <section id="skills" className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Technical Skills</h2>
          <div className="space-y-6">
            {SKILL_GROUPS.map(({ key, label }) => {
              const group = skills[key];
              if (!group || group.length === 0) return null;
              return (
                <div key={key}>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                    {label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-md text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Resume */}
      <section id="resume" className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-6">Resume</h2>
        <div className="flex flex-wrap gap-3">
          {resumePdfPath && (
            <>
              <Button asChild>
                <a href={resumePdfPath} download>
                  <FileDown size={16} className="mr-2" />
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={resumePdfPath} target="_blank" rel="noopener noreferrer">
                  Open in new tab
                </a>
              </Button>
            </>
          )}
        </div>
        {resumePdfPath && (
          <div className="mt-6 rounded-xl overflow-hidden border border-border bg-card">
            <iframe
              src={`${resumePdfPath}#view=FitH`}
              className="w-full h-[1100px]"
              title="Aman Nindra Resume"
            />
          </div>
        )}
      </section>

      {/* Contact */}
      <section id="contact" className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-6">Get In Touch</h2>
        <p className="text-base text-foreground/80 leading-relaxed mb-8">
          {contactDescription ??
            "I'm always interested in new opportunities and collaborations."}
        </p>
        <div className="flex flex-wrap gap-3">
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-lg text-card-foreground font-medium text-sm hover:shadow-md transition-all focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Linkedin size={16} className="text-primary" />
              LinkedIn
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-lg text-card-foreground font-medium text-sm hover:shadow-md transition-all focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Github size={16} className="text-primary" />
              GitHub
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-lg text-card-foreground font-medium text-sm hover:shadow-md transition-all focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Mail size={16} className="text-primary" />
              Send Email
            </a>
          )}
        </div>
      </section>
    </div>
  );
}
