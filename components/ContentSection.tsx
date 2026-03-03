"use client";

import { ExternalLink } from "lucide-react";
import SkillBadge from "./SkillBadge";
import ExperienceCard from "./ExperienceCard";
import ProjectCard from "./ProjectCard";
import ResumeSection from "@/components/ResumeSection";

interface ContentSectionProps {
  about: string;
  experience: Array<{
    company: string;
    position: string;
    duration: string;
    description: string;
    skills?: string[];
  }>;
  skills: {
    languages: string[];
    mlAi: string[];
    frameworksCloud: string[];
    certifications?: string[];
    leadership?: string[];
  };
  projects?: Array<{
    title: string;
    description: string;
    technologies: string[];
    link?: string;
    github?: string;
    period?: string;
  }>;
}

export default function ContentSection({
  about,
  experience,
  skills,
  projects,
}: ContentSectionProps) {
  return (
    <div className="p-8 lg:p-16 max-w-4xl mx-auto">
      {/* About Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
          About
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">{about}</p>
      </section>
      {/* <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
          Technical Skills
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-foreground/90 mb-4">
              Programming Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((skill) => (
                <SkillBadge key={skill} skill={skill} type="language" />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground/90 mb-4">
              ML / AI
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.mlAi.map((skill) => (
                <SkillBadge key={skill} skill={skill} type="framework" />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground/90 mb-4">
              Frameworks & Cloud
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.frameworksCloud.map((skill) => (
                <SkillBadge key={skill} skill={skill} type="framework" />
              ))}
            </div>
          </div>

          {skills.certifications && skills.certifications.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-foreground/90 mb-4">
                Certifications
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.certifications.map((cert) => (
                  <SkillBadge key={cert} skill={cert} type="framework" />
                ))}
              </div>
            </div>
          )}

          {skills.leadership && skills.leadership.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-foreground/90 mb-4">
                Leadership & Roles
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.leadership.map((role) => (
                  <SkillBadge key={role} skill={role} type="tool" />
                ))}
              </div>
            </div>
          )}
        </div>
      </section> */}
      {/* Experience Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
          Professional Experience
        </h2>
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </section>

      {/* Skills Section */}

      {/* Projects Section */}
      {projects && projects.length > 0 && (
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            {/* <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full"></div> */}
            Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>
      )}

      {/* Resume Section */}
      <ResumeSection />

      {/* Contact Section */}

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
          Get In Touch
        </h2>
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            I&apos;m always interested in new opportunities and collaborations.
            Feel free to reach out if you&apos;d like to work together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div
              className="group relative p-6 bg-card rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-border flex h-full pointer-events-auto cursor-pointer"
              onClick={() => {
                // console.log("clicked");
                window.open(
                  "https://www.linkedin.com/in/aman-nindra-1b3634270/"
                );
              }}
            >
              <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <ExternalLink size={18} className="mr-2 text-primary" />
              <span className="text-foreground font-medium">LinkedIn</span>
            </div>

            <div
              className="group relative p-6 bg-card rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-border flex h-full pointer-events-auto cursor-pointer"
              onClick={() => {
                window.open("https://github.com/amannindra");
              }}
            >
              <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <ExternalLink size={18} className="mr-2 text-primary" />
              <span className="text-foreground font-medium">GitHub</span>
            </div>
            <div
              className="group relative p-6 bg-card rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-border flex h-full cursor-pointer"
              onClick={(e) => {
                window.location.href = "mailto:amannindra@gmail.com";
                e.preventDefault();
              }}
            >
              <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <ExternalLink size={18} className="mr-2 text-primary" />
              <span className="text-foreground font-medium">Send Email</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
